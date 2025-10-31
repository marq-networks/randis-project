"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/solutions", label: "Solutions" },
    { href: "/our-projects", label: "Our Projects" },
  ];

  return (
    <header className="sticky top-0 z-30 bg-[#0D1832] border-b border-white/10">
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image 
            src="/logo.png" 
            alt="Rutledge & Associates" 
            width={220} 
            height={62} 
            className="animate-[fadeIn_0.8s_ease-out] hover:scale-105 transition-transform duration-300"
          />
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-[14px] text-white/90 font-medium">
          {navLinks.map((link, i) => (
            <Link key={link.href} href={link.href} className={`hover:text-white transition-colors animate-[fadeInUp_0.6s_ease-out_${(i+1)/10}s_both]`}>
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link href="/contact-us" className="hidden md:flex items-center gap-2 bg-transparent border border-white/20 hover:border-white/40 text-white text-sm font-medium px-6 py-2.5 rounded-lg transition-all duration-200 hover:bg-white/5 hover:scale-105 animate-[fadeInUp_0.6s_ease-out_0.6s_both]">
          Contact Us
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>

        {/* Mobile toggler */}
        <button
          aria-label="Toggle menu"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/20 text-white hover:bg-white/5 focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            // Close icon
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            // Hamburger icon
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#0D1832]/95 backdrop-blur-sm">
          <div className="max-w-[1200px] mx-auto px-6 py-4">
            <nav className="flex flex-col gap-4 text-white/90">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="py-2 border-b border-white/10 last:border-b-0"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact-us"
                className="mt-2 inline-flex items-center gap-2 bg-transparent border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-lg hover:border-white/40 hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                Contact Us
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}