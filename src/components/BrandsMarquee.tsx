import Image from "next/image";
import { imageUrl } from "@/lib/images";

const LOGOS = [
  "Logo_budimex-1.png",
  "Logo_uniwersystet_przyrodniczy_w_poznaniu.png",
  "Logo_PORR.png",
  "Logo_uniwersystet_warminsko_mazurski_w_olsztynie.png",
  "Logo_ujscie_warty.png",
  "Logo_wody_polski.png",
  "Logo_eko_folwark.png",
] as const;

/** Logotypy wymagające większego wyświetlania */
const LARGE_LOGOS = new Set([
  "Logo_uniwersystet_przyrodniczy_w_poznaniu.png",
  "Logo_uniwersystet_warminsko_mazurski_w_olsztynie.png",
  "Logo_ujscie_warty.png",
  "Logo_wody_polski.png",
]);

const MARQUEE_LOGOS = [...LOGOS, ...LOGOS] as string[];

export function BrandsMarquee() {
  return (
    <section className="overflow-hidden border-t border-slate-100 bg-slate-50 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-10 text-center text-xs font-bold uppercase tracking-[0.18em] text-slate-500 sm:text-sm">
          Marki, które nam zaufały
        </p>
      </div>
      <div
        className="relative"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
        }}
      >
        <div className="marquee-track">
          {MARQUEE_LOGOS.map((logo, idx) => {
            const large = LARGE_LOGOS.has(logo);
            return (
              <div
                key={`${logo}-${idx}`}
                className={`relative shrink-0 mx-3 sm:mx-8 ${
                  large
                    ? "h-20 w-48 sm:h-28 sm:w-64"
                    : "h-14 w-32 sm:h-20 sm:w-48"
                }`}
              >
                <Image
                  src={imageUrl(logo)}
                  alt={logo.replace(/Logo_|\.png/g, "").replace(/_/g, " ")}
                  fill
                  className="object-contain"
                  sizes="224px"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
