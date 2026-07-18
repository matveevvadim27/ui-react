import { Check, ChevronRight, Circle } from "lucide-react";
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { cn } from "@/utils/cn";
import {
  menubarRootVariants,
  menubarTriggerVariants,
  menubarContentVariants,
  menubarItemVariants,
  menubarLabelVariants,
  menubarSeparatorVariants,
  menubarShortcutVariants,
} from "./menubar.variants";
import type {
  MenubarProps,
  MenubarTriggerProps,
  MenubarContentProps,
  MenubarItemProps,
  MenubarCheckboxItemProps,
  MenubarRadioItemProps,
  MenubarLabelProps,
  MenubarSeparatorProps,
  MenubarSubContentProps,
  MenubarSubTriggerProps,
} from "./menubar.types";

export const MenubarMenu = MenubarPrimitive.Menu;
export const MenubarGroup = MenubarPrimitive.Group;
export const MenubarRadioGroup = MenubarPrimitive.RadioGroup;
export const MenubarSub = MenubarPrimitive.Sub;

export function Menubar({ className, ...props }: MenubarProps) {
  return (
    <MenubarPrimitive.Root className={cn(menubarRootVariants(), className)} {...props} />
  );
}

export function MenubarTrigger({ className, ...props }: MenubarTriggerProps) {
  return (
    <MenubarPrimitive.Trigger
      className={cn(menubarTriggerVariants(), className)}
      {...props}
    />
  );
}

export function MenubarContent({
  className,
  align = "start",
  sideOffset = 4,
  ...props
}: MenubarContentProps) {
  return (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.Content
        align={align}
        sideOffset={sideOffset}
        className={cn(menubarContentVariants(), className)}
        {...props}
      />
    </MenubarPrimitive.Portal>
  );
}

export function MenubarItem({ className, inset, variant, ...props }: MenubarItemProps) {
  return (
    <MenubarPrimitive.Item
      className={cn(menubarItemVariants({ variant }), inset && "pl-8", className)}
      {...props}
    />
  );
}

export function MenubarCheckboxItem({
  className,
  children,
  ...props
}: MenubarCheckboxItemProps) {
  return (
    <MenubarPrimitive.CheckboxItem
      className={cn(menubarItemVariants(), "pl-8", className)}
      {...props}
    >
      <span className="absolute left-2 flex size-4 items-center justify-center">
        <MenubarPrimitive.ItemIndicator>
          <Check className="size-4" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.CheckboxItem>
  );
}

export function MenubarRadioItem({
  className,
  children,
  ...props
}: MenubarRadioItemProps) {
  return (
    <MenubarPrimitive.RadioItem
      className={cn(menubarItemVariants(), "pl-8", className)}
      {...props}
    >
      <span className="absolute left-2 flex size-4 items-center justify-center">
        <MenubarPrimitive.ItemIndicator>
          <Circle className="size-2 fill-current" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.RadioItem>
  );
}

export function MenubarLabel({ className, inset, ...props }: MenubarLabelProps) {
  return (
    <MenubarPrimitive.Label
      className={cn(menubarLabelVariants(), inset && "pl-8", className)}
      {...props}
    />
  );
}

export function MenubarSeparator({ className, ...props }: MenubarSeparatorProps) {
  return (
    <MenubarPrimitive.Separator
      className={cn(menubarSeparatorVariants(), className)}
      {...props}
    />
  );
}

export function MenubarShortcut({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return <span className={cn(menubarShortcutVariants(), className)} {...props} />;
}

export function MenubarSubTrigger({
  className,
  inset,
  children,
  ...props
}: MenubarSubTriggerProps) {
  return (
    <MenubarPrimitive.SubTrigger
      className={cn(menubarItemVariants(), inset && "pl-8", className)}
      {...props}
    >
      {children}
      <ChevronRight className="ml-auto size-4" />
    </MenubarPrimitive.SubTrigger>
  );
}

export function MenubarSubContent({ className, ...props }: MenubarSubContentProps) {
  return (
    <MenubarPrimitive.SubContent
      className={cn(menubarContentVariants(), className)}
      {...props}
    />
  );
}
