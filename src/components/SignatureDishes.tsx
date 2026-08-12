import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { signatures } from "@/lib/menu-data";
import { cn } from "@/lib/utils";

export function SignatureDishes() {
  const [loved, setLoved] = useState<string[]>([]);
  const toggle = (name: string) =>
    setLoved((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name],
    );

  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal className="min-w-0">
            <Eyebrow>A Taste of Eraya</Eyebrow>
            <h2 className="mt-6 font-display text-[2.1rem] leading-[1.1] text-foreground sm:text-[2.7rem]">
              Favourites worth
              <br />
              coming back for.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <Link
              to="/menu"
              className="inline-flex shrink-0 items-center gap-2 border-b border-primary pb-1 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-primary"
            >
              See the full menu →
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 flex flex-col gap-16 lg:gap-20">
          {signatures.map((dish, i) => (
            <Reveal
              key={dish.name}
              as="article"
              className={cn(
                "group grid items-center gap-8 lg:grid-cols-2 lg:gap-14",
                i % 2 === 1 && "lg:[&>figure]:order-2",
              )}
            >
              <figure className="overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.alt}
                  loading="lazy"
                  width={1200}
                  height={1200}
                  className="h-[300px] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04] sm:h-[420px]"
                />
              </figure>

              <div className="lg:px-4">
                <div className="flex items-start justify-between gap-6">
                  <p className="text-[0.62rem] uppercase tracking-[0.26em] text-primary">
                    {dish.category}
                  </p>
                  <button
                    type="button"
                    onClick={() => toggle(dish.name)}
                    aria-pressed={loved.includes(dish.name)}
                    aria-label={`Add ${dish.name} to favourites`}
                    className="shrink-0 text-foreground/40 transition-colors hover:text-primary"
                  >
                    <Heart
                      className={cn(
                        "h-5 w-5",
                        loved.includes(dish.name) &&
                          "fill-primary text-primary",
                      )}
                      strokeWidth={1.4}
                    />
                  </button>
                </div>

                <h3 className="mt-4 font-display text-[1.9rem] leading-tight text-foreground sm:text-[2.2rem]">
                  {dish.name}
                </h3>
                <p className="mt-4 max-w-md text-[0.98rem] leading-relaxed text-foreground/65">
                  {dish.description}
                </p>
                <div className="mt-7 flex items-center gap-6">
                  <span className="font-display text-2xl text-primary">
                    {dish.price}
                  </span>
                  <span aria-hidden className="h-px flex-1 bg-border" />
                  <Link
                    to="/contact"
                    hash="reserve"
                    className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-foreground/70 transition-colors hover:text-primary"
                  >
                    Book a table
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
