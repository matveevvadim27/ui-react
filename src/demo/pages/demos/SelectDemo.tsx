import { useState } from "react";
import {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectSeparator,
} from "@/ui/select";
import { ComponentPreview } from "@/demo/components/ComponentPreview";

const timezones = [
  "UTC-12:00",
  "UTC-11:00",
  "UTC-10:00",
  "UTC-09:00",
  "UTC-08:00",
  "UTC-07:00",
  "UTC-06:00",
  "UTC-05:00",
  "UTC-04:00",
  "UTC-03:00",
  "UTC-02:00",
  "UTC-01:00",
  "UTC+00:00",
  "UTC+01:00",
  "UTC+02:00",
  "UTC+03:00",
];

export function SelectDemo() {
  const [fruit, setFruit] = useState<string | undefined>(undefined);

  return (
    <div className="space-y-10">
      {/* Базовый select */}
      <section>
        <h2 className="mb-4 text-lg font-medium">Basic</h2>
        <ComponentPreview
          code={`<Select>
  <SelectTrigger className="w-48">
    <SelectValue placeholder="Выберите фрукт" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Яблоко</SelectItem>
    <SelectItem value="banana">Банан</SelectItem>
    <SelectItem value="orange">Апельсин</SelectItem>
  </SelectContent>
</Select>`}
        >
          <Select>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Выберите фрукт" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apple">Яблоко</SelectItem>
              <SelectItem value="banana">Банан</SelectItem>
              <SelectItem value="orange">Апельсин</SelectItem>
            </SelectContent>
          </Select>
        </ComponentPreview>
      </section>

      {/* Группы с разделителем */}
      <section>
        <h2 className="mb-4 text-lg font-medium">Groups & separator</h2>
        <ComponentPreview
          code={`<SelectContent>
  <SelectGroup>
    <SelectLabel>Фрукты</SelectLabel>
    <SelectItem value="apple">Яблоко</SelectItem>
    <SelectItem value="banana">Банан</SelectItem>
  </SelectGroup>
  <SelectSeparator />
  <SelectGroup>
    <SelectLabel>Овощи</SelectLabel>
    <SelectItem value="carrot">Морковь</SelectItem>
    <SelectItem value="potato">Картофель</SelectItem>
  </SelectGroup>
</SelectContent>`}
        >
          <Select>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Выберите продукт" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Фрукты</SelectLabel>
                <SelectItem value="apple">Яблоко</SelectItem>
                <SelectItem value="banana">Банан</SelectItem>
              </SelectGroup>
              <SelectSeparator />
              <SelectGroup>
                <SelectLabel>Овощи</SelectLabel>
                <SelectItem value="carrot">Морковь</SelectItem>
                <SelectItem value="potato">Картофель</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </ComponentPreview>
      </section>

      {/* Disabled item и disabled select */}
      <section>
        <h2 className="mb-4 text-lg font-medium">Disabled</h2>
        <ComponentPreview className="gap-6">
          <Select>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Один пункт недоступен" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="active-1">Доступно</SelectItem>
              <SelectItem value="disabled" disabled>
                Недоступно
              </SelectItem>
              <SelectItem value="active-2">Тоже доступно</SelectItem>
            </SelectContent>
          </Select>

          <Select disabled>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Весь select отключён" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="a">A</SelectItem>
            </SelectContent>
          </Select>
        </ComponentPreview>
      </section>

      {/* Длинный список — проверка скролл-кнопок */}
      <section>
        <h2 className="mb-4 text-lg font-medium">Long list (scroll buttons)</h2>
        <p className="text-muted-foreground mb-3 text-sm">
          Открой список — сверху/снизу появятся стрелки прокрутки, когда пунктов больше,
          чем влезает на экран.
        </p>
        <ComponentPreview>
          <Select>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Выберите часовой пояс" />
            </SelectTrigger>
            <SelectContent>
              {timezones.map((tz) => (
                <SelectItem key={tz} value={tz}>
                  {tz}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </ComponentPreview>
      </section>

      {/* Controlled */}
      <section>
        <h2 className="mb-4 text-lg font-medium">Controlled</h2>
        <p className="text-muted-foreground mb-3 text-sm">
          Текущее значение: <strong>{fruit ?? "не выбрано"}</strong>
        </p>
        <ComponentPreview>
          <Select value={fruit} onValueChange={setFruit}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Выберите фрукт" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apple">Яблоко</SelectItem>
              <SelectItem value="banana">Банан</SelectItem>
              <SelectItem value="orange">Апельсин</SelectItem>
            </SelectContent>
          </Select>
        </ComponentPreview>
      </section>
    </div>
  );
}
