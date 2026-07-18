import { useState } from "react";
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Bell,
} from "lucide-react";
import { Toggle } from "@/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/ui/toggle-group";
import { ComponentPreview } from "@/demo/components/ComponentPreview";

export function ToggleDemo() {
  const [align, setAlign] = useState("left");
  const [marks, setMarks] = useState<string[]>(["bold"]);

  return (
    <div className="space-y-10">
      {/* Одиночный toggle */}
      <section>
        <h2 className="mb-4 text-lg font-medium">Basic</h2>
        <p className="text-muted-foreground mb-3 text-sm">
          Отдельная кнопка со своим состоянием вкл/выкл — data-state="on"/"off", не
          связана с другими элементами.
        </p>
        <ComponentPreview
          code={`<Toggle aria-label="Toggle bold">
  <Bold />
</Toggle>`}
        >
          <Toggle aria-label="Toggle bold" defaultPressed>
            <Bold />
          </Toggle>
          <Toggle aria-label="Toggle italic">
            <Italic />
          </Toggle>
          <Toggle aria-label="Toggle underline">
            <Underline />
          </Toggle>
        </ComponentPreview>
      </section>

      {/* Варианты и размеры */}
      <section>
        <h2 className="mb-4 text-lg font-medium">Variants & sizes</h2>
        <ComponentPreview className="flex-col items-start gap-4">
          <div className="flex items-center gap-2">
            <Toggle variant="default" aria-label="Notifications">
              <Bell />
            </Toggle>
            <Toggle variant="outline" aria-label="Notifications">
              <Bell />
            </Toggle>
          </div>
          <div className="flex items-center gap-2">
            <Toggle size="sm" aria-label="Small">
              <Bold />
            </Toggle>
            <Toggle size="md" aria-label="Medium">
              <Bold />
            </Toggle>
            <Toggle size="lg" aria-label="Large">
              <Bold />
            </Toggle>
          </div>
        </ComponentPreview>
      </section>

      {/* Toggle Group — single, как радио */}
      <section>
        <h2 className="mb-4 text-lg font-medium">Toggle Group — single (выравнивание)</h2>
        <p className="text-muted-foreground mb-3 text-sm">
          Выбрана: <strong>{align}</strong>. Только один вариант активен одновременно, как
          в radio group.
        </p>
        <ComponentPreview
          code={`<ToggleGroup type="single" value={align} onValueChange={setAlign} variant="outline">
  <ToggleGroupItem value="left" aria-label="По левому краю">
    <AlignLeft />
  </ToggleGroupItem>
  <ToggleGroupItem value="center" aria-label="По центру">
    <AlignCenter />
  </ToggleGroupItem>
  <ToggleGroupItem value="right" aria-label="По правому краю">
    <AlignRight />
  </ToggleGroupItem>
</ToggleGroup>`}
        >
          <ToggleGroup
            type="single"
            value={align}
            onValueChange={(value) => value && setAlign(value)}
            variant="outline"
          >
            <ToggleGroupItem value="left" aria-label="По левому краю">
              <AlignLeft />
            </ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="По центру">
              <AlignCenter />
            </ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="По правому краю">
              <AlignRight />
            </ToggleGroupItem>
          </ToggleGroup>
        </ComponentPreview>
      </section>

      {/* Toggle Group — multiple */}
      <section>
        <h2 className="mb-4 text-lg font-medium">
          Toggle Group — multiple (форматирование текста)
        </h2>
        <p className="text-muted-foreground mb-3 text-sm">
          Активны: <strong>{marks.length ? marks.join(", ") : "ничего"}</strong>. Можно
          включить несколько кнопок одновременно.
        </p>
        <ComponentPreview>
          <ToggleGroup type="multiple" value={marks} onValueChange={setMarks}>
            <ToggleGroupItem value="bold" aria-label="Жирный">
              <Bold />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Курсив">
              <Italic />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Подчёркнутый">
              <Underline />
            </ToggleGroupItem>
          </ToggleGroup>
        </ComponentPreview>
      </section>

      {/* Disabled */}
      <section>
        <h2 className="mb-4 text-lg font-medium">Disabled</h2>
        <ComponentPreview>
          <Toggle disabled aria-label="Недоступно">
            <Bold />
          </Toggle>
          <ToggleGroup type="single" disabled>
            <ToggleGroupItem value="a" aria-label="A">
              A
            </ToggleGroupItem>
            <ToggleGroupItem value="b" aria-label="B">
              B
            </ToggleGroupItem>
          </ToggleGroup>
        </ComponentPreview>
      </section>
    </div>
  );
}
