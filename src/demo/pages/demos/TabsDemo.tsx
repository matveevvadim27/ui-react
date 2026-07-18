import { useState } from "react";
import { User, Lock, Bell, CreditCard } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/ui/tabs";
import { Button } from "@/ui/button";
import { ComponentPreview } from "@/demo/components/ComponentPreview";

export function TabsDemo() {
  const [tab, setTab] = useState("account");

  return (
    <div className="space-y-10">
      {/* Базовые табы */}
      <section>
        <h2 className="mb-4 text-lg font-medium">Basic</h2>
        <p className="text-muted-foreground mb-3 text-sm">
          Дойди до табов клавиатурой (Tab), дальше переключайся стрелками ←/→ — фокус
          остаётся внутри группы, Tab уводит на следующий элемент страницы.
        </p>
        <ComponentPreview
          code={`<Tabs defaultValue="account" className="w-full">
  <TabsList>
    <TabsTrigger value="account">Аккаунт</TabsTrigger>
    <TabsTrigger value="password">Пароль</TabsTrigger>
    <TabsTrigger value="notifications">Уведомления</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    Настройки профиля и личных данных.
  </TabsContent>
  <TabsContent value="password">
    Смена пароля и двухфакторная аутентификация.
  </TabsContent>
  <TabsContent value="notifications">
    Настройка email и push-уведомлений.
  </TabsContent>
</Tabs>`}
          className="items-start justify-start"
        >
          <Tabs defaultValue="account" className="w-full">
            <TabsList>
              <TabsTrigger value="account">Аккаунт</TabsTrigger>
              <TabsTrigger value="password">Пароль</TabsTrigger>
              <TabsTrigger value="notifications">Уведомления</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              <p className="text-sm">Настройки профиля и личных данных.</p>
            </TabsContent>
            <TabsContent value="password">
              <p className="text-sm">Смена пароля и двухфакторная аутентификация.</p>
            </TabsContent>
            <TabsContent value="notifications">
              <p className="text-sm">Настройка email и push-уведомлений.</p>
            </TabsContent>
          </Tabs>
        </ComponentPreview>
      </section>

      {/* С иконками */}
      <section>
        <h2 className="mb-4 text-lg font-medium">With icons</h2>
        <ComponentPreview className="items-start justify-start">
          <Tabs defaultValue="profile" className="w-full">
            <TabsList>
              <TabsTrigger value="profile">
                <User />
                Профиль
              </TabsTrigger>
              <TabsTrigger value="security">
                <Lock />
                Безопасность
              </TabsTrigger>
              <TabsTrigger value="billing">
                <CreditCard />
                Оплата
              </TabsTrigger>
            </TabsList>
            <TabsContent value="profile">
              <p className="text-sm">Имя, аватар, контактные данные.</p>
            </TabsContent>
            <TabsContent value="security">
              <p className="text-sm">Пароль, сессии, 2FA.</p>
            </TabsContent>
            <TabsContent value="billing">
              <p className="text-sm">Способы оплаты и история платежей.</p>
            </TabsContent>
          </Tabs>
        </ComponentPreview>
      </section>

      {/* Disabled таб */}
      <section>
        <h2 className="mb-4 text-lg font-medium">Disabled tab</h2>
        <p className="text-muted-foreground mb-3 text-sm">
          Стрелки автоматически пропускают disabled-таб при навигации.
        </p>
        <ComponentPreview className="items-start justify-start">
          <Tabs defaultValue="active-1" className="w-full">
            <TabsList>
              <TabsTrigger value="active-1">Доступно</TabsTrigger>
              <TabsTrigger value="disabled" disabled>
                <Bell />
                Скоро
              </TabsTrigger>
              <TabsTrigger value="active-2">Тоже доступно</TabsTrigger>
            </TabsList>
            <TabsContent value="active-1">
              <p className="text-sm">Первая доступная вкладка.</p>
            </TabsContent>
            <TabsContent value="active-2">
              <p className="text-sm">Вторая доступная вкладка.</p>
            </TabsContent>
          </Tabs>
        </ComponentPreview>
      </section>

      {/* Вертикальная ориентация */}
      <section>
        <h2 className="mb-4 text-lg font-medium">Vertical orientation</h2>
        <p className="text-muted-foreground mb-3 text-sm">
          При orientation="vertical" навигация идёт стрелками ↑/↓ вместо ←/→.
        </p>
        <ComponentPreview className="items-start justify-start">
          <Tabs
            defaultValue="general"
            orientation="vertical"
            className="flex w-full gap-4"
          >
            <TabsList className="h-auto flex-col">
              <TabsTrigger value="general" className="w-full justify-start">
                Общие
              </TabsTrigger>
              <TabsTrigger value="team" className="w-full justify-start">
                Команда
              </TabsTrigger>
              <TabsTrigger value="billing" className="w-full justify-start">
                Оплата
              </TabsTrigger>
            </TabsList>
            <div className="flex-1">
              <TabsContent value="general">
                <p className="text-sm">Общие настройки проекта.</p>
              </TabsContent>
              <TabsContent value="team">
                <p className="text-sm">Управление участниками команды.</p>
              </TabsContent>
              <TabsContent value="billing">
                <p className="text-sm">Тарифы и способы оплаты.</p>
              </TabsContent>
            </div>
          </Tabs>
        </ComponentPreview>
      </section>

      {/* Controlled */}
      <section>
        <h2 className="mb-4 text-lg font-medium">Controlled</h2>
        <p className="text-muted-foreground mb-3 text-sm">
          Активная вкладка переключается снаружи, например по клику на кнопку.
        </p>
        <ComponentPreview className="flex-col items-start gap-3">
          <div className="flex gap-2">
            <Button size="sm" variant="outline" onClick={() => setTab("account")}>
              Открыть «Аккаунт»
            </Button>
            <Button size="sm" variant="outline" onClick={() => setTab("password")}>
              Открыть «Пароль»
            </Button>
          </div>
          <Tabs value={tab} onValueChange={setTab} className="w-full">
            <TabsList>
              <TabsTrigger value="account">Аккаунт</TabsTrigger>
              <TabsTrigger value="password">Пароль</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              <p className="text-sm">Текущая вкладка: аккаунт.</p>
            </TabsContent>
            <TabsContent value="password">
              <p className="text-sm">Текущая вкладка: пароль.</p>
            </TabsContent>
          </Tabs>
        </ComponentPreview>
      </section>
    </div>
  );
}
