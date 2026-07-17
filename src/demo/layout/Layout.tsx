import { Outlet } from "react-router-dom";
import { Sidebar } from "@/demo/layout/Sidebar";

export function Layout() {
  return (
    <div className="bg-background text-foreground flex min-h-screen">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-4xl px-8 py-10">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
