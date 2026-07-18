import type { ComponentPropsWithoutRef } from "react";
import type * as CollapsiblePrimitive from "@radix-ui/react-collapsible";

export type CollapsibleProps = ComponentPropsWithoutRef<
  typeof CollapsiblePrimitive.Root
>;
export type CollapsibleTriggerProps = ComponentPropsWithoutRef<
  typeof CollapsiblePrimitive.Trigger
>;
export type CollapsibleContentProps = ComponentPropsWithoutRef<
  typeof CollapsiblePrimitive.Content
>;