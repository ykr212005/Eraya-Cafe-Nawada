import { Star } from "lucide-react";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";

const reviews = [
  {
    name: "Ritika S.",
    note: "Visited on a weekday evening",
    text: "Beautiful little café with great food and such a comfortable atmosphere. Definitely coming back.",
  },
  {
    name: "Aman Verma",
    note: "Came with friends",
    text: "The chilli paneer and cold coffee are worth the trip. Service was quick even when the place filled up.",
  },
  {
    name: "Neha & Kunal",
    note: "Anniversary dinner",
    text: "We were looking for somewhere quiet in Mohan Garden and this was perfect. The lava cake ended the night well.",
  },
  {
    name: "Sahil Chauhan",
    note: "Regular guest",
    text: "Honestly my go-to spot after work. Chaat here tastes like the street version, just cleaner and better plated.",
  },
];

export function Reviews() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal>
            <Eyebrow>Loved by our guests</Eyebrow>
            <h2 className="mt-6 font-display text-[2.1rem] leading-[1.1] text-foreground sm:text-[2.7rem]">
              What people say
              <br />
              after they leave.
            </h2>
            <div className="mt-10 flex items-center gap-5 border border-border p-6">
              <p className="font-display text-4xl text-primary">4.8</p>
              <div className="min-w-0">
                <div className="flex gap-0.5 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-primary" />
                  ))}
                </div>
                <p className="mt-1.5 text-xs text-muted-foreground">
                  Loved by local diners · based on guest feedback
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-px bg-border sm:grid-cols-2">
            {reviews.map((r, i) => (
              <Reveal
                key={r.name}
                delay={i * 100}
                className="flex flex-col bg-background p-7"
              >
                <div className="flex gap-0.5 text-primary">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-3 w-3 fill-primary" />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 text-[0.98rem] leading-relaxed text-foreground/75">
                  “{r.text}”
                </blockquote>
                <div className="mt-6">
                  <p className="text-sm font-medium text-foreground">
                    {r.name}
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {r.note}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
