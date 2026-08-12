import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import type { BookingDraft } from "@/components/BookingBar";

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

type Errors = Partial<Record<"name" | "phone" | "date", string>>;

export function Reservation() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "7:00 PM",
    guests: "2",
    request: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState(false);

  useEffect(() => {
    const onDraft = (e: Event) => {
      const detail = (e as CustomEvent<BookingDraft>).detail;
      setForm((f) => ({
        ...f,
        date: detail.date || f.date,
        time: detail.time,
        guests: detail.guests,
      }));
    };
    window.addEventListener("eraya:booking", onDraft);
    return () => window.removeEventListener("eraya:booking", onDraft);
  }, []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: Errors = {};
    if (form.name.trim().length < 2) next.name = "Please add your name.";
    if (!/^[+\d][\d\s-]{8,}$/.test(form.phone.trim()))
      next.phone = "Add a phone number we can reach you on.";
    if (!form.date) next.date = "Pick a date for your visit.";
    setErrors(next);
    if (Object.keys(next).length === 0) setDone(true);
  };

  const field =
    "w-full border border-burgundy-foreground/25 bg-transparent px-4 py-3.5 text-sm text-burgundy-foreground outline-none transition-colors placeholder:text-burgundy-foreground/45 focus:border-burgundy-foreground";
  const label =
    "mb-2 block text-[0.6rem] font-medium uppercase tracking-[0.24em] text-burgundy-foreground/70";

  return (
    <section id="reserve" className="scroll-mt-24 bg-burgundy py-20 lg:py-28">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal>
            <Eyebrow tone="light">Reservations</Eyebrow>
            <h2 className="mt-6 font-display text-[2.2rem] leading-[1.08] text-burgundy-foreground sm:text-[2.9rem]">
              Your table
              <br />
              is waiting.
            </h2>
            <p className="mt-6 max-w-sm leading-relaxed text-burgundy-foreground/75">
              Make your next meal a little more memorable. Tell us when
              you&apos;re coming and we&apos;ll keep a seat ready.
            </p>
          </Reveal>

          <Reveal delay={120}>
            {done ? (
              <div className="border border-burgundy-foreground/25 p-10 text-burgundy-foreground">
                <Check className="h-7 w-7" strokeWidth={1.4} />
                <p className="mt-6 font-display text-2xl">
                  Thank you, {form.name.split(" ")[0]}.
                </p>
                <p className="mt-3 text-burgundy-foreground/75">
                  We have your request for {form.guests} guest
                  {form.guests === "1" ? "" : "s"} on {form.date} at {form.time}.
                  We&apos;ll confirm your reservation shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setDone(false)}
                  className="mt-8 border-b border-burgundy-foreground/50 pb-1 text-[0.7rem] font-semibold uppercase tracking-[0.2em]"
                >
                  Make another booking
                </button>
              </div>
            ) : (
              <form onSubmit={submit} noValidate className="grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className={label} htmlFor="r-name">
                      Name
                    </label>
                    <input
                      id="r-name"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      placeholder="Your full name"
                      className={field}
                    />
                    {errors.name && (
                      <p className="mt-2 text-xs text-rose">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label className={label} htmlFor="r-phone">
                      Phone number
                    </label>
                    <input
                      id="r-phone"
                      inputMode="tel"
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      placeholder="+91"
                      className={field}
                    />
                    {errors.phone && (
                      <p className="mt-2 text-xs text-rose">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-3">
                  <div>
                    <label className={label} htmlFor="r-date">
                      Date
                    </label>
                    <input
                      id="r-date"
                      type="date"
                      value={form.date}
                      onChange={(e) =>
                        setForm({ ...form, date: e.target.value })
                      }
                      className={field}
                    />
                    {errors.date && (
                      <p className="mt-2 text-xs text-rose">{errors.date}</p>
                    )}
                  </div>
                  <div>
                    <label className={label} htmlFor="r-time">
                      Time
                    </label>
                    <select
                      id="r-time"
                      value={form.time}
                      onChange={(e) =>
                        setForm({ ...form, time: e.target.value })
                      }
                      className={field}
                    >
                      {times.map((t) => (
                        <option key={t} className="text-ink">
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className={label} htmlFor="r-guests">
                      Guests
                    </label>
                    <select
                      id="r-guests"
                      value={form.guests}
                      onChange={(e) =>
                        setForm({ ...form, guests: e.target.value })
                      }
                      className={field}
                    >
                      {["1", "2", "3", "4", "5", "6", "7", "8+"].map((g) => (
                        <option key={g} className="text-ink">
                          {g}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className={label} htmlFor="r-request">
                    Special request
                  </label>
                  <textarea
                    id="r-request"
                    rows={3}
                    value={form.request}
                    onChange={(e) =>
                      setForm({ ...form, request: e.target.value })
                    }
                    placeholder="Birthday, corner table, high chair…"
                    className={field}
                  />
                </div>

                <div className="flex flex-wrap items-center gap-6">
                  <button
                    type="submit"
                    className="bg-burgundy-foreground px-8 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-burgundy transition-colors hover:bg-cream"
                  >
                    Reserve My Table
                  </button>
                  <p className="text-xs text-burgundy-foreground/65">
                    We&apos;ll confirm your reservation shortly.
                  </p>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
