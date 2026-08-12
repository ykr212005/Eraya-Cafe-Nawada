import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle, UtensilsCrossed, BookOpen } from "lucide-react";
import { site } from "@/lib/site";
import { MobileMenuDrawer } from "@/components/MobileMenuDrawer";

export function MobileActionBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <MobileMenuDrawer open={menuOpen} onClose={() => setMenuOpen(false)} />
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/97 pb-[env(safe-area-inset-bottom)] backdrop-blur-sm lg:hidden">
        <div className="grid grid-cols-4 divide-x divide-border">
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-expanded={menuOpen}
            className="flex flex-col items-center gap-1 py-3 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-foreground/80"
          >
            <BookOpen className="h-4 w-4 text-primary" strokeWidth={1.6} />
            Menu
          </button>
          <a
            href={site.phoneHref}
            className="flex flex-col items-center gap-1 py-3 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-foreground/80"
          >
            <Phone className="h-4 w-4 text-primary" strokeWidth={1.6} />
            Call
          </a>
          <a
            href={site.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center gap-1 py-3 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-foreground/80"
          >
            <MessageCircle className="h-4 w-4 text-primary" strokeWidth={1.6} />
            WhatsApp
          </a>
          <Link
            to="/contact"
            hash="reserve"
            className="flex flex-col items-center gap-1 bg-primary py-3 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-primary-foreground"
          >
            <UtensilsCrossed className="h-4 w-4" strokeWidth={1.6} />
            Book
          </Link>
        </div>
      </div>
    </>
  );
}
