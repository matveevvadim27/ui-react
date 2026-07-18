import { useState } from "react";
import {
  User,
  CreditCard,
  Settings,
  LogOut,
  GitGraph,
  Mail,
  Plus,
  Sun,
  Moon,
  Laptop,
} from "lucide-react";
import { Button } from "@/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuRadioGroup,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "@/ui/dropdown-menu";
import { ComponentPreview } from "@/demo/components/ComponentPreview";

export function DropdownMenuDemo() {
  const [showStatusBar, setShowStatusBar] = useState(true);
  const [showActivityBar, setShowActivityBar] = useState(false);
  const [theme, setTheme] = useState("system");

  return (
    <div className="space-y-10">
      {/* Базовое меню действий */}
      <section>
        <h2 className="mb-4 text-lg font-medium">Basic</h2>
        <p className="text-muted-foreground mb-3 text-sm">
          Навигация стрелками ↑/↓, закрытие по Esc, выбор через Enter/клик.
        </p>
        <ComponentPreview
          code={`<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Открыть меню</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Мой аккаунт</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
      <User />
      Профиль
      <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
    </DropdownMenuItem>
    <DropdownMenuItem>
      <CreditCard />
      Оплата
    </DropdownMenuItem>
    <DropdownMenuItem>
      <Settings />
      Настройки
    </DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem variant="destructive">
      <LogOut />
      Выйти
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`}
        >
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Открыть меню</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Мой аккаунт</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <User />
                  Профиль
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CreditCard />
                  Оплата
                  <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings />
                  Настройки
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">
                <LogOut />
                Выйти
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </ComponentPreview>
      </section>

      {/* Checkbox items */}
      <section>
        <h2 className="mb-4 text-lg font-medium">Checkbox items</h2>
        <ComponentPreview
          code={`<DropdownMenuCheckboxItem
  checked={showStatusBar}
  onCheckedChange={setShowStatusBar}
>
  Показывать статус-бар
</DropdownMenuCheckboxItem>`}
        >
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Вид</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Панели</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem
                checked={showStatusBar}
                onCheckedChange={setShowStatusBar}
              >
                Статус-бар
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={showActivityBar}
                onCheckedChange={setShowActivityBar}
              >
                Панель активности
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </ComponentPreview>
      </section>

      {/* Radio group */}
      <section>
        <h2 className="mb-4 text-lg font-medium">Radio group</h2>
        <ComponentPreview
          code={`<DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
  <DropdownMenuRadioItem value="light">Светлая</DropdownMenuRadioItem>
  <DropdownMenuRadioItem value="dark">Тёмная</DropdownMenuRadioItem>
  <DropdownMenuRadioItem value="system">Системная</DropdownMenuRadioItem>
</DropdownMenuRadioGroup>`}
        >
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Тема: {theme}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Выберите тему</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
                <DropdownMenuRadioItem value="light">
                  <Sun />
                  Светлая
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="dark">
                  <Moon />
                  Тёмная
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="system">
                  <Laptop />
                  Системная
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </ComponentPreview>
      </section>

      {/* Sub-меню */}
      <section>
        <h2 className="mb-4 text-lg font-medium">Nested submenu</h2>
        <p className="text-muted-foreground mb-3 text-sm">
          Наведи на «Пригласить пользователей» — откроется вложенное меню.
        </p>
        <ComponentPreview
          code={`<DropdownMenuSub>
  <DropdownMenuSubTrigger>
    <Plus />
    Пригласить пользователей
  </DropdownMenuSubTrigger>
  <DropdownMenuSubContent>
    <DropdownMenuItem><Mail />Email</DropdownMenuItem>
    <DropdownMenuItem><Github />GitHub</DropdownMenuItem>
  </DropdownMenuSubContent>
</DropdownMenuSub>`}
        >
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Команда</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <User />
                Участники
              </DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <Plus />
                  Пригласить пользователей
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>
                    <Mail />
                    Email
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <GitGraph />
                    GitHub
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
            </DropdownMenuContent>
          </DropdownMenu>
        </ComponentPreview>
      </section>
    </div>
  );
}
