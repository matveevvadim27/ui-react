import type { ComponentPropsWithoutRef } from "react";
import type { VariantProps } from "class-variance-authority";
import type * as TogglePrimitive from "@radix-ui/react-toggle";
import type { toggleVariants } from "./toggle.variants";

export type ToggleProps = ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
  VariantProps<typeof toggleVariants>;
