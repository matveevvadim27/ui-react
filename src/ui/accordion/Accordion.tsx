import { ChevronDown } from "lucide-react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cn } from "@/utils/cn";
import {
  accordionItemVariants,
  accordionTriggerVariants,
  accordionContentVariants,
} from "./accordion.variants";
import type {
  AccordionItemProps,
  AccordionTriggerProps,
  AccordionContentProps,
} from "./accordion.types";

export const Accordion = AccordionPrimitive.Root;

export function AccordionItem({ className, ...props }: AccordionItemProps) {
  return (
    <AccordionPrimitive.Item
      className={cn(accordionItemVariants(), className)}
      {...props}
    />
  );
}

export function AccordionTrigger({
                                   className,
                                   children,
                                   ...props
                                 }: AccordionTriggerProps) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        className={cn(accordionTriggerVariants(), className)}
        {...props}
      >
        {children}
        <ChevronDown />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

export function AccordionContent({
                                   className,
                                   children,
                                   ...props
                                 }: AccordionContentProps) {
  return (
    <AccordionPrimitive.Content
      className={cn(accordionContentVariants(), className)}
      {...props}
    >
      <div className="pt-0 pb-4">{children}</div>
    </AccordionPrimitive.Content>
  );
}
