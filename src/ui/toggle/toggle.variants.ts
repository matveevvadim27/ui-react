import { cva } from "class-variance-authority";

export const toggleVariants = cva(
  [
    // base
    "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium",
    "transition-colors",
    "[&_svg]:size-4 [&_svg]:shrink-0",
    // hover — только для невыбранного состояния, иначе перебивает активный цвет
    "hover:bg-muted hover:text-muted-foreground",
    // focus-visible
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    // disabled
    "disabled:pointer-events-none disabled:opacity-50",
    // pressed — Radix ставит data-state="on"|"off", а не "checked"/"unchecked"
    "data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
  ],
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline:
          "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        sm: "h-8 px-2",
        md: "h-10 px-3",
        lg: "h-11 px-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);
