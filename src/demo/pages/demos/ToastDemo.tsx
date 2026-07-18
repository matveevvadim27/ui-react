import { toast, ToastAction } from "@/ui/toast";
import { Button } from "@/ui/button";
import { ComponentPreview } from "@/demo/components/ComponentPreview";

export function ToastDemo() {
  function simulateSave() {
    toast({
      title: "Сохранено",
      description: "Изменения успешно применены.",
    });
  }

  function simulateError() {
    toast({
      variant: "destructive",
      title: "Ошибка",
      description: "Не удалось загрузить данные. Попробуйте снова.",
    });
  }

  function simulateWithAction() {
    toast({
      title: "Событие удалено",
      description: "Можно отменить в течение нескольких секунд.",
      action: (
        <ToastAction altText="Отменить удаление" onClick={() => undo()}>
          Отменить
        </ToastAction>
      ),
    });
  }

  function undo() {
    toast({ title: "Удаление отменено" });
  }

  async function simulateAsyncRequest() {
    const { update } = toast({ title: "Отправка запроса..." });

    await new Promise((resolve) => setTimeout(resolve, 1500));

    update({
      title: "Готово",
      description: "Запрос успешно выполнен.",
    });
  }

  return (
    <div className="space-y-10">
      {/* Базовый вызов */}
      <section>
        <h2 className="mb-4 text-lg font-medium">Basic</h2>
        <p className="text-muted-foreground mb-3 text-sm">
          toast() — обычная функция, вызывается из обработчика клика без какой-либо
          JSX-разметки в этом месте кода.
        </p>
        <ComponentPreview
          code={`import { toast } from "@/ui/toast";

<Button onClick={() =>
  toast({ title: "Сохранено", description: "Изменения успешно применены." })
}>
  Сохранить
</Button>`}
        >
          <Button onClick={simulateSave} variant="outline">
            Сохранить
          </Button>
        </ComponentPreview>
      </section>

      {/* Destructive вариант */}
      <section>
        <h2 className="mb-4 text-lg font-medium">Destructive</h2>
        <ComponentPreview
          code={`toast({
  variant: "destructive",
  title: "Ошибка",
  description: "Не удалось загрузить данные.",
});`}
        >
          <Button onClick={simulateError} variant="destructive">
            Симулировать ошибку
          </Button>
        </ComponentPreview>
      </section>

      {/* С action-кнопкой */}
      <section>
        <h2 className="mb-4 text-lg font-medium">With action</h2>
        <p className="text-muted-foreground mb-3 text-sm">
          Тост может содержать кнопку действия, например «Отменить».
        </p>
        <ComponentPreview
          code={`toast({
  title: "Событие удалено",
  action: (
    <ToastAction altText="Отменить удаление" onClick={undo}>
      Отменить
    </ToastAction>
  ),
});`}
        >
          <Button onClick={simulateWithAction} variant="outline">
            Удалить событие
          </Button>
        </ComponentPreview>
      </section>

      {/* Обновление существующего тоста — async-кейс */}
      <section>
        <h2 className="mb-4 text-lg font-medium">Update on async result</h2>
        <p className="text-muted-foreground mb-3 text-sm">
          toast() возвращает {"{ update, dismiss }"} — удобно для паттерна «показать
          загрузку → обновить на результат», без создания второго тоста поверх первого.
        </p>
        <ComponentPreview
          code={`const { update } = toast({ title: "Отправка запроса..." });

await fetch(...);

update({ title: "Готово", description: "Запрос выполнен." });`}
        >
          <Button onClick={simulateAsyncRequest} variant="outline">
            Отправить запрос
          </Button>
        </ComponentPreview>
      </section>

      {/* Несколько тостов подряд — проверка очереди */}
      <section>
        <h2 className="mb-4 text-lg font-medium">Queue (TOAST_LIMIT)</h2>
        <p className="text-muted-foreground mb-3 text-sm">
          Быстро нажми несколько раз — старые тосты вытесняются новыми согласно
          TOAST_LIMIT в сторе.
        </p>
        <ComponentPreview>
          <Button
            onClick={() =>
              toast({ title: `Уведомление #${Math.floor(Math.random() * 100)}` })
            }
            variant="secondary"
          >
            Добавить тост
          </Button>
        </ComponentPreview>
      </section>
    </div>
  );
}
