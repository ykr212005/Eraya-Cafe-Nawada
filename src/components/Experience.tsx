import { Link } from "@tanstack/react-router";
import { MapPin, Clock, UtensilsCrossed } from "lucide-react";
import interior from "@/assets/interior.jpg";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export function Experience() {
  return (
    <section className="relative bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>Your table is waiting</Eyebrow>
          <h2 className="mt-6 font-display text-[2.1rem] leading-[1.1] text-foreground sm:text-[2.7rem]">
            Come for the food.
            <br />
            Stay for the moments.
          </h2>
        </Reveal>

        <Reveal delay={120} className="relative mt-12">
          <img
            src={interior}
            alt="Warm interior of Cafe Eraya with wooden tables and soft red seating"
            loading="lazy"
            width={1600}
            height={1008}
            className="h-[380px] w-full object-cover sm:h-[520px]"
          />

          <div className="relative -mt-10 ml-0 w-full bg-primary p-8 text-primary-foreground shadow-lift sm:absolute sm:bottom-10 sm:right-10 sm:mt-0 sm:max-w-[22rem]">
            <p className="text-[0.62rem] uppercase tracking-[0.26em] text-primary-foreground/80">
              Plan your visit
            </p>
            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.5} />
                {site.locality}
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.5} />
                {site.hours}
              </li>
              <li className="flex items-start gap-3">
                <UtensilsCrossed
                  className="mt-0.5 h-4 w-4 shrink-0"
                  strokeWidth={1.5}
                />
                Dine-in available
              </li>
            </ul>
            <Link
              to="/contact"
              hash="reserve"
              className="mt-8 block border border-primary-foreground/70 py-3.5 text-center text-[0.7rem] font-semibold uppercase tracking-[0.2em] transition-colors hover:bg-primary-foreground hover:text-primary"
            >
              Book a Table
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
