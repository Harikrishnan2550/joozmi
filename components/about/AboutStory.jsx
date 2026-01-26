"use client";

import { motion } from "framer-motion";

const easePremium = [0.22, 1, 0.36, 1];

export default function AboutStory() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      {/* Soft green background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(16,185,129,0.12) 0%, #ffffff 55%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: easePremium }}
          className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-emerald-600"
        >
          A Symphony <br />
          <span className="text-emerald-500">of Pure Fruit Bliss</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.9, ease: easePremium, delay: 0.1 }}
          className="mt-8 text-base sm:text-lg leading-relaxed text-black/65"
        >
          <strong>‘Joozmi’</strong> introduces the most authentic fruit pulp, the
          fruit blast for freshness. To assure the finest quality, we extract
          the pulp from fresh and natural fruits that we procure from farmers
          directly.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.9, ease: easePremium, delay: 0.2 }}
          className="mt-6 text-base sm:text-lg leading-relaxed text-black/65"
        >
          Devoid of preservatives and chemicals, we ensure{" "}
          <span className="font-semibold text-black/75">
            100% traceability
          </span>{" "}
          of our products to guarantee their quality.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.9, ease: easePremium, delay: 0.3 }}
          className="mt-6 text-base sm:text-lg leading-relaxed text-black/65"
        >
          With the most authentic preparation, we let your tastebuds sip and
          gulp true and refreshing flavours with a dose of sustenance.
        </motion.p>
      </div>
    </section>
  );
}
