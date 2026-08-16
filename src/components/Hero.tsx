import { Link } from "@tanstack/react-router";
import { Eyebrow } from "@/components/Eyebrow";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-hidden bg-foreground">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-40"
        poster=""
      >
        <source src="/eraya-hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Warm dark overlay for readability */}
      <div className="absolute inset-0 bg-foreground/35" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-5 pb-24 pt-36 sm:px-8 sm:pb-28 sm:pt-40 lg:pb-32 lg:pt-44">
        <div className="max-w-2xl animate-rise">
          <Eyebrow className="text-background/90">Welcome to Cafe Eraya</Eyebrow>
          <h1 className="mt-6 font-display text-[2.8rem] leading-[1.05] tracking-[-0.01em] text-background sm:text-[3.6rem] lg:text-[4.6rem]">
            Where every bite
            <br />
            feels like a{" "}
            <span className="italic text-primary">moment.</span>
          </h1>
          <p className="mt-6 max-w-lg text-[1.05rem] leading-relaxed text-background/85">
            Contemporary flavours, comforting classics and beautiful moments —
            all served under one roof in {site.locality}.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
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
              className="inline-flex items-center justify-center gap-3 border border-background/30 bg-background/10 px-7 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-background backdrop-blur-sm transition-colors hover:border-primary hover:text-primary"
            >
              Explore Menu
            </Link>
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-4 border-t border-background/25 pt-6 text-sm sm:flex sm:flex-wrap sm:items-center sm:gap-x-10">
            <div>
              <dt className="text-[0.62rem] uppercase tracking-[0.24em] text-background/65">
                Cuisines
              </dt>
              <dd className="mt-1 text-background/90">
                Indo-Chinese · Continental · Chaat
              </dd>
            </div>
            <div>
              <dt className="text-[0.62rem] uppercase tracking-[0.24em] text-background/65">
                Cost for two
              </dt>
              <dd className="mt-1 text-background/90">₹500–₹800</dd>
            </div>
          </dl>
        </div>

        {/* Floating open-hours chip */}
        <div className="animate-rise absolute bottom-8 right-5 flex items-center gap-3 border border-background/25 bg-background/90 px-5 py-4 shadow-soft backdrop-blur-sm sm:right-8 [animation-delay:600ms]">
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
    </section>
  );
}
