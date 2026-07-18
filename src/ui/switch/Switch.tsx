import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "@/utils/cn";
import { switchRootVariants, switchThumbVariants } from "./switch.variants";
import type { SwitchProps } from "./switch.types";

export function Switch({ className, ...props }: SwitchProps) {
  return (
    <SwitchPrimitive.Root className={cn(switchRootVariants(), className)} {...props}>
      <SwitchPrimitive.Thumb className={switchThumbVariants()} />
    </SwitchPrimitive.Root>
  );
}
