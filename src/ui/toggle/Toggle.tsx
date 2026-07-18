import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cn } from "@/utils/cn";
import { toggleVariants } from "./toggle.variants";
import type { ToggleProps } from "./toggle.types";

export function Toggle({ className, variant, size, ...props }: ToggleProps) {
  return (
    <TogglePrimitive.Root
      className={cn(toggleVariants({ variant, size }), className)}
      {...props}
    />
  );
}
