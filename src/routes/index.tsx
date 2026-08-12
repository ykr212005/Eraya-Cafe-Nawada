import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { BookingBar } from "@/components/BookingBar";
import { WhyEraya } from "@/components/WhyEraya";
import { SignatureDishes } from "@/components/SignatureDishes";
import { MenuPreview } from "@/components/MenuPreview";
import { Experience } from "@/components/Experience";
import { Gallery } from "@/components/Gallery";
import { Reviews } from "@/components/Reviews";
import { InstagramStrip } from "@/components/InstagramStrip";
import { Reservation } from "@/components/Reservation";
import { LocationSection } from "@/components/LocationSection";

const title = "Cafe Eraya — Café in Mohan Garden, New Delhi | Book a Table";
const description =
  "Cafe Eraya is a warm, modern café near Dwarka Mor in Mohan Garden, New Delhi. Indo-Chinese, continental, chaat, desserts and coffee. Open daily 11 AM – 10:30 PM. Book a table.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      {
        name: "keywords",
        content:
          "Cafe Eraya, cafe in Mohan Garden, cafe near Dwarka Mor, best cafe in West Delhi, restaurants near Dwarka Mor, Cafe Eraya New Delhi",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <h1 className="sr-only">
        Cafe Eraya — café and restaurant in Mohan Garden, New Delhi
      </h1>
      <Hero />
      <BookingBar />
      <WhyEraya />
      <SignatureDishes />
      <MenuPreview />
      <Experience />
      <Gallery />
      <Reviews />
      <InstagramStrip />
      <Reservation />
      <LocationSection />
    </>
  );
}
