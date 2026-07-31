// Инлайновые SVG вместо текстовых стрелочек на кнопках (решение 29.07).
// Все иконки рисуются currentColor и наследуют цвет кнопки, размер — через
// CSS-класс .icon (см. globals.css), чтобы не задавать его в каждом месте.

type IconProps = { className?: string };

const base = (className?: string) => ({
  className: `icon${className ? ` ${className}` : ""}`,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
});

export function TelegramIcon({ className }: IconProps) {
  return (
    <svg {...base(className)} fill="currentColor" stroke="none">
      <path d="M21.9 4.3 18.9 19.4c-.2 1-.8 1.3-1.7.8l-4.6-3.4-2.2 2.2c-.3.3-.5.5-.9.5l.3-4.6L18.3 7c.4-.3-.1-.5-.6-.2L7.4 13.2l-4.5-1.4c-1-.3-1-1 .2-1.4l17.6-6.8c.8-.3 1.5.2 1.2 1.7z" />
    </svg>
  );
}

export function GithubIcon({ className }: IconProps) {
  return (
    <svg {...base(className)} fill="currentColor" stroke="none">
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z" />
    </svg>
  );
}

export function XIcon({ className }: IconProps) {
  return (
    <svg {...base(className)} fill="currentColor" stroke="none">
      <path d="M17.2 3h3.3l-7.2 8.3L21.8 21h-6.6l-5.2-6.6L4.1 21H.8l7.7-8.8L.5 3h6.8l4.7 6.1L17.2 3zm-1.2 16h1.8L7.9 4.9H6L16 19z" />
    </svg>
  );
}

export function PortfolioIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <rect x="3" y="4" width="7.4" height="7.4" />
      <rect x="13.6" y="4" width="7.4" height="7.4" />
      <rect x="3" y="12.6" width="7.4" height="7.4" />
      <rect x="13.6" y="12.6" width="7.4" height="7.4" />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <rect x="2.5" y="4.5" width="19" height="15" />
      <path d="m2.5 6 9.5 7 9.5-7" />
    </svg>
  );
}

export function ExternalIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M8.6 15.4 15.4 8.6" />
      <path d="M9.9 8.6h5.5v5.5" />
    </svg>
  );
}

export function PlayIcon({ className }: IconProps) {
  return (
    <svg {...base(className)} fill="currentColor" stroke="none">
      <path d="M8 5.14v13.72c0 .58.64.94 1.14.64l11.02-6.86a.75.75 0 0 0 0-1.28L9.14 4.5A.75.75 0 0 0 8 5.14z" />
    </svg>
  );
}

export function DownloadIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M12 3v12" />
      <path d="m7 11 5 5 5-5" />
      <path d="M4 20h16" />
    </svg>
  );
}
