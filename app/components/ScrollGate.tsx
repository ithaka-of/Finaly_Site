"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

/**
 * Полоса-«шлюз» внизу последней панели: на последней странице листать дальше
 * некуда (Deck упирается в предел), и эта прокрутка вместо холостого хода
 * копится здесь. Полоса заливается, при полном заполнении — переход по href.
 *
 * Слушатели висят на window, но копят только когда собственный контейнер
 * реально виден (IntersectionObserver) — в деке остальные панели уехали за
 * пределы вьюпорта трансформом, так что на них полоса молчит. Прокрутка вверх
 * откатывает заполнение назад, чтобы шлюз не срабатывал случайно.
 */
const FULL = 700;

export function ScrollGate({
  href,
  label,
  ready,
}: {
  href: string;
  label: string;
  ready: string;
}) {
  const hostRef = useRef<HTMLDivElement>(null);
  const visibleRef = useRef(false);
  const valueRef = useRef(0);
  const firedRef = useRef(false);
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const el = hostRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = entry.intersectionRatio > 0.4;
      },
      { threshold: [0, 0.4, 0.8] },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const bump = (delta: number) => {
      if (!visibleRef.current || firedRef.current) return;
      const next = Math.min(FULL, Math.max(0, valueRef.current + delta));
      if (next === valueRef.current) return;
      valueRef.current = next;
      setProgress(next / FULL);
      if (next >= FULL) {
        firedRef.current = true;
        window.setTimeout(() => router.push(href), 380);
      }
    };

    const onWheel = (e: WheelEvent) => bump(e.deltaY);

    let lastY = 0;
    const onTouchStart = (e: TouchEvent) => {
      lastY = e.touches[0].clientY;
    };
    const onTouchMove = (e: TouchEvent) => {
      const y = e.touches[0].clientY;
      bump((lastY - y) * 2.2);
      lastY = y;
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, [href, router]);

  const done = progress >= 1;

  return (
    <div
      ref={hostRef}
      className={`scroll-gate${done ? " is-done" : ""}`}
      style={{ "--gate-fill": `${Math.round(progress * 100)}%` } as React.CSSProperties}
    >
      <div className="scroll-gate-label">
        <span>{done ? ready : label}</span>
        <span className="scroll-gate-value">{Math.round(progress * 100)}%</span>
      </div>
      <div className="scroll-gate-rail" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(progress * 100)} aria-label={label}>
        <i />
      </div>
    </div>
  );
}
