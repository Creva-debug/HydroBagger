import Link from "next/link";
import type { ReactNode } from "react";

const FORM_FIELD_CLASS =
  "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition-colors hover:border-[#0284c7] focus:border-[#0284c7] focus:outline-none focus-visible:border-[#0284c7] focus:ring-0 focus-visible:ring-0";

function SectionLabel({ children, className }: { children: React.ReactNode; className?: string }) {
  return <span className={className ? `section-label ${className}` : "section-label"}>{children}</span>;
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
  const minH = isPageLead ? "min-h-dvh flex flex-col justify-center" : "";

  return (
    <section id={id} className={`relative overflow-x-hidden bg-slate-50 ${sectionPt} ${minH}`}>
      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8 lg:pb-32">
        {topSlot}
        <div className="grid grid-cols-1 gap-8 gap-x-14 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:items-start lg:gap-y-6">
          <SectionLabel
            className={
              formFirst ? "order-2 lg:order-none lg:col-span-2 lg:row-start-1" : "lg:col-span-2 lg:row-start-1"
            }
          >
            Bezpłatna konsultacja
          </SectionLabel>
          <div
            className={
              formFirst
                ? "order-3 lg:order-none lg:col-start-1 lg:row-start-2 lg:min-w-0"
                : "lg:col-start-1 lg:row-start-2 lg:min-w-0"
            }
          >
            <h2
              className="display-heading mt-4 text-slate-900 lg:mt-0"
              style={{ fontSize: "clamp(2.2rem,4vw,3.4rem)" }}
            >
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
            className={`track-border p-8 lg:p-10 lg:col-start-2 lg:row-start-2 lg:min-w-0 ${
              formFirst ? "order-1 mt-0 lg:order-none lg:mt-0" : "mt-4 lg:mt-0"
            }`}
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold tracking-tight text-slate-900">Napisz do nas</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">Odpowiemy w ciągu 24 godzin roboczych.</p>
            </div>
            <form className="flex flex-col gap-5" action="#" method="post" noValidate>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-email" className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Adres e-mail <span className="text-[#0284c7]">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    placeholder="jan@firma.pl"
                    className={FORM_FIELD_CLASS}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-phone" className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Numer telefonu <span className="text-[#0284c7]">*</span>
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    required
                    autoComplete="tel"
                    placeholder="+48 000 000 000"
                    className={FORM_FIELD_CLASS}
                  />
                </div>
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
                  className={`${FORM_FIELD_CLASS} resize-none`}
                />
              </div>

              <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between">
                <button
                  type="submit"
                  className="btn-pulse w-full shrink-0 rounded-full px-9 py-3.5 text-base font-bold text-white transition-all sm:w-auto"
                  style={{ background: "var(--hb-water)", boxShadow: "0 8px 20px -4px rgba(2, 132, 199, 0.45)" }}
                >
                  Wyślij wiadomość →
                </button>
                <p className="max-w-full text-[0.625rem] leading-relaxed text-slate-500 sm:max-w-md lg:max-w-lg">
                  Podając swój adres e-mail oraz numer telefonu, a następnie przesyłając formularz, wyrażasz zgodę na
                  skontaktowanie się z Tobą w celu odpowiedzi na zadane pytanie. Zapoznaj się z naszą{" "}
                  <Link href="/polityka-prywatnosci" className="text-slate-600 underline underline-offset-1 hover:text-[#0284c7]">
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
