"use client";

import { useState } from "react";

export type FAQItem = { q: string; a: string };

export function DlaKogoFAQ({ title, items }: { title: string; items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <span className="section-label">Pytania i odpowiedzi</span>
          <h2 className="display-heading mt-4 text-slate-900" style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)" }}>
            {title}
          </h2>
        </div>
        <div className="rounded-2xl bg-white px-6 py-2 shadow-sm" style={{ border: "1px solid #e2e8f0" }}>
          <div className="divide-y divide-slate-100">
            {items.map((item, i) => (
              <div key={item.q}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  <span className="text-base font-semibold text-slate-900 sm:text-lg">{item.q}</span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors" style={{ background: open === i ? "var(--hb-water)" : "rgba(2,132,199,0.08)" }}>
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke={open === i ? "#fff" : "var(--hb-water)"} strokeWidth={2.5} style={{ transform: open === i ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s" }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: open === i ? "300px" : "0px", opacity: open === i ? 1 : 0 }}>
                  <p className="pb-5 text-base leading-relaxed text-slate-600">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
