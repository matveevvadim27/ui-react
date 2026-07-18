import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cn } from "@/utils/cn";
import {
  avatarRootVariants,
  avatarImageVariants,
  avatarFallbackVariants,
} from "./avatar.variants";
import type { AvatarProps, AvatarImageProps, AvatarFallbackProps } from "./avatar.types";

export function Avatar({ className, size, ...props }: AvatarProps) {
  return (
    <AvatarPrimitive.Root
      className={cn(avatarRootVariants({ size }), className)}
      {...props}
    />
  );
}

export function AvatarImage({ className, ...props }: AvatarImageProps) {
  return (
    <AvatarPrimitive.Image className={cn(avatarImageVariants(), className)} {...props} />
  );
}

export function AvatarFallback({
  className,
  delayMs = 400,
  ...props
}: AvatarFallbackProps) {
  return (
    <AvatarPrimitive.Fallback
      className={cn(avatarFallbackVariants(), className)}
      delayMs={delayMs}
      {...props}
    />
  );
}
