import { createFileRoute } from "@tanstack/react-router";
import interior from "@/assets/interior.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { WhyEraya } from "@/components/WhyEraya";
import { Experience } from "@/components/Experience";
import { site } from "@/lib/site";

const title = "Our Story — Cafe Eraya, Mohan Garden, New Delhi";
const description =
  "How Cafe Eraya became a neighbourhood café in Mohan Garden, West Delhi — good food, unhurried seats and a room built for moments.";

export const Route = createFileRoute("/our-story")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/our-story" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/our-story" }],
  }),
  component: StoryPage,
});

function StoryPage() {
  return (
    <>
      <section className="bg-background pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="mx-auto grid max-w-[1240px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          <div>
            <Eyebrow>Our Story</Eyebrow>
            <h1 className="mt-6 font-display text-[2.4rem] leading-[1.06] text-foreground sm:text-[3.1rem]">
              A café built around
              <br />
              the neighbourhood.
            </h1>
            <div className="mt-8 space-y-5 leading-relaxed text-foreground/70">
              <p>
                Eraya started as a small idea between friends who kept driving
                across Delhi for a decent plate of food and a table nobody
                hurried them off. Shani Bazar Chowk felt like the right place to
                fix that — busy, familiar, full of people who show up every day.
              </p>
              <p>
                So we built a room with warm light, soft seating and a kitchen
                that can do three things at once: honest Indo-Chinese, comforting
                continental plates, and chaat that tastes like the street outside
                — only cleaner and better plated. Add slow-brewed coffee and
                desserts we&apos;d happily eat twice, and that&apos;s Eraya.
              </p>
              <p>
                Today it&apos;s where students meet after class, families gather
                on Sundays, and couples take the corner table on a Friday
                evening. {site.hoursNote}, {site.hours} — you&apos;ll find us
                open.
              </p>
            </div>
          </div>

          <Reveal className="grid gap-4">
            <img
              src={interior}
              alt="Interior of Cafe Eraya with wooden tables and soft red seating"
              loading="lazy"
              width={1600}
              height={1008}
              className="h-[260px] w-full object-cover sm:h-[320px]"
            />
            <img
              src={gallery3}
              alt="Table setting with ceramic plates and a terracotta napkin"
              loading="lazy"
              width={1000}
              height={1400}
              className="h-[220px] w-full object-cover sm:h-[280px]"
            />
          </Reveal>
        </div>
      </section>

      <WhyEraya />
      <Experience />
    </>
  );
}
