import { createFileRoute } from "@tanstack/react-router";
import { Gallery } from "@/components/Gallery";
import { InstagramStrip } from "@/components/InstagramStrip";
import { Eyebrow } from "@/components/Eyebrow";

const title = "Gallery — Inside Cafe Eraya, New Delhi";
const description =
  "Photographs of Cafe Eraya in Mohan Garden, New Delhi — the room, the coffee, the desserts and the plates our guests come back for.";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/gallery" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <section className="bg-background pt-32 pb-4 lg:pt-40">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <Eyebrow>A glimpse of Eraya</Eyebrow>
          <h1 className="mt-6 max-w-2xl font-display text-[2.4rem] leading-[1.06] text-foreground sm:text-[3.2rem]">
            The room, the food, the afternoons.
          </h1>
        </div>
      </section>
      <Gallery full />
      <InstagramStrip />
    </>
  );
}
