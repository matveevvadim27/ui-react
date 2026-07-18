import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  [
    // base
    "inline-flex items-center justify-center gap-2 whitespace-nowrap",
    "rounded-md text-sm font-medium",
    "duration-200 transition-all",
    // hover
    "hover:cursor-pointer",
    // disabled
    "disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none",
    // icons
    "[&_svg]:size-4 [&_svg]:shrink-0",
    // focus-visible
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    // active
    "active:scale-[0.98]",
  ],
  {
    variants: {
      variant: {
        primary: [
          // base
          "bg-primary text-primary-foreground shadow-sm",
          // hover
          "hover:bg-primary-hover hover:text-primary-foreground-hover hover:shadow-md",
          // active
          "active:bg-primary-active active:shadow-none",
        ],
        secondary: [
          // base
          "bg-secondary text-secondary-foreground shadow-sm",
          // hover
          "hover:bg-secondary-hover hover:text-secondary-foreground-hover hover:shadow-md",
          // active
          "active:bg-secondary-active active:shadow-none",
        ],
        outline: [
          // base
          "border border-input bg-background",
          // hover
          "hover:bg-accent hover:text-accent-foreground",
          // active
          "active:bg-accent-active",
        ],
        ghost: [
          // hover
          "hover:bg-accent hover:text-accent-foreground",
          // active
          "active:bg-accent-active",
        ],
        destructive: [
          // base
          "bg-destructive text-destructive-foreground shadow-sm",
          // hover
          "hover:bg-destructive-hover hover:text-destructive-foreground-hover hover:shadow-md",
          // active
          "active:bg-destructive-active active:shadow-none",
          // focus-visible
          "focus-visible:ring-destructive",
        ],
        link: [
          // base
          "text-primary underline-offset-4",
          // hover
          "hover:underline",
        ],
      },
      size: {
        xs: "h-7 px-2 text-xs",
        sm: "h-8 px-3",
        md: "h-10 px-4",
        lg: "h-11 px-6",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);
