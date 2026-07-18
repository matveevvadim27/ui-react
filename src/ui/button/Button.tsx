import { buttonVariants, type ButtonProps } from "@/ui/button";

import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/utils";

export function Button(props: ButtonProps) {
  const {
    className,
    variant,
    size,
    asChild = false,
    isLoading = false,
    disabled,
    children,
    ref,
    ...rest
  } = props;

  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      disabled={disabled ?? isLoading}
      aria-busy={isLoading}
      {...rest}
    >
      {children}
    </Comp>
  );
}

Button.displayName = "Button";
