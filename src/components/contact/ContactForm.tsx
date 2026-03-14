"use client";

import { useState } from "react";
import { db } from "@/lib/db";
import { id } from "@instantdb/react";

type FormState = {
  name: string;
  email: string;
  company: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onChange = (field: keyof FormState) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.name || !form.email || !form.message) {
      return;
    }
    setIsSubmitting(true);
    try {
      db.transact(
        db.tx.contactMessages[id()].update({
          name: form.name,
          email: form.email,
          company: form.company || null,
          message: form.message,
          createdAt: Date.now(),
        }),
      );
      setSubmitted(true);
      setForm(initialState);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      {submitted && (
        <div className="rounded-lg bg-green-50 border border-green-200 px-4 py-3 text-sm text-green-700">
          Form submitted. We will be in touch soon.
        </div>
      )}
      <div>
        <label className="text-sm font-medium">Name</label>
        <input
          type="text"
          className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
          placeholder="Jane Doe"
          value={form.name}
          onChange={onChange("name")}
          required
        />
      </div>
      <div>
        <label className="text-sm font-medium">Email</label>
        <input
          type="email"
          className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
          placeholder="jane@email.com"
          value={form.email}
          onChange={onChange("email")}
          required
        />
      </div>
      <div>
        <label className="text-sm font-medium">Company / Organization</label>
        <input
          type="text"
          className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
          placeholder="Clinic or caregiver team"
          value={form.company}
          onChange={onChange("company")}
        />
      </div>
      <div>
        <label className="text-sm font-medium">How can we help?</label>
        <textarea
          className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
          rows={4}
          placeholder="Tell us about your goals."
          value={form.message}
          onChange={onChange("message")}
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-60"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
