import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "@/utils/cn";
import { tooltipContentVariants, tooltipArrowVariants } from "./Tooltip.variants";
import type { TooltipProps } from "./Tooltip.types";

export function Tooltip(props: TooltipProps) {
  const {
    children,
    content,
    side = "top",
    align = "center",
    delayDuration = 300,
    showArrow = true,
    open,
    onOpenChange,
    className,
  } = props;

  return (
    <TooltipPrimitive.Root
      delayDuration={delayDuration}
      open={open}
      onOpenChange={onOpenChange}
    >
      <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
      <TooltipPrimitive.Portal>
        <TooltipPrimitive.Content
          side={side}
          align={align}
          sideOffset={6}
          className={cn(tooltipContentVariants(), className)}
        >
          {content}
          {showArrow && <TooltipPrimitive.Arrow className={tooltipArrowVariants()} />}
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  );
}

export const TooltipProvider = TooltipPrimitive.Provider;
