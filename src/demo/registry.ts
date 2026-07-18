import type { ComponentType } from "react";

import {
  ButtonDemo,
  DialogDemo,
  DropdownMenuDemo,
  SelectDemo,
  SwitchDemo,
  TabsDemo,
  TooltipDemo,
  AccordionDemo,
  CheckboxDemo, RadioGroupDemo, PopoverDemo, AlertDialogDemo, CollapsibleDemo, ToggleDemo, ProgressDemo, SliderDemo,
  ToastDemo, AvatarDemo, SeparatorDemo, LabelDemo, HoverCardDemo, ContextMenuDemo,
} from "@/demo/pages/demos";

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
  {
    slug: "switch",
    name: "Switch",
    category: "Inputs",
    description: "Тумблер-переключатель для бинарных настроек",
    status: "done",
    element: SwitchDemo,
  },
  {
    slug: "radio-group",
    name: "Radio Group",
    category: "Inputs",
    description: "Группа взаимоисключающих вариантов с клавиатурной навигацией",
    status: "done",
    element: RadioGroupDemo,
  },
  {
    slug: "popover",
    name: "Popover",
    category: "Overlays",
    description: "Немодальное всплывающее окно с произвольным интерактивным контентом",
    status: "done",
    element: PopoverDemo,
  },
  {
    slug: "alert-dialog",
    name: "Alert Dialog",
    category: "Overlays",
    description:
      "Модальное окно для критичных подтверждений — не закрывается кликом снаружи или Esc",
    status: "done",
    element: AlertDialogDemo,
  },
  {
    slug: "collapsible",
    name: "Collapsible",
    category: "Layout",
    description: "Одиночный сворачиваемый блок контента с анимацией высоты",
    status: "done",
    element: CollapsibleDemo,
  },
  {
    slug: "toggle",
    name: "Toggle",
    category: "Inputs",
    description: "Кнопка с состоянием вкл/выкл, одиночная и в группе (single/multiple)",
    status: "done",
    element: ToggleDemo,
  },
  {
    slug: "progress",
    name: "Progress",
    category: "Feedback",
    description: "Индикатор прогресса с GPU-анимацией заполнения через transform",
    status: "done",
    element: ProgressDemo,
  },
  {
    slug: "slider",
    name: "Slider",
    category: "Inputs",
    description:
      "Ползунок выбора числового значения или диапазона с drag и клавиатурной навигацией",
    status: "done",
    element: SliderDemo,
  },
  {
    slug: "toast",
    name: "Toast",
    category: "Feedback",
    description:
      "Всплывающие уведомления с императивным API, swipe-to-dismiss и очередью",
    status: "done",
    element: ToastDemo,
  },
  {
    slug: "avatar",
    name: "Avatar",
    category: "Layout",
    description:
      "Аватар пользователя с автоматическим fallback на инициалы при ошибке загрузки",
    status: "done",
    element: AvatarDemo,
  },
  {
    slug: "separator",
    name: "Separator",
    category: "Layout",
    description: "Визуальный или структурный разделитель контента",
    status: "done",
    element: SeparatorDemo,
  },
  {
    slug: "label",
    name: "Label",
    category: "Inputs",
    description:
      "Доступная подпись для форм-элементов без выделения текста при двойном клике",
    status: "done",
    element: LabelDemo,
  },
  {
    slug: "hover-card",
    name: "Hover Card",
    category: "Overlays",
    description:
      "Карточка с богатым контентом, открывающаяся при наведении — гибрид Tooltip и Popover",
    status: "done",
    element: HoverCardDemo,
  },
  {
    slug: "context-menu",
    name: "Context Menu",
    category: "Navigation",
    description: "Меню по правому клику с checkbox/radio-пунктами и подменю",
    status: "done",
    element: ContextMenuDemo,
  },
];

export function groupByCategory(items: ComponentMeta[]) {
  return items.reduce<Record<string, ComponentMeta[]>>((acc, item) => {
    (acc[item.category] ??= []).push(item);
    return acc;
  }, {});
}
