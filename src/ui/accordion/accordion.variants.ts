import { cva } from "class-variance-authority";

export const accordionItemVariants = cva("border-b border-border");

export const accordionTriggerVariants = cva([
  // base
  "flex flex-1 items-center justify-between gap-4 py-4 text-sm font-medium",
  "transition-all",
  // hover
  "hover:underline",
  // focus-visible
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  // disabled
  "disabled:pointer-events-none disabled:opacity-50",
  // стрелка-шеврон крутится по data-state, который Radix ставит на Trigger
  "[&[data-state=open]>svg]:rotate-180",
  "[&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:text-muted-foreground [&_svg]:transition-transform [&_svg]:duration-200",
]);

export const accordionContentVariants = cva([
  "overflow-hidden text-sm",
  // ключевой момент — используем keyframes, завязанные на переменную Radix
  "data-[state=open]:animate-accordion-down",
  "data-[state=closed]:animate-accordion-up",
]);
