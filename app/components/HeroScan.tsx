"use client";

import { useEffect, useRef } from "react";

const LAYERS = [
  "ithaka-normal-scan.webp",
  "ithaka-xray-scan.webp",
  "ithaka-statue-scan.webp",
  "ithaka-digital-scan.webp",
];

type HeroScanProps = {
  basePath: string;
};

export function HeroScan({ basePath }: HeroScanProps) {
  const scannerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scanner = scannerRef.current;
    const canvas = canvasRef.current;
    const line = lineRef.current;
    const portrait = scanner?.closest(".hero-art") as HTMLElement | null;
    const ctx = canvas?.getContext("2d");

    if (!scanner || !canvas || !line || !portrait || !ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const images = LAYERS.map((name) => {
      const image = new Image();
      image.decoding = "async";
      image.src = `${basePath}/${name}`;
      return image;
    });

    let raf = 0;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let startTime = 0;
    let pausedAt = 0;
    let visible = false;
    let ready = false;

    // Доля окна сканера от бокса портрета. Замеряется в начале каждого кадра, а
    // не один раз: кеш на переверстку тут не работает — если снять его до того,
    // как Hero устоялся, окно фиксируется смещённым и портрет меняется не на том
    // уровне (ловилось глазом по кадыку). Экономия всё равно есть: раньше draw()
    // дёргал getBoundingClientRect дважды и при двух вызовах за кадр выходило
    // четыре принудительных пересчёта layout, теперь два.
    let relX = 0;
    let relY = 0;
    let relW = 0;
    let relH = 0;

    const geometry = () => {
      const rect = scanner.getBoundingClientRect();
      const portraitRect = portrait.getBoundingClientRect();

      if (portraitRect.width && portraitRect.height) {
        relX = (rect.left - portraitRect.left) / portraitRect.width;
        relY = (rect.top - portraitRect.top) / portraitRect.height;
        relW = rect.width / portraitRect.width;
        relH = rect.height / portraitRect.height;
      }

      // canvas трогаем только когда размер реально изменился: присвоение width
      // сбрасывает контекст, каждый кадр этого делать нельзя
      if (rect.width !== width || rect.height !== height) {
        width = rect.width;
        height = rect.height;
        // как в CursorField: выше двух пикселей на точку смысла нет, а на
        // телефонах с dpr 3 это втрое меньше работы на каждом кадре
        dpr = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = Math.max(1, Math.round(width * dpr));
        canvas.height = Math.max(1, Math.round(height * dpr));
      }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (image: HTMLImageElement | undefined) => {
      if (!image?.naturalWidth || !image.naturalHeight || !width || !height) return false;
      if (!relW || !relH) return false;

      ctx.drawImage(
        image,
        relX * image.naturalWidth,
        relY * image.naturalHeight,
        relW * image.naturalWidth,
        relH * image.naturalHeight,
        0,
        0,
        width,
        height,
      );
      return true;
    };

    const drawClipped = (
      image: HTMLImageElement | undefined,
      x: number,
      y: number,
      rectWidth: number,
      rectHeight: number,
    ) => {
      if (rectWidth <= 0 || rectHeight <= 0) return true;

      ctx.save();
      ctx.beginPath();
      ctx.rect(x, y, rectWidth, rectHeight);
      ctx.clip();
      const drawn = draw(image);
      ctx.restore();

      return drawn;
    };

    const frame = (now: number) => {
      if (!visible) {
        raf = 0;
        pausedAt = performance.now();
        return;
      }

      geometry();

      const phaseDuration = 2600;
      const t = (now - startTime) % (phaseDuration * LAYERS.length);
      const phase = Math.floor(t / phaseDuration) % images.length;
      const progress = (t % phaseDuration) / phaseDuration;
      const down = phase % 2 === 0;
      const y = down ? progress * height : (1 - progress) * height;
      const next = (phase + 1) % images.length;
      const currentImage = images[phase];
      const nextImage = images[next];

      ctx.clearRect(0, 0, width, height);
      if (!currentImage?.naturalWidth || !nextImage?.naturalWidth) {
        raf = requestAnimationFrame(frame);
        return;
      }

      if (down) {
        drawClipped(nextImage, 0, 0, width, y);
        drawClipped(currentImage, 0, y, width, height - y);
      } else {
        drawClipped(currentImage, 0, 0, width, y);
        drawClipped(nextImage, 0, y, width, height - y);
      }

      line.style.transform = `translate3d(0, ${y}px, 0) translateY(-50%)`;
      raf = requestAnimationFrame(frame);
    };

    const start = () => {
      if (raf || !visible || !ready || reduce) return;
      // время, проведённое вне экрана, вычитаем — иначе при возврате панели
      // фаза перескочит и скан дёрнется
      if (pausedAt) {
        startTime += performance.now() - pausedAt;
        pausedAt = 0;
      }
      raf = requestAnimationFrame(frame);
    };

    const stop = () => {
      if (!raf) return;
      cancelAnimationFrame(raf);
      raf = 0;
      pausedAt = performance.now();
    };

    // при reduced-motion окно не должно оставаться пустым — показываем первый слой
    const drawStatic = () => {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);
      draw(images[0]);
      line.style.transform = `translate3d(0, ${height / 2}px, 0) translateY(-50%)`;
    };

    const resizeObserver = new ResizeObserver(() => {
      geometry();
      if (ready && reduce) drawStatic();
    });
    resizeObserver.observe(portrait);
    resizeObserver.observe(scanner);

    // кадры идут только пока панель Hero действительно на экране: дек листает
    // панели, и раньше скан продолжал жечь кадры, даже когда его не видно
    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) {
          // за время невидимости страницу могло переверстать
          geometry();
          if (ready && reduce) drawStatic();
          else start();
        } else {
          stop();
        }
      },
      { threshold: 0.02 },
    );
    io.observe(scanner);

    Promise.allSettled(images.map((image) => image.decode())).then(() => {
      ready = true;
      geometry();
      startTime = performance.now();
      pausedAt = 0;
      if (reduce) drawStatic();
      else start();
    });

    return () => {
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      io.disconnect();
    };
  }, [basePath]);

  return (
    <div className="scan-window" ref={scannerRef}>
      <canvas ref={canvasRef} />
      <div className="scan-tint" />
      <div className="scan-line" ref={lineRef} />
      <div className="scan-cross">+</div>
      <div className="scan-meta">
        <span>SCULPT.EXE</span>
        <span>RENDER PASS_07</span>
        <span>STATUS: OK</span>
      </div>
    </div>
  );
}
