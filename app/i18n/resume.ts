import type { Lang } from "./context";
import type { ResumeProjectId } from "../data/resume";

// Тексты резюме на двух языках. Структура и ссылки — в app/data/resume.ts.
// Источник истины по содержанию — Context/Me/Сергей — резюме (общее, 2026-08-19).md,
// согласован Сергеем 19.08.2026. Цифра «более 1000 заявлений» подтверждена им же:
// варианты «до 1500 заявок» и «700+ записей» из старых черновиков выведены из обращения.

export type ResumeDict = {
  role: string;
  city: string;
  sections: {
    about: string;
    skills: string;
    projects: string;
    experience: string;
    education: string;
    languages: string;
  };
  about: string[];
  skills: Array<{ title: string; body: string }>;
  projects: Record<ResumeProjectId, { title: string; subtitle?: string; body: string; result?: string }>;
  experience: { title: string; body: string };
  education: Array<{ title: string; body: string }>;
  languages: string;
  labels: {
    stack: string;
    result: string;
    demo: string;
    github: string;
    downloadPdf: string;
    casesHeading: string;
    backHome: string;
  };
};

const ru: ResumeDict = {
  role: "Junior-разработчик: веб и автоматизация процессов",
  city: "Россия",
  sections: {
    about: "О себе",
    skills: "Ключевые навыки",
    projects: "Проекты",
    experience: "Опыт работы",
    education: "Образование",
    languages: "Языки",
  },
  about: [
    "Окончил Колледж высоких технологий. С сентября 2026 учусь на информационных системах в БГТУ им. Шухова.",
    "Собираю сайты и автоматизацию с ИИ. Среди проектов: М207 и рейтинги на 1000+ заявлений.",
    "Ставлю задачи ИИ и проверяю результат. Самостоятельное программирование пока осваиваю.",
  ],
  skills: [
    {
      title: "Веб: инструменты, применённые в проектах",
      body: "HTML/CSS, Python, Flask, SQL, проектирование баз данных",
    },
    {
      title: "Автоматизация рутинных процессов",
      body: "Python, Node.js, Google Sheets API, Telegram-боты, сбор данных",
    },
    {
      title: "Локальные AI-модели",
      body: "Ollama, полнотекстовый и семантический поиск",
    },
    {
      title: "Постановка задач ИИ и приёмка результата",
      body: "Требования, пограничные случаи, проверка кода: Claude Code и Codex",
    },
    {
      title: "Системный анализ",
      body: "Требования, UML, жизненный цикл ПО",
    },
    {
      title: "Инструменты",
      body: "Git/GitHub, Actions, GitHub Pages, Vercel, PowerShell",
    },
  ],
  projects: {
    priemka: {
      title: "Автоматизация приёмной кампании колледжа",
      body: "1000+ заявлений, 14 листов специальностей. Настроил правила распределения, защиту персональных данных и обработку спорных статусов.",
      result:
        "Пересборка без дублей с сохранением ручных баллов.",
    },
    m207: {
      title: "Сайт компании \"М 207 Софт\"",
      subtitle: "разработчик медицинского ПО, Белгород",
      body: "Собрал требования, поставил задачу ИИ и согласовал правки с заказчиком. Проверил каталог и оформление.",
    },
    medcenter: {
      title: "МедЦентр: приложение для онлайн-записи",
      subtitle: "дипломный проект",
      body: "Регистрация, запись на приём и история визитов. Спроектировал базу данных и логику записи.",
    },
    jobWatcher: {
      title: "job-watcher — бот мониторинга вакансий",
      body: "Собирает вакансии из Telegram, Habr и \"Работы России\". Фильтрует и присылает без дублей.",
    },
    agentInfra: {
      title: "Личная агентная инфраструктура",
      subtitle: "R&D",
      body: "Сводки из таблиц и новостей, доставка в Telegram, поиск по заметкам. Дорабатываю с июля 2026.",
    },
  },
  experience: {
    title: "Фриланс — технические работы на заказ (2024–2026)",
    body: "Сайты, таблицы и автоматизация с ИИ: требования, сборка и проверка.",
  },
  education: [
    {
      title: "Колледж высоких технологий при БГТУ им. В. Г. Шухова",
      body: "09.02.07 \"Информационные системы и программирование\", 2022–2026. Диплом защищён.",
    },
    {
      title: "БГТУ им. В. Г. Шухова",
      body: "\"Информационные системы и технологии\", бакалавриат. С сентября 2026, программа 3 года.",
    },
    {
      title: "Школа анализа данных Яндекса",
      body: "AI Agents Security Week, 27–31 июля 2026. Сертификат, практика безопасности ИИ-агентов.",
    },
  ],
  languages: "Русский: родной. Английский: A1, продолжаю учить.",
  labels: {
    stack: "Стек",
    result: "Результат",
    demo: "Демо",
    github: "Код",
    downloadPdf: "Скачать PDF",
    casesHeading: "Кейсы со скриншотами",
    backHome: "На главную",
  },
};

