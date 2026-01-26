"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-white overflow-hidden pt-[120px] pb-20"
    >
      {/* Premium Gradient / Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,173,51,0.18),transparent_60%)] blur-3xl" />
        <div className="absolute bottom-[-200px] right-[-160px] w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,80,0,0.12),transparent_65%)] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <p className="inline-flex items-center gap-2 text-sm font-medium text-black/70">
              <span className="h-[8px] w-[8px] rounded-full bg-orange-500" />
              Premium Fruit Pulp Manufacturer
            </p>

            <h1 className="mt-6 text-5xl md:text-6xl font-semibold leading-[1.02] tracking-tight text-black">
              Pure Fruit.
              <br />
              Rich Pulp.
              <br />
              <span className="text-orange-600">Export Quality.</span>
            </h1>

            <p className="mt-6 text-lg text-black/70 max-w-xl leading-relaxed">
              We craft premium fruit pulps using hygienic processing, modern
              extraction methods, and consistent quality control — built for
              beverage, ice cream, bakery & food industries.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 rounded-2xl px-7 py-4 bg-black text-white font-medium hover:bg-black/90 transition"
              >
                Explore Products <ArrowRight size={18} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-2xl px-7 py-4 border border-black/10 bg-white text-black font-medium hover:bg-black/5 transition"
              >
                Contact Sales
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-5 max-w-md">
              <div className="rounded-2xl border border-black/10 bg-white p-4">
                <p className="text-2xl font-semibold">25+</p>
                <p className="text-sm text-black/60 mt-1">Fruit Varieties</p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-4">
                <p className="text-2xl font-semibold">100%</p>
                <p className="text-sm text-black/60 mt-1">Hygienic Process</p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-4">
                <p className="text-2xl font-semibold">Bulk</p>
                <p className="text-sm text-black/60 mt-1">B2B Supply</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, filter: "blur(12px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
            className="relative"
          >
            <div className="relative rounded-[32px] border border-black/10 bg-white shadow-[0_60px_120px_rgba(0,0,0,0.08)] overflow-hidden">
              {/* placeholder hero image */}
              <div className="h-[460px] bg-[radial-gradient(circle_at_30%_30%,rgba(255,160,60,0.25),transparent_55%),radial-gradient(circle_at_70%_70%,rgba(255,60,0,0.12),transparent_55%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.55),transparent_40%)]" />

              {/* product glass badge */}
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/70 backdrop-blur-xl border border-black/10 p-5">
                <p className="text-sm font-medium text-black">
                  Mango • Pineapple • Strawberry • Sapota • Guava
                </p>
                <p className="text-xs text-black/60 mt-1">
                  Consistent taste, texture & color — made for commercial use.
                </p>
              </div>
            </div>

            {/* floating mini cards */}
            <div className="hidden md:block">
              <div className="absolute -top-6 -left-6 rounded-2xl border border-black/10 bg-white p-4 shadow-lg">
                <p className="text-sm font-semibold">Cold Storage</p>
                <p className="text-xs text-black/60 mt-1">Maintained supply</p>
              </div>

              <div className="absolute -bottom-6 -right-6 rounded-2xl border border-black/10 bg-white p-4 shadow-lg">
                <p className="text-sm font-semibold">Quality Checked</p>
                <p className="text-xs text-black/60 mt-1">Batch inspections</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
