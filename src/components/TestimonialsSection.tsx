const OPINIE = [
  {
    quote: "Prace wykonane przez HydroBagger w naszym obiekcie przebiegły sprawnie i profesjonalnie.",
    author: "Damian Rapacki",
    role: "Kierownik Projektu",
    company: "Budimex S.A.",
  },
  {
    quote: "Zdecydowanie polecam każdemu, kto szuka partnera z misją, pasją i odpowiedzialnym podejściem.",
    author: "Piotr Chara",
    role: "Współzałożyciel i prezes",
    company: "Fundacja Zielonej Doliny Odry i Warty",
  },
  {
    quote: "To firma, która potrafi dostosować się do wysokich wymagań – z pełnym przekonaniem polecam ich do współpracy.",
    author: "Jacek Forycki",
    role: "Dyrektor",
    company: "Poznańskie Ośrodki Sportu i Rekreacji | Malta",
  },
] as const;

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <span className="section-label">{children}</span>;
}

export function TestimonialsSection() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <SectionLabel>Referencje</SectionLabel>
          <h2 className="display-heading mt-4 text-slate-900" style={{ fontSize: "clamp(2.2rem,4vw,3.2rem)" }}>
            Co mówią o nas <span style={{ color: "var(--hb-water)" }}>klienci?</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {OPINIE.map((item, i) => (
            <blockquote
              key={item.author}
              className="card-lift flex flex-col rounded-2xl p-8"
              style={{
                background: i === 1 ? "linear-gradient(135deg, #0f172a, var(--hb-water))" : "#ffffff",
                border: "1px solid",
                borderColor: i === 1 ? "transparent" : "#e2e8f0",
              }}
            >
              <div
                className="mb-5 text-5xl font-black leading-none"
                style={{ color: i === 1 ? "rgba(56, 189, 248, 0.4)" : "var(--hb-water)", lineHeight: 1 }}
              >
                &ldquo;
              </div>
              <p className={`mb-6 flex-1 text-[0.95rem] leading-relaxed italic ${i === 1 ? "text-white/90" : "text-slate-700"}`}>
                {item.quote}
              </p>
              <footer className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-black text-white"
                  style={{ background: i === 1 ? "rgba(255,255,255,.15)" : "var(--hb-water)" }}
                >
                  {item.author.charAt(0)}
                </div>
                <cite className="not-italic">
                  <span className={`block text-sm font-bold ${i === 1 ? "text-white" : "text-slate-900"}`}>{item.author}</span>
                  <span className={`block text-xs ${i === 1 ? "text-white/60" : "text-slate-500"}`}>{item.role}</span>
                  <span
                    className={`block text-xs font-semibold ${i === 1 ? "#7dd3fc" : "var(--hb-water)"}`}
                    style={i === 1 ? { color: "#7dd3fc" } : { color: "var(--hb-water)" }}
                  >
                    {item.company}
                  </span>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
