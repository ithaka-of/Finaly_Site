"use client";

import { useEffect, useState } from "react";
import type { ComponentType } from "react";

// Оверлей Agentation для дизайн-правок, подключённый так, чтобы НЕ попасть в прод.
//
// Почему не обычный импорт: `import { Agentation } from "agentation"` в layout.tsx
// тянет пакет в общий чанк независимо от условия по NODE_ENV — проверено 19.08.2026,
// в сборку уехало 423 КБ (треть всего веса) и чанк подключался прямо в HTML,
// то есть его качал бы каждый посетитель сайта.
//
// Здесь импорт динамический и стоит за проверкой NODE_ENV внутри эффекта:
// в продакшене ветка недостижима, модуль не запрашивается.
export function DevTools() {
  const [Overlay, setOverlay] = useState<ComponentType | null>(null);

  useEffect(() => {
    if (process.env.NODE_ENV !== "development") return;

    let cancelled = false;
    import("agentation")
      .then((mod) => {
        if (!cancelled) setOverlay(() => mod.Agentation as ComponentType);
      })
      .catch((err) => {
        // Ошибку не глотаем молча: если оверлей не поднялся, это должно быть
        // видно в консоли, а не выглядеть как «пакет просто не показывается».
        console.error("[DevTools] Agentation не загрузился:", err);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  if (!Overlay) return null;
  return <Overlay />;
}
