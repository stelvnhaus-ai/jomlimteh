"use client";

import { useState } from "react";
import { wedding, googleForm } from "@/lib/config";

type Attending = "yes" | "no" | "";

export default function RSVP() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [attending, setAttending] = useState<Attending>("");
  const [form, setForm] = useState({
    name: "",
    guests: "1",
    relationship: "",
    message: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!form.name.trim()) return setError("Please enter your name.");
    if (!attending) return setError("Please let us know if you're attending.");
    if (attending === "yes" && !form.relationship)
      return setError("Please select your relationship to the couple.");

    setSubmitting(true);

    const data = new FormData();
    data.append(googleForm.fields.name, form.name);
    data.append(
      googleForm.fields.attending,
      attending === "yes"
        ? googleForm.attendingOptions.yes
        : googleForm.attendingOptions.no
    );
    if (attending === "yes") {
      data.append(googleForm.fields.guests, form.guests);
      data.append(googleForm.fields.relationship, form.relationship);
    } else {
      data.append(googleForm.fields.guests, "0");
      data.append(googleForm.fields.relationship, "");
    }
    data.append(googleForm.fields.message, form.message);

    try {
      // no-cors: Google Forms doesn't return CORS headers, but the submission
      // still succeeds. We can't read the response, only trust it landed.
      await fetch(googleForm.submitUrl, {
        method: "POST",
        mode: "no-cors",
        body: data,
      });
      setSubmitted(true);
    } catch (err) {
      setError("Something went wrong. Please try again or message us directly.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <section
        id="rsvp"
        className="py-20 md:py-32 px-6 border-t border-bronze/20 text-center"
      >
        <div className="font-serif text-6xl text-bronze mb-6">囍</div>
        <h2 className="font-serif text-3xl md:text-4xl text-walnut">
          Thank you.
        </h2>
        <p className="font-serif italic text-walnut-light mt-4 text-lg max-w-md mx-auto">
          We've received your RSVP and can't wait to celebrate with you.
        </p>
      </section>
    );
  }

  return (
    <section id="rsvp" className="py-16 md:py-24 px-6 md:px-12 border-t border-bronze/20">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-10">
          <div className="font-mono text-[10px] tracking-[0.4em] text-bronze-dark mb-2">
            — RSVP · 回覆 —
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-walnut mt-2">
            Will you join us?
          </h2>
          <p className="font-serif italic text-bronze-dark mt-3 text-sm md:text-base">
            Please reply by {wedding.rsvp.deadline}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Field label="Name / 姓名" required>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-transparent border-b border-bronze/40 py-3 px-1 font-serif text-lg text-walnut focus:outline-none focus:border-bronze transition-colors"
              required
            />
          </Field>

          <Field label="Attending? / 是否出席?" required>
            <div className="grid grid-cols-2 gap-3">
              <RadioButton
                checked={attending === "yes"}
                onChange={() => setAttending("yes")}
                label="Yes, I'll be there"
                sub="出席"
              />
              <RadioButton
                checked={attending === "no"}
                onChange={() => setAttending("no")}
                label="Can't make it"
                sub="无法出席"
              />
            </div>
          </Field>

          {attending === "yes" && (
            <>
              <Field label="Number of guests / 出席人数 (incl. yourself)" required>
                <select
                  value={form.guests}
                  onChange={(e) => setForm({ ...form, guests: e.target.value })}
                  className="w-full bg-transparent border-b border-bronze/40 py-3 px-1 font-serif text-lg text-walnut focus:outline-none focus:border-bronze"
                >
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Relationship to the couple / 与新人的关系" required>
                <select
                  value={form.relationship}
                  onChange={(e) =>
                    setForm({ ...form, relationship: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-bronze/40 py-3 px-1 font-serif text-lg text-walnut focus:outline-none focus:border-bronze"
                >
                  <option value="">— select —</option>
                  {googleForm.relationshipOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </Field>
            </>
          )}

          <Field label="Message to the couple / 给新人的祝福">
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={3}
              className="w-full bg-transparent border-b border-bronze/40 py-3 px-1 font-serif text-base text-walnut focus:outline-none focus:border-bronze resize-none"
              placeholder="Optional"
            />
          </Field>

          {error && (
            <p className="text-sm text-red-700 font-serif italic">{error}</p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full mt-6 py-4 bg-walnut text-cream font-mono text-xs tracking-[0.3em] hover:bg-bronze transition-colors disabled:opacity-50"
          >
            {submitting ? "SENDING..." : "SEND RSVP →"}
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="font-mono text-[10px] tracking-[0.2em] text-bronze-dark uppercase">
        {label} {required && <span className="text-bronze">*</span>}
      </span>
      <div className="mt-1">{children}</div>
    </label>
  );
}

function RadioButton({
  checked,
  onChange,
  label,
  sub,
}: {
  checked: boolean;
  onChange: () => void;
  label: string;
  sub: string;
}) {
  return (
    <button
      type="button"
      onClick={onChange}
      className={`px-4 py-3 border rounded-sm text-left transition-colors ${
        checked
          ? "border-walnut bg-walnut text-cream"
          : "border-bronze/40 text-walnut hover:border-bronze"
      }`}
    >
      <div className="font-serif text-base">{label}</div>
      <div
        className={`text-xs mt-0.5 ${
          checked ? "text-cream/70" : "text-bronze-dark"
        }`}
      >
        {sub}
      </div>
    </button>
  );
}
