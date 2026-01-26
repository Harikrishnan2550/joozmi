"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const easePremium = [0.22, 1, 0.36, 1];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* ✅ Premium Green Theme Background (Top + Bottom same) */}
      <div className="pointer-events-none absolute inset-0">
        {/* <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(
                180deg,
                rgba(16,185,129,0.18) 0%,
                rgba(255,255,255,1) 48%,
                rgba(16,185,129,0.14) 100%
              )
            `,
          }}
        /> */}

        {/* soft orbs */}
        <div
          className="absolute -top-24 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full blur-3xl opacity-70"
          style={{ background: "rgba(16,185,129,0.10)" }}
        />
        <div
          className="absolute bottom-[-170px] left-[-150px] h-[520px] w-[520px] rounded-full blur-3xl opacity-60"
          style={{ background: "rgba(16,185,129,0.08)" }}
        />
        <div
          className="absolute bottom-[-200px] right-[-160px] h-[540px] w-[540px] rounded-full blur-3xl opacity-55"
          style={{ background: "rgba(16,185,129,0.07)" }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-20 pb-10">
        {/* Top grid */}
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: easePremium }}
            className="lg:col-span-4"
          >
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-2xl border border-black/10 bg-white/70 shadow-sm backdrop-blur-xl flex items-center justify-center">
                <span className="text-sm font-black tracking-widest text-black/75">
                  G
                </span>
              </div>

              <div>
                <p className="text-lg font-semibold tracking-tight text-black">
                  GUSTO
                </p>
                <p className="text-xs tracking-[0.35em] uppercase text-black/45">
                  Premium Fruit Pulp
                </p>
              </div>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-black/60 max-w-md">
              Crafted from ripe premium fruits — processed hygienically to
              preserve flavour, texture and freshness. Luxury taste in every sip.
            </p>

            {/* badges */}
            <div className="mt-7 flex flex-wrap gap-3">
              {["100% Natural", "Zero Additives", "Premium Quality"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-full border border-black/10 bg-white/70 text-[10px] font-bold tracking-[0.25em] uppercase text-black/55 backdrop-blur-xl"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: easePremium, delay: 0.05 }}
            className="lg:col-span-3"
          >
            <h4 className="text-xs font-semibold tracking-[0.35em] uppercase text-black/55">
              Quick Links
            </h4>

            <ul className="mt-6 space-y-4 text-sm text-black/65">
              <li>
                <Link href="/" className="hover:text-black transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-black transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/#process"
                  className="hover:text-black transition-colors"
                >
                  Process
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-black transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: easePremium, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <h4 className="text-xs font-semibold tracking-[0.35em] uppercase text-black/55">
              Manufactured & Marketed By
            </h4>

            <div className="mt-6 rounded-3xl border border-black/10 bg-white/70 backdrop-blur-xl shadow-[0_20px_55px_-40px_rgba(0,0,0,0.25)] p-8">
              <p className="text-lg font-semibold tracking-tight text-black">
                Gusto Frozen Foods Pvt Ltd
              </p>

              <p className="mt-4 text-sm leading-relaxed text-black/65">
                SDF Building Kinfra Mega Food Park,
                <br />
                Kozhippara, Palakkad, Kerala.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 text-sm">
                <div>
                  <p className="text-xs tracking-[0.25em] uppercase text-black/40">
                    Customer Care
                  </p>
                  <p className="mt-1 font-semibold text-black/70">
                    0492 323 59 82
                  </p>
                </div>

                <div>
                  <p className="text-xs tracking-[0.25em] uppercase text-black/40">
                    Website
                  </p>
                  <a
                    href="https://www.joozmi.com"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-block font-semibold text-black/70 hover:text-black transition-colors"
                  >
                    www.joozmi.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="mt-14 h-[1px] w-full bg-gradient-to-r from-black/0 via-black/10 to-black/0 opacity-70" />

        {/* ✅ Bottom (UPDATED FOR MOBILE ALIGNMENT) */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Left Side */}
          <div className="text-center sm:text-left">
            <p className="text-xs tracking-[0.28em] uppercase text-black/45">
              © {new Date().getFullYear()} GUSTO. All rights reserved.
            </p>

            <p className="mt-2 text-[10px] tracking-[0.28em] uppercase text-black/45">
              Developed by{" "}
              <span className="font-semibold text-black/60">
                Winshine Infotech
              </span>
            </p>
          </div>

          {/* Right Side */}
          <div className="flex justify-center sm:justify-end items-center gap-6 text-xs tracking-[0.28em] uppercase text-black/45">
            <Link href="/privacy" className="hover:text-black transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-black transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
