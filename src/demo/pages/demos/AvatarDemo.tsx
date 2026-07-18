import { Avatar, AvatarImage, AvatarFallback } from "@/ui/avatar";
import { ComponentPreview } from "@/demo/components/ComponentPreview";

export function AvatarDemo() {
  return (
    <div className="space-y-10">
      {/* Базовый пример */}
      <section>
        <h2 className="mb-4 text-lg font-medium">Basic</h2>
        <ComponentPreview
          code={`<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`}
        >
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </ComponentPreview>
      </section>

      {/* Fallback — битая ссылка */}
      <section>
        <h2 className="mb-4 text-lg font-medium">Fallback (broken image)</h2>
        <p className="text-muted-foreground mb-3 text-sm">
          Если картинка не загрузилась (битая ссылка, нет сети) — Radix сам показывает
          Fallback вместо сломанной иконки браузера.
        </p>
        <ComponentPreview
          code={`<Avatar>
  <AvatarImage src="https://broken-url-example.png" alt="User" />
  <AvatarFallback>ИИ</AvatarFallback>
</Avatar>`}
        >
          <Avatar>
            <AvatarImage src="https://broken-url-example.png" alt="User" />
            <AvatarFallback>ИИ</AvatarFallback>
          </Avatar>
        </ComponentPreview>
      </section>

      {/* Только инициалы, без картинки вообще */}
      <section>
        <h2 className="mb-4 text-lg font-medium">Fallback only</h2>
        <p className="text-muted-foreground mb-3 text-sm">
          Без AvatarImage сразу показывается Fallback — обычный кейс, когда у пользователя
          нет загруженного аватара.
        </p>
        <ComponentPreview>
          <Avatar>
            <AvatarFallback>ЖД</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>АК</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>МС</AvatarFallback>
          </Avatar>
        </ComponentPreview>
      </section>

      {/* Размеры */}
      <section>
        <h2 className="mb-4 text-lg font-medium">Sizes</h2>
        <ComponentPreview
          code={`<Avatar size="sm">...</Avatar>
<Avatar size="md">...</Avatar>
<Avatar size="lg">...</Avatar>`}
        >
          <Avatar size="sm">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>SM</AvatarFallback>
          </Avatar>
          <Avatar size="md">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>MD</AvatarFallback>
          </Avatar>
          <Avatar size="lg">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>LG</AvatarFallback>
          </Avatar>
        </ComponentPreview>
      </section>

      {/* Группа с наложением — типичный кейс "участники" */}
      <section>
        <h2 className="mb-4 text-lg font-medium">Group (stacked)</h2>
        <p className="text-muted-foreground mb-3 text-sm">
          Отрицательный margin создаёт эффект наложения аватаров друг на друга — частый
          паттерн для списка участников.
        </p>
        <ComponentPreview>
          <div className="flex -space-x-3">
            <Avatar className="border-background border-2">
              <AvatarImage src="https://github.com/shadcn.png" alt="User 1" />
              <AvatarFallback>U1</AvatarFallback>
            </Avatar>
            <Avatar className="border-background border-2">
              <AvatarFallback>U2</AvatarFallback>
            </Avatar>
            <Avatar className="border-background border-2">
              <AvatarFallback>U3</AvatarFallback>
            </Avatar>
            <Avatar className="border-background border-2">
              <AvatarFallback className="bg-primary text-primary-foreground">
                +5
              </AvatarFallback>
            </Avatar>
          </div>
        </ComponentPreview>
      </section>
    </div>
  );
}
