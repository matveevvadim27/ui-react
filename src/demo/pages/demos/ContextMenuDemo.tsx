import { useState } from "react";
import { Copy, Scissors, Clipboard, Trash2, Download } from "lucide-react";
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuRadioGroup,
  ContextMenuSub,
  ContextMenuSubTrigger,
  ContextMenuSubContent,
} from "@/ui/context-menu";
import { ComponentPreview } from "@/demo/components/ComponentPreview";

export function ContextMenuDemo() {
  const [showBookmarks, setShowBookmarks] = useState(true);
  const [showUrls, setShowUrls] = useState(false);
  const [zoom, setZoom] = useState("100");

  return (
    <div className="space-y-10">
      {/* Базовая зона правого клика */}
      <section>
        <h2 className="mb-4 text-lg font-medium">Basic</h2>
        <p className="text-muted-foreground mb-3 text-sm">
          Кликни правой кнопкой мыши внутри пунктирной области — меню появится прямо в
          точке клика, а не относительно триггера.
        </p>
        <ComponentPreview
          className="items-start justify-start"
          code={`<ContextMenu>
  <ContextMenuTrigger className="flex h-32 w-64 items-center justify-center rounded-md border border-dashed text-sm text-muted-foreground">
    Правый клик здесь
  </ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>
      <Copy />
      Копировать
      <ContextMenuShortcut>⌘C</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuItem>
      <Scissors />
      Вырезать
      <ContextMenuShortcut>⌘X</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuItem>
      <Clipboard />
      Вставить
      <ContextMenuShortcut>⌘V</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuItem variant="destructive">
      <Trash2 />
      Удалить
    </ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`}
        >
          <ContextMenu>
            <ContextMenuTrigger className="border-border text-muted-foreground flex h-32 w-64 items-center justify-center rounded-md border border-dashed text-sm">
              Правый клик здесь
            </ContextMenuTrigger>
            <ContextMenuContent>
              <ContextMenuItem>
                <Copy />
                Копировать
                <ContextMenuShortcut>⌘C</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>
                <Scissors />
                Вырезать
                <ContextMenuShortcut>⌘X</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>
                <Clipboard />
                Вставить
                <ContextMenuShortcut>⌘V</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem variant="destructive">
                <Trash2 />
                Удалить
              </ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        </ComponentPreview>
      </section>

      {/* Checkbox / Radio пункты */}
      <section>
        <h2 className="mb-4 text-lg font-medium">Checkbox & radio items</h2>
        <ComponentPreview className="items-start justify-start">
          <ContextMenu>
            <ContextMenuTrigger className="border-border text-muted-foreground flex h-32 w-64 items-center justify-center rounded-md border border-dashed text-sm">
              Правый клик — настройки вида
            </ContextMenuTrigger>
            <ContextMenuContent>
              <ContextMenuLabel>Панель закладок</ContextMenuLabel>
              <ContextMenuCheckboxItem
                checked={showBookmarks}
                onCheckedChange={setShowBookmarks}
              >
                Показывать закладки
              </ContextMenuCheckboxItem>
              <ContextMenuCheckboxItem checked={showUrls} onCheckedChange={setShowUrls}>
                Показывать полные URL
              </ContextMenuCheckboxItem>
              <ContextMenuSeparator />
              <ContextMenuLabel>Масштаб</ContextMenuLabel>
              <ContextMenuRadioGroup value={zoom} onValueChange={setZoom}>
                <ContextMenuRadioItem value="50">50%</ContextMenuRadioItem>
                <ContextMenuRadioItem value="100">100%</ContextMenuRadioItem>
                <ContextMenuRadioItem value="150">150%</ContextMenuRadioItem>
              </ContextMenuRadioGroup>
            </ContextMenuContent>
          </ContextMenu>
        </ComponentPreview>
      </section>

      {/* Вложенное подменю */}
      <section>
        <h2 className="mb-4 text-lg font-medium">Nested submenu</h2>
        <p className="text-muted-foreground mb-3 text-sm">
          Наведи на «Экспортировать как» — откроется вложенное меню.
        </p>
        <ComponentPreview className="items-start justify-start">
          <ContextMenu>
            <ContextMenuTrigger className="border-border text-muted-foreground flex h-32 w-64 items-center justify-center rounded-md border border-dashed text-sm">
              Правый клик — экспорт файла
            </ContextMenuTrigger>
            <ContextMenuContent>
              <ContextMenuGroup>
                <ContextMenuItem>
                  <Copy />
                  Дублировать
                </ContextMenuItem>
              </ContextMenuGroup>
              <ContextMenuSeparator />
              <ContextMenuSub>
                <ContextMenuSubTrigger>
                  <Download />
                  Экспортировать как
                </ContextMenuSubTrigger>
                <ContextMenuSubContent>
                  <ContextMenuItem>PNG</ContextMenuItem>
                  <ContextMenuItem>SVG</ContextMenuItem>
                  <ContextMenuItem>PDF</ContextMenuItem>
                </ContextMenuSubContent>
              </ContextMenuSub>
            </ContextMenuContent>
          </ContextMenu>
        </ComponentPreview>
      </section>
    </div>
  );
}
