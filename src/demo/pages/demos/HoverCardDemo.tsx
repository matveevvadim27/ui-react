import { CalendarDays } from "lucide-react";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/ui/hover-card";
import { Avatar, AvatarImage, AvatarFallback } from "@/ui/avatar";
import { Separator } from "@/ui/separator";
import { ComponentPreview } from "@/demo/components/ComponentPreview";

export function HoverCardDemo() {
  return (
    <div className="space-y-10">
      {/* Базовый пример — превью профиля */}
      <section>
        <h2 className="mb-4 text-lg font-medium">Basic (profile preview)</h2>
        <p className="mb-3 text-sm text-muted-foreground">
          Наведи на ссылку — в отличие от Popover открывается по hover, а не
          клику, но при этом может содержать сложный контент, как здесь.
        </p>
        <ComponentPreview
          className="items-start justify-start"
          code={`<HoverCard>
  <HoverCardTrigger asChild>
    <a href="#" className="text-sm font-medium underline underline-offset-4">
      @radix_ui
    </a>
  </HoverCardTrigger>
  <HoverCardContent>
    <div className="flex gap-3">
      <Avatar>
        <AvatarImage src="..." alt="Radix UI" />
        <AvatarFallback>RX</AvatarFallback>
      </Avatar>
      <div className="space-y-1">
        <h4 className="text-sm font-semibold">Radix UI</h4>
        <p className="text-sm text-muted-foreground">
          Headless-примитивы для React с фокусом на доступность.
        </p>
        <div className="flex items-center gap-1 pt-1">
          <CalendarDays className="size-3.5 opacity-70" />
          <span className="text-xs text-muted-foreground">
            Joined March 2021
          </span>
        </div>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>`}
        >
          <HoverCard>
            <HoverCardTrigger asChild>
              <a
                href="#"
                className="text-sm font-medium underline underline-offset-4"
              >
                @radix_ui
              </a>
            </HoverCardTrigger>
            <HoverCardContent>
              <div className="flex gap-3">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/radix-ui.png"
                    alt="Radix UI"
                  />
                  <AvatarFallback>RX</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">Radix UI</h4>
                  <p className="text-sm text-muted-foreground">
                    Headless-примитивы для React с фокусом на доступность.
                  </p>
                  <div className="flex items-center gap-1 pt-1">
                    <CalendarDays className="size-3.5 opacity-70" />
                    <span className="text-xs text-muted-foreground">
                      Joined March 2021
                    </span>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </ComponentPreview>
      </section>

      {/* Кастомные задержки */}
      <section>
        <h2 className="mb-4 text-lg font-medium">Custom delays</h2>
        <p className="mb-3 text-sm text-muted-foreground">
          openDelay/closeDelay задаются на каждом HoverCard отдельно — в
          отличие от Tooltip, тут нет единого Provider на всё приложение.
        </p>
        <ComponentPreview className="items-start justify-start">
          <HoverCard openDelay={0} closeDelay={0}>
            <HoverCardTrigger asChild>
              <a
                href="#"
                className="text-sm font-medium underline underline-offset-4"
              >
                Без задержки
              </a>
            </HoverCardTrigger>
            <HoverCardContent>
              <p className="text-sm">Открылось мгновенно, openDelay={0}.</p>
            </HoverCardContent>
          </HoverCard>
        </ComponentPreview>
      </section>

      {/* Пользователь с интерактивным контентом внутри */}
      <section>
        <h2 className="mb-4 text-lg font-medium">Interactive content</h2>
        <p className="mb-3 text-sm text-muted-foreground">
          Курсор можно переместить с триггера на сам HoverCard, не закрывая
          его — можно кликать по ссылкам внутри.
        </p>
        <ComponentPreview className="items-start justify-start">
          <HoverCard>
            <HoverCardTrigger asChild>
              <div className="flex cursor-pointer items-center gap-2">
                <Avatar size="sm">
                  <AvatarFallback>ЖД</AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium">Женя Дизайнер</span>
              </div>
            </HoverCardTrigger>
            <HoverCardContent>
              <div className="space-y-2">
                <div className="flex gap-3">
                  <Avatar>
                    <AvatarFallback>ЖД</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-semibold">Женя Дизайнер</p>
                    <p className="text-sm text-muted-foreground">
                      Product Designer
                    </p>
                  </div>
                </div>
                <Separator />
                <a href="#" className="text-sm text-primary hover:underline">
                  Открыть профиль →
                </a>
              </div>
            </HoverCardContent>
          </HoverCard>
        </ComponentPreview>
      </section>
    </div>
  );
}