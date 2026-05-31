import Image from "next/image";
import EmailForm from "./components/EmailForm";

function Divider() {
  return (
    <div className="flex items-center gap-4 w-full max-w-xs">
      <div className="flex-1 h-px bg-navy/20" />
      <span className="text-navy/30 text-xs">✦</span>
      <div className="flex-1 h-px bg-navy/20" />
    </div>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-offwhite flex flex-col">
      {/* Top accent bar */}
      <div className="h-1 bg-navy w-full" />

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-16 gap-8">

        {/* Logo */}
        <div className="relative w-52 h-44 sm:w-64 sm:h-56">
          <Image
            src="/logo-primary.png"
            alt="The Wiener Club circular badge logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        <Divider />

        {/* Brand name */}
        <div className="text-center">
          <p className="font-body text-xs tracking-[0.35em] uppercase text-navy/50 mb-2">
            Est. 1924
          </p>
          <h1 className="font-display font-semibold text-5xl sm:text-6xl md:text-7xl text-navy tracking-[0.12em] uppercase leading-none">
            The Wiener Club
          </h1>
          <p className="font-display italic font-light text-xl sm:text-2xl text-navy/60 mt-3 tracking-wide">
            Members Only Since 1924
          </p>
        </div>

        <Divider />

        {/* Coming soon badge */}
        <div className="border border-navy/25 px-6 py-2">
          <span className="font-body text-xs tracking-[0.4em] uppercase text-navy/60">
            Coming Soon
          </span>
        </div>

        {/* Tagline */}
        <p className="font-body font-light text-center text-navy/70 text-base sm:text-lg max-w-sm leading-relaxed tracking-wide">
          High quality sausage dog merchandise, made for owners who know their
          dog deserves the best.
        </p>

        {/* Email capture */}
        <div className="flex flex-col items-center gap-4 w-full max-w-sm">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-navy/50">
            Be first to know
          </p>
          <EmailForm />
        </div>

      </div>

      {/* Footer */}
      <div className="h-px bg-navy/10 w-full" />
      <footer className="py-5 flex justify-center">
        <p className="font-body text-xs tracking-[0.25em] uppercase text-navy/30">
          thewienerclub.co.uk
        </p>
      </footer>
    </main>
  );
}
