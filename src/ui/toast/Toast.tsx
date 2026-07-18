import { X } from "lucide-react";
import * as ToastPrimitive from "@radix-ui/react-toast";
import { cn } from "@/utils/cn";
import {
  toastViewportVariants,
  toastVariants,
  toastActionVariants,
  toastCloseVariants,
} from "./toast.variants";
import type { ToastProps } from "./toast.types";
import type { ComponentPropsWithoutRef } from "react";

export const ToastProvider = ToastPrimitive.Provider;

export function ToastViewport({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof ToastPrimitive.Viewport>) {
  return (
    <ToastPrimitive.Viewport
      className={cn(toastViewportVariants(), className)}
      {...props}
    />
  );
}

export function Toast({ className, variant, ...props }: ToastProps) {
  return (
    <ToastPrimitive.Root
      className={cn(toastVariants({ variant }), "group", className)}
      {...props}
    />
  );
}

export function ToastTitle({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof ToastPrimitive.Title>) {
  return (
    <ToastPrimitive.Title className={cn("text-sm font-semibold", className)} {...props} />
  );
}

export function ToastDescription({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof ToastPrimitive.Description>) {
  return (
    <ToastPrimitive.Description
      className={cn("text-sm opacity-90", className)}
      {...props}
    />
  );
}

export function ToastAction({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof ToastPrimitive.Action>) {
  return (
    <ToastPrimitive.Action className={cn(toastActionVariants(), className)} {...props} />
  );
}

export function ToastClose({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof ToastPrimitive.Close>) {
  return (
    <ToastPrimitive.Close
      className={cn(toastCloseVariants(), className)}
      toast-close=""
      {...props}
    >
      <X className="size-4" />
    </ToastPrimitive.Close>
  );
}
