"use client";

import { motion } from "framer-motion";

export default function LiquidBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* ✅ White base */}
      <div className="absolute inset-0 bg-white" />

      {/* Blob 1 - Orange */}
      <motion.div
        className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full blur-3xl opacity-60"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(255,140,0,0.9), rgba(255,140,0,0) 65%)",
        }}
        animate={{
          x: [0, 80, -40, 0],
          y: [0, 40, 90, 0],
          scale: [1, 1.15, 1.05, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Blob 2 - Yellow */}
      <motion.div
        className="absolute top-[25%] -right-40 h-[520px] w-[520px] rounded-full blur-3xl opacity-60"
        style={{
          background:
            "radial-gradient(circle at 60% 40%, rgba(255,210,0,0.85), rgba(255,210,0,0) 65%)",
        }}
        animate={{
          x: [0, -90, 30, 0],
          y: [0, 60, -50, 0],
          scale: [1, 1.12, 1.04, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Blob 3 - Green Accent */}
      <motion.div
        className="absolute -bottom-52 left-[20%] h-[650px] w-[650px] rounded-full blur-3xl opacity-40"
        style={{
          background:
            "radial-gradient(circle at 40% 60%, rgba(0,255,160,0.55), rgba(0,255,160,0) 65%)",
        }}
        animate={{
          x: [0, 60, -60, 0],
          y: [0, -40, 60, 0],
          scale: [1, 1.08, 1.03, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ✅ Soft highlight overlay */}
      <div className="absolute inset-0 opacity-[0.35] mix-blend-soft-light">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.9),transparent_60%)]" />
      </div>

      {/* ✅ White vignette (premium depth) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.0),rgba(255,255,255,0.75))]" />
    </div>
  );
}
