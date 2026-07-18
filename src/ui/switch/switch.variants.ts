import { cva } from "class-variance-authority";

export const switchRootVariants = cva([
  // base
  "peer inline-flex h-5 w-9 shrink-0 items-center rounded-full border-2 border-transparent",
  "transition-colors",
  // focus-visible
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  // disabled
  "disabled:cursor-not-allowed disabled:opacity-50",
  // фон переключается по data-state, который Radix ставит на Root
  "data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
]);

export const switchThumbVariants = cva([
  "pointer-events-none block size-4 rounded-full bg-background shadow-lg ring-0",
  "transition-transform",
  // ползунок сдвигается вправо, когда включено
  "data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0",
]);
