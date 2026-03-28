"use client";

import { useState } from "react";

const FAQ = [
  { q: "Jak wygląda proces rekrutacji?", a: "Po przesłaniu formularza kontaktowego skontaktujemy się z wybranymi kandydatami. W kolejnym kroku przeprowadzamy rozmowę (telefonicznie lub online), a następnie – w zależności od stanowiska – zapraszamy na spotkanie lub jazdę testową." },
  { q: "Czy muszę mieć doświadczenie w pracy z maszynami specjalistycznymi?", a: "Nie zawsze. Wymagania zależą od stanowiska. Szukamy zarówno doświadczonych operatorów, jak i osób chętnych do przyuczenia – szczególnie na stanowiska pomocnicze i techniczne." },
  { q: "Na jakie typy umów można liczyć?", a: "Oferujemy elastyczne formy zatrudnienia – od umów o pracę, przez umowy zlecenie, po współpracę B2B. Warunki dopasowujemy do zakresu obowiązków i preferencji kandydata." },
] as const;

export function PracaFAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="divide-y divide-slate-100">
      {FAQ.map((item, i) => (
        <div key={item.q}>
          <button type="button" className="flex w-full items-center justify-between gap-4 py-5 text-left" onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
            <span className="text-base font-semibold text-slate-900 sm:text-lg">{item.q}</span>
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors" style={{ background: open === i ? "var(--hb-water)" : "rgba(2,132,199,0.08)" }}>
              <svg className="h-4 w-4 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke={open === i ? "#fff" : "var(--hb-water)"} strokeWidth={2.5} style={{ transform: open === i ? "rotate(180deg)" : "rotate(0deg)" }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>
          <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: open === i ? "200px" : "0px", opacity: open === i ? 1 : 0 }}>
            <p className="pb-5 text-base leading-relaxed text-slate-600">{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
