import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/utils/cn";
import { progressRootVariants, progressIndicatorVariants } from "./progress.variants";
import type { ProgressProps } from "./progress.types";

export function Progress({ className, value, max = 100, ...props }: ProgressProps) {
  const percentage = value != null ? Math.min(100, (value / max) * 100) : 0;

  return (
    <ProgressPrimitive.Root
      className={cn(progressRootVariants(), className)}
      value={value}
      max={max}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className={progressIndicatorVariants()}
        style={{ transform: `translateX(-${100 - percentage}%)` }}
      />
    </ProgressPrimitive.Root>
  );
}
