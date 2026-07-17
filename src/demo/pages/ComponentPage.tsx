import { useParams } from "react-router-dom";
import { registry } from "@/demo/registry";

export function ComponentPage() {
  const { slug } = useParams();
  const meta = registry.find((c) => c.slug === slug);

  if (!meta) {
    return <p className="text-foreground/60">Компонент не найден</p>;
  }

  if (!meta.element) {
    return (
      <div>
        <h1 className="text-2xl font-semibold">{meta.name}</h1>
        <p className="text-foreground/60 mt-2">{meta.description}</p>
        <p className="border-border text-foreground/40 mt-8 rounded-md border border-dashed p-6 text-sm">
          Ещё не реализовано
        </p>
      </div>
    );
  }

  const Demo = meta.element;

  return (
    <div>
      <h1 className="text-2xl font-semibold">{meta.name}</h1>
      <p className="text-foreground/60 mt-2">{meta.description}</p>
      <div className="mt-8">
        <Demo />
      </div>
    </div>
  );
}
