import Link from "next/link";
import type { CSSProperties } from "react";

export type JobApplicationSectionProps = {
  jobTitle: string;
};

export function JobApplicationSection({ jobTitle }: JobApplicationSectionProps) {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="section-label">Aplikuj</span>
            <h2 className="display-heading mt-4 text-slate-900" style={{ fontSize: "clamp(2rem,3.8vw,3rem)" }}>
              Gotowy na współpracę?{" "}
              <span style={{ color: "var(--hb-water)" }}>Zrób pierwszy krok.</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Pracujemy solidnie i uczciwie. Oferujemy stabilne zatrudnienie, dobre warunki i wsparcie logistyczne. Praca w zespole, delegacje, ale też wolne weekendy – wszystko klarownie ustalone.
            </p>
            <p className="mt-3 text-base text-slate-500">
              Wypełnij formularz i poczekaj na kontakt. Jeśli Twoje doświadczenie odpowiada naszym potrzebom, odezwiemy się. W razie pytań – dzwoń lub napisz.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full text-lg font-black text-white" style={{ background: "var(--hb-water)" }}>LB</div>
              <div>
                <div className="font-bold text-slate-900">Leszek Białasik</div>
                <div className="text-sm" style={{ color: "var(--hb-water)" }}>HydroBagger.pl</div>
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="mailto:kontakt@hydrobagger.pl" className="flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-all hover:border-[#0284c7] hover:text-[#0284c7]">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                kontakt@hydrobagger.pl
              </a>
              <a href="tel:+48504026042" className="flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-all hover:border-[#0284c7] hover:text-[#0284c7]">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                +48 504 026 042
              </a>
            </div>
          </div>
          <div className="track-border p-8 lg:p-10">
            <div className="mb-7">
              <h3 className="text-2xl font-bold text-slate-900">Wyślij zgłoszenie</h3>
              <p className="mt-1.5 text-sm text-slate-500">Odpowiemy w ciągu 24–48 godzin roboczych.</p>
            </div>
            <form className="flex flex-col gap-4" action="#" method="post" noValidate>
              <input type="hidden" name="position" value={jobTitle} />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="job-name" className="text-xs font-semibold uppercase tracking-wider text-slate-500">Imię i nazwisko <span className="text-[#0284c7]">*</span></label>
                  <input id="job-name" type="text" name="name" required placeholder="Jan Kowalski" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-300 outline-none transition focus:border-[#0284c7] focus:ring-2" style={{ "--tw-ring-color": "rgba(2,132,199,0.25)" } as CSSProperties} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="job-phone" className="text-xs font-semibold uppercase tracking-wider text-slate-500">Telefon</label>
                  <input id="job-phone" type="tel" name="phone" placeholder="+48 000 000 000" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-300 outline-none transition focus:border-[#0284c7] focus:ring-2" style={{ "--tw-ring-color": "rgba(2,132,199,0.25)" } as CSSProperties} />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="job-email" className="text-xs font-semibold uppercase tracking-wider text-slate-500">Adres e-mail <span className="text-[#0284c7]">*</span></label>
                <input id="job-email" type="email" name="email" required placeholder="jan@firma.pl" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-300 outline-none transition focus:border-[#0284c7] focus:ring-2" style={{ "--tw-ring-color": "rgba(2,132,199,0.25)" } as CSSProperties} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="job-msg" className="text-xs font-semibold uppercase tracking-wider text-slate-500">Doświadczenie i motywacja <span className="text-[#0284c7]">*</span></label>
                <textarea id="job-msg" name="message" rows={4} placeholder="Opisz krótko swoje doświadczenie, posiadane uprawnienia i dlaczego chcesz dołączyć do HydroBagger..." className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-300 outline-none transition focus:border-[#0284c7] focus:ring-2" style={{ "--tw-ring-color": "rgba(2,132,199,0.25)" } as CSSProperties} />
              </div>
              <div className="mt-2 flex flex-wrap items-center justify-between gap-4">
                <button type="submit" className="btn-pulse rounded-full px-9 py-3.5 text-base font-bold text-white transition-all" style={{ background: "var(--hb-water)", boxShadow: "0 8px 20px -4px rgba(2,132,199,0.45)" }}>
                  Wyślij zgłoszenie →
                </button>
                <p className="max-w-[200px] text-xs leading-relaxed text-slate-400">
                  Dane są chronione zgodnie z{" "}
                  <Link href="/polityka-prywatnosci" className="underline hover:text-slate-600">Polityką Prywatności</Link>.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
