import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/ui/accordion";
import { ComponentPreview } from "@/demo/components/ComponentPreview";

export function AccordionDemo() {
  return (
    <div className="space-y-10">
      {/* Single + collapsible */}
      <section>
        <h2 className="mb-4 text-lg font-medium">Single (collapsible)</h2>
        <p className="text-muted-foreground mb-3 text-sm">
          Открыта только одна секция за раз. С <code>collapsible</code> можно закрыть и
          последнюю открытую, кликнув по ней ещё раз.
        </p>
        <ComponentPreview
          className="items-start justify-start"
          code={`<Accordion type="single" collapsible className="w-full">
  <AccordionItem value="item-1">
    <AccordionTrigger>Что такое Radix UI?</AccordionTrigger>
    <AccordionContent>
      Headless-библиотека примитивов: поведение и доступность есть,
      стилей нет — их задаёшь сам.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Зачем нужен cn()?</AccordionTrigger>
    <AccordionContent>
      Объединяет классы и разрешает конфликты Tailwind через tailwind-merge.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger>Что даёт asChild?</AccordionTrigger>
    <AccordionContent>
      Позволяет подменить рендерящийся тег компонента, сохранив
      его стили и поведение.
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
        >
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Что такое Radix UI?</AccordionTrigger>
              <AccordionContent>
                Headless-библиотека примитивов: поведение и доступность есть, стилей нет —
                их задаёшь сам.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Зачем нужен cn()?</AccordionTrigger>
              <AccordionContent>
                Объединяет классы и разрешает конфликты Tailwind через tailwind-merge.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Что даёт asChild?</AccordionTrigger>
              <AccordionContent>
                Позволяет подменить рендерящийся тег компонента, сохранив его стили и
                поведение.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </ComponentPreview>
      </section>

      {/* Single без collapsible */}
      <section>
        <h2 className="mb-4 text-lg font-medium">Single (не collapsible)</h2>
        <p className="text-muted-foreground mb-3 text-sm">
          Без <code>collapsible</code> всегда должна остаться открытой хотя бы одна секция
          — кликнуть и закрыть последнюю открытую нельзя.
        </p>
        <ComponentPreview className="items-start justify-start">
          <Accordion type="single" defaultValue="item-1" className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Первая секция</AccordionTrigger>
              <AccordionContent>
                Открыта по умолчанию через defaultValue.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Вторая секция</AccordionTrigger>
              <AccordionContent>
                Попробуй открыть эту и снова кликнуть по первой — она не закроется
                полностью, потому что нет collapsible.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </ComponentPreview>
      </section>

      {/* Multiple */}
      <section>
        <h2 className="mb-4 text-lg font-medium">Multiple</h2>
        <p className="text-muted-foreground mb-3 text-sm">
          Можно раскрыть сразу несколько секций одновременно.
        </p>
        <ComponentPreview className="items-start justify-start">
          <Accordion type="multiple" defaultValue={["item-1"]} className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Первая секция</AccordionTrigger>
              <AccordionContent>
                Можно открыть параллельно со второй и третьей.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Вторая секция</AccordionTrigger>
              <AccordionContent>
                Открытие этой секции не закрывает первую.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Третья секция</AccordionTrigger>
              <AccordionContent>
                Все три могут быть раскрыты одновременно.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </ComponentPreview>
      </section>

      {/* Disabled item */}
      <section>
        <h2 className="mb-4 text-lg font-medium">Disabled item</h2>
        <ComponentPreview className="items-start justify-start">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Доступная секция</AccordionTrigger>
              <AccordionContent>Обычный контент.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" disabled>
              <AccordionTrigger>Недоступная секция</AccordionTrigger>
              <AccordionContent>
                Этот контент не откроется, триггер задизейблен.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </ComponentPreview>
      </section>
    </div>
  );
}
