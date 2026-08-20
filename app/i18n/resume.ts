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
    "Выпускник Колледжа высоких технологий при БГТУ им. В. Г. Шухова, специальность «Информационные системы и программирование». Делаю сайты, веб-приложения и автоматизацию рутинных процессов.",
    "Один из моих проектов работает в ежедневной эксплуатации у заказчика с июля 2026 — приёмная комиссия колледжа обновляет рейтинговую таблицу сама, без моего участия. Ручная операция, занимавшая часы, теперь занимает секунды.",
    "Работаю с AI-инструментами как с производственным стеком: постановка задачи, декомпозиция, бизнес-логика и краевые случаи — на мне, генерация кода — на модели, проверка результата снова на мне. Так собираю рабочий результат быстрее, чем классической разработкой.",
  ],
  skills: [
    {
      title: "Веб: фронтенд, бэкенд, база данных",
      body: "HTML/CSS, адаптивная вёрстка, тёмная тема; Python + Flask; проектирование и нормализация БД, SQL",
    },
    {
      title: "Автоматизация рутинных процессов",
      body: "Node.js и Python-пайплайны, Google Sheets API, Telegram-боты, парсинг и сбор данных из внешних источников",
    },
    {
      title: "Локальные AI-модели",
      body: "запуск и применение через Ollama без облачных сервисов, полнотекстовый и семантический поиск по данным",
    },
    {
      title: "Постановка задач ИИ и приёмка результата",
      body: "декомпозиция, контроль краевых случаев, проверка выдачи (Claude Code, Codex, локальные модели)",
    },
    {
      title: "Системный анализ",
      body: "жизненный цикл ПО, UML-диаграммы, выявление неоднозначностей в требованиях до реализации",
    },
    {
      title: "Инструменты",
      body: "Git/GitHub, GitHub Actions, деплой на GitHub Pages и Vercel, PowerShell",
    },
  ],
  projects: {
    priemka: {
      title: "Автоматизация приёмной кампании колледжа",
      body: "Пайплайн ежедневного пересбора приёмной таблицы: выгрузка из учётной системы (более 1000 заявлений, 30+ колонок с персональными данными) разносится в обезличенный рейтинг по 14 листам специальностей. Фильтрация персональных данных по белому списку, идемпотентный пересбор, автоматическое выделение льготников, сохранение проставленных вручную баллов. Бизнес-логику и краевые случаи держал сам: отсутствующий лист специальности, статус «Отозван», конфликт форм оплаты — эти проблемы нашёл я, а не заказчик после сбоя.",
      result:
        "Ручная работа сократилась с часов до секунд; с июля 2026 таблицу обновляет сотрудник приёмной комиссии самостоятельно.",
    },
    m207: {
      title: "Сайт компании «М 207 Софт»",
      subtitle: "разработчик медицинского ПО, Белгород",
      body: "Сайт-визитка с каталогом продуктов для внешнего заказчика. Моя роль: сбор требований и материалов, формулировка технического задания, фирменный стиль под логотип, приёмка и итерации правок с заказчиком. Реализация выполнена ИИ-инструментами под моим контролем.",
    },
    medcenter: {
      title: "Веб-приложение «МедЦентр» — система онлайн-записи",
      subtitle: "дипломный проект",
      body: "Многостраничное приложение: регистрация и авторизация, каталог специалистов и процедур, онлайн-запись на приём, личный кабинет с историей визитов. Проектирование базы данных и бизнес-логики. Развёрнуто на собственном VPS.",
    },
    jobWatcher: {
      title: "job-watcher — бот мониторинга вакансий",
      body: "Telegram-бот: сбор вакансий из нескольких источников (Telegram-каналы, Habr RSS, API «Работа России»), фильтрация по ключевым словам, дедупликация, уведомления. Работает ежедневно.",
    },
    agentInfra: {
      title: "Личная агентная инфраструктура",
      subtitle: "R&D",
      body: "Система ежедневных сводок и логирования: сбор данных из Google Sheets и новостных источников, доставка в Telegram, база знаний с полнотекстовым и семантическим поиском. Работает с июля 2026 без ручного вмешательства.",
    },
  },
  experience: {
    title: "Фриланс — технические работы на заказ (2024–2026)",
    body: "Выполнение технических заданий с применением AI-инструментов. Все заказы сданы и оплачены, клиенты приходили по рекомендациям.",
  },
  education: [
    {
      title: "Колледж высоких технологий при БГТУ им. В. Г. Шухова",
      body: "специальность 09.02.07 «Информационные системы и программирование», 2022–2026 — диплом защищён",
    },
    {
      title: "БГТУ им. В. Г. Шухова",
      body: "бакалавриат «Информационные системы и технологии», сокращённая программа, с сентября 2026",
    },
    {
      title: "Школа анализа данных Яндекса",
      body: "интенсив «AI Agents Security Week», 27–31 июля 2026 — сертификат (АНО ДПО «Образовательные технологии Яндекса»). Практика по безопасности ИИ-агентов: тестирование guardrails и защита от извлечения системного промпта",
    },
  ],
  languages: "Русский — родной · Английский — A2",
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
    "Graduate of the College of High Technologies at BSTU (Belgorod), majoring in Information Systems and Programming. I build websites, web applications and automation for routine business processes.",
    "One of my projects has been in daily production use since July 2026: the college admissions office now updates its ranking spreadsheet on its own, without me. A manual operation that used to take hours now takes seconds.",
    "I treat AI tools as a production stack: framing the task, breaking it down, owning the business logic and the edge cases — that part is mine; code generation is the model's; verifying the result is mine again. That is how I ship working results faster than by writing everything by hand.",
  ],
  skills: [
    {
      title: "Web: frontend, backend, database",
      body: "HTML/CSS, responsive layout, dark theme; Python + Flask; database design and normalisation, SQL",
    },
    {
      title: "Process automation",
      body: "Node.js and Python pipelines, Google Sheets API, Telegram bots, scraping and data collection from external sources",
    },
    {
      title: "Local AI models",
      body: "running and applying models via Ollama with no cloud services, full-text and semantic search over data",
    },
    {
      title: "Directing AI and reviewing its output",
      body: "task decomposition, edge-case control, verification of generated results (Claude Code, Codex, local models)",
    },
    {
      title: "Systems analysis",
      body: "software lifecycle, UML diagrams, spotting ambiguity in requirements before implementation",
    },
    {
      title: "Tooling",
      body: "Git/GitHub, GitHub Actions, deployment to GitHub Pages and Vercel, PowerShell",
    },
  ],
  projects: {
    priemka: {
      title: "College admissions campaign automation",
      body: "A pipeline that rebuilds the admissions spreadsheet daily: an export from the record system (over 1,000 applications, 30+ columns containing personal data) is redistributed into an anonymised ranking across 14 per-programme sheets. Whitelist-based filtering of personal data, idempotent rebuilds, automatic flagging of applicants with legal priority, preservation of manually entered scores. I owned the business logic and the edge cases: a missing programme sheet, the \"Withdrawn\" status, conflicting payment types — I found these myself rather than the client finding them after a failure.",
      result:
        "Manual work dropped from hours to seconds; since July 2026 an admissions officer updates the spreadsheet without any developer involved.",
    },
    m207: {
      title: "Corporate website for M 207 Soft",
      subtitle: "medical software vendor, Belgorod",
      body: "A company website with a product catalogue for an external client. My role: gathering requirements and materials, writing the specification, building the visual identity around the logo, reviewing the result and running revision rounds with the client. Implementation was carried out with AI tools under my supervision.",
    },
    medcenter: {
      title: "MedCenter — online appointment booking web app",
      subtitle: "graduation project",
      body: "A multi-page application: sign-up and authentication, catalogue of specialists and procedures, online appointment booking, personal area with visit history. Database and business logic designed by me. Deployed on my own VPS.",
    },
    jobWatcher: {
      title: "job-watcher — job posting monitoring bot",
      body: "A Telegram bot that collects job postings from several sources (Telegram channels, Habr RSS, the Russian federal employment API), filters them by keywords, deduplicates and sends notifications. Runs daily.",
    },
    agentInfra: {
      title: "Personal agent infrastructure",
      subtitle: "R&D",
      body: "A system for daily briefings and session logging: data collection from Google Sheets and news sources, delivery to Telegram, a knowledge base with full-text and semantic search. Running since July 2026 without manual intervention.",
    },
  },
  experience: {
    title: "Freelance — technical work on commission (2024–2026)",
    body: "Delivering technical assignments with AI tools. Every order was completed and paid for; clients came through referrals.",
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
      body: "AI Agents Security Week intensive, 27–31 July 2026 — certificate. Hands-on work on AI agent security: testing guardrails and defending against system prompt extraction",
    },
  ],
  languages: "Russian — native · English — A2",
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
