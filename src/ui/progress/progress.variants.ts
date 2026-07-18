import { cva } from "class-variance-authority";

export const progressRootVariants = cva(
  "relative h-2 w-full overflow-hidden rounded-full bg-muted",
);

export const progressIndicatorVariants = cva(
  "size-full flex-1 bg-primary transition-transform duration-300 ease-out",
);
