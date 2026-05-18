import Link from "next/link";
import { ArrowRight, MessageCircle, Award, Globe2, Factory, Calendar } from "lucide-react";
import { Marquee } from "@/components/marquee";
import { ProductCard } from "@/components/product-card";
import { products, company, whatsappEnquiryUrl } from "@/lib/products";

const featuredSlugs = [
  "ansi-b16-5-flanges",
  "din-flanges",
  "butt-weld-elbows-returns",
  "seamless-welded-pipes",
];

export default function Home() {
  const featured = featuredSlugs
    .map((s) => products.find((p) => p.slug === s))
    .filter(Boolean) as typeof products;

  return (
    <>
      <Hero />
      <IndustriesStrip />
      <FeaturedFamilies />
      <Featured products={featured} />
      <Numbers />
      <Certifications />
      <Cta />
    </>
  );
}

/* ============================== HERO ============================== */

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10 pt-16 lg:pt-24 pb-24 lg:pb-32">
        <div className="flex items-baseline justify-between flex-wrap gap-4 mb-12 lg:mb-20">
          <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-ink-mute">
            Est. 1998 — Mengcun, Hebei · Dubai since 2010
          </p>
          <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-ink-mute">
            № 001 — Catalog Vol. I
          </p>
        </div>

        <h1 className="display text-[15vw] sm:text-[14vw] lg:text-[10.5vw] xl:text-[150px] leading-[0.88] tracking-tight">
          Forged steel
          <br />
          for the world&apos;s
          <br />
          <em className="display-italic text-brass">hardest pipelines.</em>
        </h1>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <p className="text-lg lg:text-xl text-ink-soft leading-relaxed max-w-2xl">
              OSTAR Group manufactures forged high-pressure flanges and pipe
              fittings to ANSI, ASME, DIN, BS and JIS standards. ISO, TÜV and CE
              certified — supplied to Oil &amp; Gas, Marine and Power projects
              in <em className="display-italic">{company.markets.slice(0, 4).join(", ")}</em>
              {" "}and worldwide.
            </p>
          </div>
          <div className="lg:col-span-5 flex flex-col sm:flex-row gap-3 lg:justify-end">
            <Link
              href="/products"
              className="group inline-flex items-center justify-center gap-3 bg-ink text-cream rounded-full px-7 py-4 text-[12px] tracking-[0.18em] uppercase hover:bg-brass-deep transition-colors duration-500"
            >
              Browse Catalog
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={whatsappEnquiryUrl("Quick enquiry from website")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 border border-ink/40 hover:border-ink rounded-full px-7 py-4 text-[12px] tracking-[0.18em] uppercase transition-colors duration-500"
            >
              <MessageCircle size={14} />
              WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-24 lg:mt-32 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 border-t border-line-strong pt-10">
          <Stat value="28" suffix="yrs" label="Manufacturing" />
          <Stat value="880K" suffix="m²" label="Factory area" />
          <Stat value="2.5K" suffix="t/mo" label="Production capacity" />
          <Stat value="30K" suffix="t" label="Export award 2016" />
        </div>
      </div>

      <div className="absolute top-1/2 -right-32 hidden lg:block opacity-[0.04] -rotate-12 pointer-events-none">
        <span className="display text-[300px] tracking-tighter">B16.5</span>
      </div>
    </section>
  );
}

function Stat({ value, suffix, label }: { value: string; suffix: string; label: string }) {
  return (
    <div className="flex flex-col">
      <span className="display text-5xl lg:text-6xl text-ink">
        {value}
        <span className="text-brass text-3xl lg:text-4xl ml-1 font-mono align-top">
          {suffix}
        </span>
      </span>
      <span className="mt-2 text-[11px] tracking-[0.2em] uppercase text-ink-mute font-mono">
        {label}
      </span>
    </div>
  );
}

/* ============================ INDUSTRIES ============================ */

function IndustriesStrip() {
  return (
    <div className="relative z-10">
      <Marquee items={["Oil & Gas", "Petrochemical", "Marine", "Power Generation", "Construction", "Ocean Engineering"]} />
    </div>
  );
}

/* ============================ FAMILIES ============================ */

