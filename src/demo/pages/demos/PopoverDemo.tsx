import { useState } from "react";
import { Settings2 } from "lucide-react";
import { Button } from "@/ui/button";
import { Popover, PopoverTrigger, PopoverContent, PopoverClose } from "@/ui/popover";
import { ComponentPreview } from "@/demo/components/ComponentPreview";

export function PopoverDemo() {
  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState("100%");
  const [height, setHeight] = useState("25px");

  return (
    <div className="space-y-10">
      {/* Базовый попап */}
      <section>
        <h2 className="mb-4 text-lg font-medium">Basic</h2>
        <p className="text-muted-foreground mb-3 text-sm">
          Открывается кликом, а не наведением — в отличие от Tooltip. Не блокирует
          страницу, закрывается по Esc или клику вне попапа.
        </p>
        <ComponentPreview
          code={`<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Открыть попап</Button>
  </PopoverTrigger>
  <PopoverContent>
    <p className="text-sm">Простой текстовый контент попапа.</p>
  </PopoverContent>
</Popover>`}
        >
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Открыть попап</Button>
            </PopoverTrigger>
            <PopoverContent>
              <p className="text-sm">Простой текстовый контент попапа.</p>
            </PopoverContent>
          </Popover>
        </ComponentPreview>
      </section>

      {/* Форма внутри — типичный кейс использования */}
      <section>
        <h2 className="mb-4 text-lg font-medium">With form</h2>
        <p className="text-muted-foreground mb-3 text-sm">
          Попап может содержать интерактивные поля, в отличие от Tooltip.
        </p>
        <ComponentPreview
          code={`<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline" size="icon">
      <Settings2 />
    </Button>
  </PopoverTrigger>
  <PopoverContent>
    <div className="space-y-3">
      <div>
        <h4 className="font-medium leading-none">Размеры</h4>
        <p className="text-sm text-muted-foreground">
          Задайте размеры слоя.
        </p>
      </div>
      <div className="grid gap-2">
        <div className="grid grid-cols-3 items-center gap-2">
          <label htmlFor="width" className="text-sm">Width</label>
          <input
            id="width"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            className="col-span-2 h-8 rounded-md border border-input px-2 text-sm"
          />
        </div>
        <div className="grid grid-cols-3 items-center gap-2">
          <label htmlFor="height" className="text-sm">Height</label>
          <input
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="col-span-2 h-8 rounded-md border border-input px-2 text-sm"
          />
        </div>
      </div>
    </div>
  </PopoverContent>
</Popover>`}
        >
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Настройки размера">
                <Settings2 />
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <div className="space-y-3">
                <div>
                  <h4 className="leading-none font-medium">Размеры</h4>
                  <p className="text-muted-foreground text-sm">Задайте размеры слоя.</p>
                </div>
                <div className="grid gap-2">
                  <div className="grid grid-cols-3 items-center gap-2">
                    <label htmlFor="width" className="text-sm">
                      Width
                    </label>
                    <input
                      id="width"
                      value={width}
                      onChange={(e) => setWidth(e.target.value)}
                      className="border-input focus-visible:ring-ring col-span-2 h-8 rounded-md border px-2 text-sm outline-none focus-visible:ring-2"
                    />
                  </div>
                  <div className="grid grid-cols-3 items-center gap-2">
                    <label htmlFor="height" className="text-sm">
                      Height
                    </label>
                    <input
                      id="height"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      className="border-input focus-visible:ring-ring col-span-2 h-8 rounded-md border px-2 text-sm outline-none focus-visible:ring-2"
                    />
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </ComponentPreview>
      </section>

      {/* PopoverClose — закрытие изнутри контента */}
      <section>
        <h2 className="mb-4 text-lg font-medium">With close button</h2>
        <p className="text-muted-foreground mb-3 text-sm">
          Закрыть можно и явной кнопкой внутри попапа через PopoverClose.
        </p>
        <ComponentPreview
          code={`<PopoverContent>
  <p className="mb-3 text-sm">Подтвердите действие.</p>
  <PopoverClose asChild>
    <Button size="sm">Понятно, закрыть</Button>
  </PopoverClose>
</PopoverContent>`}
        >
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="secondary">Открыть с кнопкой закрытия</Button>
            </PopoverTrigger>
            <PopoverContent>
              <p className="mb-3 text-sm">Подтвердите действие.</p>
              <PopoverClose asChild>
                <Button size="sm">Понятно, закрыть</Button>
              </PopoverClose>
            </PopoverContent>
          </Popover>
        </ComponentPreview>
      </section>

      {/* Controlled */}
      <section>
        <h2 className="mb-4 text-lg font-medium">Controlled</h2>
        <p className="text-muted-foreground mb-3 text-sm">
          Состояние открытия управляется извне, например по кнопке рядом.
        </p>
        <ComponentPreview className="flex-col items-start gap-3">
          <div className="flex gap-2">
            <Button size="sm" variant="outline" onClick={() => setOpen(true)}>
              Открыть программно
            </Button>
            <Button size="sm" variant="outline" onClick={() => setOpen(false)}>
              Закрыть программно
            </Button>
          </div>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button variant="outline">Триггер попапа</Button>
            </PopoverTrigger>
            <PopoverContent>
              <p className="text-sm">
                Состояние: <strong>{open ? "открыт" : "закрыт"}</strong>
              </p>
            </PopoverContent>
          </Popover>
        </ComponentPreview>
      </section>
    </div>
  );
}
