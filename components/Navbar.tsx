"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll(); // run once on mount
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      {/* ── MAIN HEADER ── */}
      <header
        className="fixed z-50 transition-all duration-500"
        style={{
          // Always centred so width transition works cleanly
          left: "50%",
          transform: "translateX(-50%)",

          // Floating pill when scrolled, full-width when not
          top: scrolled ? "14px" : "0px",
          width: scrolled ? "min(calc(100% - 40px), 1100px)" : "100%",
          borderRadius: scrolled ? "9999px" : "0px",

          // Glass background
          background: scrolled
            ? "rgba(13, 13, 13, 0.85)"
            : isHome
            ? "transparent"
            : "#0D0D0D",
          backdropFilter: scrolled ? "blur(20px) saturate(1.4)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px) saturate(1.4)" : "none",
          boxShadow: scrolled ? "0 8px 40px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.07)" : "none",
          border: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        }}
      >
        <div
          className="flex items-center justify-between"
          style={{
            maxWidth: scrolled ? "none" : "1400px",
            margin: "0 auto",
            padding: scrolled ? "10px 20px" : "0 40px",
            height: scrolled ? "auto" : "80px",
          }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div
              className="rounded-xl overflow-hidden shrink-0 transition-all duration-300"
              style={{
                padding: scrolled ? "2px" : "3px",
                lineHeight: 0,
              }}
            >
              <Image
                src="/logo.png"
                alt="Barge Bros"
                width={40}
                height={40}
                className="object-contain transition-all duration-300"
                style={{ width: scrolled ? "32px" : "36px", height: scrolled ? "32px" : "36px" }}
                priority
              />
            </div>
            <span
              className="font-heading text-[#FFCE00] tracking-widest leading-none hidden sm:block transition-all duration-300"
              style={{ fontSize: scrolled ? "18px" : "22px" }}
            >
              BARGE BROS
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative label-text text-[#F5F3EE] hover:text-[#FFCE00] transition-colors duration-200 group ${
                  pathname === link.href ? "text-[#FFCE00]" : ""
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px bg-[#FFCE00] transition-all duration-300 ${
                    pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="tel:7788059888"
              className="hidden md:flex items-center gap-2 bg-[#FFCE00] text-[#0D0D0D] rounded-full font-semibold hover:bg-yellow-300 transition-all duration-200 hover:scale-[1.03]"
              style={{ padding: scrolled ? "7px 18px" : "8px 20px", fontSize: "13px" }}
            >
              <Phone size={13} />
              778-805-9888
            </a>
            <button
              className="md:hidden text-[#F5F3EE] p-1"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* ── MOBILE MENU ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#0D0D0D] flex flex-col items-center justify-center gap-7 md:hidden"
          >
            <div className="flex flex-col items-center gap-3 mb-2">
              <div className="rounded-2xl overflow-hidden" style={{ width: 96, height: 96, lineHeight: 0 }}>
                <Image src="/logo.png" alt="Barge Bros" width={200} height={200} className="w-full object-cover object-top" style={{ height: "134px" }} />
              </div>
              <Image src="/Logo2.png" alt="Barge Bros" width={160} height={50} className="object-contain" style={{ height: "32px", width: "auto" }} />
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-heading text-4xl text-[#F5F3EE] hover:text-[#FFCE00] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:7788059888"
              className="flex items-center gap-2 bg-[#FFCE00] text-[#0D0D0D] px-8 py-3 rounded-full font-semibold text-base mt-2"
            >
              <Phone size={16} />
              778-805-9888
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
