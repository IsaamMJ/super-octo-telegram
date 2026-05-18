import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm } from "./form";
import { MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import { company, whatsappEnquiryUrl } from "@/lib/products";

export const metadata: Metadata = {
  title: "Contact OSTAR Group",
  description:
    "Request a quote, send a tender, or message us on WhatsApp. Dubai sales hub plus China manufacturing — quotes within 24 hours.",
};

export default function ContactPage() {
  return (
    <>
      <section className="mx-auto max-w-[1440px] px-6 lg:px-10 pt-16 lg:pt-24 pb-16">
        <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-ink-mute mb-8">
          Vol. III — Contact
        </p>
        <h1 className="display text-6xl md:text-8xl lg:text-[140px] leading-[0.88]">
          Send your
          <br />
          <em className="display-italic text-brass">tender.</em>
        </h1>
        <p className="mt-10 max-w-2xl text-lg text-ink-soft leading-relaxed">
          Tell us your standard, grade, schedule and quantity. We&apos;ll come
          back with a quote and lead time within 24 hours.
        </p>
      </section>

      {/* Quick CTAs row */}
      <section className="mx-auto max-w-[1440px] px-6 lg:px-10 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-line-strong border border-line-strong">
          <a
            href={whatsappEnquiryUrl("General enquiry")}
            target="_blank"
            rel="noreferrer"
            className="bg-cream p-8 lg:p-10 flex items-start gap-5 hover:bg-cream-deep transition-colors duration-500 group"
          >
            <MessageCircle size={24} className="text-brass mt-1 shrink-0" strokeWidth={1.5} />
            <div>
              <h3 className="display text-2xl mb-2">WhatsApp</h3>
              <p className="text-sm text-ink-mute">Fastest reply during GST hours</p>
              <span className="mt-4 inline-block text-[12px] tracking-[0.18em] uppercase link-underline">
                Open chat →
              </span>
            </div>
          </a>
          <a
            href={`mailto:${company.contact.china.email}`}
            className="bg-cream p-8 lg:p-10 flex items-start gap-5 hover:bg-cream-deep transition-colors duration-500 group"
          >
            <Mail size={24} className="text-brass mt-1 shrink-0" strokeWidth={1.5} />
            <div>
              <h3 className="display text-2xl mb-2">Email</h3>
              <p className="text-sm text-ink-mute">{company.contact.china.email}</p>
              <span className="mt-4 inline-block text-[12px] tracking-[0.18em] uppercase link-underline">
                Send mail →
              </span>
            </div>
          </a>
          <a
            href={`tel:${company.contact.china.phone.replace(/\s/g, "")}`}
            className="bg-cream p-8 lg:p-10 flex items-start gap-5 hover:bg-cream-deep transition-colors duration-500 group"
          >
            <Phone size={24} className="text-brass mt-1 shrink-0" strokeWidth={1.5} />
            <div>
              <h3 className="display text-2xl mb-2">Phone</h3>
              <p className="text-sm text-ink-mute">{company.contact.china.phone}</p>
              <span className="mt-4 inline-block text-[12px] tracking-[0.18em] uppercase link-underline">
                Call now →
              </span>
            </div>
          </a>
        </div>
      </section>

      {/* Form + offices */}
      <section className="mx-auto max-w-[1440px] px-6 lg:px-10 pb-32 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10">
            <p className="lg:col-span-3 font-mono text-[11px] tracking-[0.3em] uppercase text-ink-mute">
              ① Enquiry form
            </p>
            <h2 className="lg:col-span-9 display text-4xl lg:text-5xl">
              Send a <em className="display-italic">request for quote</em>.
            </h2>
          </div>
          <Suspense fallback={<div className="text-ink-mute">Loading form…</div>}>
            <ContactForm />
          </Suspense>
        </div>

        <aside className="lg:col-span-5 space-y-12">
          <div>
            <h3 className="font-mono text-[11px] tracking-[0.3em] uppercase text-ink-mute mb-5">
              {company.contact.dubai.label}
            </h3>
            <p className="display text-2xl mb-2">{company.contact.dubai.company}</p>
            <p className="text-ink-soft flex items-start gap-3">
              <MapPin size={16} className="mt-1 text-brass shrink-0" strokeWidth={1.5} />
              {company.contact.dubai.address}
            </p>
          </div>
          <div className="border-t border-line pt-12">
            <h3 className="font-mono text-[11px] tracking-[0.3em] uppercase text-ink-mute mb-5">
              {company.contact.china.label}
            </h3>
            <p className="display text-2xl mb-2">{company.contact.china.company}</p>
            <p className="text-ink-soft flex items-start gap-3">
              <MapPin size={16} className="mt-1 text-brass shrink-0" strokeWidth={1.5} />
              {company.contact.china.address}
            </p>
            <dl className="mt-6 font-mono text-sm space-y-1.5 text-ink-soft">
              <div className="flex gap-3">
                <dt className="text-ink-mute w-14">Tel</dt>
                <dd>{company.contact.china.phone}</dd>
              </div>
              <div className="flex gap-3">
                <dt className="text-ink-mute w-14">Mobile</dt>
                <dd>{company.contact.china.mobile}</dd>
              </div>
              <div className="flex gap-3">
                <dt className="text-ink-mute w-14">Fax</dt>
                <dd>{company.contact.china.fax}</dd>
              </div>
              <div className="flex gap-3">
                <dt className="text-ink-mute w-14">Email</dt>
                <dd>{company.contact.china.email}</dd>
              </div>
              <div className="flex gap-3">
                <dt className="text-ink-mute w-14">Web</dt>
                <dd>{company.contact.china.web}</dd>
              </div>
            </dl>
          </div>

          <div className="border-t border-line pt-12">
            <h3 className="font-mono text-[11px] tracking-[0.3em] uppercase text-ink-mute mb-5">
              Lead time
            </h3>
            <p className="display text-4xl">24-hour quote response.</p>
            <p className="mt-4 text-ink-soft">
              Standard SKUs ship from stock; non-standard items quoted with
              forging schedule.
            </p>
          </div>
        </aside>
      </section>
    </>
  );
}
