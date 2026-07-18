import type { ComponentType } from "react";
import { ButtonDemo, DialogDemo, DropdownMenuDemo, SelectDemo, TabsDemo, TooltipDemo } from "@/demo/pages/demos";
import { AccordionDemo } from "@/demo/pages/demos/AccordionDemo";
import { CheckboxDemo } from "@/demo/pages/demos/CheckboxDemo";

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
  {
    slug: "select",
    name: "Select",
    category: "Inputs",
    description:
      "Выпадающий список выбора значения с группами, поиском по буквам и скроллом",
    status: "done",
    element: SelectDemo,
  },
  {
    slug: "accordion",
    name: "Accordion",
    category: "Layout",
    description: "Раскрываемые секции контента с плавной анимацией высоты",
    status: "done",
    element: AccordionDemo,
  },
  {
    slug: "checkbox",
    name: "Checkbox",
    category: "Inputs",
    description: "Чекбокс с поддержкой indeterminate-состояния для групповых выборов",
    status: "done",
    element: CheckboxDemo,
  },
];

export function groupByCategory(items: ComponentMeta[]) {
  return items.reduce<Record<string, ComponentMeta[]>>((acc, item) => {
    (acc[item.category] ??= []).push(item);
    return acc;
  }, {});
}
