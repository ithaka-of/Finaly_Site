export type ProjectShot = {
  src: string;
  width: number;
  height: number;
};

export type ProjectMeta = {
  index: string;
  code: string;
  meta: string;
  status: string;
  statusTone?: "live" | "ready" | "story" | "progress";
  className?: string;
  screenshots?: ProjectShot[];
  links?: {
    demo?: string;
    github?: string;
  };
};

export const projectsMeta: ProjectMeta[] = [
  {
    index: "01",
    code: "M207 / 2026",
    meta: "WEBSITE · ART DIRECTION · DELIVERY",
    status: "LIVE",
    statusTone: "live",
    screenshots: [
      { src: "main_m207.webp", width: 1600, height: 854 },
      { src: "2_m207.webp", width: 1600, height: 853 },
      { src: "3_m207.webp", width: 1600, height: 853 },
      { src: "4_m207.webp", width: 1600, height: 851 },
    ],
    links: {
      demo: "https://ithaka-of.github.io/m207soft/",
    },
  },
  {
    index: "02",
    code: "MEDCENTER / 2026",
    meta: "WEB APP · DATABASE · UX",
    status: "COMPLETED",
    statusTone: "ready",
    screenshots: [
      { src: "main_medcent.webp", width: 1600, height: 855 },
      { src: "2_medcentr.webp", width: 1600, height: 845 },
      { src: "3_medcentr.webp", width: 1600, height: 852 },
      { src: "4_medcentr.webp", width: 1600, height: 846 },
    ],
    links: {
      demo: "http://155.212.224.183",
    },
  },
  {
    index: "03",
    code: "KVT / ADMISSION",
    meta: "PROCESS LOGIC · DATA · GOOGLE SHEETS",
    status: "SHOWABLE RESULT",
    statusTone: "ready",
    className: "project--wide",
    screenshots: [{ src: "priemka.webp", width: 1580, height: 1624 }],
    links: {
      github: "https://github.com/ithaka-of/Priemka",
    },
  },
  {
    index: "04",
    code: "JOB-WATCHER / AUTOMATION",
    meta: "PYTHON · TELEGRAM · RSS",
    status: "WORKS",
    statusTone: "story",
    screenshots: [{ src: "job_watcher.webp", width: 675, height: 1448 }],
  },
];
