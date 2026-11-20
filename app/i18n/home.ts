import type { Lang } from "./context";

export type HomeDict = {
  nav: { portfolio: string; skills: string; about: string; contact: string };
  hero: {
    lines: string[];
    paragraph: string;
    skillsLabel: string;
    skills: string[];
    ctaChannel: string;
    ctaPortfolio: string;
    ctaContact: string;
    ctaResume: string;
  };
  projectsSection: { heading: string[] };
  projectCard: {
    work: string;
    result: string;
    stack: string;
    role: string;
    links: string;
    demo: string;
    github: string;
    screenshotAlt: string;
    previewComing: string;
    closePreview: string;
    storyOnly: string;
  };
  portfolioPage: {
    backHome: string;
    telegram: string;
    playHeading: string;
    playText: string;
    playCta: string;
  };
  projects: Array<{
    title: string;
    description: string;
    proof: string;
    stack: string;
    role: string;
    statusLabel?: string;
  }>;
  skillsSection: {
    heading: string[];
    notes: string[];
    countLabel: string;
    tickerLabel: string;
    ticker: string[];
  };
  capabilities: Array<{ title: string; text: string; items?: string[] }>;
  about: { heading: string; lead: string; paragraph: string; loopLabel: string; loop: string[] };
  scrollGate: { label: string; ready: string };
  contact: { heading: string[]; note: string; action: string; actionEmail: string; actionGithub: string; actionX: string };
  footer: { brand: string };
};

const ru: HomeDict = {
  nav: { portfolio: "Кейсы", skills: "Что умею", about: "Обо мне", contact: "Контакт" },
  hero: {
    lines: ["Из хаоса", "в рабочую", "систему"],
    paragraph:
      "Сайты, боты и автоматизация с ИИ. Разбираю задачу, собираю и проверяю результат.",
    skillsLabel: "Навыки",
    skills: ["Веб: фронт, бэк, база", "Локальные AI-модели", "Автоматизация рутины"],
    ctaChannel: "Канал",
    ctaPortfolio: "Кейсы",
    ctaContact: "Связаться",
    ctaResume: "Скачать резюме",
  },
  projectsSection: {
    heading: ["Работающие", "артефакты"],
  },
  projectCard: {
    work: "Что сделал",
    result: "Результат",
    stack: "Стек",
    role: "Роль",
    links: "Ссылки",
    demo: "Демо",
    github: "GitHub",
    screenshotAlt: "Скриншот",
    previewComing: "превью готовится",
    closePreview: "Закрыть просмотр",
    storyOnly: "Есть что рассказать",
  },
  portfolioPage: {
    backHome: "На главную",
    telegram: "Telegram",
    playHeading: "Мини-игра",
    playText:
      "Угадай четыре символа за восемь попыток. После каждого хода получишь подсказку.",
    playCta: "Играть",
  },
  projects: [
    {
      title: "Сайт компании медицинского ПО",
      proof: "Опубликованный каталог продуктов компании",
      description:
        "Собрал требования и материалы, согласовал правки. Код помог написать ИИ.",
      stack: "HTML, CSS, GitHub Pages",
      role: "Требования, постановка задачи ИИ и приёмка сайта",
      statusLabel: "живой сайт",
    },
    {
      title: "Онлайн-запись в медицинский центр",
      proof: "Полный сценарий записи от процедуры до истории визитов",
      description:
        "Дипломный проект: запись на приём, личный кабинет и история визитов.",
      stack: "Python, Flask, SQLite, Bootstrap",
      role: "Дипломный проект: разработка приложения для онлайн-записи",
      statusLabel: "диплом",
    },
    {
      title: "Рейтинг-листы приёмной кампании",
      proof: "1000+ заявлений распределены по рейтинг-листам",
      description:
        "Скрипт разносит 1000+ заявлений по специальностям и сохраняет ручные баллы.",
      stack: "Node.js, Google Sheets API v4, PowerShell",
      role: "Помогал с приёмкой руками, увидел рутину и автоматизировал",
      statusLabel: "результат можно показать",
    },
    {
      title: "job-watcher",
      proof: "Ручной обход источников заменён одной лентой",
      description:
        "Собирает вакансии из Telegram, Habr и \"Работы России\", фильтрует и присылает в личку.",
      stack: "Python, Telegram Bot API, RSS, API «Работа России»",
      role: "Автор идеи и разработчик",
      statusLabel: "работает",
    },
  ],
  skillsSection: {
    heading: ["Что я", "умею"],
    notes: ["AI ASSISTED", "HUMAN DIRECTED", "RESULT VERIFIED"],
    countLabel: "LAYERS",
    tickerLabel: "Текущие направления",
    ticker: ["ВЕБ: ФРОНТ, БЭК, БАЗА", "ЛОКАЛЬНЫЕ AI-МОДЕЛИ", "АВТОМАТИЗАЦИЯ РУТИНЫ"],
  },
  capabilities: [
    {
      title: "Навыки",
      text: "Применяю в проектах и продолжаю разбираться в коде.",
      items: [
        "Сайты и веб-приложения",
        "Локальные модели через Ollama",
        "Скрипты для таблиц и выгрузок",
      ],
    },
    {
      title: "Метод",
      text: "ИИ помогает писать код. Я ставлю задачу и проверяю результат.",
      items: [
        "Уточняю задачу и критерий готовности.",
        "Собираю с ИИ и проверяю.",
        "Проверяю ошибки и пограничные случаи.",
        "Обсуждаю результат и вношу правки.",
      ],
    },
    {
      title: "Чем помогу",
      text: "Помогаю убрать ручную рутину.",
      items: [
        "Обработка таблиц и выгрузок",
        "Сайты и Telegram-боты",
        "Поиск клиентов и учёт ответов",
      ],
    },
  ],
  about: {
    heading: "Как я работаю",
    lead:
      "Окончил Колледж высоких технологий. С сентября 2026 учусь на информационных системах в БГТУ им. Шухова.",
    paragraph:
      "М207, МедЦентр и рейтинги на 1000+ заявлений. Учусь программировать, чтобы понимать код от ИИ.",
    loopLabel: "Рабочий цикл",
    loop: ["Планирование", "Разработка", "Сборка", "Тестирование", "Релиз", "Мониторинг"],
  },
  scrollGate: {
    label: "Листай дальше: откроются кейсы",
    ready: "Готово, открываю кейсы",
  },
  contact: {
    heading: ["Есть хаос,", "который пора", "собрать?"],
    note: "Опишите задачу и срок. Отвечаю в течение суток.",
    action: "Написать в Telegram",
    actionEmail: "Написать на почту",
    actionGithub: "Смотреть код",
    actionX: "Читать в X",
  },
  footer: {
    brand: "ITHAKA/",
  },
};

