import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";
import type { AspectRatioProps } from "./aspect-ratio.types";

export function AspectRatio(props: AspectRatioProps) {
  return <AspectRatioPrimitive.Root {...props} />;
}
