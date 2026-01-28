"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

const steps = [
  {
    title: "Handpicked Fruits",
    desc: "Only the finest fruits are carefully selected by hand at the peak of ripeness from pristine orchards.",
    image: "/process/handpicked.png", // ← new name – you can keep /process/farm.jpg too
  },
  {
    title: "Hygienic Processing",
    desc: "Meticulous handling in immaculate, sterile environments ensures absolute purity and safety.",
    image: "/process/hygiene.png",
  },
  {
    title: "Flavor Lock Technique",
    desc: "Advanced gentle processing locks in natural aroma, taste and nutrients without compromise.",
    image: "/process/flavor-lock.png", // ← you'll need to create / provide this image
  },
  {
    title: "Sealed & Packed",
    desc: "Immediately sealed in premium packaging to preserve freshness and vitality until opened.",
    image: "/process/pack.png",
  },
];

export default function MountainRouteProcess() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  const [isMobile, setIsMobile] = useState(false);
  const [roadPathD, setRoadPathD] = useState("");

  useEffect(() => {
    const el = document.getElementById("roadPath");
    if (el) setRoadPathD(el.getAttribute("d"));
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const bgOpacity = useTransform(scrollYProgress, [0, 0.4], [0.08, 0.25]);

  // Road drawing animation – adjusted slightly for 4 steps (shorter path feel)
  const roadProgress = useTransform(
    scrollYProgress,
    isMobile ? [0.05, 0.75] : [0.1, 0.8],
    [0, 1],
  );

  const smoothProgress = useSpring(roadProgress, {
    stiffness: 80,
    damping: 30,
  });

  return (
    <main
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-b from-stone-50 via-emerald-50/40 to-white overflow-hidden"
    >
      <motion.div
        className="fixed inset-0 -z-10 bg-gradient-to-br from-emerald-800/5 via-transparent to-amber-100/10"
        style={{ opacity: bgOpacity }}
      />

      {/* HERO */}
      <section className="relative mt-20 flex items-center justify-center px-6 sm:px-10 lg:px-12 py-16 md:py-20 text-center">
        <div className="max-w-5xl space-y-6 md:space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif tracking-tight text-emerald-950 leading-tight"
          >
            The Journey to
            <br />
            <span className="italic font-light text-emerald-700">
              Pure Perfection
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-base sm:text-lg md:text-xl text-emerald-800/70 max-w-3xl mx-auto"
          >
            From orchard to you — every step crafted with care.
          </motion.p>
        </div>
      </section>

      {/* TIMELINE WITH ANIMATED ROAD + VEHICLE – now only 4 steps */}
      <section className="relative py-12 sm:py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative">
          {/* Animated SVG Road + Vehicle */}
          <div className="absolute inset-0 pointer-events-none">
            <svg
              className="w-full h-full"
              preserveAspectRatio="none"
              viewBox={isMobile ? "0 0 400 2200" : "0 0 1200 2400"} // shortened height for 4 steps
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="roadGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#065f46" stopOpacity="0.25" />
                  <stop offset="50%" stopColor="#10b981" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#047857" stopOpacity="0.25" />
                </linearGradient>
              </defs>

              <path
                id="roadPath"
                d={
                  isMobile
                    ? "M200,0 Q 100,300 200,600 Q 300,900 200,1200 Q 100,1500 200,1800 Q 300,2100 200,2400"
                    : "M600,0 Q 300,300 600,600 Q 900,900 600,1200 Q 300,1500 600,1800 Q 900,2100 600,2400"
                }
                fill="none"
              />

              <motion.path
                d={
                  isMobile
                    ? "M200,0 Q 100,300 200,600 Q 300,900 200,1200 Q 100,1500 200,1800 Q 300,2100 200,2400"
                    : "M600,0 Q 300,300 600,600 Q 900,900 600,1200 Q 300,1500 600,1800 Q 900,2100 600,2400"
                }
                stroke="url(#roadGradient)"
                strokeWidth={isMobile ? "30" : "40"}
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0 }}
                style={{ pathLength: roadProgress }}
              />

              <motion.path
                d={
                  isMobile
                    ? "M200,0 Q 100,300 200,600 Q 300,900 200,1200 Q 100,1500 200,1800 Q 300,2100 200,2400"
                    : "M600,0 Q 300,300 600,600 Q 900,900 600,1200 Q 300,1500 600,1800 Q 900,2100 600,2400"
                }
                stroke="#ffffff"
                strokeWidth={isMobile ? "3" : "4"}
                strokeDasharray={isMobile ? "15 30" : "20 40"}
                strokeLinecap="round"
                opacity="0.65"
                initial={{ pathLength: 0 }}
                style={{ pathLength: roadProgress }}
              />

              {/* Vehicle */}
              <motion.g
                style={{
                  offsetPath: roadPathD ? `path("${roadPathD}")` : undefined,
                  offsetDistance: smoothProgress,
                  offsetRotate: "auto 30deg",
                }}
              >
                <circle
                  cx="0"
                  cy="0"
                  r={isMobile ? "14" : "18"}
                  fill="#f59e0b"
                  opacity="0.9"
                />
                <circle
                  cx="0"
                  cy="0"
                  r={isMobile ? "9" : "12"}
                  fill="#fbbf24"
                />
                <rect
                  x="-12"
                  y="-20"
                  width="24"
                  height="18"
                  rx="4"
                  fill="#ffffff"
                  opacity="0.95"
                />
                <rect
                  x="-8"
                  y="-16"
                  width="16"
                  height="10"
                  rx="2"
                  fill="#10b981"
                />
                <text
                  x="0"
                  y="-8"
                  textAnchor="middle"
                  fontSize="10"
                  fill="white"
                  fontWeight="bold"
                >
                  J
                </text>
              </motion.g>
            </svg>
          </div>

          {/* Only 4 steps now */}
          {steps.map((step, i) => {
            const targetRef = useRef(null);
            const { scrollYProgress: sectionProgress } = useScroll({
              target: targetRef,
              offset: ["start end", "end start"],
            });

            const yImage = useTransform(sectionProgress, [0, 1], [60, -60]);
            const opacity = useTransform(
              sectionProgress,
              [0, 0.2, 0.8, 1],
              [0, 1, 1, 0],
            );

            const isEven = i % 2 === 0;

            return (
              <motion.div
                key={step.title}
                ref={targetRef}
                className={`
                  relative flex flex-col items-center gap-8 sm:gap-12
                  ${isMobile ? "py-20 sm:py-28" : "lg:flex-row lg:gap-16 xl:gap-24 lg:py-32"}
                  ${isEven ? "lg:justify-start" : "lg:justify-end"}
                `}
              >
                <div
                  className={`
                    z-20 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full 
                    bg-white border-4 border-emerald-700 shadow-xl flex items-center justify-center
                    ${isMobile ? "absolute top-0 -translate-y-1/2" : "lg:static"}
                    ${isEven && !isMobile ? "lg:-translate-x-1/2" : ""}
                    ${!isEven && !isMobile ? "lg:translate-x-1/2" : ""}
                  `}
                >
                  <span className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-emerald-800">
                    {i + 1}
                  </span>
                </div>

                <motion.div
                  style={{ opacity }}
                  className={`
                    w-full max-w-lg bg-white/90 backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 
                    shadow-2xl border border-emerald-100/50 z-10 text-center lg:text-left
                    ${isEven && !isMobile ? "lg:mr-auto lg:pr-12 xl:pr-20" : ""}
                    ${!isEven && !isMobile ? "lg:ml-auto lg:pl-12 xl:pl-20" : ""}
                  `}
                >
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-emerald-900 mb-4 sm:mb-6">
                    {step.title}
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg text-emerald-800/80 leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>

                <motion.div
                  style={{ y: yImage, opacity }}
                  className={`
    w-full
    relative overflow-hidden shadow-2xl border border-emerald-200/40 z-10

    /* ✅ MOBILE – full visual impact */
    aspect-[3/4]
    rounded-2xl

    /* ✅ DESKTOP – cinematic control */
    lg:aspect-auto
    lg:max-w-xl
    lg:h-[500px]
    xl:h-[600px]
    lg:rounded-3xl

    ${isEven && !isMobile ? "lg:ml-auto" : ""}
    ${!isEven && !isMobile ? "lg:mr-auto" : ""}
  `}
                >
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 50vw"
                    priority={i <= 1}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Philosophy */}
      <section className="min-h-[20vh] md:min-h-[40vh] flex items-center justify-center px-6 sm:px-10 lg:px-12 text-center py-16 md:py-20">
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-emerald-950 max-w-5xl leading-tight"
        >
          Purity preserved
          <br />
          <span className="italic font-light text-emerald-700">
            from orchard to you
          </span>
        </motion.h2>
      </section>

      {/* Closing */}
      <section className="pb-24 sm:pb-32 md:pb-40 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="text-xs sm:text-sm md:text-base tracking-[0.5em] sm:tracking-[0.6em] uppercase text-emerald-800/60 font-medium"
        >
          JOOZMI — Pure by Nature
        </motion.p>
      </section>
    </main>
  );
}
