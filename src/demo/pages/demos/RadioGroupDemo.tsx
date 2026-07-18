import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/ui/radio-group";
import { ComponentPreview } from "@/demo/components/ComponentPreview";

export function RadioGroupDemo() {
  const [plan, setPlan] = useState("pro");

  return (
    <div className="space-y-10">
      {/* Базовая группа */}
      <section>
        <h2 className="mb-4 text-lg font-medium">Basic</h2>
        <p className="text-muted-foreground mb-3 text-sm">
          Дойди до группы клавиатурой (Tab), дальше переключайся стрелками ↑/↓ — работает
          та же логика roving tabindex, что и в Tabs.
        </p>
        <ComponentPreview
          className="items-start justify-start"
          code={`<RadioGroup defaultValue="comfortable">
  <div className="flex items-center gap-2">
    <RadioGroupItem value="default" id="r1" />
    <label htmlFor="r1" className="text-sm font-medium">Default</label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="comfortable" id="r2" />
    <label htmlFor="r2" className="text-sm font-medium">Comfortable</label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="compact" id="r3" />
    <label htmlFor="r3" className="text-sm font-medium">Compact</label>
  </div>
</RadioGroup>`}
        >
          <RadioGroup defaultValue="comfortable">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="default" id="r1" />
              <label htmlFor="r1" className="text-sm font-medium">
                Default
              </label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="comfortable" id="r2" />
              <label htmlFor="r2" className="text-sm font-medium">
                Comfortable
              </label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="compact" id="r3" />
              <label htmlFor="r3" className="text-sm font-medium">
                Compact
              </label>
            </div>
          </RadioGroup>
        </ComponentPreview>
      </section>

      {/* Disabled item */}
      <section>
        <h2 className="mb-4 text-lg font-medium">Disabled item</h2>
        <p className="text-muted-foreground mb-3 text-sm">
          Стрелки автоматически пропускают disabled-пункт при навигации.
        </p>
        <ComponentPreview className="items-start justify-start">
          <RadioGroup defaultValue="monthly">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="monthly" id="d1" />
              <label htmlFor="d1" className="text-sm font-medium">
                Ежемесячно
              </label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="yearly" id="d2" disabled />
              <label
                htmlFor="d2"
                className="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Ежегодно (недоступно)
              </label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="lifetime" id="d3" />
              <label htmlFor="d3" className="text-sm font-medium">
                Разово
              </label>
            </div>
          </RadioGroup>
        </ComponentPreview>
      </section>

      {/* Controlled — карточки с ценами, реалистичный кейс */}
      <section>
        <h2 className="mb-4 text-lg font-medium">Controlled (pricing plan)</h2>
        <p className="text-muted-foreground mb-3 text-sm">
          Выбранный план: <strong>{plan}</strong>
        </p>
        <ComponentPreview className="items-start justify-start">
          <RadioGroup value={plan} onValueChange={setPlan} className="w-full">
            {[
              { value: "free", label: "Free", price: "$0/мес" },
              { value: "pro", label: "Pro", price: "$12/мес" },
              { value: "team", label: "Team", price: "$29/мес" },
            ].map((option) => (
              <label
                key={option.value}
                htmlFor={option.value}
                className="border-border has-[[data-state=checked]]:border-primary has-[[data-state=checked]]:bg-accent flex cursor-pointer items-center justify-between rounded-md border px-4 py-3"
              >
                <div className="flex items-center gap-2">
                  <RadioGroupItem value={option.value} id={option.value} />
                  <span className="text-sm font-medium">{option.label}</span>
                </div>
                <span className="text-muted-foreground text-sm">{option.price}</span>
              </label>
            ))}
          </RadioGroup>
        </ComponentPreview>
      </section>
    </div>
  );
}
