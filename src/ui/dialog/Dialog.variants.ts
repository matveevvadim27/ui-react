import { cva } from "class-variance-authority";

export const dialogOverlayVariants = cva([
  "fixed inset-0 z-50",
  "bg-black/50",
  "data-[state=open]:animate-in data-[state=open]:fade-in-0",
  "data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
]);

export const dialogContentVariants = cva([
  // позиционирование по центру экрана
  "fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2",
  "w-full max-w-lg",
  "rounded-lg border border-border bg-background p-6 shadow-lg",
  // анимация появления/исчезновения по data-state
  "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
  "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
  // фокус на самом контенте не должен показывать ring
  "focus:outline-none",
]);

export const dialogCloseVariants = cva([
  "absolute right-4 top-4 rounded-sm opacity-70",
  "transition-opacity hover:opacity-100",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  "disabled:pointer-events-none",
]);
