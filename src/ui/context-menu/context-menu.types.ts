import type { ComponentPropsWithoutRef } from "react";
import type { VariantProps } from "class-variance-authority";
import type * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import type { contextMenuItemVariants } from "./context-menu.variants";

export type ContextMenuContentProps = ComponentPropsWithoutRef<
  typeof ContextMenuPrimitive.Content
>;
export type ContextMenuItemProps = ComponentPropsWithoutRef<
  typeof ContextMenuPrimitive.Item
> &
  VariantProps<typeof contextMenuItemVariants> & { inset?: boolean };
export type ContextMenuCheckboxItemProps = ComponentPropsWithoutRef<
  typeof ContextMenuPrimitive.CheckboxItem
>;
export type ContextMenuRadioItemProps = ComponentPropsWithoutRef<
  typeof ContextMenuPrimitive.RadioItem
>;
export type ContextMenuLabelProps = ComponentPropsWithoutRef<
  typeof ContextMenuPrimitive.Label
> & { inset?: boolean };
export type ContextMenuSeparatorProps = ComponentPropsWithoutRef<
  typeof ContextMenuPrimitive.Separator
>;
export type ContextMenuSubContentProps = ComponentPropsWithoutRef<
  typeof ContextMenuPrimitive.SubContent
>;
export type ContextMenuSubTriggerProps = ComponentPropsWithoutRef<
  typeof ContextMenuPrimitive.SubTrigger
> & { inset?: boolean };
