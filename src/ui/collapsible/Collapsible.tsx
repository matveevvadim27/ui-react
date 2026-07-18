import { ChevronDown } from "lucide-react";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { cn } from "@/utils/cn";
import {
  collapsibleTriggerVariants,
  collapsibleContentVariants,
} from "./collapsible.variants";
import type {
  CollapsibleTriggerProps,
  CollapsibleContentProps,
} from "./collapsible.types";

export const Collapsible = CollapsiblePrimitive.Root;

export function CollapsibleTrigger({
  className,
  children,
  asChild,
  ...props
}: CollapsibleTriggerProps) {
  if (asChild) {
    return (
      <CollapsiblePrimitive.Trigger asChild className={className} {...props}>
        {children}
      </CollapsiblePrimitive.Trigger>
    );
  }

  return (
    <CollapsiblePrimitive.Trigger
      className={cn(collapsibleTriggerVariants(), className)}
      {...props}
    >
      {children}
      <ChevronDown />
    </CollapsiblePrimitive.Trigger>
  );
}

export function CollapsibleContent({
  className,
  children,
  ...props
}: CollapsibleContentProps) {
  return (
    <CollapsiblePrimitive.Content
      className={cn(collapsibleContentVariants(), className)}
      {...props}
    >
      {children}
    </CollapsiblePrimitive.Content>
  );
}
