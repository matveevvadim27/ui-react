import type { ComponentPropsWithoutRef, ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";
import type * as ToastPrimitive from "@radix-ui/react-toast";
import type { toastVariants } from "./toast.variants";

export type ToastProps = ComponentPropsWithoutRef<typeof ToastPrimitive.Root> &
  VariantProps<typeof toastVariants>;

export type ToastActionElement = React.ReactElement<ComponentPropsWithoutRef<typeof ToastPrimitive.Action>>;

export interface ToasterToast extends ToastProps {
  id: string;
  title?: ReactNode;
  description?: ReactNode;
  action?: ToastActionElement;
}