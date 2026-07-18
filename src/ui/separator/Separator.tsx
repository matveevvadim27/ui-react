import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { cn } from "@/utils/cn";
import { separatorVariants } from "./separator.variants";
import type { SeparatorProps } from "./separator.types";

export function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: SeparatorProps) {
  return (
    <SeparatorPrimitive.Root
      orientation={orientation}
      decorative={decorative}
      className={cn(separatorVariants({ orientation }), className)}
      {...props}
    />
  );
}
