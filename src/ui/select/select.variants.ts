import { cva } from "class-variance-authority";

export const selectTriggerVariants = cva([
  // base
  "flex h-10 w-full items-center justify-between gap-2 rounded-md border border-input bg-background px-3 py-2 text-sm",
  "[&>span]:line-clamp-1",
  "[&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:opacity-50",
  // focus
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  // disabled
  "disabled:cursor-not-allowed disabled:opacity-50",
  // placeholder-состояние — Radix ставит data-placeholder на Value, когда ничего не выбрано
  "data-[placeholder]:text-muted-foreground",
]);

export const selectContentVariants = cva([
  "z-50 min-w-[8rem] overflow-hidden rounded-md border border-border bg-background shadow-md",
  // ограничиваем высоту доступным пространством экрана — без этого нечего скроллить
  "max-h-[var(--radix-select-content-available-height)]",
  "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
  "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
  "data-[side=bottom]:slide-in-from-top-2",
  "data-[side=top]:slide-in-from-bottom-2",
]);

export const selectItemVariants = cva([
  // base
  "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none",
  // подсветка через data-highlighted, тот же принцип что и в DropdownMenu
  "data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground",
  // disabled
  "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
]);

export const selectLabelVariants = cva(
  "px-2 py-1.5 text-xs font-medium text-muted-foreground",
);

export const selectSeparatorVariants = cva("-mx-1 my-1 h-px bg-border");

export const selectScrollButtonVariants = cva(
  "flex cursor-default items-center justify-center py-1",
);
