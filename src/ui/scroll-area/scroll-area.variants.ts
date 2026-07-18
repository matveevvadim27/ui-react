import { cva } from "class-variance-authority";

export const scrollAreaRootVariants = cva("relative overflow-hidden");

export const scrollAreaViewportVariants = cva("size-full rounded-[inherit]");

export const scrollAreaScrollbarVariants = cva(
  ["flex touch-none select-none transition-colors"],
  {
    variants: {
      orientation: {
        vertical: "h-full w-2.5 border-l border-l-transparent p-px",
        horizontal: "h-2.5 flex-col border-t border-t-transparent p-px",
      },
    },
    defaultVariants: {
      orientation: "vertical",
    },
  },
);

export const scrollAreaThumbVariants = cva("relative flex-1 rounded-full bg-border");
