import { useState } from "react";
import { Trash2 } from "lucide-react";
import { Button } from "@/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  SimpleDialog,
} from "@/ui/dialog";
import { ComponentPreview } from "@/demo/components/ComponentPreview";

export function DialogDemo() {
  const [controlledOpen, setControlledOpen] = useState(false);

  return (
    <div className="space-y-10">
      {/* Composable API */}
      <section>
        <h2 className="mb-4 text-lg font-medium">Composable API</h2>
        <p className="text-muted-foreground mb-3 text-sm">
          Полный контроль над разметкой — собирается вручную из отдельных частей.
        </p>
        <ComponentPreview
          code={`<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Открыть</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Удалить проект?</DialogTitle>
      <DialogDescription>
        Действие необратимо. Все данные будут удалены навсегда.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="outline">Отмена</Button>
      </DialogClose>
      <Button variant="destructive">Удалить</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
        >
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Открыть диалог</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Удалить проект?</DialogTitle>
                <DialogDescription>
                  Действие необратимо. Все данные проекта будут удалены навсегда.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Отмена</Button>
                </DialogClose>
                <Button variant="destructive">Удалить</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </ComponentPreview>
      </section>

      {/* Simple API */}
      <section>
        <h2 className="mb-4 text-lg font-medium">Simple API</h2>
        <p className="text-muted-foreground mb-3 text-sm">
          Готовая сборка через плоские пропсы — для типовых случаев без кастомной
          разметки.
        </p>
        <ComponentPreview
          code={`<SimpleDialog
  trigger={<Button variant="destructive">Удалить <Trash2 /></Button>}
  title="Удалить элемент?"
  description="Это действие нельзя отменить."
  footer={
    <>
      <Button variant="outline">Отмена</Button>
      <Button variant="destructive">Удалить</Button>
    </>
  }
/>`}
        >
          <SimpleDialog
            trigger={
              <Button variant="destructive">
                <Trash2 />
                Удалить
              </Button>
            }
            title="Удалить элемент?"
            description="Это действие нельзя отменить."
            footer={
              <>
                <Button variant="outline">Отмена</Button>
                <Button variant="destructive">Удалить</Button>
              </>
            }
          />
        </ComponentPreview>
      </section>

      {/* Controlled режим */}
      <section>
        <h2 className="mb-4 text-lg font-medium">Controlled</h2>
        <p className="text-muted-foreground mb-3 text-sm">
          Открытие управляется извне — полезно, когда диалог должен открыться программно.
        </p>
        <ComponentPreview>
          <Button onClick={() => setControlledOpen(true)}>Открыть программно</Button>
          <Dialog open={controlledOpen} onOpenChange={setControlledOpen}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Программное открытие</DialogTitle>
                <DialogDescription>
                  Этот диалог открылся без клика на DialogTrigger — состояние
                  контролируется снаружи через useState.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button onClick={() => setControlledOpen(false)}>Закрыть</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </ComponentPreview>
      </section>

      {/* Без кнопки закрытия */}
      <section>
        <h2 className="mb-4 text-lg font-medium">Without close button</h2>
        <ComponentPreview
          code={`<DialogContent showCloseButton={false}>
  ...
</DialogContent>`}
        >
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary">Открыть без крестика</Button>
            </DialogTrigger>
            <DialogContent showCloseButton={false}>
              <DialogHeader>
                <DialogTitle>Только через кнопку в футере</DialogTitle>
                <DialogDescription>
                  Крестик в углу скрыт через showCloseButton={false}.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose asChild>
                  <Button>Понятно, закрыть</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </ComponentPreview>
      </section>
    </div>
  );
}
