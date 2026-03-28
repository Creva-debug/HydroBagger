import Image from "next/image";
import { imageUrl } from "@/lib/images";

const LOGOS = [
  "Logo_eko_folwark.png",
  "Logo_PORR.png",
  "Logo_ujscie_warty.png",
  "Logo_uniwersystet_przyrodniczy_w_poznaniu.png",
  "Logo_uniwersystet_warminsko_mazurski_w_olsztynie.png",
  "Logo_wody_polski.png",
  "Logo_budimex-1.png",
] as const;

const MARQUEE_LOGOS = [...LOGOS, ...LOGOS] as string[];

export function BrandsMarquee() {
  return (
    <section className="overflow-hidden border-t border-slate-100 bg-slate-50 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-10 text-center text-[0.68rem] font-bold uppercase tracking-[0.2em] text-slate-400">
          Marki, które nam zaufały
        </p>
      </div>
      <div
        className="relative"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <div className="marquee-track">
          {MARQUEE_LOGOS.map((logo, idx) => (
            <div key={`${logo}-${idx}`} className="relative mx-8 h-20 w-48 shrink-0">
              <Image
                src={imageUrl(logo)}
                alt={logo.replace(/Logo_|\.png/g, "").replace(/_/g, " ")}
                fill
                className="object-contain"
                sizes="192px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
