"use client";

import { useState } from "react";
import { joinWaitlist } from "@/app/actions/waitlist";

export default function EmailForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const result = await joinWaitlist(email);
    setLoading(false);
    if (result.error) {
      setError(result.error);
    } else {
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-4">
        <p className="font-display text-xl text-navy">
          You&rsquo;re on the list.
        </p>
        <p className="font-body text-sm text-navy/60 mt-1 tracking-widest uppercase">
          We&rsquo;ll be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="w-full max-w-sm">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          aria-label="Email address"
          disabled={loading}
          className="flex-1 bg-transparent border border-navy/30 text-navy placeholder-navy/40
                     px-4 py-3 text-sm font-body tracking-wide
                     focus:outline-none focus:border-navy transition-colors
                     disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-navy text-offwhite font-body text-sm tracking-widest uppercase
                     px-6 py-3 hover:bg-navy-light transition-colors cursor-pointer
                     disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "..." : "Join"}
        </button>
      </div>
      {error && (
        <p className="mt-2 text-xs font-body text-navy/60">{error}</p>
      )}
    </form>
  );
}
