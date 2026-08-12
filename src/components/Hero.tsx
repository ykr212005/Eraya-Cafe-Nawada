import { Link } from "@tanstack/react-router";
import heroImage from "@/assets/hero-table.jpg";
import { Eyebrow } from "@/components/Eyebrow";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-28 lg:pt-32">
      <div className="relative mx-auto grid max-w-[1240px] items-center gap-12 px-5 pb-16 sm:px-8 lg:grid-cols-[1.02fr_1fr] lg:gap-16 lg:pb-24">
        <div className="animate-rise">
          <Eyebrow>Welcome to Cafe Eraya</Eyebrow>
          <h1 className="mt-6 font-display text-[2.6rem] leading-[1.04] tracking-[-0.01em] text-foreground sm:text-[3.4rem] lg:text-[4.1rem]">
            Where every bite
            <br />
            feels like a{" "}
            <span className="italic text-primary">moment.</span>
          </h1>
          <p className="mt-6 max-w-lg text-[1.02rem] leading-relaxed text-foreground/70">
            Contemporary flavours, comforting classics and beautiful moments —
            all served under one roof in {site.locality}.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              to="/contact"
              hash="reserve"
              className="group inline-flex items-center justify-center gap-3 bg-primary px-7 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-burgundy"
            >
              Book a Table
              <span
                aria-hidden
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
            <Link
              to="/menu"
              className="inline-flex items-center justify-center gap-3 border border-foreground/20 px-7 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Explore Menu
            </Link>
          </div>

          <dl className="mt-11 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-border pt-6 text-sm">
            <div>
              <dt className="text-[0.62rem] uppercase tracking-[0.24em] text-muted-foreground">
                Cuisines
              </dt>
              <dd className="mt-1 text-foreground/80">
                Indo-Chinese · Continental · Chaat
              </dd>
            </div>
            <div>
              <dt className="text-[0.62rem] uppercase tracking-[0.24em] text-muted-foreground">
                Cost for two
              </dt>
              <dd className="mt-1 text-foreground/80">₹500–₹800</dd>
            </div>
          </dl>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <img
              src={heroImage}
              alt="Steaming noodles, cappuccino and dessert on a sunlit table at Cafe Eraya"
              width={1280}
              height={1600}
              fetchPriority="high"
              decoding="async"
              className="animate-settle h-[420px] w-full object-cover sm:h-[540px] lg:h-[640px]"
            />
          </div>

          <div className="animate-rise absolute -bottom-6 left-4 flex items-center gap-3 border border-border bg-background px-5 py-4 shadow-soft sm:left-8 [animation-delay:600ms]">
            <span
              aria-hidden
              className="h-2 w-2 shrink-0 rounded-full bg-primary"
            />
            <div className="min-w-0">
              <p className="text-[0.6rem] uppercase tracking-[0.24em] text-muted-foreground">
                Open today
              </p>
              <p className="mt-0.5 text-sm text-foreground">{site.hours}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
