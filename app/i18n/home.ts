import type { Lang } from "./context";

export type HomeDict = {
  nav: { portfolio: string; skills: string; about: string; contact: string };
  hero: {
    lines: string[];
    paragraph: string;
    skillsLabel: string;
    skills: string[];
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
  contact: { heading: string[]; action: string; actionEmail: string; actionGithub: string; actionX: string };
  footer: { brand: string };
};

const ru: HomeDict = {
  nav: { portfolio: "Кейсы", skills: "Что умею", about: "Обо мне", contact: "Контакт" },
  hero: {
    lines: ["Из хаоса —", "в рабочую", "систему"],
    paragraph:
      "Собираю сайты, автоматизации и AI-инструменты. Беру задачу в том виде, в каком её описал заказчик, и довожу до состояния, которое можно открыть и показать.",
    skillsLabel: "Навыки",
    skills: ["Веб: фронт, бэк, база", "Локальные AI-модели", "Автоматизация рутины"],
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
      "Кодовый замок на греческих символах: четыре знака из шести, восемь попыток, после каждой — сколько угадано на своих местах, а сколько не на своих. Сделана как разминка по состоянию и логике подсказок.",
    playCta: "Играть",
  },
  projects: [
    {
      title: "Сайт компании медицинского ПО",
      proof: "Живой каталог продуктов с клиентскими итерациями",
      description:
        "Сайт-визитка с каталогом продуктов: сбор материалов, постановка задачи, визуальная система под фирменный стиль и итерации с заказчиком.",
      stack: "HTML, CSS, GitHub Pages",
      role: "Фрилансер: пришёл заказ — сделал сайт целиком",
      statusLabel: "живой сайт",
    },
    {
      title: "Онлайн-запись в медицинский центр",
      proof: "Полный сценарий записи от процедуры до истории визитов",
      description:
        "Дипломное веб-приложение: специалисты и процедуры, запись на приём, личный кабинет, история визитов и связанная бизнес-логика.",
      stack: "Python, Flask, SQLite, Bootstrap",
      role: "Наёмный разработчик: заказ на автоматизацию обработки заявок",
      statusLabel: "диплом",
    },
    {
      title: "Рейтинг-листы приёмной кампании",
      proof: "≈1200 заявлений переведены в рейтинг-листы",
      description:
        "Помог Колледжу высоких технологий при БГТУ им. В. Г. Шухова собрать рейтинг-листы из выгрузки примерно на 1200 заявлений: разнос данных, сохранение ручных правок и обработка нестандартных статусов.",
      stack: "Node.js, Google Sheets API v4, PowerShell",
      role: "Помогал с приёмкой руками, увидел рутину и автоматизировал",
      statusLabel: "результат можно показать",
    },
    {
      title: "job-watcher",
      proof: "Ручной обход источников заменён одной лентой",
      description:
        "Бот собирает вакансии из шести Telegram-каналов, Habr и «Работы России», фильтрует по заданным критериям и присылает подходящее в личку. Теги навыков подтягиваются оттуда, где они есть.",
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
      text: "Три направления, и за каждым есть работа в портфолио.",
      items: [
        "Веб-приложения целиком — интерфейс, серверная часть и база данных",
        "AI-инструменты на локальных моделях, без облака и подписок",
        "Ручная рутина превращается в скрипт: таблицы, выгрузки, повторяющиеся операции",
      ],
    },
    {
      title: "Метод",
      text: "ИИ пишет код. Я отвечаю за то, чтобы он делал правильную вещь.",
      items: [
        "Разобрать — Перевожу размытый запрос в понятные требования, сценарии и границы результата.",
        "Собрать — Использую AI как производственный инструмент для сайтов, ботов и автоматизаций.",
        "Проверить — Ищу неоднозначности и краевые случаи до того, как они превратятся в проблемы.",
        "Довести — Показываю рабочий результат, собираю обратную связь и провожу через итерации.",
      ],
    },
    {
      title: "Чем помогу",
      text: "Задачи, где рутину можно заменить скриптом, а хаос — системой.",
      items: [
        "Автоматизировать повторяющуюся ручную работу: выгрузки, таблицы, однотипные операции",
        "Сделать сайт: от визитки до приложения с базой данных",
        "Настроить поиск клиентов: подбор кандидатов, персональные первые касания, отслеживание ответов",
      ],
    },
  ],
  about: {
    heading: "Как я работаю",
    lead:
      "Выпускник Колледжа высоких технологий, направление «Информационные системы и программирование».",
    paragraph:
      "Каждый проект здесь начинался с живой задачи: сайт компании, запись в медцентр, полторы тысячи заявлений приёмной кампании. Что-то заказывали, что-то просто надоело делать руками. Разбираюсь по ходу — так видно, как задача превращается в работающую систему.",
    loopLabel: "Рабочий цикл",
    loop: ["Планирование", "Разработка", "Сборка", "Тестирование", "Релиз", "Мониторинг"],
  },
  scrollGate: {
    label: "Листай дальше — откроются кейсы",
    ready: "Готово, открываю кейсы",
  },
  contact: {
    heading: ["Есть хаос,", "который пора", "собрать?"],
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
      "I build websites, automations, and AI tools. I take a task exactly as the client described it and bring it to a state you can open and show.",
    skillsLabel: "Skills",
    skills: ["Web: front, back, database", "Local AI models", "Routine automation"],
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
      "A code lock on Greek symbols: four glyphs out of six, eight attempts, and after each one you learn how many are in the right place and how many are merely present. Built as a warm-up on state and hint logic.",
    playCta: "Play",
  },
  projects: [
    {
      title: "Website for a medical software company",
      proof: "Live product catalog with client-side iteration",
      description:
        "A business-card site with a product catalog: gathering materials, framing the task, a visual system on brand, and iterating with the client.",
      stack: "HTML, CSS, GitHub Pages",
      role: "Freelancer: took the order, built the site end to end",
      statusLabel: "live website",
    },
    {
      title: "Online booking for a medical center",
      proof: "Full booking flow from procedure to visit history",
      description:
        "Capstone web app: specialists and procedures, appointment booking, a personal account, visit history, and the business logic behind it.",
      stack: "Python, Flask, SQLite, Bootstrap",
      role: "Hired developer: a request to automate booking intake",
      statusLabel: "capstone",
    },
    {
      title: "Admission rating sheets",
      proof: "~1,200 applications reshaped into rating sheets",
      description:
        "Helped the College of High Technologies at BSTU named after V. G. Shukhov build rating sheets from a ~1,200-application export: reshaping data, preserving manual edits, and handling non-standard statuses.",
      stack: "Node.js, Google Sheets API v4, PowerShell",
      role: "Helped with admissions by hand, spotted the routine, automated it",
      statusLabel: "showable result",
    },
    {
      title: "job-watcher",
      proof: "Manual source-checking replaced by a single feed",
      description:
        "A bot that collects vacancies from six Telegram channels, Habr, and the Russian public job registry, filters them by set criteria, and sends matches to a private chat. Skill tags are pulled from the sources that provide them.",
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
      text: "Three directions, each backed by work in the cases.",
      items: [
        "Full web applications — interface, server side, and database",
        "AI tools on local models, no cloud and no subscriptions",
        "Manual routine turns into a script: spreadsheets, exports, repetitive operations",
      ],
    },
    {
      title: "Method",
      text: "AI writes the code. I'm responsible for making sure it builds the right thing.",
      items: [
        "Decode — I turn a vague request into clear requirements, scenarios, and result boundaries.",
        "Assemble — I use AI as a production tool for websites, bots, and automations.",
        "Verify — I hunt for ambiguity and edge cases before they turn into problems.",
        "Deliver — I show a working result, gather feedback, and carry it through iterations.",
      ],
    },
    {
      title: "How I can help",
      text: "Tasks where routine can be replaced by a script, and chaos by a system.",
      items: [
        "Automate repetitive manual work: exports, spreadsheets, same-shape operations",
        "Build a website: from a business card to an app with a database",
        "Set up client outreach: shortlisting, personalized first messages, reply tracking",
      ],
    },
  ],
  about: {
    heading: "How I work",
    lead:
      "Graduate of the College of High Technologies, Information Systems and Programming track.",
    paragraph:
      "Every project here started with a real task: a company website, medical center booking, fifteen hundred admission applications. Some were commissioned, some I simply got tired of doing by hand. I figure things out as I go — that's how you can see a task turning into a working system.",
    loopLabel: "Working loop",
    loop: ["Plan", "Code", "Build", "Test", "Release", "Monitor"],
  },
  scrollGate: {
    label: "Keep scrolling — the cases open",
    ready: "Ready, opening the cases",
  },
  contact: {
    heading: ["There's chaos,", "that's ready", "to be built?"],
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
