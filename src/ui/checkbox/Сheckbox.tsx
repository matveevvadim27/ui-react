import { Check, Minus } from "lucide-react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cn } from "@/utils/cn";
import { checkboxVariants, checkboxIndicatorVariants } from "./checkbox.variants";
import type { CheckboxProps } from "./checkbox.types";

export function Checkbox({ className, ...props }: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root className={cn(checkboxVariants(), className)} {...props}>
      <CheckboxPrimitive.Indicator className={checkboxIndicatorVariants()}>
        {props.checked === "indeterminate" ? (
          <Minus className="size-3" />
        ) : (
          <Check className="size-3" />
        )}
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}
