import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import { cn } from "@/utils/cn";
import { hoverCardContentVariants } from "./hover-card.variants";
import type { HoverCardContentProps } from "./hover-card.types";

export const HoverCard = HoverCardPrimitive.Root;
export const HoverCardTrigger = HoverCardPrimitive.Trigger;

export function HoverCardContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}: HoverCardContentProps) {
  return (
    <HoverCardPrimitive.Portal>
      <HoverCardPrimitive.Content
        align={align}
        sideOffset={sideOffset}
        className={cn(hoverCardContentVariants(), className)}
        {...props}
      />
    </HoverCardPrimitive.Portal>
  );
}
