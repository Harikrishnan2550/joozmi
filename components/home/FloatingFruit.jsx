"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function FloatingFruit({
  src,
  alt,
  className = "",
  delay = 0,
  duration = 6,
  rotate = 8,
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 10 }}
      animate={{
        opacity: 1,
        y: [0, -16, 0],
        rotate: [0, rotate, 0],
      }}
      transition={{
        opacity: { duration: 0.6, delay },
        y: { duration, repeat: Infinity, ease: "easeInOut", delay },
        rotate: { duration: duration + 1.5, repeat: Infinity, ease: "easeInOut", delay },
      }}
    >
      <Image src={src} alt={alt} fill className="object-contain drop-shadow-2xl" />
    </motion.div>
  );
}
