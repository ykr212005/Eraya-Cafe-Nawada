# Cafe Eraya — Premium Café Website

An editorial, warm red-and-cream website for Cafe Eraya (Mohan Garden, New Delhi), built to drive table bookings, menu views, calls and directions.

## Pages

- `/` — the full storytelling scroll: hero, booking bar, why Eraya, signature dishes, experience, gallery, reviews, Instagram, reservation, location, contact.
- `/menu` — full interactive menu with category filters.
- `/our-story` — brand story, café ethos, hours.
- `/gallery` — larger asymmetric gallery.
- `/contact` — address, hours, map, call/WhatsApp/directions.

Nav links point to real routes (not hash anchors) so each page is shareable and indexable. Section CTAs on the home page still scroll smoothly where relevant.

## Look and feel

- Palette: Primary Red `#C83F45`, Light Red `#E96A6F`, Burgundy `#7E2028`, Warm White `#FFFDFC`, Cream `#F8F2ED`, Beige `#EFE4DC`, Text `#211B1B`. Red is reserved for CTAs, active nav, accents, dividers and the reservation band; the rest stays cream/white and spacious.
- Type: Playfair Display for headings (editorial, tight tracking), Inter for body, small uppercase wide-tracked eyebrows.
- Restrained radii, soft warm shadows, asymmetric editorial layouts, no gradients/glass/neon.
- Motion: slow fade-up on load, gentle image scale-in (1.03 → 1), light scroll reveals and a subtle hero parallax. Nothing bouncy.

## Sections (home)

1. **Navbar** — wordmark left, links, `BOOK A TABLE` CTA. Transparent over hero, solid warm-white with a subtle shadow on scroll; full-screen elegant mobile menu.
2. **Hero** — split editorial: eyebrow `WELCOME TO CAFE ERAYA`, headline `WHERE EVERY BITE FEELS LIKE A MOMENT.`, supporting copy, `BOOK A TABLE` + `EXPLORE MENU`; large café/food photograph right with one minimal floating chip (`OPEN TODAY · 11:00 AM — 10:30 PM`, `₹500–₹800 for two`).
3. **Booking bar** — cream strip with Date / Time / Guests + `CHECK AVAILABILITY`; compact card on mobile, prefilling the reservation form.
4. **Why Eraya** — `THE ERAYA EXPERIENCE` / `MORE THAN JUST A CAFÉ.` with four line-icon feature blocks (Freshly Prepared, Cozy Atmosphere, Something For Everyone, Made For Moments).
5. **Signature dishes** — `A TASTE OF ERAYA`: alternating large-image / text editorial rows for 5 dishes with name, description, price, category and a favourite heart toggle.
6. **Menu preview** — filterable category chips (All / Chinese / Continental / Indian & Chaat / Beverages / Desserts / Healthy) with veg indicators, plus `VIEW FULL MENU` to `/menu`.
7. **Experience** — full-bleed interior image with an overlaid red `PLAN YOUR VISIT` card (location, hours, dine-in) and a booking button.
8. **Gallery** — `A GLIMPSE OF ERAYA`, masonry-style asymmetric grid, hover zoom, quiet captions.
9. **Reviews** — `LOVED BY OUR GUESTS`, 4 authentic-toned review cards plus a restrained 4.8 rating summary noted as guest feedback.
10. **Instagram** — `FOLLOW THE ERAYA MOMENTS`, six square images, `@cafeeraya` + `FOLLOW US`.
11. **Reservation** — full-width burgundy/red band, white heading `YOUR TABLE IS WAITING.`, form (Name, Phone, Date, Time, Guests, Special Request) with inline validation and a success confirmation message.
12. **Location** — address block, `GET DIRECTIONS` (Google Maps) and `CALL NOW` (tel:), embedded map, nearby-landmark note.
13. **Contact + Footer** — phone, WhatsApp, Instagram, hours, address; minimal footer with wordmark, tagline, links, socials, copyright.
14. **Mobile action bar** — fixed bottom Call / WhatsApp / Book Table, mobile only.

## Imagery

Generated photographic assets in `src/assets`: hero table scene, café interior, five signature dishes, gallery set (~8), Instagram set (6), all warm natural light with subtle red accents. Lazy-loaded below the fold with width/height set to avoid layout shift.

## Reservations

The form validates and shows confirmation locally in this phase — submissions are not yet stored or emailed. Adding Lovable Cloud later would persist bookings and notify the café; say the word and I'll include it.

## Technical notes

- TanStack Start routes under `src/routes`; each route gets its own `head()` with local-SEO title/description/OG tags, plus canonical on leaves.
- Design tokens (colors, fonts, shadows) added to `src/styles.css` under `@theme inline`; no hardcoded color utilities in components.
- Fonts loaded via `<link>` in `__root.tsx` (preconnect + Playfair Display / Inter).
- JSON-LD: `Restaurant` + `LocalBusiness` (address, hours, price range, geo) on home, `FAQPage` on contact, `BreadcrumbList` on inner pages; `public/robots.txt` and a sitemap.
- Components split per section under `src/components/`, small and reusable; motion via a light CSS/IntersectionObserver reveal hook rather than a heavy animation dependency.
- Responsive rules: grid + `min-w-0` / `shrink-0` header rows, mobile-first section ordering that puts food, menu, booking, location and call first.
