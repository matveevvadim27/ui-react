import { Heart, Info, Trash2 } from "lucide-react";
import { Button } from "@/ui/button";
import { Tooltip } from "@/ui/tooltip";
import { ComponentPreview, VariantRow } from "@/demo/components/ComponentPreview";

export function TooltipDemo() {
  return (
    <div className="space-y-10">
      {/* Базовое использование */}
      <section>
        <h2 className="mb-4 text-lg font-medium">Basic</h2>
        <ComponentPreview
          code={`<Tooltip content="Добавить в избранное">
  <Button variant="outline" size="icon" aria-label="Like">
    <Heart />
  </Button>
</Tooltip>`}
        >
          <Tooltip content="Добавить в избранное">
            <Button variant="outline" size="icon" aria-label="Like">
              <Heart />
            </Button>
          </Tooltip>
        </ComponentPreview>
      </section>

      {/* Стороны показа */}
      <section>
        <h2 className="mb-4 text-lg font-medium">Sides</h2>
        <ComponentPreview
          className="gap-8"
          code={`<Tooltip content="Сверху" side="top">...
<Tooltip content="Снизу" side="bottom">...
<Tooltip content="Слева" side="left">...
<Tooltip content="Справа" side="right">...`}
        >
          <Tooltip content="Сверху" side="top">
            <Button variant="secondary">Top</Button>
          </Tooltip>
          <Tooltip content="Снизу" side="bottom">
            <Button variant="secondary">Bottom</Button>
          </Tooltip>
          <Tooltip content="Слева" side="left">
            <Button variant="secondary">Left</Button>
          </Tooltip>
          <Tooltip content="Справа" side="right">
            <Button variant="secondary">Right</Button>
          </Tooltip>
        </ComponentPreview>
      </section>

      {/* Без стрелки */}
      <section>
        <h2 className="mb-4 text-lg font-medium">Without arrow</h2>
        <ComponentPreview
          code={`<Tooltip content="Без стрелки" showArrow={false}>
  <Button variant="outline">Hover me</Button>
</Tooltip>`}
        >
          <Tooltip content="Без стрелки" showArrow={false}>
            <Button variant="outline">Hover me</Button>
          </Tooltip>
        </ComponentPreview>
      </section>

      {/* На иконке без подписи — типичный кейс использования */}
      <section>
        <h2 className="mb-4 text-lg font-medium">Icon-only buttons</h2>
        <div className="border-border rounded-lg border p-4">
          <VariantRow label="Пример">
            <Tooltip content="Информация">
              <Button variant="ghost" size="icon" aria-label="Info">
                <Info />
              </Button>
            </Tooltip>
            <Tooltip content="Удалить" side="bottom">
              <Button variant="destructive" size="icon" aria-label="Удалить">
                <Trash2 />
              </Button>
            </Tooltip>
          </VariantRow>
        </div>
      </section>

      {/* Фокус с клавиатуры — доступность */}
      <section>
        <h2 className="mb-4 text-lg font-medium">Keyboard focus</h2>
        <p className="text-muted-foreground mb-3 text-sm">
          Нажми Tab, чтобы дойти до кнопки клавиатурой — тултип появится и без наведения
          мышью.
        </p>
        <ComponentPreview>
          <Tooltip content="Доступно с клавиатуры">
            <Button variant="outline">Tab me</Button>
          </Tooltip>
        </ComponentPreview>
      </section>
    </div>
  );
}
