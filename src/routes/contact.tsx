import { createFileRoute } from "@tanstack/react-router";
import { Eyebrow } from "@/components/Eyebrow";
import { Reservation } from "@/components/Reservation";
import { LocationSection } from "@/components/LocationSection";
import { site } from "@/lib/site";

const title = "Contact & Reservations — Cafe Eraya, New Delhi";
const description =
  "Call, WhatsApp or reserve a table at Cafe Eraya, Mohan Garden, New Delhi – 110059. Open every day 11:00 AM to 10:30 PM. Directions and contact details.";

const faqs = [
  {
    q: "Where is Cafe Eraya located?",
    a: `${site.addressFull}. ${site.landmark}.`,
  },
  {
    q: "What are Cafe Eraya's opening hours?",
    a: `Cafe Eraya is open ${site.hoursNote.toLowerCase()} from ${site.hours}.`,
  },
  {
    q: "How much does a meal for two cost?",
    a: "Approximately ₹500–₹800 for two people, depending on what you order.",
  },
  {
    q: "Does Cafe Eraya take table reservations?",
    a: "Yes. Use the reservation form on this page or call the café directly and we'll hold a table for you.",
  },
];

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/contact" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="bg-cream pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <Eyebrow>Plan your visit</Eyebrow>
          <h1 className="mt-6 max-w-2xl font-display text-[2.4rem] leading-[1.06] text-foreground sm:text-[3.2rem]">
            Come say hello in Mohan Garden.
          </h1>
          <p className="mt-6 max-w-xl leading-relaxed text-foreground/70">
            Reserve a table below, or call and we&apos;ll sort it out in a
            minute. {site.hoursNote}, {site.hours}.
          </p>
        </div>
      </section>

      <Reservation />
      <LocationSection />

      <section className="bg-cream py-20 lg:py-24">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <h2 className="font-display text-[1.9rem] leading-tight text-foreground sm:text-[2.3rem]">
            Good to know
          </h2>
          <dl className="mt-10 grid gap-px bg-border sm:grid-cols-2">
            {faqs.map((f) => (
              <div key={f.q} className="bg-cream p-7">
                <dt className="font-display text-lg text-foreground">{f.q}</dt>
                <dd className="mt-3 text-sm leading-relaxed text-foreground/65">
                  {f.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
