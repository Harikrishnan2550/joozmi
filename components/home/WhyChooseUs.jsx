"use client";

import { motion } from "framer-motion";

const FEATURES = [
  {
    title: "100% Natural Pulp",
    desc: "No artificial flavors. No preservatives. Just fruit—captured at peak ripeness.",
    tag: "PURE",
  },
  {
    title: "Farm-to-Pack Freshness",
    desc: "Sourced from trusted farms and processed with hygienic standards for lasting freshness.",
    tag: "FRESH",
  },
  {
    title: "Premium Quality Control",
    desc: "Every batch is checked for taste, texture, and consistency to deliver a luxury experience.",
    tag: "QC",
  },
  {
    title: "Rich Flavor Lock",
    desc: "We lock the natural aroma and pulp richness so every sip feels like fresh fruit.",
    tag: "TASTE",
  },
  {
    title: "Hygienic Processing",
    desc: "Clean processing workflow and packaging for safe, consistent quality every time.",
    tag: "SAFE",
  },
  {
    title: "Multi-Use Versatility",
    desc: "Perfect for milkshakes, desserts, smoothies, mocktails, and premium kitchen creations.",
    tag: "VERSATILE",
  },
];

const easePremium = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 26, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: easePremium },
  },
};

export default function WhyChooseUs() {
  return (
    <section id="choose" className="relative overflow-hidden py-24 sm:py-28">
      {/* ✅ PREMIUM MINT BACKGROUND (START WHITE -> GREEN -> END WHITE) */}
      <div className="pointer-events-none absolute inset-0 ">
       <div
  className="absolute inset-0"
  style={{
    background:
             "linear-gradient(180deg, rgba(16,185,129,0.18) 0%, rgba(255,255,255,1) 55%, rgba(16,185,129,0.18) 100%)",
  }}
/>

      </div>

      {/* ✅ keep orbs */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.4, ease: easePremium }}
          className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-3xl"
          style={{ background: "rgba(16,185,129,0.12)" }}
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.6, ease: easePremium, delay: 0.1 }}
          className="absolute bottom-[-140px] right-[-140px] h-[420px] w-[420px] rounded-full blur-3xl"
          style={{ background: "rgba(16,185,129,0.08)" }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* heading */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.85, ease: easePremium }}
            className="text-xs font-semibold tracking-[0.35em] text-black/55"
          >
            WHY CHOOSE US
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.95, ease: easePremium, delay: 0.05 }}
            className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-black"
          >
            Crafted for a{" "}
            <span className="italic text-black/70">Premium</span> Experience
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.9, ease: easePremium, delay: 0.12 }}
            className="mt-6 text-base sm:text-lg leading-relaxed text-black/60"
          >
            We don’t just sell fruit pulp — we deliver a luxury-level taste,
            purity, and consistency designed for premium brands and premium
            customers.
          </motion.p>
        </div>

        {/* cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {FEATURES.map((feat) => (
            <motion.div
              key={feat.title}
              variants={item}
              whileHover={{ y: -6, scale: 1.015 }}
              transition={{ duration: 0.5, ease: easePremium }}
              className="group relative overflow-hidden rounded-3xl border border-black/10 bg-white/75 p-7 shadow-[0_30px_80px_-50px_rgba(0,0,0,0.25)] backdrop-blur-xl"
            >
              {/* shimmer sweep */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute -left-1/2 top-0 h-full w-[180%] -skew-x-[25deg] bg-gradient-to-r from-transparent via-white/35 to-transparent translate-x-[-30%] group-hover:translate-x-[30%] transition-transform duration-1000" />
              </div>

              {/* top row */}
              <div className="relative flex items-center justify-between">
                <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-1.5 text-[11px] font-semibold tracking-[0.25em] text-black/55">
                  <span className="h-1.5 w-1.5 rounded-full bg-black/40" />
                  {feat.tag}
                </div>

                <motion.span
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 3.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="h-10 w-10 rounded-full border border-black/10 bg-white/80 shadow-sm"
                />
              </div>

              <h3 className="relative mt-6 text-xl font-semibold tracking-tight text-black">
                {feat.title}
              </h3>

              <p className="relative mt-3 text-sm leading-relaxed text-black/55">
                {feat.desc}
              </p>

              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.9, ease: easePremium }}
                className="relative mt-6 h-[1px] w-full origin-left bg-gradient-to-r from-black/0 via-black/10 to-black/0 opacity-60"
              />

              <div className="relative mt-5 flex items-center justify-between text-xs tracking-[0.3em] text-black/35 uppercase">
                <span>Premium Standard</span>
                <span className="opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  Explore →
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* bottom premium note */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: easePremium, delay: 0.1 }}
          className="mt-16 flex flex-col items-center justify-center gap-3 rounded-3xl border border-black/10 bg-white/70 px-8 py-10 text-center backdrop-blur-xl"
        >
          <p className="text-sm tracking-[0.28em] uppercase text-black/40">
            Luxury Taste Promise
          </p>
          <p className="max-w-3xl text-base sm:text-lg leading-relaxed text-black/65">
            From sourcing to processing, every detail is designed to create a{" "}
            <span className="font-semibold text-black/75">
              premium fruit pulp experience
            </span>
            —smooth texture, rich color, and authentic fruit taste.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
