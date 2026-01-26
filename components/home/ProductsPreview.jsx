"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const easePremium = [0.22, 1, 0.36, 1];

const PRODUCTS_PREVIEW = [
  {
    id: "mango",
    name: "Mango Pulp",
    short: "Rich, golden & naturally sweet — crafted for premium taste.",
    accent: "#F59E0B",
    image: "/products/mango2.png",
  },
  {
    id: "strawberry",
    name: "Strawberry Pulp",
    short: "Fresh berry aroma with a smooth luxury finish.",
    accent: "#EC4899",
    image: "/products/strawberry2.png",
  },
  {
    id: "tender-coconut",
    name: "Tender Coconut Pulp",
    short: "Light, refreshing and clean — purity in every sip.",
    accent: "#10B981",
    image: "/products/tender-coconut1.png",
  },
];

export default function ProductsPreview() {
  return (
    <section
      id="products-preview"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      {/* ✅ PREMIUM GREEN GRADIENT BACKGROUND (TOP -> WHITE -> BOTTOM) */}
      <div className="pointer-events-none absolute inset-0">
        {/* main gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: 
            "linear-gradient(180deg, rgba(16,185,129,0.18) 0%, rgba(255,255,255,1) 55%, rgba(16,185,129,0.18) 100%)",

          }}
        />

        {/* soft orbs */}
        <div
          className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-3xl"
          style={{ background: "rgba(16,185,129,0.14)" }}
        />

        <div
          className="absolute bottom-[-150px] left-[-140px] h-[460px] w-[460px] rounded-full blur-3xl"
          style={{ background: "rgba(16,185,129,0.08)" }}
        />

        <div
          className="absolute bottom-[-150px] right-[-160px] h-[460px] w-[460px] rounded-full blur-3xl"
          style={{ background: "rgba(16,185,129,0.07)" }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8, ease: easePremium }}
            className="text-xs font-semibold tracking-[0.35em] text-black/55 uppercase"
          >
            Our Range
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.95, ease: easePremium, delay: 0.05 }}
            className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-black"
          >
            Signature Fruit Pulps{" "}
            <span className="italic text-black/70">Loved by all</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.9, ease: easePremium, delay: 0.12 }}
            className="mt-6 text-base sm:text-lg leading-relaxed text-black/60"
          >
            A premium preview of our luxury fruit pulp collection — crafted to
            preserve freshness, flavour and texture.
          </motion.p>
        </div>

        {/* Products Grid */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {PRODUCTS_PREVIEW.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 22, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.85,
                delay: i * 0.08,
                ease: easePremium,
              }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl border border-black/10 bg-white/70 shadow-[0_30px_80px_-55px_rgba(0,0,0,0.25)] backdrop-blur-xl"
            >
              {/* Accent glow */}
              <div
                className="pointer-events-none absolute -inset-24 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(circle at 30% 20%, ${p.accent}30, transparent 60%)`,
                }}
              />

              <div className="relative p-8">
                {/* Tag */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold tracking-[0.35em] text-black/45 uppercase">
                    Premium Pulp
                  </span>
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ background: p.accent }}
                  />
                </div>

                {/* Image */}
                <div className="mt-8 flex justify-center">
                  <motion.img
                    src={p.image}
                    alt={p.name}
                    className="h-[240px] w-auto object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.18)]"
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.9, ease: easePremium }}
                  />
                </div>

                {/* Text */}
                <h3
                  className="mt-8 text-2xl sm:text-3xl font-semibold tracking-tight"
                  style={{ color: p.accent, fontFamily: "Amanojaku" }}
                >
                  {p.name}
                </h3>

                <p className="mt-4 text-base leading-relaxed text-black/60">
                  {p.short}
                </p>

                {/* Divider */}
                <div className="mt-8 h-[1px] w-full bg-gradient-to-r from-black/0 via-black/10 to-black/0 opacity-60" />

                {/* Bottom */}
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-xs tracking-[0.32em] uppercase text-black/35">
                    Luxury Grade
                  </span>

                  <span className="text-xs font-semibold text-black/55">
                    View →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Explore More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.85, ease: easePremium }}
          className="mt-14 flex justify-center"
        >
          <Link
            href="/products"
            className="group inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/70 px-10 py-4 text-sm font-semibold tracking-[0.25em] uppercase text-black shadow-[0_20px_55px_-40px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1"
          >
            Explore More
            <span className="transition-transform duration-500 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
