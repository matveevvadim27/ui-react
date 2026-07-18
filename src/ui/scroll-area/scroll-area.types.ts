import type { ComponentPropsWithoutRef } from "react";
import type * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

export type ScrollAreaProps = ComponentPropsWithoutRef<
typeof ScrollAreaPrimitive.Root
>;
export type ScrollBarProps = ComponentPropsWithoutRef<
typeof ScrollAreaPrimitive.ScrollAreaScrollbar
>;