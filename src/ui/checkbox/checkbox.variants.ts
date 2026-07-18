import { cva } from "class-variance-authority";

export const checkboxVariants = cva([
  // base
  "peer size-4 shrink-0 rounded-sm border border-input",
  "transition-colors",
  // focus-visible
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  // disabled
  "disabled:cursor-not-allowed disabled:opacity-50",
  // checked/indeterminate — Radix ставит data-state на сам Checkbox.Root
  "data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
  "data-[state=indeterminate]:border-primary data-[state=indeterminate]:bg-primary data-[state=indeterminate]:text-primary-foreground",
]);

export const checkboxIndicatorVariants = cva(
  "flex items-center justify-center text-current",
);
