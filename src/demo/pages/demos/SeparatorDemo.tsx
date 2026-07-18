import { Separator } from "@/ui/separator";
import { ComponentPreview } from "@/demo/components/ComponentPreview";

export function SeparatorDemo() {
  return (
    <div className="space-y-10">
      <section>
        <h2 className="mb-4 text-lg font-medium">Horizontal</h2>
        <ComponentPreview className="flex-col items-start">
          <div className="w-full max-w-md">
            <div className="space-y-1">
              <h4 className="text-sm font-medium">Radix Primitives</h4>
              <p className="text-muted-foreground text-sm">
                Набор доступных UI-компонентов.
              </p>
            </div>
            <Separator className="my-4" />
            <div className="flex h-5 items-center text-sm">
              <span>Docs</span>
              <Separator orientation="vertical" className="mx-4" />
              <span>Source</span>
              <Separator orientation="vertical" className="mx-4" />
              <span>Examples</span>
            </div>
          </div>
        </ComponentPreview>
      </section>
    </div>
  );
}
