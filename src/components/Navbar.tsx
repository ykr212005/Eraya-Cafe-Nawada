import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { navLinks, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const overHero = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const solid = scrolled || !overHero;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-500",
        solid
          ? "bg-background/95 shadow-[0_1px_0_0_var(--color-border),0_10px_30px_-28px_oklch(0.32_0.09_22/0.4)] backdrop-blur-sm"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto grid max-w-[1240px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8 lg:py-5">
        <Link
          to="/"
          className="group flex min-w-0 items-baseline gap-2"
          aria-label={`${site.name} — home`}
        >
          <span className="font-display text-[1.55rem] leading-none tracking-[0.16em] text-primary">
            ERAYA
          </span>
          <span
            className={cn(
              "hidden text-[0.6rem] uppercase tracking-[0.3em] sm:inline",
              solid ? "text-muted-foreground" : "text-background/70",
            )}
          >
            Café · Delhi
          </span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className={cn(
                "relative py-1 text-[0.78rem] font-medium uppercase tracking-[0.18em] transition-colors hover:text-primary data-[status=active]:text-primary",
                solid ? "text-foreground/75" : "text-background/85",
              )}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={site.phoneHref}
            className={cn(
              "flex items-center gap-2 text-[0.78rem] font-medium uppercase tracking-[0.18em] transition-colors hover:text-primary",
              solid ? "text-foreground/75" : "text-background/85",
            )}
          >
            <Phone className="h-3.5 w-3.5" strokeWidth={1.6} />
            Call
          </a>
          <Link
            to="/contact"
            hash="reserve"
            className="border border-primary bg-primary px-5 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:border-burgundy hover:bg-burgundy"
          >
            Book a Table
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className={cn(
            "shrink-0 border p-2.5 transition-colors hover:border-primary hover:text-primary lg:hidden",
            solid
              ? "border-border text-foreground"
              : "border-background/30 text-background",
          )}
        >
          {open ? (
            <X className="h-5 w-5" strokeWidth={1.5} />
          ) : (
            <Menu className="h-5 w-5" strokeWidth={1.5} />
          )}
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-border bg-background transition-[max-height,opacity] duration-500 lg:hidden",
          open ? "max-h-[70vh] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="flex flex-col px-5 py-4 sm:px-8">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="border-b border-border/70 py-4 font-display text-2xl text-foreground data-[status=active]:text-primary"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            hash="reserve"
            className="mt-5 bg-primary px-5 py-4 text-center text-[0.74rem] font-semibold uppercase tracking-[0.2em] text-primary-foreground"
          >
            Book a Table
          </Link>
          <p className="py-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Open {site.hoursNote} · {site.hours}
          </p>
        </nav>
      </div>
    </header>
  );
}
