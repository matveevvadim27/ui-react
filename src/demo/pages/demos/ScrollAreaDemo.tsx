import { ScrollArea } from "@/ui/scroll-area";
import { Separator } from "@/ui/separator";
import { ComponentPreview } from "@/demo/components/ComponentPreview";

const tags = Array.from({ length: 50 }, (_, i) => `Tag ${i + 1}`);

export function ScrollAreaDemo() {
  return (
    <div className="space-y-10">
      <section>
        <h2 className="mb-4 text-lg font-medium">Vertical scroll</h2>
        <p className="text-muted-foreground mb-3 text-sm">
          Кастомный скроллбар вместо нативного, но колесо мыши и клавиатура работают как
          обычно.
        </p>
        <ComponentPreview className="items-start justify-start">
          <ScrollArea className="border-border h-72 w-48 rounded-md border">
            <div className="p-4">
              <h4 className="mb-4 text-sm font-medium">Tags</h4>
              {tags.map((tag) => (
                <div key={tag}>
                  <div className="text-sm">{tag}</div>
                  <Separator className="my-2" />
                </div>
              ))}
            </div>
          </ScrollArea>
        </ComponentPreview>
      </section>
    </div>
  );
}
