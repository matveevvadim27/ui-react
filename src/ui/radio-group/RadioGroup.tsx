import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cn } from "@/utils/cn";
import {
  radioGroupRootVariants,
  radioGroupItemVariants,
  radioGroupIndicatorVariants,
} from "./radio-group.variants";
import type { RadioGroupProps, RadioGroupItemProps } from "./radio-group.types";

export function RadioGroup({ className, ...props }: RadioGroupProps) {
  return (
    <RadioGroupPrimitive.Root
      className={cn(radioGroupRootVariants(), className)}
      {...props}
    />
  );
}

export function RadioGroupItem({ className, ...props }: RadioGroupItemProps) {
  return (
    <RadioGroupPrimitive.Item
      className={cn(radioGroupItemVariants(), className)}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className={radioGroupIndicatorVariants()} />
    </RadioGroupPrimitive.Item>
  );
}
