import { cva } from "class-variance-authority";

export const menubarRootVariants = cva(
  "flex h-10 items-center gap-1 rounded-md border border-border bg-background p-1",
);

export const menubarTriggerVariants = cva([
  "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none",
  "data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
  "data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground",
]);

export const menubarContentVariants = cva([
  "z-50 min-w-[10rem] overflow-hidden rounded-md border border-border bg-background p-1 shadow-md",
  "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
  "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
]);

export const menubarItemVariants = cva(
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

export const menubarLabelVariants = cva(
  "px-2 py-1.5 text-xs font-medium text-muted-foreground",
);

export const menubarSeparatorVariants = cva("-mx-1 my-1 h-px bg-border");

export const menubarShortcutVariants = cva(
  "ml-auto text-xs tracking-widest text-muted-foreground",
);
