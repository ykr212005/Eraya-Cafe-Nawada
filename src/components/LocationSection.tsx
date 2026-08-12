import { MapPin, Phone, Clock, MessageCircle, Instagram } from "lucide-react";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export function LocationSection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <Eyebrow>Find your way to Eraya</Eyebrow>
            <h2 className="mt-6 font-display text-[2.1rem] leading-[1.1] text-foreground sm:text-[2.6rem]">
              A short walk from
              <br />
              Dwarka Mor.
            </h2>

            <address className="mt-9 not-italic leading-relaxed text-foreground/75">
              <span className="font-display text-xl text-foreground">
                {site.name}
              </span>
              <br />
              {site.address.line1}
              <br />
              {site.address.line2}
              <br />
              {site.address.city} – {site.address.pincode}
            </address>
            <p className="mt-4 text-sm text-muted-foreground">
              {site.landmark}
            </p>

            <ul className="mt-9 space-y-4 text-sm text-foreground/80">
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.5} />
                {site.hoursNote} · {site.hours}
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.5} />
                Dine-in · {site.costForTwo}
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.5} />
                <a href={site.phoneHref} className="hover:text-primary">
                  {site.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.5} />
                <a
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary"
                >
                  WhatsApp us
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Instagram className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.5} />
                <a
                  href={site.instagramHref}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary"
                >
                  {site.instagram}
                </a>
              </li>
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={site.mapsDirections}
                target="_blank"
                rel="noreferrer"
                className="bg-primary px-7 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-burgundy"
              >
                Get Directions
              </a>
              <a
                href={site.phoneHref}
                className="border border-foreground/20 px-7 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Call Now
              </a>
            </div>
          </Reveal>

          <Reveal delay={120} className="min-h-[340px]">
            <iframe
              title={`Map showing ${site.name} in ${site.locality}`}
              src={site.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[340px] w-full border border-border sm:h-full sm:min-h-[520px]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
