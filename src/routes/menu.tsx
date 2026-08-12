import { createFileRoute, Link } from "@tanstack/react-router";
import { Eyebrow } from "@/components/Eyebrow";
import { MenuList } from "@/components/MenuList";
import { site } from "@/lib/site";

const title = "Menu — Cafe Eraya, Mohan Garden, New Delhi";
const description =
  "Explore the Cafe Eraya menu: Indo-Chinese, continental, chaat, healthy bowls, desserts and coffee, with prices. Café near Dwarka Mor, New Delhi.";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/menu" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
  component: MenuPage,
});

function MenuPage() {
  return (
    <>
      <section className="bg-cream pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <Eyebrow>The Eraya Menu</Eyebrow>
          <h1 className="mt-6 max-w-2xl font-display text-[2.4rem] leading-[1.06] text-foreground sm:text-[3.2rem]">
            Made fresh, priced fairly, served all day.
          </h1>
          <p className="mt-6 max-w-xl leading-relaxed text-foreground/70">
            {site.hoursNote}, {site.hours} · {site.costForTwo}. Prices are
            indicative and may change with season and availability.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/contact"
              hash="reserve"
              className="bg-primary px-7 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-burgundy"
            >
              Book a Table
            </Link>
            <a
              href={site.phoneHref}
              className="border border-foreground/20 px-7 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Call to Order
            </a>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <MenuList />
        </div>
      </section>
    </>
  );
}
