"use client";

import { useLanguage } from "../i18n/context";
import { resumeDict } from "../i18n/resume";
import { resumeContacts, resumeName, resumeProjectsMeta } from "../data/resume";

// Резюме как «лист документа»: светлый блок на тёмном фоне сайта.
// Это не отступление от style guide, а прямое его чтение — тёмная тема закреплена
// за сайтом, а «светлые страницы документов — свисс + лайм» (Style Guide v1, 15.07.2026).
//
// Один и тот же компонент рендерит и секцию на /resume/, и печатные страницы
// /resume/print/ru|en/, с которых печатается PDF. Поэтому весь текст здесь берётся
// из словаря, а не пишется в разметке: расхождение страницы и PDF физически невозможно.

type ResumeSheetProps = {
  /** "page" — внутри сайта, со ссылкой на PDF. "print" — голый лист под печать. */
  variant?: "page" | "print";
  /** Язык фиксируется явно на печатных страницах, где переключателя нет. */
  forceLang?: "ru" | "en";
};

export function ResumeSheet({ variant = "page", forceLang }: ResumeSheetProps) {
  const { lang: contextLang } = useLanguage();
  const lang = forceLang ?? contextLang;
  const t = resumeDict[lang];
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const pdfHref = `${basePath}/resume-${lang}.pdf`;

  return (
    <article className={`resume-sheet resume-sheet--${variant}`} data-od-id="resume-sheet">
      <header className="resume-head">
        <div className="resume-identity">
          <h1>{resumeName[lang]}</h1>
          <p className="resume-role">{t.role}</p>
        </div>

        <ul className="resume-contacts">
          <li>{t.city}</li>
          <li>
            <a href={`mailto:${resumeContacts.email}`}>{resumeContacts.email}</a>
          </li>
          <li>
            <a href={resumeContacts.telegram.href} target="_blank" rel="noreferrer">
              {resumeContacts.telegram.label}
            </a>
          </li>
          <li>
            <a href={resumeContacts.github.href} target="_blank" rel="noreferrer">
              {resumeContacts.github.label}
            </a>
          </li>
          <li>
            <a href={resumeContacts.site.href} target="_blank" rel="noreferrer">
              {resumeContacts.site.label}
            </a>
          </li>
        </ul>

        {variant === "page" && (
          <a className="resume-pdf-link" href={pdfHref} download>
            {t.labels.downloadPdf}
          </a>
        )}
      </header>

      <section className="resume-block" aria-labelledby="resume-about">
        <h2 id="resume-about">{t.sections.about}</h2>
        {t.about.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </section>

      <section className="resume-block" aria-labelledby="resume-skills">
        <h2 id="resume-skills">{t.sections.skills}</h2>
        <ul className="resume-skills">
          {t.skills.map((skill) => (
            <li key={skill.title}>
              <strong>{skill.title}</strong> — {skill.body}
            </li>
          ))}
        </ul>
      </section>

      <section className="resume-block" aria-labelledby="resume-projects">
        <h2 id="resume-projects">{t.sections.projects}</h2>
        {resumeProjectsMeta.map((meta) => {
          const project = t.projects[meta.id];
          return (
            <div className="resume-project" key={meta.id}>
              {/* Год проекта убран 20.08.2026 по правке Сергея: все проекты 2026-го,
                  и повторяющаяся дата у каждого заголовка ничего не сообщала.
                  Поле `year` в data/resume.ts оставлено — данные не теряем. */}
              <h3>
                {project.title}
                {project.subtitle && <span className="resume-project-subtitle"> — {project.subtitle}</span>}
              </h3>

              {meta.links && meta.links.length > 0 && (
                <p className="resume-project-links">
                  {meta.links.map((link) => (
                    <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                      {link.label}
                    </a>
                  ))}
                </p>
              )}

              <p>{project.body}</p>

              {project.result && (
                <p className="resume-project-result">
                  <strong>{t.labels.result}:</strong> {project.result}
                </p>
              )}

              <p className="resume-project-stack">
                {t.labels.stack}: {meta.stack}
              </p>
            </div>
          );
        })}
      </section>

      <section className="resume-block" aria-labelledby="resume-experience">
        <h2 id="resume-experience">{t.sections.experience}</h2>
        <h3>{t.experience.title}</h3>
        <p>{t.experience.body}</p>
      </section>

      <section className="resume-block" aria-labelledby="resume-education">
        <h2 id="resume-education">{t.sections.education}</h2>
        <ul className="resume-education">
          {t.education.map((item) => (
            <li key={item.title}>
              <strong>{item.title}</strong> — {item.body}
            </li>
          ))}
        </ul>
      </section>

      <section className="resume-block" aria-labelledby="resume-languages">
        <h2 id="resume-languages">{t.sections.languages}</h2>
        <p>{t.languages}</p>
      </section>
    </article>
  );
}
