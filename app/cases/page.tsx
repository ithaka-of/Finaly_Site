"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LanguageToggle } from "../components/LanguageToggle";
import { ExternalIcon, PlayIcon } from "../components/Icons";
import { projectsMeta } from "../data/projects";
import { useLanguage } from "../i18n/context";
import { homeDict } from "../i18n/home";
import "./cases.css";

type LightboxImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export default function CasesPage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const { lang } = useLanguage();
  const t = homeDict[lang];
  const projects = projectsMeta.map((meta, i) => ({ ...meta, ...t.projects[i] }));
  const [lightbox, setLightbox] = useState<LightboxImage | null>(null);

  useEffect(() => {
    if (!lightbox) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightbox]);

  return (
    <main className="portfolio-shell" id="portfolio-top">
      <header className="portfolio-header">
        <Link className="portfolio-logo" href="/">
          ITHAKA/
        </Link>
        <nav aria-label={t.nav.portfolio}>
          <Link href="/">{t.portfolioPage.backHome}</Link>
          <a href="https://telegram.me/Wand33rlust" target="_blank" rel="noreferrer">
            {t.portfolioPage.telegram} <ExternalIcon />
          </a>
        </nav>
        <LanguageToggle className="portfolio-lang-toggle" />
      </header>

      <section className="portfolio-grid" aria-label={t.projectsSection.heading.join(" ")} data-od-id="portfolio-grid">
        {projects.map((project) => {
          const hasLinks = Boolean(project.links?.demo || project.links?.github);
          const mainShot = project.screenshots?.[0];
          const shotCount = project.screenshots?.length ?? 0;
          const shotAlt = (shotIndex: number) =>
            shotCount > 1
              ? `${t.projectCard.screenshotAlt} — ${project.title} ${shotIndex + 1}`
              : `${t.projectCard.screenshotAlt} — ${project.title}`;
          const openShot = (shot: NonNullable<typeof project.screenshots>[number], shotIndex: number) => {
            setLightbox({
              ...shot,
              alt: shotAlt(shotIndex),
            });
          };

          return (
            <article
              className={`portfolio-card portfolio-card--${project.statusTone ?? "story"} ${project.className ?? ""}`}
              key={project.index}
              data-card-index={project.index}
              data-od-id={`portfolio-card-${project.index}`}
            >
              <div className="portfolio-card-top">
                <span>{project.index}</span>
                <span>{project.code}</span>
                <span>{project.status}</span>
              </div>

              {project.statusLabel && <strong className="portfolio-status-badge">{project.statusLabel}</strong>}

              <div className={`portfolio-preview${mainShot ? " portfolio-preview--image" : ""}`}>
                {mainShot ? (
                  <button
                    type="button"
                    className="portfolio-preview-button"
                    onClick={() => openShot(mainShot, 0)}
                    aria-label={shotAlt(0)}
                  >
                    <Image
                      src={`${basePath}/${mainShot.src}`}
                      alt={shotAlt(0)}
                      fill
                      sizes="(max-width: 860px) 90vw, 45vw"
                      unoptimized
                    />
                  </button>
                ) : (
                  <span>{t.projectCard.previewComing}</span>
                )}
              </div>

              {project.screenshots && project.screenshots.length > 1 && (
                <div className="portfolio-thumbs" aria-label={`${t.projectCard.screenshotAlt} — ${project.title}`}>
                  {project.screenshots.map((shot, shotIndex) => (
                    <button
                      type="button"
                      key={shot.src}
                      className="portfolio-thumb"
                      onClick={() => openShot(shot, shotIndex)}
                      aria-label={shotAlt(shotIndex)}
                    >
                      <Image
                        src={`${basePath}/${shot.src}`}
                        alt={shotAlt(shotIndex)}
                        fill
                        sizes="112px"
                        unoptimized
                      />
                    </button>
                  ))}
                </div>
              )}

              <div className="portfolio-card-main">
                <h2>{project.title}</h2>

                <dl>
                  <div>
                    <dt>{t.projectCard.work}</dt>
                    <dd>{project.description}</dd>
                  </div>
                  <div>
                    <dt>{t.projectCard.result}</dt>
                    <dd>{project.proof}</dd>
                  </div>
                  <div>
                    <dt>{t.projectCard.stack}</dt>
                    <dd>{project.stack}</dd>
                  </div>
                  <div>
                    <dt>{t.projectCard.role}</dt>
                    <dd>{project.role}</dd>
                  </div>
                </dl>
              </div>

              <div className={`portfolio-links${hasLinks ? "" : " portfolio-links--empty"}`} aria-label={t.projectCard.links}>
                {project.links?.demo && (
                  <a href={project.links.demo} target="_blank" rel="noreferrer">
                    {t.projectCard.demo} <ExternalIcon />
                  </a>
                )}
                {project.links?.github && (
                  <a href={project.links.github} target="_blank" rel="noreferrer">
                    {t.projectCard.github} <ExternalIcon />
                  </a>
                )}
                {!hasLinks && <span className="portfolio-story-only">{t.projectCard.storyOnly}</span>}
              </div>

              <div className="portfolio-card-meta">
                <span>{project.meta}</span>
              </div>
            </article>
          );
        })}
      </section>

      {/* Мини-игра жила отдельной страницей без единой ссылки на неё — вход к ней
          собран здесь, в хвосте портфолио, чтобы не грузить главную. */}
      <section className="portfolio-play" aria-labelledby="portfolio-play-heading">
        <h2 id="portfolio-play-heading">{t.portfolioPage.playHeading}</h2>
        <p>{t.portfolioPage.playText}</p>
        <Link className="portfolio-play-link" href="/play/">
          {t.portfolioPage.playCta} <PlayIcon />
        </Link>
      </section>

      {lightbox && (
        <div className="portfolio-lightbox" role="dialog" aria-modal="true" onClick={() => setLightbox(null)}>
          <button
            type="button"
            className="portfolio-lightbox-close"
            onClick={() => setLightbox(null)}
            aria-label={t.projectCard.closePreview}
          >
            ×
          </button>
          <div
            className="portfolio-lightbox-frame"
            style={{ aspectRatio: `${lightbox.width} / ${lightbox.height}` }}
            onClick={(event) => event.stopPropagation()}
          >
            <Image src={`${basePath}/${lightbox.src}`} alt={lightbox.alt} fill sizes="92vw" unoptimized />
          </div>
        </div>
      )}
    </main>
  );
}
