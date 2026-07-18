import { cva } from "class-variance-authority";

export const dropdownMenuContentVariants = cva([
  "z-50 min-w-[10rem] overflow-hidden rounded-md border border-border bg-background p-1 shadow-md",
  "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
  "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
  "data-[side=bottom]:slide-in-from-top-2",
  "data-[side=top]:slide-in-from-bottom-2",
  "data-[side=left]:slide-in-from-right-2",
  "data-[side=right]:slide-in-from-left-2",
]);

export const dropdownMenuItemVariants = cva(
  [
    // base
    "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none",
    "[&_svg]:size-4 [&_svg]:shrink-0",
    // disabled
    "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
  ],
  {
    variants: {
      variant: {
        default: [
          "data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground",
        ],
        destructive: [
          "text-destructive",
          "data-[highlighted]:bg-destructive data-[highlighted]:text-destructive-foreground",
          // иконки внутри тоже красим в цвет варианта, а не оставляем нейтральными
          "[&_svg]:text-destructive data-[highlighted]:[&_svg]:text-destructive-foreground",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export const dropdownMenuLabelVariants = cva(
  "px-2 py-1.5 text-xs font-medium text-muted-foreground",
);

export const dropdownMenuSeparatorVariants = cva("-mx-1 my-1 h-px bg-border");

export const dropdownMenuShortcutVariants = cva(
  "ml-auto text-xs tracking-widest text-muted-foreground",
);
