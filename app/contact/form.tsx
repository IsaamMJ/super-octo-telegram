"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Check } from "lucide-react";

export function ContactForm() {
  const params = useSearchParams();
  const initialProduct = params.get("product") ?? "";
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Prototype: no backend yet. Show success state.
    setSent(true);
  }

  if (sent) {
    return (
      <div className="hairline-strong p-10 lg:p-12 bg-cream-deep">
        <div className="w-12 h-12 rounded-full bg-brass flex items-center justify-center mb-6">
          <Check className="text-cream" size={20} />
        </div>
        <h3 className="display text-3xl mb-3">Enquiry received.</h3>
        <p className="text-ink-soft max-w-md">
          Thank you. Our sales team will reply within 24 hours. For faster
          response, message us on WhatsApp.
        </p>
        <p className="mt-6 text-xs text-ink-mute font-mono">
          (Prototype: this form is not yet wired to a backend.)
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-7">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        <Field label="Full name" name="name" required />
        <Field label="Company" name="company" required />
        <Field label="Work email" name="email" type="email" required />
        <Field label="Phone / WhatsApp" name="phone" />
      </div>
      <Field label="Product / standard of interest" name="product" defaultValue={initialProduct} />
      <FieldArea label="Specifications, quantity, delivery port" name="message" required rows={6} />

      <div className="flex items-center gap-2 pt-2">
        <input
          type="checkbox"
          id="urgent"
          name="urgent"
          className="w-4 h-4 accent-ink"
        />
        <label htmlFor="urgent" className="text-sm text-ink-soft">
          This is urgent — please reply on WhatsApp first.
        </label>
      </div>

      <button
        type="submit"
        className="inline-flex items-center gap-3 bg-ink text-cream rounded-full px-8 py-4 text-[12px] tracking-[0.18em] uppercase hover:bg-brass-deep transition-colors duration-500"
      >
        Send Enquiry →
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  defaultValue,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  defaultValue?: string;
}) {
  return (
    <label className="block">
      <span className="block font-mono text-[10px] tracking-[0.25em] uppercase text-ink-mute mb-2">
        {label} {required && <span className="text-brass">*</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        defaultValue={defaultValue}
        className="w-full bg-transparent border-b border-line-strong focus:border-ink outline-none py-3 text-[15px]"
      />
    </label>
  );
}

function FieldArea({
  label,
  name,
  required,
  rows = 4,
}: {
  label: string;
  name: string;
  required?: boolean;
  rows?: number;
}) {
  return (
    <label className="block">
      <span className="block font-mono text-[10px] tracking-[0.25em] uppercase text-ink-mute mb-2">
        {label} {required && <span className="text-brass">*</span>}
      </span>
      <textarea
        name={name}
        required={required}
        rows={rows}
        className="w-full bg-transparent border-b border-line-strong focus:border-ink outline-none py-3 text-[15px] resize-none"
      />
    </label>
  );
}
