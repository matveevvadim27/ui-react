import { Check, ChevronRight, Circle } from "lucide-react";
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { cn } from "@/utils/cn";
import {
  contextMenuContentVariants,
  contextMenuItemVariants,
  contextMenuLabelVariants,
  contextMenuSeparatorVariants,
  contextMenuShortcutVariants,
} from "./context-menu.variants";
import type {
  ContextMenuContentProps,
  ContextMenuItemProps,
  ContextMenuCheckboxItemProps,
  ContextMenuRadioItemProps,
  ContextMenuLabelProps,
  ContextMenuSeparatorProps,
  ContextMenuSubContentProps,
  ContextMenuSubTriggerProps,
} from "./context-menu.types";

export const ContextMenu = ContextMenuPrimitive.Root;
export const ContextMenuTrigger = ContextMenuPrimitive.Trigger;
export const ContextMenuGroup = ContextMenuPrimitive.Group;
export const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;
export const ContextMenuSub = ContextMenuPrimitive.Sub;

export function ContextMenuContent({ className, ...props }: ContextMenuContentProps) {
  return (
    <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.Content
        className={cn(contextMenuContentVariants(), className)}
        {...props}
      />
    </ContextMenuPrimitive.Portal>
  );
}

export function ContextMenuItem({
  className,
  inset,
  variant,
  ...props
}: ContextMenuItemProps) {
  return (
    <ContextMenuPrimitive.Item
      className={cn(contextMenuItemVariants({ variant }), inset && "pl-8", className)}
      {...props}
    />
  );
}

export function ContextMenuCheckboxItem({
  className,
  children,
  ...props
}: ContextMenuCheckboxItemProps) {
  return (
    <ContextMenuPrimitive.CheckboxItem
      className={cn(contextMenuItemVariants(), "pl-8", className)}
      {...props}
    >
      <span className="absolute left-2 flex size-4 items-center justify-center">
        <ContextMenuPrimitive.ItemIndicator>
          <Check className="size-4" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.CheckboxItem>
  );
}

export function ContextMenuRadioItem({
  className,
  children,
  ...props
}: ContextMenuRadioItemProps) {
  return (
    <ContextMenuPrimitive.RadioItem
      className={cn(contextMenuItemVariants(), "pl-8", className)}
      {...props}
    >
      <span className="absolute left-2 flex size-4 items-center justify-center">
        <ContextMenuPrimitive.ItemIndicator>
          <Circle className="size-2 fill-current" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.RadioItem>
  );
}

export function ContextMenuLabel({ className, inset, ...props }: ContextMenuLabelProps) {
  return (
    <ContextMenuPrimitive.Label
      className={cn(contextMenuLabelVariants(), inset && "pl-8", className)}
      {...props}
    />
  );
}

export function ContextMenuSeparator({ className, ...props }: ContextMenuSeparatorProps) {
  return (
    <ContextMenuPrimitive.Separator
      className={cn(contextMenuSeparatorVariants(), className)}
      {...props}
    />
  );
}

export function ContextMenuShortcut({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return <span className={cn(contextMenuShortcutVariants(), className)} {...props} />;
}

export function ContextMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: ContextMenuSubTriggerProps) {
  return (
    <ContextMenuPrimitive.SubTrigger
      className={cn(contextMenuItemVariants(), inset && "pl-8", className)}
      {...props}
    >
      {children}
      <ChevronRight className="ml-auto size-4" />
    </ContextMenuPrimitive.SubTrigger>
  );
}

export function ContextMenuSubContent({
  className,
  ...props
}: ContextMenuSubContentProps) {
  return (
    <ContextMenuPrimitive.SubContent
      className={cn(contextMenuContentVariants(), className)}
      {...props}
    />
  );
}
