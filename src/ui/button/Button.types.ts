import type { ButtonHTMLAttributes, Ref } from "react";
import type { VariantProps } from "class-variance-authority";
import type { buttonVariants } from "./Button.variants";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
  ref?: Ref<HTMLButtonElement>
}
