import { registry } from "@/demo/registry";

export function Home() {
  const done = registry.filter((c) => c.status === "done").length;

  return (
    <div>
      <h1 className="text-2xl font-semibold">UI Kit</h1>
      <p className="text-foreground/60 mt-2">
        Личная библиотека React-компонентов на Radix + Tailwind.
      </p>
      <p className="text-foreground/50 mt-6 text-sm">
        Готово {done} из {registry.length} компонентов. Выбери компонент в меню слева.
      </p>
    </div>
  );
}