const en: ResumeDict = {
  role: "Junior developer: web and process automation",
  city: "Russia",
  sections: {
    about: "About",
    skills: "Core skills",
    projects: "Projects",
    experience: "Experience",
    education: "Education",
    languages: "Languages",
  },
  about: [
    "College of High Technologies graduate. Studying Information Systems at BSTU since September 2026.",
    "I build websites and automation with AI. Projects include M207 and rankings for 1,000+ applications.",
    "I define tasks for AI and verify the result. Still learning to program independently.",
  ],
  skills: [
    {
      title: "Web: tools used in my projects",
      body: "HTML/CSS, Python, Flask, SQL, database design",
    },
    {
      title: "Process automation",
      body: "Python, Node.js, Google Sheets API, Telegram bots, data collection",
    },
    {
      title: "Local AI models",
      body: "Ollama, full-text and semantic search",
    },
    {
      title: "Directing AI and reviewing its output",
      body: "Requirements, edge cases, code review with Claude Code and Codex",
    },
    {
      title: "Systems analysis",
      body: "Requirements, UML, software lifecycle",
    },
    {
      title: "Tooling",
      body: "Git/GitHub, Actions, GitHub Pages, Vercel, PowerShell",
    },
  ],
  projects: {
    priemka: {
      title: "College admissions campaign automation",
      body: "1,000+ applications across 14 programme sheets. I defined distribution rules, personal-data filtering, and unusual-status handling.",
      result:
        "Repeated imports preserve manual scores without duplicates.",
    },
    m207: {
      title: "Corporate website for M 207 Soft",
      subtitle: "medical software vendor, Belgorod",
      body: "Gathered requirements, directed AI, and coordinated client revisions. Reviewed the catalogue and design.",
    },
    medcenter: {
      title: "MedCenter — online appointment booking web app",
      subtitle: "graduation project",
      body: "Registration, appointment booking, and visit history. I designed the database and booking logic.",
    },
    jobWatcher: {
      title: "job-watcher — job posting monitoring bot",
      body: "Collects and filters vacancies from Telegram, Habr, and the Russian job registry. Sends matches without duplicates.",
    },
    agentInfra: {
      title: "Personal agent infrastructure",
      subtitle: "R&D",
      body: "Briefings from spreadsheets and news, Telegram delivery, and note search. In use since July 2026.",
    },
  },
  experience: {
    title: "Freelance — technical work on commission (2024–2026)",
    body: "Websites, spreadsheets, and automation with AI: requirements, implementation, and review.",
  },
  education: [
    {
      title: "College of High Technologies at BSTU, Belgorod",
      body: "Information Systems and Programming, 2022–2026 — diploma defended",
    },
    {
      title: "BSTU named after V. G. Shukhov",
      body: "BSc in Information Systems and Technologies, accelerated programme, from September 2026",
    },
    {
      title: "Yandex School of Data Analysis",
      body: "AI Agents Security Week, 27–31 July 2026. Certificate and AI agent security practice.",
    },
  ],
  languages: "Russian: native. English: A1, currently studying.",
  labels: {
    stack: "Stack",
    result: "Result",
    demo: "Live",
    github: "Code",
    downloadPdf: "Download PDF",
    casesHeading: "Case studies with screenshots",
    backHome: "Back home",
  },
};

export const resumeDict: Record<Lang, ResumeDict> = { ru, en };
