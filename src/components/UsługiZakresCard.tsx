import Image from "next/image";
import Link from "next/link";
import { imageUrl } from "@/lib/images";
import type { UslugaZakresCard } from "@/lib/uslugi-zakres-cards";

function ArrowRight({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
    </svg>
  );
}

type Props = { item: UslugaZakresCard; hideDescription?: boolean; compact?: boolean };

/** Kafelek usługi jak w sekcji „Zakres prac” na stronie głównej. `compact` – mniejszy, stonowany wariant (np. /o-nas). */
export function UsługiZakresCard({ item, hideDescription = false, compact = false }: Props) {
  return (
    <Link
      href={item.href}
      className={
        compact
          ? "group @container/uslugi flex flex-col overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-none ring-1 ring-slate-900/[0.04] transition-[box-shadow,ring-color] duration-300 ease-out hover:shadow-md hover:ring-slate-900/[0.06]"
          : "group @container/uslugi flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow duration-500 ease-in-out hover:shadow-xl"
      }
    >
      <div
        className={`relative w-full overflow-hidden bg-slate-100 ${compact ? "aspect-[5/3]" : "aspect-[4/3]"}`}
      >
        <Image
          src={imageUrl(item.img)}
          alt={item.title.replace(/\n/g, " ")}
          fill
          className={
            compact
              ? "object-cover brightness-[1.01] contrast-[1.02] saturate-[1.04] transition-transform duration-500 ease-out will-change-transform group-hover:scale-[1.03]"
              : "object-cover brightness-[1.02] contrast-[1.04] saturate-[1.06] transition-transform duration-700 ease-in-out will-change-transform group-hover:scale-[1.04]"
          }
          sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,25vw"
        />
        <div
          className={`pointer-events-none absolute inset-0 bg-gradient-to-t to-white/12 ${compact ? "from-[#0a2744]/10 via-sky-700/[0.02]" : "from-[#0a2744]/18 via-sky-700/[0.04]"}`}
          aria-hidden
        />
        {!compact && (
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-200/[0.04] via-transparent to-[#0284c7]/[0.07]"
            aria-hidden
          />
        )}
      </div>
      <div className={`flex flex-1 flex-col ${compact ? "p-3.5 sm:p-4" : "p-5 sm:p-6 lg:p-5 xl:p-8"}`}>
        <p
          className={
            compact
              ? "mb-2 text-[0.6rem] font-medium uppercase tracking-[0.14em] text-slate-400"
              : "mb-5 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-slate-500"
          }
        >
          {item.short}
        </p>
        <h3
          className={`display-heading whitespace-pre-line leading-snug text-slate-900 ${hideDescription ? (compact ? "mb-2.5" : "mb-4") : "mb-3 min-h-[2.5lh]"}`}
          style={{
            fontSize: compact
              ? "clamp(0.8rem, 0.48rem + 2.6cqi, 1.05rem)"
              : "clamp(0.875rem, 0.55rem + 3.8cqi, 1.375rem)",
          }}
        >
          {item.title}
        </h3>
        {!hideDescription && (
          <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-600">{item.desc}</p>
        )}
        <div
          className={
            compact
              ? "mt-auto flex items-center gap-1.5 text-[0.65rem] font-semibold tracking-wide text-slate-500 transition-colors group-hover:text-[#0284c7]"
              : "mt-auto flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0284c7] transition-colors group-hover:text-[#0369a1]"
          }
        >
          {compact ? "Więcej" : "Dowiedz się więcej"}
          <ArrowRight className={`transition-transform group-hover:translate-x-0.5 ${compact ? "h-3 w-3" : "h-4 w-4"}`} />
        </div>
      </div>
    </Link>
  );
}
