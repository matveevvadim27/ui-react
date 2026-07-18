import { cva } from "class-variance-authority";

export const collapsibleTriggerVariants = cva([
  "flex w-full items-center justify-between gap-4 text-sm font-medium",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  "disabled:pointer-events-none disabled:opacity-50",
  "[&[data-state=open]>svg]:rotate-180",
  "[&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:transition-transform [&_svg]:duration-200",
]);

export const collapsibleContentVariants = cva([
  "overflow-hidden text-sm",
  "data-[state=open]:animate-collapsible-down",
  "data-[state=closed]:animate-collapsible-up",
]);
