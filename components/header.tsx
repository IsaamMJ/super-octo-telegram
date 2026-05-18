"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { company, whatsappEnquiryUrl } from "@/lib/products";

const nav = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-cream/85 backdrop-blur-md border-b border-line" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group" aria-label="OSTAR Group home">
            <Wordmark />
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="text-[13px] tracking-[0.12em] uppercase text-ink-soft hover:text-ink link-underline"
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={whatsappEnquiryUrl("General enquiry")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-ink text-cream px-5 py-2.5 text-[12px] tracking-[0.15em] uppercase hover:bg-brass-deep transition-colors duration-300"
            >
              <MessageCircle size={14} />
              WhatsApp Enquiry
            </a>
          </div>

          <button
            className="md:hidden p-2 -mr-2"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-ink/30"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <div className="absolute right-0 top-0 h-full w-[86%] max-w-sm bg-cream-deep border-l border-line-strong flex flex-col">
            <div className="flex items-center justify-between p-6 border-b border-line">
              <Wordmark />
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2 -mr-2">
                <X size={22} />
              </button>
            </div>
            <nav className="flex-1 flex flex-col p-6 gap-5">
              {nav.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="display text-4xl"
                >
                  {n.label}
                </Link>
              ))}
            </nav>
            <div className="p-6 border-t border-line space-y-3">
              <a
                href={whatsappEnquiryUrl("General enquiry")}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-ink text-cream px-5 py-3 text-[12px] tracking-[0.15em] uppercase"
              >
                <MessageCircle size={14} />
                WhatsApp Enquiry
              </a>
              <p className="text-xs text-ink-mute font-mono">
                {company.contact.china.email}
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function Wordmark() {
  return (
    <div className="flex items-baseline gap-2">
      <span className="display text-[28px] tracking-tight leading-none">
        OSTAR
      </span>
      <span className="text-[10px] tracking-[0.25em] uppercase text-ink-mute font-mono">
        Group
      </span>
    </div>
  );
}
