import * as LabelPrimitive from "@radix-ui/react-label";
import { cn } from "@/utils/cn";
import { labelVariants } from "./label.variants";
import type { LabelProps } from "./label.types";

export function Label({ className, ...props }: LabelProps) {
  return <LabelPrimitive.Root className={cn(labelVariants(), className)} {...props} />;
}
