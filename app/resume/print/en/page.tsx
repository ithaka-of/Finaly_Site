"use client";

import { ResumeSheet } from "../../../components/ResumeSheet";
import "../../resume.css";

// Печатная страница под PDF (английская версия). См. комментарий в ../ru/page.tsx —
// команда печати та же, меняется только язык и имя выходного файла.
export default function ResumePrintEn() {
  return (
    <main className="resume-print-shell">
      <ResumeSheet variant="print" forceLang="en" />
    </main>
  );
}
