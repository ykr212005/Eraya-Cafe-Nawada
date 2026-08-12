import { Link } from "@tanstack/react-router";
import { Eyebrow } from "@/components/Eyebrow";
import { MenuList } from "@/components/MenuList";
import { Reveal } from "@/components/Reveal";

export function MenuPreview() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal className="min-w-0">
            <Eyebrow>The Menu</Eyebrow>
            <h2 className="mt-6 font-display text-[2.1rem] leading-[1.1] text-foreground sm:text-[2.7rem]">
              Everything from noodles
              <br />
              to chaat to cheesecake.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <Link
              to="/menu"
              className="inline-flex shrink-0 items-center gap-2 border border-foreground/20 px-6 py-3.5 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              View Full Menu
            </Link>
          </Reveal>
        </div>

        <div className="mt-12">
          <MenuList compact />
        </div>
      </div>
    </section>
  );
}
