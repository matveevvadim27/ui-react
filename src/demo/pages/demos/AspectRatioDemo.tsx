import { AspectRatio } from "@/ui/aspect-ratio";
import { ComponentPreview } from "@/demo/components/ComponentPreview";

export function AspectRatioDemo() {
  return (
    <div className="space-y-10">
      <section>
        <h2 className="mb-4 text-lg font-medium">16:9</h2>
        <ComponentPreview className="items-start justify-start">
          <div className="w-full max-w-md">
            <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-md">
              <img
                src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800"
                alt="Landscape"
                className="size-full object-cover"
              />
            </AspectRatio>
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-medium">1:1 (square)</h2>
        <ComponentPreview className="items-start justify-start">
          <div className="w-48">
            <AspectRatio ratio={1} className="bg-muted overflow-hidden rounded-md">
              <img
                src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800"
                alt="Landscape"
                className="size-full object-cover"
              />
            </AspectRatio>
          </div>
        </ComponentPreview>
      </section>
    </div>
  );
}
