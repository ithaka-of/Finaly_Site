// Структурная часть резюме: то, что НЕ переводится — контакты, ссылки, стек.
// Тексты (описания, роли, результаты) живут в app/i18n/resume.ts.
//
// Источник истины по содержанию — вальт: Context/Me/Сергей — резюме (общее, 2026-08-19).md,
// согласован 19.08.2026. Правки содержания начинать оттуда, а не отсюда.
//
// Проекты связаны с текстами по ЯВНОМУ id, а не по индексу массива. В projects.ts
// сшивка идёт по индексу, и это уже приводило к описаниям, съехавшим на чужие карточки;
// здесь такой возможности нет by design.

export type ResumeProjectId =
  | "priemka"
  | "m207"
  | "medcenter"
  | "jobWatcher"
  | "agentInfra";

export type ResumeLink = {
  kind: "demo" | "github";
  href: string;
  /** Что показывать вместо голого URL. Для PDF важно: ссылка должна читаться глазами. */
  label: string;
};

export type ResumeProjectMeta = {
  id: ResumeProjectId;
  year: string;
  stack: string;
  links?: ResumeLink[];
};

// Латинское написание сверено с Сергеем 19.08.2026: в документах «Sergey».
export const resumeName: Record<"ru" | "en", string> = {
  ru: "Сергей Тимошенко",
  en: "Sergey Timoshenko",
};

// Телефон убран по решению Сергея 19.08.2026: связь через почту и Telegram.
export const resumeContacts = {
  email: "ithakawork@gmail.com",
  telegram: { href: "https://t.me/Wand33rlust", label: "@Wand33rlust" },
  github: { href: "https://github.com/ithaka-of", label: "github.com/ithaka-of" },
  site: {
    href: "https://ithaka-of.github.io/Finaly_Site/",
    label: "ithaka-of.github.io/Finaly_Site",
  },
} as const;

export const resumeProjectsMeta: ResumeProjectMeta[] = [
  {
    id: "priemka",
    year: "2026",
    stack: "Node.js, Google Sheets API v4, PowerShell",
    links: [
      {
        kind: "github",
        href: "https://github.com/ithaka-of/Priemka",
        label: "github.com/ithaka-of/Priemka",
      },
    ],
  },
  {
    id: "m207",
    year: "2026",
    stack: "HTML, CSS, GitHub Pages",
    links: [
      {
        kind: "demo",
        href: "https://ithaka-of.github.io/m207soft/",
        label: "ithaka-of.github.io/m207soft",
      },
    ],
  },
  {
    id: "medcenter",
    year: "2026",
    stack: "Python, Flask, SQLite, Bootstrap",
    links: [
      // Развёрнуто на собственном VPS. Старый адрес 155.212.224.183 умер вместе
      // с прежним хостером — проверять доступность перед каждой пересборкой PDF.
      { kind: "demo", href: "http://45.12.239.170", label: "45.12.239.170" },
    ],
  },
  {
    id: "jobWatcher",
    year: "2026",
    stack: "Python, Telegram Bot API, RSS",
  },
  {
    id: "agentInfra",
    year: "2026",
    stack: "Claude Code, PowerShell, Telegram Bot API, SQLite FTS5, Ollama",
  },
];
