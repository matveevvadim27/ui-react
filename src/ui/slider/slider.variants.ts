import { cva } from "class-variance-authority";

export const sliderRootVariants = cva(
  "relative flex w-full touch-none select-none items-center data-[disabled]:opacity-50",
);

export const sliderTrackVariants = cva(
  "relative h-1.5 w-full grow overflow-hidden rounded-full bg-muted",
);

export const sliderRangeVariants = cva("absolute h-full bg-primary");

export const sliderThumbVariants = cva([
  "block size-4 rounded-full border-2 border-primary bg-background",
  "transition-colors",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  "disabled:pointer-events-none",
]);
