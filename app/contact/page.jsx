"use client";

import { motion } from "framer-motion";

const easePremium = [0.22, 1, 0.36, 1];

export default function ContactPage() {
  return (
    <main className="relative overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/60 via-white to-white" />
        <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-emerald-200/25 blur-3xl" />
      </div>

      {/* HERO */}
      <section className="pt-32 sm:pt-40 pb-20 text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easePremium }}
          className="text-xs font-semibold tracking-[0.35em] uppercase text-emerald-700"
        >
          Contact Us
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: easePremium, delay: 0.05 }}
          className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-black"
        >
          Let’s start a conversation
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-black/60"
        >
          Whether you’re a distributor, partner or simply curious about Joozmi —
          we’d love to hear from you.
        </motion.p>
      </section>

      {/* CONTENT */}
      <section className="pb-28 px-6">
        <div className="mx-auto max-w-6xl grid gap-12 lg:grid-cols-2 items-start">
          {/* LEFT – CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: easePremium }}
            className="space-y-8"
          >
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-black">
              Get in touch
            </h2>

            <p className="text-black/60 max-w-md">
              Reach out to us for business enquiries, product details or
              collaborations.
            </p>

            <div className="space-y-6">
              <div>
                <p className="text-xs tracking-[0.25em] uppercase text-black/40">
                  Manufactured & Marketed By
                </p>
                <p className="mt-2 font-semibold text-black">
                  Gusto Frozen Foods Pvt Ltd
                </p>
                <p className="mt-1 text-sm text-black/60 leading-relaxed">
                  SDF Building, Kinfra Mega Food Park,<br />
                  Kozhippara, Palakkad, Kerala.
                </p>
              </div>

              <div>
                <p className="text-xs tracking-[0.25em] uppercase text-black/40">
                  Customer Care
                </p>
                <p className="mt-1 font-semibold text-black">
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
                  className="mt-1 inline-block font-semibold text-black hover:text-emerald-700 transition-colors"
                >
                  www.joozmi.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT – CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: easePremium, delay: 0.05 }}
            className="rounded-3xl border border-black/10 bg-white/80 backdrop-blur-xl shadow-[0_40px_100px_-60px_rgba(0,0,0,0.35)] p-8 sm:p-10"
          >
            <form className="space-y-6">
              <div>
                <label className="text-sm font-medium text-black/70">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-xl border border-black/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-black/70">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-xl border border-black/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-black/70">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us how we can help…"
                  className="mt-2 w-full rounded-xl border border-black/10 px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-emerald-600 py-3 text-sm font-semibold tracking-wide text-white hover:bg-emerald-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
