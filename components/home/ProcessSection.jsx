"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";

const easePremium = [0.22, 1, 0.36, 1];

const PROCESS = [
  {
    step: "01",
    title: "Handpicked Fruits",
    desc: "We select ripe, premium fruits from trusted farms to ensure natural sweetness and rich pulp texture.",
  },
  {
    step: "02",
    title: "Hygienic Processing",
    desc: "Fruits are cleaned, pulped, and handled with strict hygiene standards to preserve freshness.",
  },
  {
    step: "03",
    title: "Flavor Lock Technique",
    desc: "Our process preserves the natural aroma, taste, and color—so it feels like real fresh fruit.",
  },
  {
    step: "04",
    title: "Sealed & Packed",
    desc: "Premium packaging seals freshness and ensures consistent quality in every batch delivered.",
  },
];

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  // refs for all steps
  const stepRefs = useRef([]);

  // ✅ setup refs length once
  const stepCount = PROCESS.length;
  useMemo(() => {
    stepRefs.current = Array(stepCount)
      .fill(null)
      .map((_, i) => stepRefs.current[i] || null);
  }, [stepCount]);

  // ✅ IntersectionObserver → update activeStep
  useEffect(() => {
    const els = stepRefs.current.filter(Boolean);
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        // find best match (most visible)
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0)
          );

        if (!visible.length) return;

        const idx = Number(visible[0].target.getAttribute("data-step-index"));
        if (!Number.isNaN(idx)) setActiveStep(idx);
      },
      {
        // ✅ This gives better "center active" feel
        root: null,
        threshold: [0.2, 0.35, 0.5, 0.65, 0.8],
        rootMargin: "-35% 0px -35% 0px",
      }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section
      id="process"
      className="relative overflow-hidden bg-white py-24 sm:py-28"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        {/* ✅ UPDATED: TOP → BOTTOM gradient green → white → green */}
        <div
          className="absolute inset-0"
          style={{
            background:
             "linear-gradient(180deg, rgba(16,185,129,0.18) 0%, rgba(255,255,255,1) 55%, rgba(16,185,129,0.18) 100%)",
          }}
        />

        {/* Animated soft orbs */}
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, 20, 0],
            opacity: [0.25, 0.4, 0.25],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-black/[0.03] blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -18, 0],
            opacity: [0.18, 0.28, 0.18],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-140px] left-[-120px] h-[460px] w-[460px] rounded-full bg-black/[0.02] blur-3xl"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: easePremium }}
            className="text-xs font-semibold tracking-[0.35em] text-black/55"
          >
            OUR PROCESS
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.95, ease: easePremium, delay: 0.05 }}
            className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-black"
          >
            From Fruit to{" "}
            <span className="italic text-black/70">Luxury Pulp</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: easePremium, delay: 0.12 }}
            className="mt-6 text-base sm:text-lg leading-relaxed text-black/60"
          >
            Every step is crafted to preserve flavor, texture and freshness —
            delivering a premium pulp experience designed for luxury taste.
          </motion.p>
        </div>

        {/* Timeline Wrapper */}
        <div className="relative mt-16">
          {/* Timeline vertical line */}
          <motion.div
            initial={{ scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.1, ease: easePremium }}
            className="pointer-events-none absolute left-6 top-0 h-full w-px origin-top bg-gradient-to-b from-black/0 via-black/15 to-black/0 lg:left-1/2 lg:-translate-x-1/2"
          />

          {/* Steps */}
          <div className="space-y-8 lg:space-y-10">
            {PROCESS.map((item, i) => {
              const isLeft = i % 2 === 0;
              const isActive = activeStep === i;

              return (
                <div
                  key={item.step}
                  className="relative grid grid-cols-1 lg:grid-cols-2 lg:gap-16"
                >
                  {/* Timeline dot (active highlight) */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{
                      duration: 0.7,
                      ease: easePremium,
                      delay: i * 0.06,
                    }}
                    className="absolute left-6 top-10 -translate-x-1/2 lg:left-1/2 lg:-translate-x-1/2"
                  >
                    <div className="relative">
                      <motion.div
                        animate={{
                          scale: isActive ? 1.12 : 1,
                          borderColor: isActive
                            ? "rgba(0,0,0,0.28)"
                            : "rgba(0,0,0,0.20)",
                        }}
                        transition={{ duration: 0.35, ease: easePremium }}
                        className="h-5 w-5 rounded-full border bg-white shadow-sm"
                      />

                      {/* inner core pulse */}
                      <motion.div
                        animate={
                          isActive
                            ? {
                                scale: [1, 1.6, 1],
                                opacity: [0.5, 1, 0.5],
                              }
                            : { scale: 1, opacity: 0.5 }
                        }
                        transition={{
                          duration: isActive ? 2 : 0.35,
                          repeat: isActive ? Infinity : 0,
                          ease: "easeInOut",
                        }}
                        className="absolute inset-1 rounded-full bg-black/40"
                      />

                      {/* active glow ring */}
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1.6 }}
                          transition={{ duration: 0.7, ease: easePremium }}
                          className="absolute inset-0 rounded-full"
                          style={{
                            boxShadow: "0 0 0 10px rgba(0,0,0,0.04)",
                          }}
                        />
                      )}
                    </div>
                  </motion.div>

                  {/* SIDE */}
                  <div
                    className={`${isLeft ? "lg:pr-6" : "lg:order-2 lg:pl-6"}`}
                  >
                    {/* Step wrapper with observer ref */}
                    <div
                      ref={(el) => (stepRefs.current[i] = el)}
                      data-step-index={i}
                      className="w-full"
                    >
                      {/* Card */}
                      <motion.div
                        initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                          filter: "blur(0px)",
                        }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{
                          duration: 0.9,
                          delay: i * 0.08,
                          ease: easePremium,
                        }}
                        animate={{
                          scale: isActive ? 1.02 : 1,
                        }}
                        className="group relative overflow-hidden rounded-3xl border bg-white/75 p-8 backdrop-blur-xl will-change-transform"
                        style={{
                          marginLeft: "48px",
                          borderColor: isActive
                            ? "rgba(0,0,0,0.16)"
                            : "rgba(0,0,0,0.10)",
                          boxShadow: isActive
                            ? "0 40px 90px -55px rgba(0,0,0,0.35)"
                            : "0 30px 80px -55px rgba(0,0,0,0.25)",
                        }}
                      >
                        {/* Active glow */}
                        <motion.div
                          aria-hidden="true"
                          animate={{
                            opacity: isActive ? 1 : 0,
                            scale: isActive ? 1 : 0.98,
                          }}
                          transition={{ duration: 0.45, ease: easePremium }}
                          className="pointer-events-none absolute -inset-10 rounded-[40px] bg-black/[0.03] blur-2xl"
                        />

                        {/* Step + Title */}
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-4">
                            <div className="relative h-12 w-12 rounded-2xl border border-black/10 bg-white/80 shadow-sm flex items-center justify-center overflow-hidden">
                              {/* shine */}
                              <motion.div
                                aria-hidden="true"
                                className="absolute inset-0"
                                initial={{ x: "-120%" }}
                                whileHover={{ x: "120%" }}
                                transition={{
                                  duration: 0.9,
                                  ease: easePremium,
                                }}
                                style={{
                                  background:
                                    "linear-gradient(90deg, transparent, rgba(0,0,0,0.06), transparent)",
                                }}
                              />

                              {/* active number highlight */}
                              <motion.span
                                animate={{
                                  color: isActive
                                    ? "rgba(0,0,0,0.82)"
                                    : "rgba(0,0,0,0.60)",
                                  scale: isActive ? 1.04 : 1,
                                }}
                                transition={{
                                  duration: 0.35,
                                  ease: easePremium,
                                }}
                                className="text-sm font-semibold tracking-[0.25em] relative"
                              >
                                {item.step}
                              </motion.span>
                            </div>

                            <motion.h3
                              animate={{
                                opacity: isActive ? 1 : 0.82,
                              }}
                              transition={{
                                duration: 0.35,
                                ease: easePremium,
                              }}
                              className="text-xl sm:text-2xl font-semibold tracking-tight text-black"
                            >
                              {item.title}
                            </motion.h3>
                          </div>

                          {/* subtle floating bubble */}
                          <motion.div
                            animate={{
                              y: [0, -6, 0],
                              opacity: isActive ? 1 : 0.55,
                              scale: isActive ? 1 : 0.95,
                            }}
                            transition={{
                              duration: 3.5,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                            className="hidden sm:block h-10 w-10 rounded-full border border-black/10 bg-white/70 shadow-sm"
                          />
                        </div>

                        <motion.p
                          animate={{ opacity: isActive ? 1 : 0.7 }}
                          transition={{ duration: 0.35, ease: easePremium }}
                          className="mt-5 text-sm sm:text-base leading-relaxed text-black/55"
                        >
                          {item.desc}
                        </motion.p>

                        <div className="mt-8 h-[1px] w-full bg-gradient-to-r from-black/0 via-black/10 to-black/0 opacity-60" />

                        <div className="mt-5 flex items-center justify-between text-xs tracking-[0.3em] uppercase text-black/35">
                          <span>Premium Workflow</span>

                          {/* show only when active */}
                          <motion.span
                            animate={{
                              opacity: isActive ? 1 : 0,
                              x: isActive ? 0 : -6,
                            }}
                            transition={{ duration: 0.35, ease: easePremium }}
                          >
                            Active →
                          </motion.span>
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* opposite column (desktop only) */}
                  <div
                    className={`${
                      isLeft ? "hidden lg:block" : "hidden lg:block lg:order-1"
                    }`}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Preparation Tip Card */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1, ease: easePremium, delay: 0.1 }}
          whileHover={{ scale: 1.01 }}
          className="mt-16 rounded-3xl border border-black/10 bg-white/70 px-8 py-10 text-center backdrop-blur-xl"
        >
          <motion.p
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-xs font-semibold tracking-[0.35em] text-black/40 uppercase"
          >
            Quick Preparation
          </motion.p>

          <h4 className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight text-black">
            Mix. Shake. Serve.
          </h4>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-black/60 max-w-3xl mx-auto">
            Add 2–3 spoons of pulp into chilled milk or water. Blend for 15
            seconds. Top with ice. Enjoy a premium fruit drink instantly.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
