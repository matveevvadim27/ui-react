import { useEffect, useState } from "react";
import { Progress } from "@/ui/progress";
import { Button } from "@/ui/button";
import { ComponentPreview } from "@/demo/components/ComponentPreview";

export function ProgressDemo() {
  const [autoProgress, setAutoProgress] = useState(0);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  // Имитация фонового прогресса, обновляется сам по себе
  useEffect(() => {
    const timeout = setTimeout(() => setAutoProgress(78), 600);
    return () => clearTimeout(timeout);
  }, []);

  // Имитация загрузки файла по клику
  function startUpload() {
    setIsUploading(true);
    setUploadProgress(0);

    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  }

  return (
    <div className="space-y-10">
      {/* Базовый пример */}
      <section>
        <h2 className="mb-4 text-lg font-medium">Basic</h2>
        <p className="text-muted-foreground mb-3 text-sm">
          Заполнение анимируется через transform, а не width — плавно, без нагрузки на
          layout браузера.
        </p>
        <ComponentPreview
          className="flex-col items-start"
          code={`<Progress value={60} />`}
        >
          <Progress value={autoProgress} className="w-full max-w-md" />
        </ComponentPreview>
      </section>

      {/* Разные значения рядом для сравнения */}
      <section>
        <h2 className="mb-4 text-lg font-medium">Values</h2>
        <ComponentPreview className="flex-col items-start gap-4">
          <div className="w-full max-w-md space-y-1">
            <p className="text-muted-foreground text-sm">25%</p>
            <Progress value={25} />
          </div>
          <div className="w-full max-w-md space-y-1">
            <p className="text-muted-foreground text-sm">50%</p>
            <Progress value={50} />
          </div>
          <div className="w-full max-w-md space-y-1">
            <p className="text-muted-foreground text-sm">90%</p>
            <Progress value={90} />
          </div>
          <div className="w-full max-w-md space-y-1">
            <p className="text-muted-foreground text-sm">100%</p>
            <Progress value={100} />
          </div>
        </ComponentPreview>
      </section>

      {/* Индетерминированное состояние — value отсутствует */}
      <section>
        <h2 className="mb-4 text-lg font-medium">Without value</h2>
        <p className="text-muted-foreground mb-3 text-sm">
          Без value индикатор рендерится пустым (0%) — для состояния "неизвестно сколько
          осталось" стоит использовать отдельный индикатор загрузки (спиннер), а не
          Progress.
        </p>
        <ComponentPreview className="flex-col items-start">
          <Progress className="w-full max-w-md" />
        </ComponentPreview>
      </section>

      {/* Реалистичный кейс — загрузка файла по кнопке */}
      <section>
        <h2 className="mb-4 text-lg font-medium">File upload simulation</h2>
        <ComponentPreview className="flex-col items-start gap-3">
          <Button onClick={startUpload} disabled={isUploading} size="sm">
            {isUploading ? "Загрузка..." : "Начать загрузку"}
          </Button>
          <div className="w-full max-w-md space-y-1">
            <div className="text-muted-foreground flex justify-between text-sm">
              <span>document.pdf</span>
              <span>{uploadProgress}%</span>
            </div>
            <Progress value={uploadProgress} />
          </div>
        </ComponentPreview>
      </section>
    </div>
  );
}
