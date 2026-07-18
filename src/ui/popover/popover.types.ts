import type { ComponentPropsWithoutRef } from "react";
import type * as PopoverPrimitive from "@radix-ui/react-popover";

export type PopoverProps = ComponentPropsWithoutRef<typeof PopoverPrimitive.Root>;
export type PopoverContentProps = ComponentPropsWithoutRef<typeof PopoverPrimitive.Content >;