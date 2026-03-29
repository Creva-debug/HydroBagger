"use client";

import Link from "next/link";
import { type ReactNode, useRef, useState } from "react";

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

type FormStatus = "idle" | "loading" | "success" | "error";

export function ContactConsultationSection({
  formFirst = false,
  isPageLead = false,
  id,
  topSlot,
}: ContactConsultationSectionProps = {}) {
  const sectionPt = isPageLead ? "pt-12 lg:pt-16" : "pt-24 lg:pt-32";
  const minH = isPageLead ? "min-h-dvh flex flex-col justify-center" : "";

  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "loading") return;

    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();

    if (!email || !phone || !message) {
      setErrorMsg("Wypełnij wszystkie wymagane pola.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const formData = new FormData(form);
      const res = await fetch("/api/contact", { method: "POST", body: formData });
      const json = await res.json();

      if (!res.ok) {
        setErrorMsg(json.error ?? "Coś poszło nie tak. Spróbuj ponownie.");
        setStatus("error");
        return;
      }

      setStatus("success");
      formRef.current?.reset();
    } catch {
      setErrorMsg("Nie udało się wysłać wiadomości. Sprawdź połączenie internetowe.");
      setStatus("error");
    }
  }

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

            {isPageLead && (
              <div className="mt-8 rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50/90 p-4 shadow-sm sm:mt-10 sm:p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Kontakt bezpośredni</p>
                <p className="mt-1 text-sm text-slate-600">Wolisz od razu zadzwonić lub napisać? Skorzystaj z danych poniżej.</p>
                <div className="mt-4 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
                  <a
                    href="mailto:kontakt@hydrobagger.pl"
                    className="inline-flex flex-1 items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 shadow-sm transition-all hover:border-[#0284c7] hover:text-[#0284c7] sm:min-w-0 sm:flex-1"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-[#0284c7]">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </span>
                    <span className="min-w-0 break-all">kontakt@hydrobagger.pl</span>
                  </a>
                  <a
                    href="tel:+48504026042"
                    className="inline-flex flex-1 items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 shadow-sm transition-all hover:border-[#0284c7] hover:text-[#0284c7] sm:min-w-0 sm:flex-1"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-[#0284c7]">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </span>
                    <span>+48 504 026 042</span>
                  </a>
                </div>
              </div>
            )}
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

            {status === "success" ? (
              <div className="flex flex-col items-start gap-4 rounded-2xl border border-green-200 bg-green-50 px-7 py-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div>
                  <p className="text-base font-bold text-green-800">Wiadomość wysłana!</p>
                  <p className="mt-1 text-sm text-green-700">Dziękujemy za kontakt. Odpiszemy w ciągu 24 godzin roboczych.</p>
                </div>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-1 text-sm font-semibold text-green-700 underline underline-offset-2 hover:text-green-900"
                >
                  Wyślij kolejną wiadomość
                </button>
              </div>
            ) : (
              <form ref={formRef} className="flex flex-col gap-5" onSubmit={handleSubmit} noValidate>
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

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-attachments" className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Załączniki <span className="font-normal normal-case text-slate-400">(opcjonalnie, maks. 10 MB łącznie)</span>
                  </label>
                  <input
                    id="contact-attachments"
                    type="file"
                    name="attachments"
                    multiple
                    accept=".pdf,.doc,.docx,image/png,image/jpeg,image/jpg,image/webp,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    className="w-full cursor-pointer rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-700 file:mr-3 file:cursor-pointer file:rounded-lg file:border file:border-slate-300 file:bg-slate-50 file:px-4 file:py-2 file:text-sm file:font-medium file:text-slate-700 hover:file:bg-slate-100"
                  />
                </div>

                {status === "error" && (
                  <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                    {errorMsg}
                  </p>
                )}

                <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn-pulse w-full shrink-0 rounded-full px-9 py-3.5 text-base font-bold text-white transition-all disabled:opacity-60 sm:w-auto"
                    style={{ background: "var(--hb-water)", boxShadow: "0 8px 20px -4px rgba(2, 132, 199, 0.45)" }}
                  >
                    {status === "loading" ? "Wysyłanie…" : "Wyślij wiadomość →"}
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
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
