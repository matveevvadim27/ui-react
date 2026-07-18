import { cva } from "class-variance-authority";

export const tooltipContentVariants = cva([
  // base
  "z-50 overflow-hidden rounded-md px-3 py-1.5 text-xs font-medium",
  "bg-foreground text-background",
  "shadow-md",
  // animation по data-state, который проставляет сам Radix
  "data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in-0 data-[state=delayed-open]:zoom-in-95",
  "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
  // направление появления — тоже из data-атрибута Radix (side)
  "data-[side=bottom]:slide-in-from-top-2",
  "data-[side=top]:slide-in-from-bottom-2",
  "data-[side=left]:slide-in-from-right-2",
  "data-[side=right]:slide-in-from-left-2",
]);

export const tooltipArrowVariants = cva("fill-foreground");
