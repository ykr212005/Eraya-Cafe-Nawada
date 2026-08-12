import { Instagram } from "lucide-react";
import g1 from "@/assets/gallery-1.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g6 from "@/assets/gallery-6.jpg";
import coffee from "@/assets/dish-coffee.jpg";
import dessert from "@/assets/dish-dessert.jpg";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

const posts = [
  { src: coffee, alt: "Hazelnut cold coffee at Cafe Eraya" },
  { src: g1, alt: "Latte art being poured" },
  { src: dessert, alt: "Molten chocolate cake" },
  { src: g4, alt: "Dessert counter" },
  { src: g3, alt: "Table setting detail" },
  { src: g6, alt: "Cozy corner seat" },
];

export function InstagramStrip() {
  return (
    <section className="bg-cream py-20 lg:py-24">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal className="min-w-0">
            <Eyebrow>Follow the Eraya moments</Eyebrow>
            <h2 className="mt-6 font-display text-[1.9rem] leading-tight text-foreground sm:text-[2.3rem]">
              {site.instagram.toUpperCase()}
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <a
              href={site.instagramHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center gap-2 border border-foreground/20 px-6 py-3.5 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Instagram className="h-4 w-4" strokeWidth={1.5} />
              Follow Us
            </a>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {posts.map((p, i) => (
            <Reveal
              key={p.alt}
              delay={i * 70}
              className="group relative aspect-square overflow-hidden"
            >
              <a
                href={site.instagramHref}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${site.instagram} on Instagram`}
                className="block h-full w-full"
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.07]"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-burgundy/55 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <Instagram
                    className="h-5 w-5 text-cream"
                    strokeWidth={1.5}
                  />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
