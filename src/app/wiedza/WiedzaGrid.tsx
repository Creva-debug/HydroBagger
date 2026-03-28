"use client";

import Image from "next/image";
import { useState } from "react";
import { imageUrl } from "@/lib/images";

const KATEGORIE = [
  { id: "wszystkie", label: "Wszystkie tematy" },
  { id: "poglebiane", label: "Pogłębianie" },
  { id: "koszenie", label: "Koszenie i mulczowanie" },
  { id: "refulacja", label: "Refulacja" },
  { id: "srodowisko", label: "Środowisko" },
  { id: "sprzet", label: "Sprzęt" },
] as const;

type KategoriaId = (typeof KATEGORIE)[number]["id"];

const ARTYKULY: {
  id: number;
  kategoria: Exclude<KategoriaId, "wszystkie">;
  tytul: string;
  opis: string;
  czas: string;
  img: string;
  gradient: string;
}[] = [
  { id: 1, kategoria: "poglebiane", tytul: "Jak przebiega odmulanie stawu – krok po kroku", opis: "Od oceny stanu zbiornika, przez dobór sprzętu, aż po wywóz urobku. Kompleksowy przewodnik po procesie pogłębiania.", czas: "8 min czytania", img: "koparka-plywajaca-kopanie-torfowisko01.jpg", gradient: "from-sky-900/60 to-[#071e32]/80" },
  { id: 2, kategoria: "refulacja", tytul: "Refulacja osadów – na czym polega i kiedy warto?", opis: "Hydrauliczne odsysanie mułu bez opuszczania wody ze zbiornika. Kiedy to jedyna skuteczna metoda?", czas: "6 min czytania", img: "koparka-plywajaca-pompa-refulacyjna-odmulanie1.jpg", gradient: "from-teal-900/60 to-[#071e32]/80" },
  { id: 3, kategoria: "koszenie", tytul: "Koszenie roślinności wodnej – metody i dobór sprzętu", opis: "Porównanie kosiarek pływających i samobieżnych, sezonowość prac oraz co zrobić z zebraną biomasą.", czas: "7 min czytania", img: "koszenie-roslinnosci-wodnej-kosiarka-plywajaca-w-akcji1.jpg", gradient: "from-green-900/60 to-[#071e32]/80" },
  { id: 4, kategoria: "sprzet", tytul: "Koparka pływająca vs. gąsienicowa – kiedy co wybrać?", opis: "Różnice, ograniczenia terenu, nośność podłoża i typy prac. Praktyczny przewodnik dla inwestorów i wykonawców.", czas: "5 min czytania", img: "koparka-plywajaca-kopanie-odmulanie-teren-podmokly.jpg", gradient: "from-blue-900/60 to-[#071e32]/80" },
  { id: 5, kategoria: "srodowisko", tytul: "Jak odtworzyć retencję wodną na terenie rolnym?", opis: "Melioracje, rowy, zbiorniki retencyjne – co wymaga pozwolenia, jak planować prace i na co zwrócić uwagę.", czas: "9 min czytania", img: "koparka-plywajaca-kopanie-torfowisko01.jpg", gradient: "from-emerald-900/60 to-[#071e32]/80" },
  { id: 6, kategoria: "poglebiane", tytul: "Pogłębianie w trudnym terenie – bagna, torfy, woda", opis: "Specyfika pracy na gruntach podmokłych. Jak zabezpieczamy teren, sprzęt i jakie ryzyka bierzemy pod uwagę.", czas: "7 min czytania", img: "koparka-plywajaca-zestaw-refulacyjny-hydrobagger.jpg", gradient: "from-slate-800/60 to-[#071e32]/80" },
];

function ArticleCard({ art }: { art: (typeof ARTYKULY)[number] }) {
  const katLabel = KATEGORIE.find((k) => k.id === art.kategoria)?.label ?? art.kategoria;
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg">
      <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
        <Image src={imageUrl(art.img)} alt={art.tytul} fill className="object-cover brightness-[0.85] saturate-[0.75] transition-transform duration-700 group-hover:scale-[1.04]" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
        <div className={`absolute inset-0 bg-gradient-to-t ${art.gradient}`} />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-sm" style={{ background: "rgba(2,132,199,0.75)", border: "1px solid rgba(255,255,255,0.22)" }}>Wkrótce</span>
        </div>
        <div className="absolute left-3 top-3">
          <span className="rounded-full bg-white/90 px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-[#0284c7] backdrop-blur-sm">{katLabel}</span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="line-clamp-2 text-base font-bold leading-snug text-slate-900 transition-colors group-hover:text-[#0284c7]">{art.tytul}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500 line-clamp-3">{art.opis}</p>
        <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
          <span className="text-xs text-slate-400">{art.czas}</span>
          <span className="flex items-center gap-1 text-xs font-semibold text-slate-300">
            Niedostępny
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </span>
        </div>
      </div>
    </div>
  );
}

export function WiedzaGrid() {
  const [aktywna, setAktywna] = useState<KategoriaId>("wszystkie");
  const filtered = aktywna === "wszystkie" ? ARTYKULY : ARTYKULY.filter((a) => a.kategoria === aktywna);
  return (
    <>
      <div className="mb-10 flex flex-wrap gap-2">
        {KATEGORIE.map((k) => {
          const isActive = aktywna === k.id;
          const count = k.id === "wszystkie" ? ARTYKULY.length : ARTYKULY.filter((a) => a.kategoria === k.id).length;
          return (
            <button key={k.id} type="button" onClick={() => setAktywna(k.id)} className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${isActive ? "text-white shadow-md" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`} style={isActive ? { background: "var(--hb-water)" } : undefined}>
              {k.label}
              <span className={`ml-1.5 rounded-full px-1.5 py-0.5 text-[0.6rem] font-bold ${isActive ? "bg-white/25 text-white" : "bg-slate-200 text-slate-500"}`}>{count}</span>
            </button>
          );
        })}
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((art) => <ArticleCard key={art.id} art={art} />)}
      </div>
      {filtered.length === 0 && <div className="py-20 text-center text-slate-400">Brak artykułów w tej kategorii.</div>}
    </>
  );
}
