"use client";

import { ResumeSheet } from "../../../components/ResumeSheet";
import "../../resume.css";

// Печатная страница под PDF (русская версия). Здесь нет шапки, навигации
// и переключателя языка — только лист, чтобы Edge в headless-режиме напечатал
// документ, а не скриншот сайта:
//
//   msedge --headless --disable-gpu --print-to-pdf="...\resume-ru.pdf" \
//          --no-pdf-header-footer "http://localhost:3000/resume/print/ru/"
//
// Язык задан жёстко через forceLang: контекст языка живёт в localStorage
// и на печати мог бы отдать не тот язык, который ожидали.
export default function ResumePrintRu() {
  return (
    <main className="resume-print-shell">
      <ResumeSheet variant="print" forceLang="ru" />
    </main>
  );
}
