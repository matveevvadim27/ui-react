import { useState } from "react";
import { ChevronsUpDown } from "lucide-react";
import { Button } from "@/ui/button";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/ui/collapsible";
import { ComponentPreview } from "@/demo/components/ComponentPreview";

export function CollapsibleDemo() {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-10">
      {/* Базовый пример */}
      <section>
        <h2 className="mb-4 text-lg font-medium">Basic</h2>
        <p className="text-muted-foreground mb-3 text-sm">
          Один независимый блок показать/скрыть — в отличие от Accordion, не входит в
          группу с другими секциями.
        </p>
        <ComponentPreview
          className="items-start justify-start"
          code={`<Collapsible className="w-full max-w-md">
  <CollapsibleTrigger>
    Показать технические детали
  </CollapsibleTrigger>
  <CollapsibleContent>
    Stack trace, JSON-ответ сервера или другой служебный контент,
    который не нужен по умолчанию.
  </CollapsibleContent>
</Collapsible>`}
        >
          <Collapsible className="w-full max-w-md">
            <CollapsibleTrigger>Показать технические детали</CollapsibleTrigger>
            <CollapsibleContent>
              Stack trace, JSON-ответ сервера или другой служебный контент, который не
              нужен по умолчанию.
            </CollapsibleContent>
          </Collapsible>
        </ComponentPreview>
      </section>

      {/* Trigger как отдельная кнопка через asChild */}
      <section>
        <h2 className="mb-4 text-lg font-medium">Custom trigger (asChild)</h2>
        <p className="text-muted-foreground mb-3 text-sm">
          Триггер может быть оформлен как угодно — например как готовая кнопка из Button,
          через asChild.
        </p>
        <ComponentPreview className="items-start justify-start">
          <Collapsible className="w-full max-w-md">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">
                @peduarte starred 3 repositories
              </span>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" className='self-end' size="icon" aria-label="Развернуть список">
                  <ChevronsUpDown className="size-4" />
                </Button>
              </CollapsibleTrigger>
            </div>
            <div className="border-border mt-2 rounded-md border px-4 py-2 font-mono text-sm">
              @radix-ui/primitives
            </div>
            <CollapsibleContent className="space-y-2">
              <div className="border-border rounded-md border px-4 py-2 font-mono text-sm">
                @radix-ui/colors
              </div>
              <div className="border-border rounded-md border px-4 py-2 font-mono text-sm">
                @stitches/react
              </div>
            </CollapsibleContent>
          </Collapsible>
        </ComponentPreview>
      </section>

      {/* "Показать ещё N элементов" — реалистичный кейс */}
      <section>
        <h2 className="mb-4 text-lg font-medium">Show more items</h2>
        <ComponentPreview className="items-start justify-start">
          <Collapsible open={open} onOpenChange={setOpen} className="w-full max-w-md">
            <ul className="space-y-1 text-sm">
              <li className="border-border rounded-md border px-3 py-2">
                Задача 1: Настроить окружение
              </li>
              <li className="border-border rounded-md border px-3 py-2">
                Задача 2: Написать компоненты
              </li>
            </ul>
            <CollapsibleContent>
              <ul className="mt-1 space-y-1 text-sm">
                <li className="border-border rounded-md border px-3 py-2">
                  Задача 3: Покрыть демо
                </li>
                <li className="border-border rounded-md border px-3 py-2">
                  Задача 4: Обновить README
                </li>
                <li className="border-border rounded-md border px-3 py-2">
                  Задача 5: Опубликовать пакет
                </li>
              </ul>
            </CollapsibleContent>
            <CollapsibleTrigger asChild>
              <Button variant="link" size="sm" className="mt-2 px-0">
                {open ? "Скрыть" : "Показать ещё 3"}
              </Button>
            </CollapsibleTrigger>
          </Collapsible>
        </ComponentPreview>
      </section>
    </div>
  );
}
