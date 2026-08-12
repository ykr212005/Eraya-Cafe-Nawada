import { useEffect, useMemo, useRef, useState } from "react";
import { X, Search } from "lucide-react";
import { menu, menuCategories, type MenuCategory } from "@/lib/menu-data";
import { cn } from "@/lib/utils";

const slug = (c: string) => c.toLowerCase().replace(/[^a-z]+/g, "-");

export function MobileMenuDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<MenuCategory>(menuCategories[0]!);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  const groups = useMemo(() => {
    const q = query.trim().toLowerCase();
    return menuCategories
      .map((c) => ({
        category: c,
        items: menu.filter(
          (m) =>
            m.category === c &&
            (q === "" ||
              m.name.toLowerCase().includes(q) ||
              m.description.toLowerCase().includes(q)),
        ),
      }))
      .filter((g) => g.items.length > 0);
  }, [query]);

  // Track which section is in view while scrolling.
  useEffect(() => {
    if (!open) return;
    const root = scrollRef.current;
    if (!root) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        const c = visible?.target.getAttribute("data-category") as MenuCategory | null;
        if (c) setActive(c);
      },
      { root, rootMargin: "-96px 0px -70% 0px", threshold: 0 },
    );
    root
      .querySelectorAll("[data-category]")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [open, groups]);

  const jumpTo = (c: MenuCategory) => {
    setActive(c);
    const el = scrollRef.current?.querySelector(`#drawer-${slug(c)}`);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Cafe Eraya menu"
      className={cn(
        "fixed inset-0 z-[60] flex flex-col bg-background transition-[opacity,transform] duration-300 lg:hidden",
        open
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <div className="flex items-center justify-between gap-4 border-b border-border px-5 pb-4 pt-[calc(1rem+env(safe-area-inset-top))]">
        <div className="min-w-0">
          <p className="font-display text-xl leading-none text-primary">Our Menu</p>
          <p className="mt-1 truncate text-[0.62rem] uppercase tracking-[0.22em] text-muted-foreground">
            {menu.length} dishes · served all day
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="shrink-0 border border-border p-2.5 text-foreground"
        >
          <X className="h-5 w-5" strokeWidth={1.5} />
        </button>
      </div>

      <div className="border-b border-border bg-cream px-5 py-3">
        <label className="flex items-center gap-3 border border-border bg-background px-3.5 py-3">
          <Search className="h-4 w-4 shrink-0 text-primary" strokeWidth={1.7} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search dishes…"
            className="w-full bg-transparent text-sm text-foreground placeholder:text-foreground/40 focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="text-[0.6rem] uppercase tracking-[0.18em] text-muted-foreground"
            >
              Clear
            </button>
          )}
        </label>

        <div className="-mx-5 mt-3 flex gap-2 overflow-x-auto px-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {menuCategories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => jumpTo(c)}
              aria-pressed={active === c}
              className={cn(
                "shrink-0 border px-4 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.18em] transition-colors",
                active === c
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background text-foreground/70",
              )}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto overscroll-contain scroll-smooth pb-[calc(5.5rem+env(safe-area-inset-bottom))]"
      >
        {groups.map((g) => (
          <section
            key={g.category}
            id={`drawer-${slug(g.category)}`}
            data-category={g.category}
            className="scroll-mt-2 px-5 pt-7"
          >
            <h2 className="font-display text-[0.72rem] uppercase tracking-[0.28em] text-primary">
              {g.category}
            </h2>
            <ul className="mt-4 divide-y divide-border/70">
              {g.items.map((item) => (
                <li key={item.name} className="py-4">
                  <div className="flex items-baseline gap-3">
                    <h3 className="min-w-0 font-display text-lg text-foreground">
                      {item.name}
                    </h3>
                    {item.veg && (
                      <span
                        aria-label="Vegetarian"
                        className="grid h-3.5 w-3.5 shrink-0 place-items-center border border-[oklch(0.55_0.13_145)]"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.55_0.13_145)]" />
                      </span>
                    )}
                    <span className="ml-auto shrink-0 font-display text-base text-primary">
                      {item.price}
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-foreground/60">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        ))}

        {groups.length === 0 && (
          <p className="px-5 py-12 text-sm text-muted-foreground">
            No dishes match “{query}”. Try another search.
          </p>
        )}
      </div>
    </div>
  );
}