const en: HomeDict = {
  nav: { portfolio: "Cases", skills: "Skills", about: "About", contact: "Contact" },
  hero: {
    lines: ["Out of chaos —", "into a working", "system"],
    paragraph:
      "Websites, bots, and automation with AI. I clarify the task, build, and check the result.",
    skillsLabel: "Skills",
    skills: ["Web: front, back, database", "Local AI models", "Routine automation"],
    ctaChannel: "Channel",
    ctaPortfolio: "Cases",
    ctaContact: "Contact",
    ctaResume: "Download CV",
  },
  projectsSection: {
    heading: ["Working", "artifacts"],
  },
  projectCard: {
    work: "What I did",
    result: "Result",
    stack: "Stack",
    role: "Role",
    links: "Links",
    demo: "Demo",
    github: "GitHub",
    screenshotAlt: "Screenshot",
    previewComing: "preview coming",
    closePreview: "Close preview",
    storyOnly: "Story to tell",
  },
  portfolioPage: {
    backHome: "Home",
    telegram: "Telegram",
    playHeading: "Mini-game",
    playText:
      "Guess four symbols in eight attempts, with a hint after each turn.",
    playCta: "Play",
  },
  projects: [
    {
      title: "Website for a medical software company",
      proof: "Published company product catalogue",
      description:
        "I gathered requirements, coordinated revisions, and reviewed the AI-written code.",
      stack: "HTML, CSS, GitHub Pages",
      role: "Requirements, AI task direction, and review",
      statusLabel: "live website",
    },
    {
      title: "Online booking for a medical center",
      proof: "Full booking flow from procedure to visit history",
      description:
        "Graduation project: appointment booking, personal accounts, and visit history.",
      stack: "Python, Flask, SQLite, Bootstrap",
      role: "Graduation project: building an appointment booking app",
      statusLabel: "capstone",
    },
    {
      title: "Admission rating sheets",
      proof: "1,000+ applications distributed across ranking sheets",
      description:
        "Distributes 1,000+ applications by programme while preserving manual scores.",
      stack: "Node.js, Google Sheets API v4, PowerShell",
      role: "Helped with admissions by hand, spotted the routine, automated it",
      statusLabel: "showable result",
    },
    {
      title: "job-watcher",
      proof: "Manual source-checking replaced by a single feed",
      description:
        "Collects vacancies from Telegram, Habr, and the Russian job registry. Filters and sends matches.",
      stack: "Python, Telegram Bot API, RSS, Russian public job registry API",
      role: "Idea author and developer",
      statusLabel: "works",
    },
  ],
  skillsSection: {
    heading: ["What I", "can do"],
    notes: ["AI ASSISTED", "HUMAN DIRECTED", "RESULT VERIFIED"],
    countLabel: "LAYERS",
    tickerLabel: "Current directions",
    ticker: ["WEB: FRONT, BACK, DATABASE", "LOCAL AI MODELS", "ROUTINE AUTOMATION"],
  },
  capabilities: [
    {
      title: "Skills",
      text: "Tools I use in projects while continuing to learn the code.",
      items: [
        "Websites and web applications",
        "Local models via Ollama",
        "Scripts for spreadsheets and exports",
      ],
    },
    {
      title: "Method",
      text: "AI helps write code. I define the task and review the result.",
      items: [
        "Define the task and acceptance criteria.",
        "Build with AI and verify.",
        "Check errors and edge cases.",
        "Review the result and revise.",
      ],
    },
    {
      title: "How I can help",
      text: "Less repetitive manual work.",
      items: [
        "Spreadsheets and exports",
        "Websites and Telegram bots",
        "Lead search and reply tracking",
      ],
    },
  ],
  about: {
    heading: "How I work",
    lead:
      "College of High Technologies graduate. Studying Information Systems at BSTU since September 2026.",
    paragraph:
      "M207, MedCenter, and admissions rankings for 1,000+ applications. Learning to understand AI-written code.",
    loopLabel: "Working loop",
    loop: ["Plan", "Code", "Build", "Test", "Release", "Monitor"],
  },
  scrollGate: {
    label: "Keep scrolling — the cases open",
    ready: "Ready, opening the cases",
  },
  contact: {
    heading: ["There's chaos,", "that's ready", "to be built?"],
    note: "Describe the task and deadline. I reply within a day.",
    action: "Message on Telegram",
    actionEmail: "Send an email",
    actionGithub: "Browse the code",
    actionX: "Follow on X",
  },
  footer: {
    brand: "ITHAKA/",
  },
};

export const homeDict: Record<Lang, HomeDict> = { ru, en };
