import type { ComponentPropsWithoutRef } from "react";
import type * as HoverCardPrimitive from "@radix-ui/react-hover-card";

export type HoverCardProps = ComponentPropsWithoutRef<
typeof HoverCardPrimitive.Root
>;
export type HoverCardContentProps = ComponentPropsWithoutRef<
typeof HoverCardPrimitive.Content
>;