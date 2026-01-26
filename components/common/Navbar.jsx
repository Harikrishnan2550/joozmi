"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Process", href: "/process" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-[9999] px-4 py-6 flex justify-center pointer-events-none">
      {/* Navbar pill / bar */}
      <motion.div
        layout
        className={`
          pointer-events-auto flex items-center transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] 
          px-6 md:px-10 rounded-full relative z-[110]
          ${isScrolled || mobileOpen
  ? "bg-white/80 backdrop-blur-xl border border-black/5 shadow-sm py-3 w-[92%] sm:w-[88%] md:w-auto md:max-w-none mx-auto"
  : "bg-transparent border border-transparent py-5 w-full max-w-6xl"
}

        `}
      >
        <div className="flex items-center w-full justify-between md:justify-center gap-10 lg:gap-20">
          {/* Logo */}
          <Link href="/" className="relative flex-shrink-0">
            <img
              src="/logo/gusto.png"
              alt="Gusto"
              className={`transition-all duration-500 brightness-0 ${
                isScrolled ? "h-6" : "h-7 md:h-8"
              }`}
            />
          </Link>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-10 lg:gap-14">
            {navLinks.map((link) => (
              <NavLink key={link.href} label={link.label} href={link.href} />
            ))}
          </nav>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative p-2 -mr-2 outline-none"
          >
            <div className="flex flex-col items-end gap-1.5 w-6">
              <motion.span
                animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 7 : 0 }}
                className="h-[1.2px] w-full bg-black block"
              />
              <motion.span
                animate={{ opacity: mobileOpen ? 0 : 1 }}
                className="h-[1.2px] w-3/4 bg-black block"
              />
              <motion.span
                animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -7 : 0 }}
                className="h-[1.2px] w-full bg-black block"
              />
            </div>
          </button>
        </div>
      </motion.div>

      {/* ──────────────────────────────────────────────── */}
      {/*          Mobile Full-screen Menu                 */}
      {/* ──────────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-gradient-to-b from-white via-white/95 to-white/90 backdrop-blur-2xl z-[100] flex flex-col pointer-events-auto md:hidden"
          >
            <div className="flex flex-col justify-center h-full px-5 xs:px-8 sm:px-12 pt-16 pb-20">
              <nav className="mx-auto flex flex-col items-start gap-7 xs:gap-8 sm:gap-10 w-full max-w-md">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.18 + i * 0.09,
                      duration: 0.75,
                      ease: [0.215, 0.61, 0.355, 1],
                    }}
                    className="w-full"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`
                        group relative block
                        text-[clamp(2.6rem,7.8vw,3.8rem)]
                        font-medium
                        tracking-[-0.025em]
                        leading-[0.92]
                        text-black/90
                        uppercase
                        transition-all duration-400
                        hover:text-black
                        active:text-black/70
                        text-left
                        w-full
                      `}
                    >
                      <span className="relative inline-block">
                        {link.label}
                        <span
                          className={`
                            absolute -bottom-1.5 left-0 h-[1.5px]
                            w-0 bg-gradient-to-r from-emerald-500/40 to-emerald-600/70
                            group-hover:w-full transition-all duration-500 ease-out
                          `}
                        />
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavLink({ label, href }) {
  return (
    <Link
      href={href}
      className="group relative text-[12px] uppercase tracking-[0.35em] font-bold text-black/50 hover:text-black transition-all"
    >
      {label}
      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-black transition-all group-hover:w-full" />
    </Link>
  );
}