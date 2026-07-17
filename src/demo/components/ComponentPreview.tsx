import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface ComponentPreviewProps {
  children: ReactNode;
  code?: string;
  className?: string;
}

export function ComponentPreview({ children, code, className }: ComponentPreviewProps) {
  return (
    <div className="border-border overflow-hidden rounded-lg border">
      <div
        className={cn(
          "bg-secondary/30 flex min-h-40 items-center justify-center gap-4 p-8",
          className,
        )}
      >
        {children}
      </div>
      {code && (
        <pre className="border-border bg-background overflow-x-auto border-t p-4 text-sm">
          <code>{code}</code>
        </pre>
      )}
    </div>
  );
}

interface VariantRowProps {
  label: string;
  children: ReactNode;
}

export function VariantRow({ label, children }: VariantRowProps) {
  return (
    <div className="border-border flex items-center gap-4 border-b py-4 last:border-0">
      <span className="text-foreground/60 w-24 shrink-0 text-sm">{label}</span>
      <div className="flex flex-wrap items-center gap-3">{children}</div>
    </div>
  );
}
