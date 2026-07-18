import { useState } from "react";
import { Checkbox } from "@/ui/checkbox";
import { ComponentPreview } from "@/demo/components/ComponentPreview";

const items = [
  { id: "recents", label: "Recents" },
  { id: "home", label: "Home" },
  { id: "applications", label: "Applications" },
  { id: "desktop", label: "Desktop" },
];

export function CheckboxDemo() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    recents: true,
    home: false,
    applications: false,
    desktop: false,
  });

  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const allChecked = checkedCount === items.length;
  const someChecked = checkedCount > 0 && !allChecked;

  function toggleAll(checked: boolean) {
    setCheckedItems(Object.fromEntries(items.map((item) => [item.id, checked])));
  }

  return (
    <div className="space-y-10">
      {/* Базовый чекбокс с label */}
      <section>
        <h2 className="mb-4 text-lg font-medium">Basic</h2>
        <p className="text-muted-foreground mb-3 text-sm">
          Клик по тексту тоже переключает чекбокс — связка через htmlFor/id.
        </p>
        <ComponentPreview
          className="items-start justify-start"
          code={`<div className="flex items-center gap-2">
  <Checkbox id="terms" />
  <label htmlFor="terms" className="text-sm font-medium">
    Принять условия использования
  </label>
</div>`}
        >
          <div className="flex items-center gap-2">
            <Checkbox id="terms" defaultChecked />
            <label htmlFor="terms" className="text-sm font-medium">
              Принять условия использования
            </label>
          </div>
        </ComponentPreview>
      </section>

      {/* Disabled */}
      <section>
        <h2 className="mb-4 text-lg font-medium">Disabled</h2>
        <p className="text-muted-foreground mb-3 text-sm">
          Подпись тоже приглушается — через <code>peer-disabled</code>, без JS.
        </p>
        <ComponentPreview className="flex-col items-start gap-3">
          <div className="flex items-center gap-2">
            <Checkbox id="disabled-unchecked" disabled />
            <label
              htmlFor="disabled-unchecked"
              className="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Недоступно (не отмечено)
            </label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="disabled-checked" disabled defaultChecked />
            <label
              htmlFor="disabled-checked"
              className="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Недоступно (отмечено)
            </label>
          </div>
        </ComponentPreview>
      </section>

      {/* Indeterminate — "выбрать всё" */}
      <section>
        <h2 className="mb-4 text-lg font-medium">Indeterminate (Select all)</h2>
        <p className="text-muted-foreground mb-3 text-sm">
          Родительский чекбокс показывает «минус», когда отмечены не все дочерние пункты.
        </p>
        <ComponentPreview className="flex-col items-start gap-3">
          <div className="border-border flex items-center gap-2 border-b pb-3">
            <Checkbox
              id="select-all"
              checked={someChecked ? "indeterminate" : allChecked}
              onCheckedChange={(checked) => toggleAll(checked === true)}
            />
            <label htmlFor="select-all" className="text-sm font-medium">
              Выбрать всё ({checkedCount}/{items.length})
            </label>
          </div>
          {items.map((item) => (
            <div key={item.id} className="flex items-center gap-2 pl-1">
              <Checkbox
                id={item.id}
                checked={checkedItems[item.id]}
                onCheckedChange={(checked) =>
                  setCheckedItems((prev) => ({
                    ...prev,
                    [item.id]: checked === true,
                  }))
                }
              />
              <label htmlFor={item.id} className="text-sm">
                {item.label}
              </label>
            </div>
          ))}
        </ComponentPreview>
      </section>
    </div>
  );
}
