import { cva } from "class-variance-authority";

export const radioGroupRootVariants = cva("grid gap-2");

export const radioGroupItemVariants = cva([
  // base
  "aspect-square size-4 shrink-0 rounded-full border border-input text-primary",
  "transition-colors",
  // focus-visible
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  // disabled
  "disabled:cursor-not-allowed disabled:opacity-50",
  // checked — Radix ставит data-state на каждый Item отдельно
  "data-[state=checked]:border-primary",
]);

export const radioGroupIndicatorVariants = cva(
  "relative flex items-center justify-center after:block after:size-2 after:rounded-full after:bg-primary",
);
