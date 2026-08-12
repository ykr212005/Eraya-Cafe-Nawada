import { Leaf, Sofa, Utensils, HeartHandshake } from "lucide-react";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";

const features = [
  {
    icon: Leaf,
    title: "Freshly Prepared",
    copy: "Thoughtfully prepared food made for every craving, cooked to order through the day.",
  },
  {
    icon: Sofa,
    title: "Cozy Atmosphere",
    copy: "A comfortable space for conversations, celebrations and everyday moments.",
  },
  {
    icon: Utensils,
    title: "Something For Everyone",
    copy: "From Indo-Chinese favourites to continental dishes, desserts and chaat.",
  },
  {
    icon: HeartHandshake,
    title: "Made For Moments",
    copy: "Perfect for casual meetups, dates, family gatherings and long evenings with friends.",
  },
];

export function WhyEraya() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <Eyebrow>The Eraya Experience</Eyebrow>
            <h2 className="mt-6 font-display text-[2.1rem] leading-[1.1] text-foreground sm:text-[2.7rem]">
              More than just
              <br />
              a café.
            </h2>
          </Reveal>

          <Reveal delay={120} className="lg:pt-4">
            <p className="max-w-xl text-[1.02rem] leading-relaxed text-foreground/70">
              Cafe Eraya began with a simple idea: West Delhi deserved a place
              where the food is genuinely good, the seats are comfortable enough
              to lose track of time, and nobody rushes you out. Plates of
              Indo-Chinese, continental comfort food, chaat, slow-brewed coffee
              and desserts worth the detour — served in a room built for
              lingering.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Reveal
              key={f.title}
              delay={i * 110}
              className="bg-background p-8 transition-colors duration-500 hover:bg-cream"
            >
              <f.icon className="h-6 w-6 text-primary" strokeWidth={1.3} />
              <h3 className="mt-6 font-display text-xl text-foreground">
                {f.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/65">
                {f.copy}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
