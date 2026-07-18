import { Heart, Trash2 } from "lucide-react";
import { Button } from "@/ui/button";
import { ComponentPreview, VariantRow } from "@/demo/components/ComponentPreview";

export function ButtonDemo() {
  return (
    <div className="space-y-10">
      {/* Варианты */}
      <section>
        <h2 className="mb-4 text-lg font-medium">Variants</h2>
        <ComponentPreview
          code={`
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="link">Link</Button>
`}
        >
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
        </ComponentPreview>
      </section>

      {/* Размеры */}
      <section>
        <h2 className="mb-4 text-lg font-medium">Sizes</h2>
        <ComponentPreview
          code={`<Button size="xs">Extra small</Button>
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="icon"><Heart /></Button>`}
        >
          <Button size="xs">Extra small</Button>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button size="icon" aria-label="Like">
            <Heart />
          </Button>
        </ComponentPreview>
      </section>

      {/* Состояния */}
      <section>
        <h2 className="mb-4 text-lg font-medium">States</h2>
        <div className="border-border rounded-lg border p-4">
          <VariantRow label="Default">
            <Button>Button</Button>
          </VariantRow>
          <VariantRow label="Disabled">
            <Button disabled>Button</Button>
            <Button variant="secondary" disabled>
              Secondary
            </Button>
            <Button variant="outline" disabled>
              Outline
            </Button>
            <Button variant="ghost" disabled>
              Ghost
            </Button>
            <Button variant="destructive" disabled>
              Destructive
            </Button>
            <Button variant="link" disabled>
              Link
            </Button>
          </VariantRow>
        </div>
      </section>

      {/* С иконками */}
      <section>
        <h2 className="mb-4 text-lg font-medium">With icon</h2>
        <ComponentPreview
          code={`<Button>
  <Trash2 />
  Delete
</Button>`}
        >
          <Button variant="destructive">
            <Trash2 />
            Delete
          </Button>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-medium">asChild</h2>
        <ComponentPreview
          code={`<Button asChild variant="ghost">
  <a href="#asChild-demo">Rendered as native <a></a>
</Button>`}
        >
          <Button asChild variant="ghost">
            <a href="#asChild-demo">Rendered as native &lt;a&gt;</a>
          </Button>
        </ComponentPreview>
      </section>
    </div>
  );
}
