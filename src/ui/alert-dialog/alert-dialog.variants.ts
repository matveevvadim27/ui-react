import { cva } from "class-variance-authority";

export const alertDialogOverlayVariants = cva([
  "fixed inset-0 z-50 bg-black/50",
  "data-[state=open]:animate-in data-[state=open]:fade-in-0",
  "data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
]);

export const alertDialogContentVariants = cva([
  "fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2",
  "w-full max-w-lg",
  "rounded-lg border border-border bg-background p-6 shadow-lg",
  "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
  "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
  "focus:outline-none",
]);
