"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/lib/products";

export function ProductCard({ product, index }: { product: Product; index: number }) {
  const ratings = product.variants.map((v) => v.rating).slice(0, 4);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: (index % 4) * 0.06, ease: [0.2, 0.7, 0.1, 1] }}
    >
      <Link
        href={`/products/${product.slug}`}
        className="group block relative bg-cream-deep hairline overflow-hidden h-full"
      >
        {/* Image / illustration block */}
        <div className="aspect-[5/4] relative overflow-hidden bg-ink/[0.04] border-b border-line">
          <ProductIllustration family={product.family} />
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink-mute bg-cream/80 backdrop-blur px-2 py-1">
              {product.standardFamily}
            </span>
          </div>
          <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-ink text-cream flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-2 group-hover:translate-x-0">
            <ArrowUpRight size={16} />
          </div>
        </div>

        {/* Text */}
        <div className="p-6 lg:p-7 flex flex-col gap-3">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="display text-2xl lg:text-[28px] leading-[1.05] text-ink">
              {product.name}
            </h3>
          </div>
          <p className="text-[14px] text-ink-mute leading-relaxed line-clamp-2">
            {product.tagline}
          </p>
          <div className="flex flex-wrap gap-1.5 mt-2">
            {ratings.map((r) => (
              <span
                key={r}
                className="font-mono text-[10px] tracking-[0.15em] uppercase text-ink-soft border border-line-strong px-2 py-1"
              >
                {r}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function ProductIllustration({ family }: { family: Product["family"] }) {
  // Procedural SVG illustrations — keep it editorial, technical-drawing feel
  if (family === "Flanges") {
    return (
      <svg
        viewBox="0 0 400 320"
        className="w-full h-full transition-transform duration-700 group-hover:scale-105"
        fill="none"
      >
        <circle cx="200" cy="160" r="120" stroke="currentColor" strokeOpacity="0.18" />
        <circle cx="200" cy="160" r="90" stroke="currentColor" strokeOpacity="0.28" />
        <circle cx="200" cy="160" r="40" stroke="currentColor" strokeOpacity="0.4" />
        <circle cx="200" cy="160" r="32" fill="var(--cream-deep)" />
        {Array.from({ length: 8 }).map((_, i) => {
          const a = (i / 8) * Math.PI * 2;
          const x = 200 + Math.cos(a) * 105;
          const y = 160 + Math.sin(a) * 105;
          return <circle key={i} cx={x} cy={y} r="6" fill="var(--brass)" fillOpacity="0.85" />;
        })}
      </svg>
    );
  }
  if (family === "Fittings") {
    return (
      <svg viewBox="0 0 400 320" className="w-full h-full transition-transform duration-700 group-hover:scale-105" fill="none">
        <path d="M40 160 H160 Q200 160 200 200 V280" stroke="currentColor" strokeOpacity="0.3" strokeWidth="40" />
        <path d="M40 160 H160 Q200 160 200 200 V280" stroke="currentColor" strokeOpacity="0.8" strokeWidth="2" />
        <circle cx="200" cy="280" r="8" fill="var(--brass)" />
        <circle cx="40" cy="160" r="8" fill="var(--brass)" />
        <text x="220" y="190" fill="currentColor" fillOpacity="0.4" fontSize="11" fontFamily="monospace">90° LR</text>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 400 320" className="w-full h-full transition-transform duration-700 group-hover:scale-105" fill="none">
      <rect x="40" y="120" width="320" height="80" fill="currentColor" fillOpacity="0.08" />
      <line x1="40" y1="120" x2="360" y2="120" stroke="currentColor" strokeOpacity="0.4" />
      <line x1="40" y1="200" x2="360" y2="200" stroke="currentColor" strokeOpacity="0.4" />
      <line x1="40" y1="100" x2="40" y2="220" stroke="currentColor" strokeOpacity="0.3" strokeDasharray="3 3" />
      <line x1="360" y1="100" x2="360" y2="220" stroke="currentColor" strokeOpacity="0.3" strokeDasharray="3 3" />
      <text x="200" y="248" fill="currentColor" fillOpacity="0.4" fontSize="10" fontFamily="monospace" textAnchor="middle">SCH 5 — XXS</text>
    </svg>
  );
}
