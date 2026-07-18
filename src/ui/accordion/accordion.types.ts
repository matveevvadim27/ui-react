import type { ComponentPropsWithoutRef } from "react";
import type * as AccordionPrimitive from "@radix-ui/react-accordion";

export type AccordionSingleProps = ComponentPropsWithoutRef<typeof AccordionPrimitive.Root> & { type: "single" };
export type AccordionMultipleProps = ComponentPropsWithoutRef<typeof AccordionPrimitive.Root> & { type: "multiple" };
export type AccordionItemProps = ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>;
export type AccordionTriggerProps = ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>;
export type AccordionContentProps = ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>;