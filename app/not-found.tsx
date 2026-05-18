import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 lg:px-10 py-32 lg:py-48 min-h-[60vh] flex flex-col justify-center">
      <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-ink-mute mb-8">
        Error 404
      </p>
      <h1 className="display text-6xl md:text-8xl lg:text-[140px] leading-[0.9]">
        Page not <em className="display-italic text-brass">forged</em>.
      </h1>
      <p className="mt-8 text-lg text-ink-soft max-w-xl">
        The page you were looking for isn&apos;t in this catalog. Try the
        product index or head back home.
      </p>
      <div className="mt-10 flex gap-3 flex-wrap">
        <Link href="/" className="inline-flex items-center gap-3 bg-ink text-cream rounded-full px-7 py-4 text-[12px] tracking-[0.18em] uppercase">
          Home
        </Link>
        <Link href="/products" className="inline-flex items-center gap-3 border border-ink rounded-full px-7 py-4 text-[12px] tracking-[0.18em] uppercase">
          Browse Catalog
        </Link>
      </div>
    </section>
  );
}
