import type { ComponentPropsWithoutRef } from "react";
import type { VariantProps } from "class-variance-authority";
import type * as MenubarPrimitive from "@radix-ui/react-menubar";
import type { menubarItemVariants } from "./menubar.variants";

export type MenubarProps = ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>;
export type MenubarTriggerProps = ComponentPropsWithoutRef<
  typeof MenubarPrimitive.Trigger
>;
export type MenubarContentProps = ComponentPropsWithoutRef<
  typeof MenubarPrimitive.Content
>;
export type MenubarItemProps = ComponentPropsWithoutRef<
  typeof MenubarPrimitive.Item
> &
  VariantProps<typeof menubarItemVariants> & { inset?: boolean };
export type MenubarCheckboxItemProps = ComponentPropsWithoutRef<
  typeof MenubarPrimitive.CheckboxItem
>;
export type MenubarRadioItemProps = ComponentPropsWithoutRef<
  typeof MenubarPrimitive.RadioItem
>;
export type MenubarLabelProps = ComponentPropsWithoutRef<
  typeof MenubarPrimitive.Label
> & { inset?: boolean };
export type MenubarSeparatorProps = ComponentPropsWithoutRef<
  typeof MenubarPrimitive.Separator
>;
export type MenubarSubContentProps = ComponentPropsWithoutRef<
  typeof MenubarPrimitive.SubContent
>;
export type MenubarSubTriggerProps = ComponentPropsWithoutRef<
  typeof MenubarPrimitive.SubTrigger
> & { inset?: boolean };