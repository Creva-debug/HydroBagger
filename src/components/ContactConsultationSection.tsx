import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <span className="section-label">{children}</span>;
}

export type ContactConsultationSectionProps = {
  /** Formularz jako pierwsza kolumna / pierwszy na mobile (np. strona darmowej konsultacji). */
  formFirst?: boolean;
  /** Mniejszy padding u góry, gdy sekcja zaczyna podstronę pod nagłówkiem. */
  isPageLead?: boolean;
  id?: string;
  /** Opcjonalna treść nad siatką (np. okruszki). */
  topSlot?: ReactNode;
};

export function ContactConsultationSection({
  formFirst = false,
  isPageLead = false,
  id,
  topSlot,
}: ContactConsultationSectionProps = {}) {
  const sectionPt = isPageLead ? "pt-12 lg:pt-16" : "pt-24 lg:pt-32";

  return (
    <section id={id} className={`relative overflow-hidden bg-slate-100 ${sectionPt}`}>
      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8 lg:pb-32">
        {topSlot}
        <div className="grid items-start gap-14 lg:grid-cols-2">
          <div className={formFirst ? "order-2 lg:order-2" : undefined}>
            <SectionLabel>Bezpłatna konsultacja</SectionLabel>
            <h2 className="display-heading mt-4 text-slate-900" style={{ fontSize: "clamp(2.2rem,4vw,3.4rem)" }}>
              Prace w trudnym terenie?{" "}
              <span style={{ color: "var(--hb-water)" }}>Zacznijmy od rozmowy!</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Skorzystaj z bezpłatnej 20-minutowej konsultacji – opowiesz nam o swojej sytuacji, a my podpowiemy możliwe rozwiązania.
            </p>
            <p className="mt-3 text-base text-slate-500">
              Nie musisz mieć gotowego planu ani dokumentacji – wystarczy chęć, by coś z tym zrobić.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div
                className="flex h-14 w-14 items-center justify-center rounded-full text-lg font-black text-white"
                style={{ background: "var(--hb-water)" }}
              >
                LB
              </div>
              <div>
                <div className="font-bold text-slate-900">Leszek Białasik</div>
                <div className="text-sm" style={{ color: "var(--hb-water)" }}>
                  HydroBagger.pl
                </div>
              </div>
            </div>

            <ul className="mt-8 space-y-3">
              {[
                "Bezpłatna 20-minutowa konsultacja",
                "Szybka wycena bez zobowiązań",
                "Znajomość trudnych terenów i regulacji środowiskowych",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-slate-600">
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                    style={{ background: "rgba(2, 132, 199, 0.1)" }}
                  >
                    <svg className="h-3 w-3" style={{ color: "var(--hb-water)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div
            className={`track-border p-8 lg:p-10 ${formFirst ? "order-1 lg:order-1 mt-0" : "mt-4 lg:mt-0"}`}
          >
            <div className="mb-7">
              <h3 className="text-2xl font-bold text-slate-900">Napisz do nas</h3>
              <p className="mt-1.5 text-sm text-slate-500">Odpowiemy w ciągu 24 godzin roboczych.</p>
            </div>
            <form className="flex flex-col gap-4" action="#" method="post" noValidate>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-name" className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Imię i nazwisko <span className="text-[#0284c7]">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    placeholder="Jan Kowalski"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-300 outline-none transition focus:border-[#0284c7] focus:ring-2"
                    style={{ "--tw-ring-color": "rgba(2, 132, 199, 0.25)" } as CSSProperties}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-phone" className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Telefon
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    placeholder="+48 000 000 000"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-300 outline-none transition focus:border-[#0284c7] focus:ring-2"
                    style={{ "--tw-ring-color": "rgba(2, 132, 199, 0.25)" } as CSSProperties}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-email" className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Adres e-mail <span className="text-[#0284c7]">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  placeholder="jan@firma.pl"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-300 outline-none transition focus:border-[#0284c7] focus:ring-2"
                  style={{ "--tw-ring-color": "rgba(2, 132, 199, 0.25)" } as CSSProperties}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-msg" className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Opis projektu <span className="text-[#0284c7]">*</span>
                </label>
                <textarea
                  id="contact-msg"
                  name="message"
                  rows={4}
                  placeholder="Opisz krótko swój projekt – lokalizację, rodzaj prac, termin..."
                  className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-300 outline-none transition focus:border-[#0284c7] focus:ring-2"
                  style={{ "--tw-ring-color": "rgba(2, 132, 199, 0.25)" } as CSSProperties}
                />
              </div>

              <div className="mt-2 flex flex-wrap items-center justify-between gap-4">
                <button
                  type="submit"
                  className="btn-pulse rounded-full px-9 py-3.5 text-base font-bold text-white transition-all"
                  style={{ background: "var(--hb-water)", boxShadow: "0 8px 20px -4px rgba(2, 132, 199, 0.45)" }}
                >
                  Wyślij wiadomość →
                </button>
                <p className="max-w-[200px] text-xs leading-relaxed text-slate-400">
                  Twoje dane są chronione zgodnie z{" "}
                  <Link href="/polityka-prywatnosci" className="underline hover:text-slate-600">
                    Polityką Prywatności
                  </Link>
                  .
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
