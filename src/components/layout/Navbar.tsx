"use client";

import { useState, useEffect } from "react";
import { NAV_LINKS } from "@/lib/constants";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-900/90 backdrop-blur-lg shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        <a href="#hero" className="flex items-center gap-3">
          <span className="text-gold font-heading text-xl font-bold tracking-wide">
            MWS
          </span>
          <span className="hidden sm:block text-cream/70 text-sm font-light">
            Mental Wealth Solutions
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-cream/70 hover:text-gold transition-colors text-sm tracking-wider uppercase"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#vibecheck"
            className="ml-4 px-5 py-2 bg-gold text-navy font-semibold rounded-lg hover:bg-gold-400 transition-colors text-sm"
          >
            Get Started
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-cream p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-navy-900/95 backdrop-blur-lg px-6 py-4 space-y-4 border-t border-white/5">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-cream/80 hover:text-gold text-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#vibecheck"
            onClick={() => setMobileOpen(false)}
            className="block w-full text-center px-5 py-2.5 bg-gold text-navy font-semibold rounded-lg hover:bg-gold-400 transition-colors"
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
}
