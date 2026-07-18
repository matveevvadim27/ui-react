import type { ComponentPropsWithoutRef, HTMLAttributes } from "react";
import type * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";

export type AlertDialogContentProps = ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Content
>;
export type AlertDialogHeaderProps = HTMLAttributes<HTMLDivElement>;
export type AlertDialogFooterProps = HTMLAttributes<HTMLDivElement>;
export type AlertDialogTitleProps = ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Title
>;
export type AlertDialogDescriptionProps = ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Description
>;
export type AlertDialogActionProps = ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Action
>;
export type AlertDialogCancelProps = ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Cancel
>;
