import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/utils/cn";
import {
  tabsListVariants,
  tabsTriggerVariants,
  tabsContentVariants,
} from "./tabs.variants";
import type { TabsListProps, TabsTriggerProps, TabsContentProps } from "./tabs.types";

export const Tabs = TabsPrimitive.Root;

export function TabsList({ className, ...props }: TabsListProps) {
  return <TabsPrimitive.List className={cn(tabsListVariants(), className)} {...props} />;
}

export function TabsTrigger({ className, ...props }: TabsTriggerProps) {
  return (
    <TabsPrimitive.Trigger className={cn(tabsTriggerVariants(), className)} {...props} />
  );
}

export function TabsContent({ className, ...props }: TabsContentProps) {
  return (
    <TabsPrimitive.Content className={cn(tabsContentVariants(), className)} {...props} />
  );
}
