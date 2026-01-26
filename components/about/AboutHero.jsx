"use client";

import { motion } from "framer-motion";

const easePremium = [0.22, 1, 0.36, 1];

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32 pb-16 sm:pb-20">
      {/* ✅ Premium Green Theme Background */}
      <div className="pointer-events-none absolute inset-0">
        {/* green -> white -> green */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(
                180deg,
                rgba(16,185,129,0.20) 0%,
                rgba(255,255,255,1) 52%,
                rgba(16,185,129,0.14) 100%
              )
            `,
          }}
        />

        {/* soft animated orbs */}
        <motion.div
          animate={{ x: [0, 35, 0], y: [0, 18, 0], opacity: [0.18, 0.3, 0.18] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-28 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full blur-3xl"
          style={{ background: "rgba(16,185,129,0.10)" }}
        />

        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, -14, 0],
            opacity: [0.14, 0.24, 0.14],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-190px] right-[-180px] h-[540px] w-[540px] rounded-full blur-3xl"
          style={{ background: "rgba(16,185,129,0.08)" }}
        />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: easePremium }}
            className="text-xs font-semibold tracking-[0.35em] text-black/55 uppercase"
          >
            About Joozmi
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.95, ease: easePremium, delay: 0.05 }}
            className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-black"
          >
            Crafted with{" "}
            <span className="italic text-black/70">Purity</span>, Served with{" "}
            <span className="italic text-black/70">Luxury</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease: easePremium, delay: 0.12 }}
            className="mt-6 text-base sm:text-lg leading-relaxed text-black/60"
          >
            Joozmi premium fruit pulp is made to preserve the natural taste,
            aroma and texture — bringing authentic fruit richness into every sip.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
