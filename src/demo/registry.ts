import type { ComponentType } from "react";
import { ButtonDemo, DialogDemo, DropdownMenuDemo, TabsDemo, TooltipDemo } from "@/demo/pages/demos";

export interface ComponentMeta {
  slug: string;
  name: string;
  category: "Inputs" | "Overlays" | "Feedback" | "Navigation" | "Layout";
  description: string;
  status: "done" | "planned";
  element?: ComponentType;
}

export const registry: ComponentMeta[] = [
  {
    slug: "button",
    name: "Button",
    category: "Inputs",
    description: "Базовый триггер действия с вариантами и размерами",
    status: "done",
    element: ButtonDemo,
  },
  {
    slug: "tooltip",
    name: "Tooltip",
    category: "Overlays",
    description: "Всплывающая подсказка при наведении/фокусе",
    status: "done",
    element: TooltipDemo,
  },
  {
    slug: "dialog",
    name: "Dialog",
    category: "Overlays",
    description: "Модальное окно поверх контента",
    status: "done",
    element: DialogDemo,
  },
  {
    slug: "dropdown-menu",
    name: "Dropdown Menu",
    category: "Navigation",
    description:
      "Меню действий с клавиатурной навигацией, checkbox/radio-пунктами и подменю",
    status: "done",
    element: DropdownMenuDemo,
  },
  {
    slug: "tabs",
    name: "Tabs",
    category: "Navigation",
    description: "Переключение между секциями контента с roving tabindex навигацией",
    status: "done",
    element: TabsDemo,
  },
];

export function groupByCategory(items: ComponentMeta[]) {
  return items.reduce<Record<string, ComponentMeta[]>>((acc, item) => {
    (acc[item.category] ??= []).push(item);
    return acc;
  }, {});
}
