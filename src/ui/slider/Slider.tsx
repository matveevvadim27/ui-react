import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/utils/cn";
import {
  sliderRootVariants,
  sliderTrackVariants,
  sliderRangeVariants,
  sliderThumbVariants,
} from "./slider.variants";
import type { SliderProps } from "./slider.types";

export function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}: SliderProps) {
  // количество Thumb должно совпадать с количеством значений — важно для range-слайдеров
  const values = value ?? defaultValue ?? [min];

  return (
    <SliderPrimitive.Root
      className={cn(sliderRootVariants(), className)}
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      {...props}
    >
      <SliderPrimitive.Track className={sliderTrackVariants()}>
        <SliderPrimitive.Range className={sliderRangeVariants()} />
      </SliderPrimitive.Track>
      {values.map((_, index) => (
        <SliderPrimitive.Thumb key={index} className={sliderThumbVariants()} />
      ))}
    </SliderPrimitive.Root>
  );
}
