import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, MessageCircle } from "lucide-react";
import { navLinks, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-cream pb-[calc(4.5rem+env(safe-area-inset-bottom))] lg:pb-0">
      <div className="mx-auto max-w-[1240px] px-5 py-14 sm:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_1fr]">
          <div>
            <p className="font-display text-3xl tracking-[0.14em] text-primary">
              CAFE ERAYA
            </p>
            <p className="mt-4 max-w-xs font-display text-xl italic text-foreground/80">
              {site.tagline}
            </p>
            <div className="mt-7 flex items-center gap-3">
              <a
                href={site.instagramHref}
                aria-label="Instagram"
                target="_blank"
                rel="noreferrer"
                className="border border-border p-2.5 text-foreground/70 transition-colors hover:border-primary hover:text-primary"
              >
                <Instagram className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <a
                href={site.facebookHref}
                aria-label="Facebook"
                target="_blank"
                rel="noreferrer"
                className="border border-border p-2.5 text-foreground/70 transition-colors hover:border-primary hover:text-primary"
              >
                <Facebook className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <a
                href={site.whatsappHref}
                aria-label="WhatsApp"
                target="_blank"
                rel="noreferrer"
                className="border border-border p-2.5 text-foreground/70 transition-colors hover:border-primary hover:text-primary"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <nav className="flex flex-col gap-3">
            <p className="mb-2 text-[0.68rem] font-medium uppercase tracking-[0.28em] text-muted-foreground">
              Explore
            </p>
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="w-fit text-sm text-foreground/75 transition-colors hover:text-primary"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="text-sm leading-relaxed text-foreground/75">
            <p className="mb-3 text-[0.68rem] font-medium uppercase tracking-[0.28em] text-muted-foreground">
              Visit
            </p>
            <address className="not-italic">
              {site.address.line1}
              <br />
              {site.address.line2}
              <br />
              {site.address.city} – {site.address.pincode}
            </address>
            <p className="mt-4">
              {site.hoursNote}, {site.hours}
            </p>
            <a
              href={site.phoneHref}
              className="mt-1 block transition-colors hover:text-primary"
            >
              {site.phoneDisplay}
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Cafe Eraya. All Rights Reserved.</p>
          <p>{site.cuisines.join(" · ")}</p>
        </div>
      </div>
    </footer>
  );
}
