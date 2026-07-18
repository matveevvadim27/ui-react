import type { ReactNode } from "react";
import type * as TooltipPrimitive from "@radix-ui/react-tooltip";

export interface TooltipProps {
  /** Элемент, на который наводятся — станет Trigger через asChild */
  children: ReactNode;
  /** Содержимое всплывающей подсказки */
  content: ReactNode;
  /** Сторона показа относительно триггера */
  side?: TooltipPrimitive.TooltipContentProps["side"];
  /** Выравнивание вдоль стороны */
  align?: TooltipPrimitive.TooltipContentProps["align"];
  /** Задержка перед показом, мс */
  delayDuration?: number;
  /** Показывать ли стрелку-указатель */
  showArrow?: boolean;
  /** Управление открытием извне (controlled) */
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
}
