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

type Props = { item: UslugaZakresCard };

/** Kafelek usługi jak w sekcji „Zakres prac” na stronie głównej. */
export function UsługiZakresCard({ item }: Props) {
  return (
    <Link
      href={item.href}
      className="group @container/uslugi flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow duration-500 ease-in-out hover:shadow-xl"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
        <Image
          src={imageUrl(item.img)}
          alt={item.title.replace(/\n/g, " ")}
          fill
          className="object-cover brightness-[1.02] contrast-[1.04] saturate-[1.06] transition-transform duration-700 ease-in-out will-change-transform group-hover:scale-[1.04]"
          sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,25vw"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a2744]/18 via-sky-700/[0.04] to-white/12"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-200/[0.04] via-transparent to-[#0284c7]/[0.07]"
          aria-hidden
        />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6 lg:p-5 xl:p-8">
        <p className="mb-5 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-slate-500">{item.short}</p>
        <h3
          className="display-heading mb-3 min-h-[2.5lh] whitespace-pre-line leading-tight text-slate-900"
          style={{
            fontSize: "clamp(0.875rem, 0.55rem + 3.8cqi, 1.375rem)",
          }}
        >
          {item.title}
        </h3>
        <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-600">{item.desc}</p>
        <div className="mt-auto flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0284c7] transition-colors group-hover:text-[#0369a1]">
          Dowiedz się więcej
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
