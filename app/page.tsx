"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "./i18n/context";
import { homeDict } from "./i18n/home";
import { LanguageToggle } from "./components/LanguageToggle";
import { Deck } from "./components/Deck";
import { ChaosSystem } from "./components/ChaosSystem";
import { GlitchText } from "./components/GlitchText";
import { CursorField } from "./components/CursorField";
import { HeroScan } from "./components/HeroScan";
import { ScrollGate } from "./components/ScrollGate";
import { DownloadIcon, GithubIcon, MailIcon, PortfolioIcon, TelegramIcon, XIcon } from "./components/Icons";

type HeroCta = "channel" | "portfolio" | "contact";

const HERO_PRIMARY_CTA: HeroCta = "channel";

// Канал заведён 09.08.2026; до этого акцентной кнопкой временно был «portfolio».
const CHANNEL_URL = "https://t.me/it_haka";

// Ширина одной ступени каскада «рабочего цикла», в колонках сетки.
// Держится в паре с `.about-loop li { grid-column-end: span 4 }` в globals.css.
const LOOP_SPAN = 4;

const heroActionClass = (id: HeroCta) =>
  `button hero-action ${HERO_PRIMARY_CTA === id ? "button-primary hero-action-primary" : "button-secondary hero-action-secondary"}`;

