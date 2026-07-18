import { Label } from "@/ui/label";
import { Checkbox } from "@/ui/checkbox";
import { ComponentPreview } from "@/demo/components/ComponentPreview";

export function LabelDemo() {
  return (
    <div className="space-y-10">
      <section>
        <h2 className="mb-4 text-lg font-medium">Basic</h2>
        <p className="text-muted-foreground mb-3 text-sm">
          Двойной клик по тексту не выделяет его как обычную строку — Radix предотвращает
          это автоматически.
        </p>
        <ComponentPreview>
          <div className="flex items-center gap-2">
            <Checkbox id="terms-label" />
            <Label htmlFor="terms-label">Принять условия использования</Label>
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-medium">Disabled (via peer)</h2>
        <ComponentPreview>
          <div className="flex items-center gap-2">
            <Checkbox id="disabled-label" disabled />
            <Label htmlFor="disabled-label" className="peer">
              Недоступный пункт
            </Label>
          </div>
        </ComponentPreview>
      </section>
    </div>
  );
}
