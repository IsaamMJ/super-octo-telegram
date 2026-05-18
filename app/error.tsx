"use client";

import Link from "next/link";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <section className="mx-auto max-w-[1440px] px-6 lg:px-10 py-32 lg:py-48 min-h-[60vh] flex flex-col justify-center">
      <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-ink-mute mb-8">
        Error — unexpected
      </p>
      <h1 className="display text-6xl md:text-8xl lg:text-[120px] leading-[0.9]">
        Something <em className="display-italic text-brass">broke</em>.
      </h1>
      <p className="mt-8 text-lg text-ink-soft max-w-xl">
        We hit an unexpected error. Reload the page, or head back to the catalog.
      </p>
      <div className="mt-10 flex gap-3 flex-wrap">
        <button onClick={reset} className="inline-flex items-center gap-3 bg-ink text-cream rounded-full px-7 py-4 text-[12px] tracking-[0.18em] uppercase">
          Try again
        </button>
        <Link href="/" className="inline-flex items-center gap-3 border border-ink rounded-full px-7 py-4 text-[12px] tracking-[0.18em] uppercase">
          Home
        </Link>
      </div>
    </section>
  );
}
