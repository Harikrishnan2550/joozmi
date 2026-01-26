"use client";

import { motion } from "framer-motion";

const easePremium = [0.22, 1, 0.36, 1];

const bullets = [
  {
    title: "Handpicked Fruits",
    desc: "Sourced from trusted farms at peak ripeness for true fruit richness.",
  },
  {
    title: "Premium Processing",
    desc: "Strict hygiene standards preserve freshness, aroma and pulp texture.",
  },
  {
    title: "Luxury Grade Quality",
    desc: "Every batch is checked for consistency, taste and smooth finish.",
  },
];

export default function AboutImageStory() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      {/* ✅ Premium Green Theme Background (Top + Bottom green) */}
      <div className="pointer-events-none absolute inset-0">
        {/* ✅ green -> white -> green (top starts with green) */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(
                180deg,
                rgba(16,185,129,0.18) 0%,
                rgba(255,255,255,1) 52%,
                rgba(16,185,129,0.13) 100%
              )
            `,
          }}
        />

        {/* ✅ soft orbs (continuity effect) */}
        <motion.div
          animate={{ x: [0, 35, 0], y: [0, 18, 0], opacity: [0.22, 0.35, 0.22] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-28 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full blur-3xl"
          style={{ background: "rgba(16,185,129,0.10)" }}
        />

        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, -14, 0],
            opacity: [0.18, 0.28, 0.18],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-190px] right-[-180px] h-[540px] w-[540px] rounded-full blur-3xl"
          style={{ background: "rgba(16,185,129,0.08)" }}
        />

        <motion.div
          animate={{ opacity: [0.12, 0.22, 0.12] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-200px] left-[-170px] h-[520px] w-[520px] rounded-full blur-3xl"
          style={{ background: "rgba(16,185,129,0.07)" }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-14 items-center">
          {/* ✅ LEFT IMAGE CARD */}
          <motion.div
            initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.05, ease: easePremium }}
            className="lg:col-span-6"
          >
            <div className="relative overflow-hidden rounded-[2.5rem] border border-black/10 bg-white/60 shadow-[0_45px_120px_-70px_rgba(0,0,0,0.45)] backdrop-blur-xl">
              {/* image */}
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center scale-[1.03]"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80')",
                  }}
                />
                {/* overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              </div>

              {/* bottom label */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/15 px-5 py-2 backdrop-blur-xl">
                  <span className="h-2 w-2 rounded-full bg-emerald-300" />
                  <span className="text-[11px] font-semibold tracking-[0.32em] uppercase text-white/85">
                    Premium Brand Story
                  </span>
                </div>

                <p className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                  Nature Crafted.
                  <br />
                  <span className="italic text-white/85">Luxury Served.</span>
                </p>
              </div>

              {/* ✅ subtle glow */}
              <div
                className="pointer-events-none absolute -inset-32 opacity-70 blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle at 40% 35%, rgba(16,185,129,0.22), transparent 65%)",
                }}
              />
            </div>
          </motion.div>

          {/* ✅ RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.05, ease: easePremium, delay: 0.05 }}
            className="lg:col-span-6"
          >
            {/* badge */}
            <div className="inline-flex items-center gap-3 mb-6 px-5 py-2 bg-white/70 backdrop-blur-xl rounded-full border border-black/10 shadow-sm">
              <span className="text-xs font-semibold tracking-[0.25em] text-black/55 uppercase">
                The Joozmi Promise
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            </div>

            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-black leading-[1.05]">
              A premium pulp that feels{" "}
              <span className="italic text-black/70">fresh</span> in every sip.
            </h2>

            <p className="mt-6 text-base sm:text-lg leading-relaxed text-black/60">
              Joozmi was made for customers who expect quality, purity and a
              luxury finish. From fruit sourcing to final packaging, every
              detail is designed to preserve the authentic fruit experience.
            </p>

            {/* bullets */}
            <div className="mt-10 space-y-6">
              {bullets.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, x: -10, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.85,
                    ease: easePremium,
                    delay: i * 0.08,
                  }}
                  className="flex gap-5 items-start"
                >
                  <div className="mt-1 h-10 w-10 rounded-2xl border border-black/10 bg-white/70 shadow-sm backdrop-blur-xl flex items-center justify-center">
                    <span className="text-xs font-bold tracking-[0.25em] text-black/60">
                      0{i + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-black">
                      {b.title}
                    </h3>
                    <p className="mt-1 text-sm sm:text-base leading-relaxed text-black/55">
                      {b.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* badges */}
            <div className="mt-10 flex flex-wrap gap-3">
              {["100% Natural", "Zero Additives", "Premium QC", "Farm Direct"].map(
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
        </div>
      </div>
    </section>
  );
}
