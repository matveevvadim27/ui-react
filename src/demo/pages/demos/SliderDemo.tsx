import { useState } from "react";
import { Slider } from "@/ui/slider";
import { ComponentPreview } from "@/demo/components/ComponentPreview";

export function SliderDemo() {
  const [volume, setVolume] = useState([50]);
  const [priceRange, setPriceRange] = useState([20, 80]);

  return (
    <div className="space-y-10">
      {/* Базовый пример */}
      <section>
        <h2 className="mb-4 text-lg font-medium">Basic</h2>
        <p className="text-muted-foreground mb-3 text-sm">
          Дойди до ползунка клавиатурой (Tab), дальше стрелками ←/→ можно менять значение
          на step — работает без единой строчки твоего кода.
        </p>
        <ComponentPreview
          className="flex-col items-start"
          code={`<Slider defaultValue={[50]} max={100} step={1} className="w-64" />`}
        >
          <Slider defaultValue={[50]} max={100} step={1} className="w-64" />
        </ComponentPreview>
      </section>

      {/* Controlled с выводом значения */}
      <section>
        <h2 className="mb-4 text-lg font-medium">Controlled (volume)</h2>
        <p className="text-muted-foreground mb-3 text-sm">
          Значение: <strong>{volume[0]}%</strong>
        </p>
        <ComponentPreview className="flex-col items-start">
          <Slider
            value={volume}
            onValueChange={setVolume}
            max={100}
            step={1}
            className="w-64"
          />
        </ComponentPreview>
      </section>

      {/* Range slider — два ползунка */}
      <section>
        <h2 className="mb-4 text-lg font-medium">Range (price filter)</h2>
        <p className="text-muted-foreground mb-3 text-sm">
          Диапазон:{" "}
          <strong>
            ${priceRange[0]} — ${priceRange[1]}
          </strong>
          . Два значения в массиве автоматически дают два ползунка.
        </p>
        <ComponentPreview
          className="flex-col items-start"
          code={`<Slider defaultValue={[20, 80]} max={100} step={1} className="w-64" />`}
        >
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            max={100}
            step={1}
            className="w-64"
          />
        </ComponentPreview>
      </section>

      {/* Шаг (step) */}
      <section>
        <h2 className="mb-4 text-lg font-medium">Step</h2>
        <p className="text-muted-foreground mb-3 text-sm">
          Значение округляется до ближайшего кратного step — здесь шаг 25, возможны только
          0, 25, 50, 75, 100.
        </p>
        <ComponentPreview className="flex-col items-start">
          <Slider defaultValue={[50]} max={100} step={25} className="w-64" />
        </ComponentPreview>
      </section>

      {/* Disabled */}
      <section>
        <h2 className="mb-4 text-lg font-medium">Disabled</h2>
        <ComponentPreview className="flex-col items-start">
          <Slider defaultValue={[40]} max={100} step={1} disabled className="w-64" />
        </ComponentPreview>
      </section>
    </div>
  );
}
