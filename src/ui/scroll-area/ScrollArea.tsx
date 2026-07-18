import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import { cn } from "@/utils/cn";
import {
  scrollAreaRootVariants,
  scrollAreaViewportVariants,
  scrollAreaScrollbarVariants,
  scrollAreaThumbVariants,
} from "./scroll-area.variants";
import type { ScrollAreaProps, ScrollBarProps } from "./scroll-area.types";

export function ScrollArea({ className, children, ...props }: ScrollAreaProps) {
  return (
    <ScrollAreaPrimitive.Root
      className={cn(scrollAreaRootVariants(), className)}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport className={scrollAreaViewportVariants()}>
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  );
}

export function ScrollBar({
  className,
  orientation = "vertical",
  ...props
}: ScrollBarProps) {
  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      orientation={orientation}
      className={cn(scrollAreaScrollbarVariants({ orientation }), className)}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb className={scrollAreaThumbVariants()} />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  );
}
