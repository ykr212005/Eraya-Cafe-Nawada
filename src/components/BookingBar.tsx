import { useState } from "react";

const times = [
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "4:00 PM",
  "6:00 PM",
  "7:00 PM",
  "8:00 PM",
  "9:00 PM",
];

export type BookingDraft = { date: string; time: string; guests: string };

export function BookingBar() {
  const [draft, setDraft] = useState<BookingDraft>({
    date: "",
    time: "7:00 PM",
    guests: "2",
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    window.dispatchEvent(
      new CustomEvent<BookingDraft>("eraya:booking", { detail: draft }),
    );
    document
      .getElementById("reserve")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const field =
    "w-full border border-border bg-background px-4 py-3.5 text-sm text-foreground outline-none transition-colors focus:border-primary";
  const label =
    "mb-2 block text-[0.6rem] font-medium uppercase tracking-[0.24em] text-muted-foreground";

  return (
    <section className="border-y border-border bg-cream">
      <div className="mx-auto max-w-[1240px] px-5 py-7 sm:px-8 lg:py-10">
        <form
          onSubmit={submit}
          className="grid gap-5 lg:grid-cols-[auto_1fr_auto] lg:items-end lg:gap-10"
        >
          <div className="lg:max-w-[15rem]">
            <p className="font-display text-xl text-foreground sm:text-2xl">
              Reserve your table
            </p>
            <p className="mt-1 text-sm text-foreground/65">
              In a few clicks — we&apos;ll hold it for you.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
            <div className="col-span-2 sm:col-span-1">
              <label className={label} htmlFor="qb-date">
                Date
              </label>
              <input
                id="qb-date"
                type="date"
                value={draft.date}
                onChange={(e) => setDraft({ ...draft, date: e.target.value })}
                className={field}
              />
            </div>
            <div>
              <label className={label} htmlFor="qb-time">
                Time
              </label>
              <select
                id="qb-time"
                value={draft.time}
                onChange={(e) => setDraft({ ...draft, time: e.target.value })}
                className={field}
              >
                {times.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </div>
            <div>
              <label className={label} htmlFor="qb-guests">
                Guests
              </label>
              <select
                id="qb-guests"
                value={draft.guests}
                onChange={(e) => setDraft({ ...draft, guests: e.target.value })}
                className={field}
              >
                {["1", "2", "3", "4", "5", "6", "7", "8+"].map((g) => (
                  <option key={g}>{g}</option>
                ))}
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-primary px-7 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-burgundy lg:w-auto"
          >
            Check Availability
          </button>
        </form>
      </div>
    </section>
  );
}
