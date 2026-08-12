import { useMemo, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { menu, menuCategories, type MenuCategory } from "@/lib/menu-data";
import { cn } from "@/lib/utils";

type Filter = "All" | MenuCategory;

export function MenuList({ compact = false }: { compact?: boolean }) {
  const [filter, setFilter] = useState<Filter>("All");

  const items = useMemo(() => {
    const base = compact ? menu.filter((m) => m.featured) : menu;
    return filter === "All" ? base : base.filter((m) => m.category === filter);
  }, [filter, compact]);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {(["All", ...menuCategories] as Filter[]).map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setFilter(c)}
            aria-pressed={filter === c}
            className={cn(
              "border px-5 py-2.5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] transition-colors",
              filter === c
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border text-foreground/70 hover:border-primary hover:text-primary",
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <ul className="mt-12 grid gap-x-16 gap-y-9 md:grid-cols-2">
        {items.map((item, i) => (
          <Reveal as="li" key={item.name} delay={(i % 4) * 70}>
            <div className="flex items-baseline gap-4">
              <h3 className="font-display text-xl text-foreground">
                {item.name}
              </h3>
              {item.veg && (
                <span
                  title="Vegetarian"
                  aria-label="Vegetarian"
                  className="grid h-3.5 w-3.5 shrink-0 place-items-center border border-[oklch(0.55_0.13_145)]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.55_0.13_145)]" />
                </span>
              )}
              <span
                aria-hidden
                className="mx-1 h-px flex-1 border-b border-dashed border-border"
              />
              <span className="shrink-0 font-display text-lg text-primary">
                {item.price}
              </span>
            </div>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-foreground/60">
              {item.description}
            </p>
          </Reveal>
        ))}
      </ul>

      {items.length === 0 && (
        <p className="mt-12 text-sm text-muted-foreground">
          Nothing here yet — try another category.
        </p>
      )}
    </div>
  );
}
