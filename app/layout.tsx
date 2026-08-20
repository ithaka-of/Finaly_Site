import type { Metadata } from "next";
import { Handjet, Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./i18n/context";
import { DevTools } from "./components/DevTools";

// Пиксельная гарнитура на весь сайт. Кириллица обязательна — основной язык русский.
// VT323/Silkscreen отпали (нет cyrillic вовсе), Pixelify Sans — из-за рваной кириллицы:
// часть гласных подменялась фолбэком и «плыла». Handjet рисовался многоязычным
// с самого начала (cyrillic + cyrillic-ext), поэтому глифы однородны.
const pixel = Handjet({
  subsets: ["latin", "cyrillic"],
  variable: "--font-pixel",
  display: "swap",
});

// Гротеск для документов (резюме на /resume/ и печатные страницы под PDF).
// Handjet там неприменим: пиксельная гарнитура нечитаема в длинном тексте, и у неё
// нет косой черты у нуля — мелкий кегль путает цифры (16.08 читалось как 16.88).
// Сайт при этом остаётся пиксельным: переменная добавляется, а не подменяет основную.
const doc = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-doc",
  display: "swap",
});

// basePath в metadata.icons Next НЕ подставляет сам: путь уходит в HTML как есть,
// а сайт на Pages живёт под /Finaly_Site/ — отсюда 404 и пустой лист вместо иконки
// во вкладке (найдено 19.08.2026). Подставляем вручную, как это уже делается
// для картинок на страницах.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "ITHAKA — Сергей Тимошенко",
  description:
    "Сайты, автоматизация и AI-инструменты. От неясной задачи к работающей системе.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: `${basePath}/favicon.svg`,
    shortcut: `${basePath}/favicon.svg`,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={`${pixel.variable} ${doc.variable}`}>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
        {/* Оверлей Agentation для дизайн-правок — только в dev.
            Подробности, почему через отдельный компонент с динамическим
            импортом, а не напрямую, — в самом DevTools.tsx. */}
        <DevTools />
      </body>
    </html>
  );
}
