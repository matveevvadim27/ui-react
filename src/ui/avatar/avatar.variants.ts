import { cva } from "class-variance-authority";

export const avatarRootVariants = cva(
  ["relative flex shrink-0 overflow-hidden rounded-full"],
  {
    variants: {
      size: {
        sm: "size-8",
        md: "size-10",
        lg: "size-14",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export const avatarImageVariants = cva("aspect-square size-full object-cover");

export const avatarFallbackVariants = cva(
  "flex size-full items-center justify-center rounded-full bg-muted text-sm font-medium text-muted-foreground",
);
