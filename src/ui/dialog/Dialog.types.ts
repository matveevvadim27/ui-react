import type { ComponentPropsWithoutRef, HTMLAttributes } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

export type DialogContentProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Content>;
export type DialogHeaderProps = HTMLAttributes<HTMLDivElement>;
export type DialogFooterProps = HTMLAttributes<HTMLDivElement>;
export type DialogTitleProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Title>;
export type DialogDescriptionProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Description>;