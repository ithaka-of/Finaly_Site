import type { Metadata } from "next";
import { Handjet } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./i18n/context";

// Пиксельная гарнитура на весь сайт. Кириллица обязательна — основной язык русский.
// VT323/Silkscreen отпали (нет cyrillic вовсе), Pixelify Sans — из-за рваной кириллицы:
// часть гласных подменялась фолбэком и «плыла». Handjet рисовался многоязычным
// с самого начала (cyrillic + cyrillic-ext), поэтому глифы однородны.
const pixel = Handjet({
  subsets: ["latin", "cyrillic"],
  variable: "--font-pixel",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ITHAKA — Сергей Тимошенко",
  description:
    "Сайты, автоматизация и AI-инструменты. От неясной задачи к работающей системе.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={pixel.variable}>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
