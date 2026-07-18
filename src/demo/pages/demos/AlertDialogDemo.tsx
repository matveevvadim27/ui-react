import { useState } from "react";
import { Trash2 } from "lucide-react";
import { Button } from "@/ui/button";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from "@/ui/alert-dialog";
import { ComponentPreview } from "@/demo/components/ComponentPreview";

export function AlertDialogDemo() {
  const [open, setOpen] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  return (
    <div className="space-y-10">
      {/* Базовый пример */}
      <section>
        <h2 className="mb-4 text-lg font-medium">Basic</h2>
        <p className="text-muted-foreground mb-3 text-sm">
          Попробуй нажать Esc или кликнуть вне окна — в отличие от Dialog, закрыть так
          нельзя, нужно явное действие.
        </p>
        <ComponentPreview
          code={`<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="destructive">
      <Trash2 />
      Удалить аккаунт
    </Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Вы точно уверены?</AlertDialogTitle>
      <AlertDialogDescription>
        Это действие нельзя отменить. Аккаунт будет удалён навсегда
        со всеми данными.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Отмена</AlertDialogCancel>
      <AlertDialogAction>Удалить</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`}
        >
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive">
                <Trash2 />
                Удалить аккаунт
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Вы точно уверены?</AlertDialogTitle>
                <AlertDialogDescription>
                  Это действие нельзя отменить. Аккаунт будет удалён навсегда со всеми
                  данными.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Отмена</AlertDialogCancel>
                <AlertDialogAction>Удалить</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </ComponentPreview>
      </section>

      {/* С обработкой результата действия */}
      <section>
        <h2 className="mb-4 text-lg font-medium">With action handler</h2>
        <p className="text-muted-foreground mb-3 text-sm">
          AlertDialogAction сам закрывает диалог после клика — можно повесить свой onClick
          для реального действия (запрос на сервер и т.д.).
        </p>
        <ComponentPreview className="flex-col items-start gap-3">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline">Очистить корзину</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Очистить корзину?</AlertDialogTitle>
                <AlertDialogDescription>
                  Все товары будут удалены из корзины.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel onClick={() => setResult("Отменено")}>
                  Отмена
                </AlertDialogCancel>
                <AlertDialogAction onClick={() => setResult("Корзина очищена")}>
                  Очистить
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          {result && (
            <p className="text-muted-foreground text-sm">
              Результат: <strong>{result}</strong>
            </p>
          )}
        </ComponentPreview>
      </section>

      {/* Controlled */}
      <section>
        <h2 className="mb-4 text-lg font-medium">Controlled</h2>
        <p className="text-muted-foreground mb-3 text-sm">
          Открытие управляется извне — полезно, когда подтверждение нужно показать после
          какого-то другого действия в приложении.
        </p>
        <ComponentPreview>
          <Button onClick={() => setOpen(true)}>Открыть программно</Button>
          <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Программное открытие</AlertDialogTitle>
                <AlertDialogDescription>
                  Этот диалог открылся без клика на AlertDialogTrigger — состояние
                  управляется через useState снаружи.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Закрыть</AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </ComponentPreview>
      </section>
    </div>
  );
}
