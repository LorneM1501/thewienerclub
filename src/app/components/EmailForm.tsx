"use client";

import { useState } from "react";

export default function EmailForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSubmitted(true);
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
          className="flex-1 bg-transparent border border-navy/30 text-navy placeholder-navy/40
                     px-4 py-3 text-sm font-body tracking-wide
                     focus:outline-none focus:border-navy transition-colors"
        />
        <button
          type="submit"
          className="bg-navy text-offwhite font-body text-sm tracking-widest uppercase
                     px-6 py-3 hover:bg-navy-light transition-colors cursor-pointer"
        >
          Join
        </button>
      </div>
      {error && (
        <p className="mt-2 text-xs font-body text-navy/60">{error}</p>
      )}
    </form>
  );
}
