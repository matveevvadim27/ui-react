import { useState } from "react";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarCheckboxItem,
  MenubarRadioItem,
  MenubarLabel,
  MenubarSeparator,
  MenubarShortcut,
  MenubarGroup,
  MenubarRadioGroup,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
} from "@/ui/menubar";
import { ComponentPreview } from "@/demo/components/ComponentPreview";

export function MenubarDemo() {
  const [showBookmarks, setShowBookmarks] = useState(true);
  const [showFullUrls, setShowFullUrls] = useState(false);
  const [profile, setProfile] = useState("default");

  return (
    <div className="space-y-10">
      {/* Базовый пример — File/Edit/View */}
      <section>
        <h2 className="mb-4 text-lg font-medium">Basic</h2>
        <p className="text-muted-foreground mb-3 text-sm">
          Кликни по «File», затем наведи (не кликая) на «Edit» — меню переключится само,
          без повторного клика. Это roving tabindex между корневыми пунктами.
        </p>
        <ComponentPreview
          className="items-start justify-start"
          code={`<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
        New Tab <MenubarShortcut>⌘T</MenubarShortcut>
      </MenubarItem>
      <MenubarItem>
        New Window <MenubarShortcut>⌘N</MenubarShortcut>
      </MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Share</MenubarItem>
      <MenubarSeparator />
      <MenubarItem variant="destructive">Close Window</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
  <MenubarMenu>
    <MenubarTrigger>Edit</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
        Undo <MenubarShortcut>⌘Z</MenubarShortcut>
      </MenubarItem>
      <MenubarItem>
        Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
      </MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`}
        >
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>File</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  New Window <MenubarShortcut>⌘N</MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Share</MenubarItem>
                <MenubarSeparator />
                <MenubarItem variant="destructive">Close Window</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Edit</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  Undo <MenubarShortcut>⌘Z</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </ComponentPreview>
      </section>

      {/* Checkbox / Radio + подменю в одном View-меню */}
      <section>
        <h2 className="mb-4 text-lg font-medium">Checkbox, radio & submenu</h2>
        <ComponentPreview className="items-start justify-start">
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>View</MenubarTrigger>
              <MenubarContent>
                <MenubarCheckboxItem
                  checked={showBookmarks}
                  onCheckedChange={setShowBookmarks}
                >
                  Показывать закладки
                </MenubarCheckboxItem>
                <MenubarCheckboxItem
                  checked={showFullUrls}
                  onCheckedChange={setShowFullUrls}
                >
                  Показывать полные URL
                </MenubarCheckboxItem>
                <MenubarSeparator />
                <MenubarSub>
                  <MenubarSubTrigger>Профиль</MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarRadioGroup value={profile} onValueChange={setProfile}>
                      <MenubarRadioItem value="default">По умолчанию</MenubarRadioItem>
                      <MenubarRadioItem value="work">Рабочий</MenubarRadioItem>
                      <MenubarRadioItem value="personal">Личный</MenubarRadioItem>
                    </MenubarRadioGroup>
                  </MenubarSubContent>
                </MenubarSub>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Help</MenubarTrigger>
              <MenubarContent>
                <MenubarGroup>
                  <MenubarLabel>Поддержка</MenubarLabel>
                  <MenubarItem>Документация</MenubarItem>
                  <MenubarItem>Сообщить о проблеме</MenubarItem>
                </MenubarGroup>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
          <p className="text-muted-foreground mt-3 text-sm">
            Профиль: <strong>{profile}</strong>
          </p>
        </ComponentPreview>
      </section>
    </div>
  );
}
