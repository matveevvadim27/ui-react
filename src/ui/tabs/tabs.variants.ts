import { cva } from "class-variance-authority";

export const tabsListVariants = cva([
  "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
]);

export const tabsTriggerVariants = cva([
  // base
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium",
  "transition-all",
  "[&_svg]:size-4 [&_svg]:shrink-0",
  // focus-visible — актуален, т.к. фокус может прийти со стрелок клавиатуры
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  // disabled
  "disabled:pointer-events-none disabled:opacity-50",
  // активный таб — управляется через data-state, не через :hover/:focus
  "data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
  "data-[state=inactive]:hover:text-foreground",
]);

export const tabsContentVariants = cva([
  "mt-4",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
]);
