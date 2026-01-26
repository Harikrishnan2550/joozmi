"use client";

import { motion } from "framer-motion";

const easePremium = [0.22, 1, 0.36, 1];

const values = [
  {
    title: "Purity First",
    desc: "No preservatives. No chemicals. Only fruit pulp made with care.",
    tag: "PURE",
  },
  {
    title: "Premium Quality Control",
    desc: "Every batch is checked for taste, texture and consistency.",
    tag: "QC",
  },
  {
    title: "Versatile Use",
    desc: "Milkshakes, desserts, smoothies and mocktails — made premium instantly.",
    tag: "VERSATILE",
  },
];

export default function AboutValues() {
  return (
    <section className="relative py-20 sm:py-24">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: easePremium }}
            className="text-xs font-semibold tracking-[0.35em] text-black/55 uppercase"
          >
            Our Promise
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.95, ease: easePremium, delay: 0.05 }}
            className="mt-5 text-4xl sm:text-5xl font-semibold tracking-tight text-black"
          >
            Why Joozmi feels{" "}
            <span className="italic text-black/70">premium</span>
          </motion.h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 22, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.9,
                delay: i * 0.08,
                ease: easePremium,
              }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group relative overflow-hidden rounded-3xl border border-black/10 bg-white/70 backdrop-blur-xl shadow-[0_30px_80px_-55px_rgba(0,0,0,0.25)] p-7"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold tracking-[0.35em] uppercase text-black/45">
                  {v.tag}
                </span>
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </div>

              <h3 className="mt-6 text-xl font-semibold tracking-tight text-black">
                {v.title}
              </h3>

              <p className="mt-3 text-sm sm:text-base leading-relaxed text-black/60">
                {v.desc}
              </p>

              <div className="mt-7 h-[1px] w-full bg-gradient-to-r from-black/0 via-black/10 to-black/0 opacity-70" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
