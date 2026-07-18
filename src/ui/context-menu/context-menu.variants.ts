import { cva } from "class-variance-authority";

export const contextMenuContentVariants = cva([
  "z-50 min-w-[10rem] overflow-hidden rounded-md border border-border bg-background p-1 shadow-md",
  "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
  "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
]);

export const contextMenuItemVariants = cva(
  [
    "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none",
    "[&_svg]:size-4 [&_svg]:shrink-0",
    "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
  ],
  {
    variants: {
      variant: {
        default: "data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground",
        destructive: [
          "text-destructive",
          "data-[highlighted]:bg-destructive data-[highlighted]:text-destructive-foreground",
        ],
      },
    },
    defaultVariants: { variant: "default" },
  },
);

export const contextMenuLabelVariants = cva(
  "px-2 py-1.5 text-xs font-medium text-muted-foreground",
);

export const contextMenuSeparatorVariants = cva("-mx-1 my-1 h-px bg-border");

export const contextMenuShortcutVariants = cva(
  "ml-auto text-xs tracking-widest text-muted-foreground",
);