export default function Home() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const { lang } = useLanguage();
  const t = homeDict[lang];

  const [openCap, setOpenCap] = useState<number | null>(0);
  const toggleCap = (i: number) => setOpenCap((prev) => (prev === i ? null : i));

  // ITHAKA-подложку равняем по самой длинной строке заголовка. Считать константой
  // в CSS нельзя: у ru и en разные тексты, а строки заголовка nowrap и выходят за
  // свой блок. Эталон здесь только фактическая ширина текста.
  const wordRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    const word = wordRef.current;
    const heading = headingRef.current;
    if (!word || !heading) return;

    const textWidth = (el: Element) => {
      const range = document.createRange();
      range.selectNodeContents(el);
      return range.getBoundingClientRect().width;
    };

    const fit = () => {
      let widest = 0;
      for (const line of heading.querySelectorAll("span")) widest = Math.max(widest, textWidth(line));
      const size = parseFloat(getComputedStyle(word).fontSize);
      const width = textWidth(word);
      if (!widest || !width || !size) return;
      word.style.fontSize = `${widest / (width / size)}px`;
    };

    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(heading);
    return () => ro.disconnect();
  }, [lang]);

  const deckLabels = ["MAIN/ITHAKA", t.nav.skills, t.nav.about, t.nav.contact];
  const capabilities = t.capabilities.map((item, i) => ({ number: String(i + 1).padStart(2, "0"), ...item }));
  const tickerItems = [...t.skillsSection.ticker, ...t.skillsSection.ticker, ...t.skillsSection.ticker];
  const resumeFile = lang === "ru" ? "resume-ru.pdf" : "resume-en.pdf";
  const resumeName = lang === "ru" ? "sergey-timoshenko-resume-ru.pdf" : "sergey-timoshenko-resume-en.pdf";

  return (
    <main>
      <header className="site-header">
        <div id="deck-header-controls" className="deck-header-slot" aria-live="polite" />
        <div className="header-actions">
          <a className="header-cta" href="https://telegram.me/Wand33rlust" target="_blank" rel="noreferrer">
            <TelegramIcon /> Telegram
          </a>
          <LanguageToggle />
        </div>
      </header>

      <Deck hint={lang === "ru" ? "листай" : "scroll"} labels={deckLabels}>
        {/* Панель 0 — Hero */}
        <div className="deck-panel hero-panel">
          <section className="hero" id="top">
            <CursorField />
            <span className="hero-status status-line">
              <span className="status-dot" /> SYSTEM ONLINE
            </span>

            <div className="hero-word" ref={wordRef} aria-label="ITHAKA" data-text="ITHAKA">
              ITHAKA
              <span className="hero-word-layer" data-text="ITHAKA" aria-hidden="true" />
            </div>

            <div className="hero-copy">
              <h1 className="glitch-h glitch-chroma" ref={headingRef}>
                <GlitchText
                  mode="scramble"
                  lines={t.hero.lines.map((line, i) => ({ text: line, accent: i === t.hero.lines.length - 1 }))}
                />
              </h1>
              <p>{t.hero.paragraph}</p>

              <div className="hero-skills" aria-label={t.hero.skillsLabel}>
                {t.hero.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>

              <div className="hero-actions">
                <a className={heroActionClass("channel")} href={CHANNEL_URL} target="_blank" rel="noreferrer">
                  {t.hero.ctaChannel} <TelegramIcon />
                </a>
                <Link className={heroActionClass("portfolio")} href="/resume/">
                  {t.hero.ctaPortfolio} <PortfolioIcon />
                </Link>
                <a className={heroActionClass("contact")} href="#contact">
                  {t.hero.ctaContact} <MailIcon />
                </a>
                <a className="hero-resume-link" href={`${basePath}/${resumeFile}`} download={resumeName}>
                  {t.hero.ctaResume} <DownloadIcon />
                </a>
              </div>
            </div>

            <div className="hero-art" aria-hidden="true">
              <Image
                className="hero-portrait"
                src={`${basePath}/ithaka-normal-scan.webp`}
                alt=""
                fill
                priority
                sizes="(max-width: 768px) 80vw, (max-width: 1050px) 68vw, 48vw"
                unoptimized
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
              />
              <HeroScan basePath={basePath} />
            </div>

            <div className="hero-side" aria-hidden="true">
              <span className="side-serif">MYTH</span>
              <span className="side-mono">/ METHOD</span>
              <span className="side-index">001—ITH</span>
            </div>
          </section>
        </div>

        {/* Панель 1 — Что я умею */}
        <section className="deck-panel method section" id="skills">
          <CursorField mode="hold" />
          <div className="method-title">
            <div className="method-head">
              <h2 className="glitch-chroma">
                <GlitchText
                  mode="scramble"
                  lines={[{ text: t.skillsSection.heading[0] }, { text: t.skillsSection.heading[1], accent: true }]}
                />
              </h2>
            </div>
            <div className="method-note">
              {t.skillsSection.notes.map((note) => (
                <span key={note}>{note}</span>
              ))}
            </div>
            <div className="method-figure" aria-hidden="true">
              <span className="method-count">{String(capabilities.length).padStart(2, "0")}</span>
              <span className="method-count-label">{t.skillsSection.countLabel}</span>
              <span className="method-bars">
                {capabilities.map((item) => (
                  <i key={item.number} />
                ))}
              </span>
            </div>
          </div>
          <div className="method-right">
            <div className="capability-list">
              {capabilities.map((item, i) => {
                const open = openCap === i;
                return (
                  <button
                    type="button"
                    className={`capability${open ? " is-open" : ""}`}
                    key={item.number}
                    onClick={() => toggleCap(i)}
                    aria-expanded={open}
                  >
                    <span>{item.number}</span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    {item.items && (
                      <ul>
                        {item.items.map((entry) => (
                          <li key={entry}>{entry}</li>
                        ))}
                      </ul>
                    )}
                    <i aria-hidden="true">+</i>
                  </button>
                );
              })}
            </div>
          </div>
          <div className="ticker method-ticker" aria-label={t.skillsSection.tickerLabel}>
            <div className="ticker-track">
              {tickerItems.map((item, i) => (
                <span key={`${item}-${i}`}>
                  {item}
                  <i aria-hidden="true" />
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Панель 2 — Обо мне */}
        <section className="deck-panel about section" id="about">
          <CursorField mode="hold" />
          <div className="about-art">
            <ChaosSystem />
          </div>
          <div className="about-copy">
            <h2 className="glitch-chroma">
              <GlitchText mode="scramble" lines={[{ text: t.about.heading }]} />
            </h2>
            <p className="about-lead">{t.about.lead}</p>
            <p>{t.about.paragraph}</p>

            <div className="about-loop" aria-label={t.about.loopLabel}>
              <span className="about-loop-label">{t.about.loopLabel}</span>
              {/* Каскад: шаг N начинается на одну колонку правее шага N-1 и сам занимает
                  LOOP_SPAN колонок. Колонок ровно столько, чтобы последняя ступень
                  упиралась в правый край и не вылезала за него. */}
              <ol
                style={
                  {
                    "--loop-count": t.about.loop.length,
                    gridTemplateColumns: `repeat(${t.about.loop.length + LOOP_SPAN - 1}, 1fr)`,
                  } as React.CSSProperties
                }
              >
                {t.about.loop.map((step, i) => (
                  <li key={step} style={{ "--i": i, gridColumnStart: i + 1 } as React.CSSProperties}>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

          </div>
        </section>

        {/* Панель 3 — Контакт + footer */}
        <div className="deck-panel contact-panel">
          <section className="contact section" id="contact">
            <CursorField mode="hold" />
            <div className="contact-top">
              <span className="status-line">
                <span className="status-dot" /> OPEN CHANNEL
              </span>
            </div>
            <h2 className="glitch-chroma">
              <GlitchText
                mode="scramble"
                lines={[
                  { text: t.contact.heading[0] },
                  { text: t.contact.heading[1] },
                  { text: t.contact.heading[2], accent: true },
                ]}
              />
            </h2>
            <div className="contact-channels">
              <a className="contact-action contact-action-primary" href="https://telegram.me/Wand33rlust" target="_blank" rel="noreferrer">
                <span>{t.contact.action}</span>
                <em>@Wand33rlust</em>
                <strong><TelegramIcon /></strong>
              </a>
              <a className="contact-action" href="mailto:ithakawork@gmail.com">
                <span>{t.contact.actionEmail}</span>
                <em>ithakawork@gmail.com</em>
                <strong><MailIcon /></strong>
              </a>
              <a className="contact-action" href="https://github.com/ithaka-of" target="_blank" rel="noreferrer">
                <span>{t.contact.actionGithub}</span>
                <em>github.com/ithaka-of</em>
                <strong><GithubIcon /></strong>
              </a>
              <a className="contact-action" href="https://x.com/Wand33rlust_" target="_blank" rel="noreferrer">
                <span>{t.contact.actionX}</span>
                <em>@Wand33rlust_</em>
                <strong><XIcon /></strong>
              </a>
            </div>

            <ScrollGate href="/resume/" label={t.scrollGate.label} ready={t.scrollGate.ready} />
          </section>

          <footer>
            <a className="brand" href="#top">
              {t.footer.brand}
            </a>
          </footer>
        </div>
      </Deck>
    </main>
  );
}
