import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { company } from "@/lib/products";

export const metadata: Metadata = {
  title: "About OSTAR Group",
  description:
    "Founded 1998 in Mengcun, Hebei. Manufactured to ANSI, ASME, DIN, BS and JIS standards. ISO, TÜV and CE certified. Dubai sales hub since 2010.",
};

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-[1440px] px-6 lg:px-10 pt-16 lg:pt-24 pb-20">
        <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-ink-mute mb-8">
          Vol. II — The Company
        </p>
        <h1 className="display text-6xl md:text-8xl lg:text-[160px] leading-[0.88]">
          About
          <br />
          <em className="display-italic text-brass">OSTAR Group.</em>
        </h1>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-[1440px] px-6 lg:px-10 pb-32 grid grid-cols-1 lg:grid-cols-12 gap-10">
        <p className="lg:col-span-3 font-mono text-[11px] tracking-[0.3em] uppercase text-ink-mute">
          ① Introduction
        </p>
        <div className="lg:col-span-9 max-w-3xl">
          <p className="display text-3xl lg:text-5xl leading-[1.1]">
            OSTAR Group is a professional manufacturer of high-pressure
            <em className="display-italic"> flanges</em> and{" "}
            <em className="display-italic">pipe fittings</em>, founded 1998 in
            Mengcun County — the hometown of pipe fittings in Hebei, China.
          </p>
          <p className="mt-10 text-lg text-ink-soft leading-relaxed">
            Across an 880,000 sqm production complex, we forge {" "}
            <span className="font-mono text-ink">{company.capacityFlangesPerMonth}</span> of
            flanges and{" "}
            <span className="font-mono text-ink">{company.capacityFittingsPerMonth}</span> of
            fittings every month — supplied to Oil &amp; Gas, Petrochemical,
            Marine, Power and Construction projects across the GCC, Europe and
            beyond. Since 2010, OSTAR has operated a Dubai sales hub serving
            global industrial buyers.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section id="history" className="bg-cream-deep py-32 border-y border-line">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
            <p className="lg:col-span-3 font-mono text-[11px] tracking-[0.3em] uppercase text-ink-mute">
              ② History
            </p>
            <h2 className="lg:col-span-9 display text-5xl lg:text-7xl">
              28 years of forging<em className="display-italic text-brass"> standards</em>.
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-3" />
            <ol className="lg:col-span-9 relative">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-line-strong" />
              {company.history.map((h) => (
                <li key={h.year} className="relative pl-10 lg:pl-16 pb-12 last:pb-0">
                  <div className="absolute left-[-5px] top-2 w-[10px] h-[10px] rounded-full bg-brass" />
                  <div className="flex items-baseline gap-6">
                    <span className="display text-5xl lg:text-7xl text-ink/30">{h.year}</span>
                    <p className="text-lg lg:text-xl text-ink-soft max-w-2xl">{h.event}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="mx-auto max-w-[1440px] px-6 lg:px-10 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          <p className="lg:col-span-3 font-mono text-[11px] tracking-[0.3em] uppercase text-ink-mute">
            ③ Certifications
          </p>
          <h2 className="lg:col-span-9 display text-5xl lg:text-7xl">
            Audited and <em className="display-italic">documented</em>.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-line-strong border border-line-strong">
          {company.certifications.map((c, i) => (
            <div key={i} className="bg-cream p-10 flex items-start gap-4">
              <span className="font-mono text-[11px] tracking-[0.2em] text-brass mt-2">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="display text-2xl leading-tight">{c}</h3>
                <p className="text-[12px] tracking-[0.15em] uppercase mt-3 text-ink-mute font-mono">
                  Third-party audited
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Markets */}
      <section className="bg-ink text-cream py-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
            <p className="lg:col-span-3 font-mono text-[11px] tracking-[0.3em] uppercase text-cream/50">
              ④ Markets &amp; Industries
            </p>
            <h2 className="lg:col-span-9 display text-5xl lg:text-7xl">
              Specified in <em className="display-italic text-brass">{company.markets.length}</em> markets.
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-6">
              <h3 className="font-mono text-[10px] tracking-[0.3em] uppercase text-cream/40 mb-6">
                Industries
              </h3>
              <ul className="space-y-4">
                {company.industries.map((i) => (
                  <li key={i} className="display text-3xl lg:text-4xl">{i}</li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-6">
              <h3 className="font-mono text-[10px] tracking-[0.3em] uppercase text-cream/40 mb-6">
                Markets
              </h3>
              <div className="flex flex-wrap gap-2">
                {company.markets.map((m) => (
                  <span
                    key={m}
                    className="border border-cream/30 px-4 py-2 font-mono text-[12px] tracking-[0.18em] uppercase"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[1440px] px-6 lg:px-10 py-24">
        <div className="flex items-baseline justify-between gap-6 flex-wrap">
          <h2 className="display text-4xl lg:text-6xl max-w-2xl">
            Ready to <em className="display-italic">specify</em>?
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-ink text-cream rounded-full px-7 py-4 text-[12px] tracking-[0.18em] uppercase hover:bg-brass-deep transition-colors duration-500"
          >
            Request a Quote
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
