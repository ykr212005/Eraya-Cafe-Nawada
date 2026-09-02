import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import interior from "@/assets/interior.jpg";
import chaat from "@/assets/dish-chaat.jpg";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

/*
 * Layout tiles perfectly in a 3-column grid (no gaps):
 * row 1-2: [ interior 2x2 ][ g1 ] / [ g2 ]
 * row 3:   [ g3 ][ g4 2-wide ]
 * row 4-5: [ g6 2x2 ][ chaat ] / [ g5 ]   (only when `full`)
 */
const shots = [
  {
    src: interior,
    caption: "Afternoon light indoors",
    span: "sm:col-span-2 sm:row-span-2",
  },
  { src: g1, caption: "Every cup, poured to order", span: "" },
  { src: g2, caption: "Tables made for sharing", span: "" },
  { src: g3, caption: "Details on the table", span: "" },
  { src: g4, caption: "The dessert counter", span: "sm:col-span-2" },
  {
    src: g6,
    caption: "Our corner seat",
    span: "sm:col-span-2 sm:row-span-2",
  },
  { src: chaat, caption: "Chaat, plated properly", span: "" },
  { src: g5, caption: "Find us on Gurudwara Road", span: "" },
];

export function Gallery({ full = false }: { full?: boolean }) {
  const items = full ? shots : shots.slice(0, 5);

  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <Reveal className="max-w-xl">
          <Eyebrow>A glimpse of Eraya</Eyebrow>
          <h2 className="mt-6 font-display text-[2.1rem] leading-[1.1] text-foreground sm:text-[2.7rem]">
            Good food looks even
            <br />
            better when shared.
          </h2>
        </Reveal>

        <div className="mt-14 grid auto-rows-[190px] grid-cols-1 gap-4 sm:auto-rows-[220px] sm:grid-cols-3">
          {items.map((s, i) => (
            <Reveal
              key={s.caption}
              delay={(i % 3) * 100}
              className={cn("group relative overflow-hidden", s.span)}
            >
              <img
                src={s.src}
                alt={s.caption}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
              />
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent p-4 text-[0.68rem] uppercase tracking-[0.18em] text-cream opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                {s.caption}
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
