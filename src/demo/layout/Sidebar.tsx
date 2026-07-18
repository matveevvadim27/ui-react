import { NavLink } from "react-router-dom";

import { registry, groupByCategory } from "@/demo/registry";

import { cn } from "@/utils/cn";

export function Sidebar() {
  const grouped = groupByCategory(registry);

  return (
    <aside className="border-border bg-background w-64 shrink-0 border-r">
      <div className="px-4 py-5">
        <NavLink to="/" className="text-lg font-semibold tracking-tight">
          UI Kit
        </NavLink>
      </div>

      <nav className="space-y-6 px-2 pb-8">
        {Object.entries(grouped).map(([category, items]) => (
          <div key={category}>
            <p className="text-foreground/50 px-3 pb-2 text-xs font-medium tracking-wide uppercase">
              {category}
            </p>
            <ul className="space-y-0.5">
              {items.map((item) => (
                <li key={item.slug}>
                  <NavLink
                    to={`/components/${item.slug}`}
                    className={({ isActive }) =>
                      cn(
                        "flex items-center justify-between rounded-md px-3 py-1.5 text-sm transition-colors",
                        isActive
                          ? "bg-secondary text-secondary-foreground"
                          : "text-foreground/70 hover:bg-secondary/60 hover:text-foreground",
                      )
                    }
                  >
                    {item.name}
                    {item.status === "planned" && (
                      <span className="text-foreground/40 text-[10px]">soon</span>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
