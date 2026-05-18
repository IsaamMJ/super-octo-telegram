import type { Metadata } from "next";
import { Suspense } from "react";
import { ProductsBrowser } from "./browser";

export const metadata: Metadata = {
  title: "Products — Flanges, Fittings & Pipes",
  description:
    "Browse OSTAR Group's full product catalog — forged flanges to ANSI, ASME, DIN, BS and JIS, butt-weld fittings, and seamless/welded line pipe.",
};

export default function ProductsPage() {
  return (
    <>
      <header className="mx-auto max-w-[1440px] px-6 lg:px-10 pt-16 lg:pt-24 pb-12">
        <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-ink-mute mb-8">
          § Catalog Volume I
        </p>
        <h1 className="display text-6xl md:text-8xl lg:text-[140px] leading-[0.9]">
          The Catalog.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-ink-soft leading-relaxed">
          Every flange family, every fitting class, every line-pipe schedule.
          Filter by family or standard, then dispatch a quote via WhatsApp or
          our enquiry form.
        </p>
      </header>

      <Suspense fallback={<div className="mx-auto max-w-[1440px] px-6 lg:px-10 pb-32 text-ink-mute">Loading…</div>}>
        <ProductsBrowser />
      </Suspense>
    </>
  );
}
