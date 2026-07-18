import type { ComponentPropsWithoutRef } from "react";
import type { VariantProps } from "class-variance-authority";
import type * as AvatarPrimitive from "@radix-ui/react-avatar";
import type { avatarRootVariants } from "./avatar.variants";

export type AvatarProps = ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> &
  VariantProps<typeof avatarRootVariants>;

export type AvatarImageProps = ComponentPropsWithoutRef<typeof AvatarPrimitive.Image
>;

export type AvatarFallbackProps = ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback
>;