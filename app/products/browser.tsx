"use client";

import { useMemo, useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/products";

const families = ["All", "Flanges", "Fittings", "Pipes"] as const;
const standardFamilies = ["All", "ANSI", "ASME", "DIN", "BS", "JIS", "Multiple"];

export function ProductsBrowser() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  const initialFamily = (params.get("family") as (typeof families)[number]) ?? "All";
  const [family, setFamily] = useState<(typeof families)[number]>(
    families.includes(initialFamily) ? initialFamily : "All",
  );
  const [stdFamily, setStdFamily] = useState<string>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (family !== "All" && p.family !== family) return false;
      if (stdFamily !== "All" && p.standardFamily !== stdFamily) return false;
      if (query.trim()) {
        const q = query.toLowerCase();
        const hay = (
          p.name +
          " " +
          p.tagline +
          " " +
          p.variants.flatMap((v) => [...v.standards, ...v.types]).join(" ")
        ).toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [family, stdFamily, query]);

  function updateFamily(f: (typeof families)[number]) {
    setFamily(f);
    const sp = new URLSearchParams(params.toString());
    if (f === "All") sp.delete("family");
    else sp.set("family", f);
    router.replace(`${pathname}?${sp.toString()}`, { scroll: false });
  }

  return (
    <section className="mx-auto max-w-[1440px] px-6 lg:px-10 pb-32">
      {/* Filter bar */}
      <div className="sticky top-20 z-30 -mx-6 lg:-mx-10 px-6 lg:px-10 py-5 bg-cream/85 backdrop-blur-md border-y border-line mb-12">
        <div className="flex flex-col lg:flex-row gap-5 lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-ink-mute mr-2">
              Family
            </span>
            {families.map((f) => (
              <button
                key={f}
                onClick={() => updateFamily(f)}
                className={`text-[11px] tracking-[0.18em] uppercase px-4 py-2 rounded-full border transition-colors duration-300 ${
                  family === f
                    ? "bg-ink text-cream border-ink"
                    : "border-line-strong hover:border-ink text-ink-soft"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-ink-mute mr-2">
              Standard
            </span>
            {standardFamilies.map((s) => (
              <button
                key={s}
                onClick={() => setStdFamily(s)}
                className={`text-[11px] tracking-[0.18em] uppercase px-4 py-2 rounded-full border transition-colors duration-300 ${
                  stdFamily === s
                    ? "bg-ink text-cream border-ink"
                    : "border-line-strong hover:border-ink text-ink-soft"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
          <div className="lg:max-w-xs w-full">
            <input
              type="search"
              placeholder="Search by size, grade, standard…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-transparent border-b border-line-strong focus:border-ink outline-none py-2 text-sm placeholder:text-ink-mute"
            />
          </div>
        </div>
      </div>

      <div className="flex items-baseline justify-between mb-6">
        <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-ink-mute">
          {filtered.length} {filtered.length === 1 ? "product" : "products"}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((p, i) => (
          <ProductCard key={p.slug} product={p} index={i} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="py-32 text-center">
          <p className="display text-4xl mb-4">No matches.</p>
          <p className="text-ink-mute">Try clearing a filter or searching a standard name.</p>
        </div>
      )}
    </section>
  );
}