function FeaturedFamilies() {
  const families = [
    {
      tag: "01",
      title: "Flanges",
      lede: "ANSI, ASME, DIN, BS, JIS — Class 75 through 1500, PN6 through PN40.",
      href: "/products?family=Flanges",
    },
    {
      tag: "02",
      title: "Fittings",
      lede: "Elbows, tees, crosses, reducers and caps to ASME B16.9 / B16.28.",
      href: "/products?family=Fittings",
    },
    {
      tag: "03",
      title: "Pipes",
      lede: 'Seamless and welded line pipe — 1/2" to 60", SCH5 through XXS.',
      href: "/products?family=Pipes",
    },
  ];

  return (
    <section className="mx-auto max-w-[1440px] px-6 lg:px-10 py-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
        <p className="lg:col-span-3 font-mono text-[11px] tracking-[0.3em] uppercase text-ink-mute">
          ① The Catalog
        </p>
        <h2 className="lg:col-span-9 display text-5xl lg:text-7xl max-w-3xl">
          Three families.
          <em className="display-italic text-brass"> Every</em> standard.
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-line-strong border border-line-strong">
        {families.map((f) => (
          <Link
            key={f.title}
            href={f.href}
            className="group bg-cream p-10 lg:p-14 flex flex-col justify-between min-h-[420px] transition-colors duration-500 hover:bg-cream-deep"
          >
            <div>
              <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-brass">
                {f.tag}
              </span>
              <h3 className="display text-6xl lg:text-7xl mt-8 leading-[0.9]">
                {f.title}
              </h3>
            </div>
            <div className="flex items-end justify-between gap-6 mt-12">
              <p className="text-ink-soft leading-relaxed max-w-xs">
                {f.lede}
              </p>
              <span className="shrink-0 w-12 h-12 rounded-full border border-ink/30 flex items-center justify-center transition-all duration-500 group-hover:bg-ink group-hover:text-cream group-hover:border-ink">
                <ArrowRight size={16} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

/* ============================ FEATURED ============================ */

function Featured({ products }: { products: typeof import("@/lib/products").products }) {
  return (
    <section className="mx-auto max-w-[1440px] px-6 lg:px-10 pb-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
        <p className="lg:col-span-3 font-mono text-[11px] tracking-[0.3em] uppercase text-ink-mute">
          ② Featured
        </p>
        <div className="lg:col-span-9 flex items-end justify-between gap-6 flex-wrap">
          <h2 className="display text-5xl lg:text-7xl max-w-3xl">
            What buyers <em className="display-italic">specify</em> most.
          </h2>
          <Link href="/products" className="link-underline text-[12px] tracking-[0.18em] uppercase">
            All products →
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((p, i) => (
          <ProductCard key={p.slug} product={p} index={i} />
        ))}
      </div>
    </section>
  );
}

/* ============================ NUMBERS ============================ */

function Numbers() {
  const items = [
    { icon: Calendar, label: "Founded", value: "1998", note: "Hebei, China" },
    { icon: Factory, label: "Factory area", value: "880,000 m²", note: "Mengcun County" },
    { icon: Globe2, label: "Markets", value: "30+ countries", note: "Worldwide export" },
    { icon: Award, label: "Recognition", value: "30,000 Tons", note: "Export award 2016" },
  ];
  return (
    <section className="bg-steel text-cream py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }} />
      </div>
      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          <p className="lg:col-span-3 font-mono text-[11px] tracking-[0.3em] uppercase text-cream/50">
            ③ The Numbers
          </p>
          <h2 className="lg:col-span-9 display text-5xl lg:text-7xl max-w-3xl">
            Two decades of forged steel — at <em className="display-italic text-brass">scale</em>.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/15">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <div key={i} className="bg-steel p-10 flex flex-col gap-6">
                <Icon size={28} className="text-brass" strokeWidth={1.5} />
                <div>
                  <div className="display text-4xl lg:text-5xl">{it.value}</div>
                  <div className="mt-2 text-[11px] tracking-[0.2em] uppercase font-mono text-cream/50">
                    {it.label}
                  </div>
                  <div className="mt-1 text-sm text-cream/70">{it.note}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============================ CERTIFICATIONS ============================ */

function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-[1440px] px-6 lg:px-10 py-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
        <p className="lg:col-span-3 font-mono text-[11px] tracking-[0.3em] uppercase text-ink-mute">
          ④ Credentials
        </p>
        <h2 className="lg:col-span-9 display text-5xl lg:text-7xl max-w-3xl">
          Audited, certified, <em className="display-italic">documented</em>.
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
  );
}

/* ============================ CTA ============================ */

function Cta() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 lg:px-10 pb-32">
      <div className="bg-ink text-cream rounded-[24px] p-12 lg:p-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none flex items-center justify-end">
          <span className="display text-[400px] tracking-tighter">B16.5</span>
        </div>
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-brass mb-8">
              Ready to specify?
            </p>
            <h2 className="display text-5xl lg:text-7xl leading-[0.9]">
              Send your tender,
              <br />
              get a <em className="display-italic text-brass">quote in 24 hours</em>.
            </h2>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-3 lg:items-end">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 bg-brass text-ink rounded-full px-7 py-4 text-[12px] tracking-[0.18em] uppercase hover:bg-cream transition-colors duration-500"
            >
              Request a Quote
              <ArrowRight size={16} />
            </Link>
            <a
              href={whatsappEnquiryUrl("General enquiry")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 border border-cream/30 hover:border-cream rounded-full px-7 py-4 text-[12px] tracking-[0.18em] uppercase transition-colors duration-500"
            >
              <MessageCircle size={14} />
              WhatsApp Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
