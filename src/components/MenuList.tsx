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
      <div className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
        {(["All", ...menuCategories] as Filter[]).map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setFilter(c)}
            aria-pressed={filter === c}
            className={cn(
              "shrink-0 border px-4 py-2.5 sm:px-5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] transition-colors",
              filter === c
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border text-foreground/70 hover:border-primary hover:text-primary",
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <ul className="mt-8 grid gap-x-16 gap-y-9 sm:mt-12 sm:gap-y-10 md:grid-cols-2">
        {items.map((item, i) => (
          <Reveal as="li" key={item.name} delay={(i % 4) * 70}>
            <div className="flex items-baseline gap-3 sm:gap-4">
              <h3 className="min-w-0 font-display text-lg text-foreground sm:text-xl">
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
                className="mx-1 hidden h-px flex-1 border-b border-dashed border-border sm:block"
              />
              <span className="ml-auto shrink-0 font-display text-base text-primary sm:ml-0 sm:text-lg">
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
