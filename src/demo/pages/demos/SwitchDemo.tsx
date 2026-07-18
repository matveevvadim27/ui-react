import { useState } from "react";
import { Bell, Moon, Sun, Wifi } from "lucide-react";
import { Switch } from "@/ui/switch";
import { ComponentPreview } from "@/demo/components/ComponentPreview";

export function SwitchDemo() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="space-y-10">
      {/* Базовый switch с label */}
      <section>
        <h2 className="mb-4 text-lg font-medium">Basic</h2>
        <p className="text-muted-foreground mb-3 text-sm">
          Клик по тексту тоже переключает switch — та же связка через htmlFor/id, что и у
          Checkbox.
        </p>
        <ComponentPreview
          className="items-start justify-start"
          code={`<div className="flex items-center gap-2">
  <Switch id="airplane-mode" />
  <label htmlFor="airplane-mode" className="text-sm font-medium">
    Режим полёта
  </label>
</div>`}
        >
          <div className="flex items-center gap-2">
            <Switch id="airplane-mode" />
            <label htmlFor="airplane-mode" className="text-sm font-medium">
              Режим полёта
            </label>
          </div>
        </ComponentPreview>
      </section>

      {/* Disabled */}
      <section>
        <h2 className="mb-4 text-lg font-medium">Disabled</h2>
        <ComponentPreview className="flex-col items-start gap-3">
          <div className="flex items-center gap-2">
            <Switch id="disabled-off" disabled />
            <label
              htmlFor="disabled-off"
              className="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Недоступно (выключено)
            </label>
          </div>
          <div className="flex items-center gap-2">
            <Switch id="disabled-on" disabled defaultChecked />
            <label
              htmlFor="disabled-on"
              className="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Недоступно (включено)
            </label>
          </div>
        </ComponentPreview>
      </section>

      {/* Список настроек — типичный кейс использования */}
      <section>
        <h2 className="mb-4 text-lg font-medium">Settings list</h2>
        <p className="text-muted-foreground mb-3 text-sm">
          Текущее состояние выводится рядом — проверка controlled-режима.
        </p>
        <div className="border-border w-full max-w-md space-y-4 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bell className="text-muted-foreground size-4" />
              <span className="text-sm font-medium">Уведомления</span>
            </div>
            <Switch
              checked={notifications}
              onCheckedChange={setNotifications}
              aria-label="Уведомления"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {darkMode ? (
                <Moon className="text-muted-foreground size-4" />
              ) : (
                <Sun className="text-muted-foreground size-4" />
              )}
              <span className="text-sm font-medium">Тёмная тема</span>
            </div>
            <Switch
              checked={darkMode}
              onCheckedChange={setDarkMode}
              aria-label="Тёмная тема"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Wifi className="text-muted-foreground size-4" />
              <span className="text-sm font-medium">Wi-Fi</span>
            </div>
            <Switch defaultChecked aria-label="Wi-Fi" />
          </div>
        </div>
        <p className="text-muted-foreground mt-3 text-sm">
          Уведомления: <strong>{notifications ? "включены" : "выключены"}</strong>, тема:{" "}
          <strong>{darkMode ? "тёмная" : "светлая"}</strong>
        </p>
      </section>
    </div>
  );
}
