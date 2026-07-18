import * as PopoverPrimitive from "@radix-ui/react-popover";
import { cn } from "@/utils/cn";
import { popoverContentVariants } from "./popover.variants";
import type { PopoverContentProps } from "./popover.types";

export const Popover = PopoverPrimitive.Root;
export const PopoverTrigger = PopoverPrimitive.Trigger;
export const PopoverAnchor = PopoverPrimitive.Anchor;
export const PopoverClose = PopoverPrimitive.Close;

export function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}: PopoverContentProps) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        align={align}
        sideOffset={sideOffset}
        className={cn(popoverContentVariants(), className)}
        {...props}
      />
    </PopoverPrimitive.Portal>
  );
}
