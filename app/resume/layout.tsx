import type { Metadata } from "next";

// Своя вкладка и подпись в поиске для резюме: page.tsx — клиентский компонент
// и metadata экспортировать не может, поэтому заголовок задаётся здесь.
// og-превью наследуется из корневого layout.
export const metadata: Metadata = {
  title: "Резюме и кейсы — Сергей Тимошенко | ITHAKA",
  description:
    "Резюме и кейсы со скриншотами: автоматизация приёмной кампании, сайт компании, приложение для онлайн-записи, бот мониторинга вакансий.",
};

export default function ResumeLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
