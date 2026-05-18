import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, MessageCircle, Mail, ChevronLeft } from "lucide-react";
import { products, getProduct, whatsappEnquiryUrl, company } from "@/lib/products";

type Params = { slug: string };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return { title: "Product not found" };
  return {
    title: p.name,
    description: p.tagline,
  };
}

export default async function ProductDetail({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();

  const related = products
    .filter((x) => x.slug !== p.slug && x.family === p.family)
    .slice(0, 3);

  return (
    <>
      <article className="mx-auto max-w-[1440px] px-6 lg:px-10 pt-12 lg:pt-16 pb-24">
        {/* Breadcrumb */}
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-[12px] tracking-[0.18em] uppercase text-ink-mute hover:text-ink mb-12 link-underline"
        >
          <ChevronLeft size={14} />
          All products
        </Link>

        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-brass">
                {p.family} · {p.category}
              </span>
            </div>
            <h1 className="display text-5xl md:text-7xl lg:text-8xl leading-[0.92]">
              {p.name}
            </h1>
            <p className="mt-8 text-lg lg:text-xl text-ink-soft leading-relaxed max-w-2xl">
              {p.tagline}
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="aspect-square bg-ink/[0.04] hairline relative overflow-hidden">
              <svg viewBox="0 0 400 400" className="w-full h-full" fill="none">
                <circle cx="200" cy="200" r="160" stroke="currentColor" strokeOpacity="0.18" />
                <circle cx="200" cy="200" r="120" stroke="currentColor" strokeOpacity="0.28" />
                <circle cx="200" cy="200" r="60" stroke="currentColor" strokeOpacity="0.4" />
                <circle cx="200" cy="200" r="48" fill="var(--cream-deep)" />
                {Array.from({ length: 10 }).map((_, i) => {
                  const a = (i / 10) * Math.PI * 2;
                  const x = 200 + Math.cos(a) * 140;
                  const y = 200 + Math.sin(a) * 140;
                  return <circle key={i} cx={x} cy={y} r="8" fill="var(--brass)" fillOpacity="0.9" />;
                })}
              </svg>
              <span className="absolute bottom-4 left-4 font-mono text-[10px] tracking-[0.2em] uppercase text-ink-mute">
                {p.standardFamily} · Fig. 01
              </span>
            </div>
          </div>
        </div>

        {/* CTA strip */}
        <div className="mt-14 flex flex-wrap items-center gap-3">
          <a
            href={whatsappEnquiryUrl(p.name)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-ink text-cream rounded-full px-7 py-4 text-[12px] tracking-[0.18em] uppercase hover:bg-brass-deep transition-colors duration-500"
          >
            <MessageCircle size={14} />
            WhatsApp Enquiry
          </a>
          <Link
            href={`/contact?product=${encodeURIComponent(p.name)}`}
            className="inline-flex items-center justify-center gap-3 border border-ink hover:bg-ink hover:text-cream rounded-full px-7 py-4 text-[12px] tracking-[0.18em] uppercase transition-colors duration-500"
          >
            <Mail size={14} />
            Request a Quote
          </Link>
          <a
            href={`mailto:${company.contact.china.email}?subject=Enquiry: ${encodeURIComponent(p.name)}`}
            className="text-[12px] tracking-[0.18em] uppercase text-ink-mute hover:text-ink link-underline ml-2"
          >
            {company.contact.china.email}
          </a>
        </div>

        {/* Description */}
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <p className="lg:col-span-3 font-mono text-[11px] tracking-[0.3em] uppercase text-ink-mute">
            01 — Overview
          </p>
          <p className="lg:col-span-9 display text-3xl lg:text-4xl leading-tight max-w-4xl text-ink-soft">
            {p.description}
          </p>
        </div>

        {/* Variants table */}
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-3">
            <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-ink-mute">
              02 — Variants
            </p>
            <p className="mt-3 text-sm text-ink-mute leading-relaxed">
              Every pressure class, type and standard we manufacture for this family.
            </p>
          </div>
          <div className="lg:col-span-9">
            <div className="hairline-strong divide-y divide-line-strong">
              <div className="grid grid-cols-12 gap-4 px-4 py-3 font-mono text-[10px] tracking-[0.25em] uppercase text-ink-mute">
                <div className="col-span-3">Class / Pressure</div>
                <div className="col-span-5">Types</div>
                <div className="col-span-2">Sizes</div>
                <div className="col-span-2">Standard</div>
              </div>
              {p.variants.map((v) => (
                <div key={v.rating} className="grid grid-cols-12 gap-4 px-4 py-6 items-baseline">
                  <div className="col-span-12 md:col-span-3 display text-2xl">{v.rating}</div>
                  <div className="col-span-12 md:col-span-5">
                    <div className="flex flex-wrap gap-1.5">
                      {v.types.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[10px] tracking-[0.12em] uppercase text-ink-soft border border-line-strong px-2 py-1"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    {v.note && (
                      <p className="mt-2 text-xs text-ink-mute italic">{v.note}</p>
                    )}
                  </div>
                  <div className="col-span-6 md:col-span-2 font-mono text-sm">{v.sizeRange}</div>
                  <div className="col-span-6 md:col-span-2 font-mono text-[11px] text-ink-mute">
                    {v.standards.join(" · ")}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Materials & faces */}
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-3">
            <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-ink-mute">
              03 — Materials &amp; Finish
            </p>
          </div>
          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="display text-2xl mb-5">Materials offered</h3>
              <ul className="space-y-3">
                {p.materials.map((m) => (
                  <li
                    key={m}
                    className="flex items-baseline gap-3 font-mono text-sm text-ink-soft border-b border-line py-3"
                  >
                    <span className="text-brass text-xs">▪</span>
                    {m}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="display text-2xl mb-5">Face / Finish options</h3>
              <ul className="space-y-3">
                {(p.faces ?? ["—"]).map((f) => (
                  <li
                    key={f}
                    className="flex items-baseline gap-3 font-mono text-sm text-ink-soft border-b border-line py-3"
                  >
                    <span className="text-brass text-xs">▪</span>
                    {f}
                  </li>
                ))}
              </ul>
              <h3 className="display text-2xl mb-5 mt-10">Industries served</h3>
              <div className="flex flex-wrap gap-2">
                {p.industries.map((i) => (
                  <span
                    key={i}
                    className="font-mono text-[11px] tracking-[0.15em] uppercase text-ink-soft border border-line-strong px-3 py-1.5"
                  >
                    {i}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related */}
      {related.length > 0 && (
        <section className="mx-auto max-w-[1440px] px-6 lg:px-10 pb-32 border-t border-line-strong pt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12">
            <p className="lg:col-span-3 font-mono text-[11px] tracking-[0.3em] uppercase text-ink-mute">
              Also in {p.family}
            </p>
            <h2 className="lg:col-span-9 display text-4xl lg:text-6xl">
              You might also <em className="display-italic">specify</em>.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((r, i) => (
              <Link
                key={r.slug}
                href={`/products/${r.slug}`}
                className="group block bg-cream-deep hairline p-8 hover:bg-cream-deep/70 transition-colors"
              >
                <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-brass">
                  {r.standardFamily}
                </span>
                <h3 className="display text-3xl mt-6 leading-tight">{r.name}</h3>
                <p className="mt-4 text-sm text-ink-mute line-clamp-2">{r.tagline}</p>
                <div className="mt-8 flex items-center gap-2 text-[12px] tracking-[0.18em] uppercase">
                  View product
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
