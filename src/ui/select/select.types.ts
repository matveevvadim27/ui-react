import type { ComponentPropsWithoutRef } from "react";
import type * as SelectPrimitive from "@radix-ui/react-select";

export type SelectProps = ComponentPropsWithoutRef<typeof SelectPrimitive.Root>;
export type SelectTriggerProps = ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger >;
export type SelectContentProps = ComponentPropsWithoutRef<typeof SelectPrimitive.Content >;
export type SelectItemProps = ComponentPropsWithoutRef<typeof SelectPrimitive.Item>;
export type SelectLabelProps = ComponentPropsWithoutRef<typeof SelectPrimitive.Label >;
export type SelectSeparatorProps = ComponentPropsWithoutRef<typeof SelectPrimitive.Separator >;
export type SelectGroupProps = ComponentPropsWithoutRef<typeof SelectPrimitive.Group >;