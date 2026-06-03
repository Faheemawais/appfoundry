"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FIVERR_GIG_URL = "https://www.fiverr.com/s/qDWZPBZ";

const links = [
  { label: "Work",     href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact",  href: "#contact"  },
];

/* ── App Foundry flame logo (matches your Fiverr profile) ── */
function AppFoundryLogo() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* black circle background */}
      <circle cx="18" cy="18" r="18" fill="#0A0A0A" />
      {/* outer shield */}
      <path
        d="M18 5 L28 9 L28 19 C28 24.5 23.5 29 18 31 C12.5 29 8 24.5 8 19 L8 9 Z"
        fill="url(#shieldGrad)"
        opacity="0.9"
      />
      {/* inner flame */}
      <path
        d="M18 10 C18 10 22 14 22 17.5 C22 20.5 20.2 22 18.5 22.5 C19 21 19 19.5 17.5 18 C17.5 18 17 21 15 22.5 C13.5 21.5 14 19 14 17.5 C14 14 18 10 18 10Z"
        fill="url(#flameGrad)"
      />
      <defs>
        <linearGradient id="shieldGrad" x1="18" y1="5" x2="18" y2="31" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#FFB347" />
          <stop offset="100%" stopColor="#FF6B35" />
        </linearGradient>
        <linearGradient id="flameGrad" x1="18" y1="10" x2="18" y2="23" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#FFF5E0" />
          <stop offset="100%" stopColor="#FFD580" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0,  opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/5 py-3"
          : "bg-transparent py-6"}`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

        {/* ── Logo ── */}
        <a href="#" className="flex items-center gap-2.5 group">
          <AppFoundryLogo />
          <span className="font-extrabold text-white text-lg tracking-tight leading-none">
            App<span className="text-brand-orange">foundry</span>
          </span>
        </a>

        {/* ── Desktop nav ── */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-white/60 hover:text-brand-orange text-sm font-medium transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
          <a
            href={FIVERR_GIG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-orange hover:bg-orange-500 text-white text-sm font-semibold px-5 py-2 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,107,53,0.4)]"
          >
            Hire Us →
          </a>
        </div>

        {/* ── Mobile hamburger ── */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 border-t border-white/5 px-6 pb-6 pt-4 flex flex-col gap-4"
          >
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-white/70 hover:text-brand-orange font-medium transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href={FIVERR_GIG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-orange text-white font-semibold px-5 py-2.5 rounded-full text-center"
            >
              Hire Us →
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
