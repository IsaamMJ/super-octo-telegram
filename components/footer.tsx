import Link from "next/link";
import { company } from "@/lib/products";

export function Footer() {
  return (
    <footer className="relative z-10 bg-ink text-cream mt-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10 pt-24 pb-12">
        {/* Manifesto row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-20 border-b border-white/10">
          <div className="lg:col-span-7">
            <p className="text-[11px] tracking-[0.3em] uppercase text-cream/50 mb-6 font-mono">
              Since 1998 — Mengcun, Hebei · Dubai
            </p>
            <h2 className="display text-5xl md:text-7xl text-cream">
              Forged for the world&apos;s
              <br />
              <em className="display-italic text-brass">hardest pipelines.</em>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-6 flex flex-col gap-6">
            <p className="text-cream/70 leading-relaxed text-[15px] max-w-md">
              Quotes within 24 hours. We&apos;ll match your standard, grade and
              schedule, and ship to any port.
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              <Link
                href="/contact"
                className="rounded-full bg-brass text-ink px-6 py-3 text-[12px] tracking-[0.15em] uppercase hover:bg-cream transition-colors"
              >
                Request a Quote
              </Link>
              <Link
                href="/products"
                className="rounded-full border border-cream/30 px-6 py-3 text-[12px] tracking-[0.15em] uppercase hover:border-cream/80 transition-colors"
              >
                Browse Catalog
              </Link>
            </div>
          </div>
        </div>

        {/* Detail grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-16">
          <FooterCol title="Catalog">
            <Link href="/products?family=Flanges" className="hover:text-cream">Flanges</Link>
            <Link href="/products?family=Fittings" className="hover:text-cream">Fittings</Link>
            <Link href="/products?family=Pipes" className="hover:text-cream">Pipes</Link>
            <Link href="/products" className="hover:text-cream">All Products</Link>
          </FooterCol>
          <FooterCol title="Company">
            <Link href="/about" className="hover:text-cream">About OSTAR</Link>
            <Link href="/about#certifications" className="hover:text-cream">Certifications</Link>
            <Link href="/about#history" className="hover:text-cream">History</Link>
            <Link href="/contact" className="hover:text-cream">Contact</Link>
          </FooterCol>
          <FooterCol title="Dubai">
            <span>{company.contact.dubai.company}</span>
            <span>{company.contact.dubai.address}</span>
          </FooterCol>
          <FooterCol title="China Factory">
            <span>{company.contact.china.company}</span>
            <span>{company.contact.china.address}</span>
            <span className="font-mono text-cream/90">{company.contact.china.email}</span>
          </FooterCol>
        </div>

        {/* Wordmark + legal */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between gap-6">
          <div className="display text-[64px] md:text-[120px] lg:text-[160px] leading-none tracking-tighter -ml-[3px]">
            <span>OSTAR</span>
            <span className="display-italic text-brass"> Group</span>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between gap-4 text-[11px] tracking-[0.18em] uppercase text-cream/40 font-mono">
          <span>© {new Date().getFullYear()} OSTAR Group. All rights reserved.</span>
          <span>ISO · TÜV · CE · API 6L · DNV</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-[10px] tracking-[0.3em] uppercase text-cream/40 font-mono mb-2">
        {title}
      </h3>
      <div className="flex flex-col gap-2 text-[14px] text-cream/70">
        {children}
      </div>
    </div>
  );
}
