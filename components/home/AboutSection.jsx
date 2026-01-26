"use client";
import { motion } from "framer-motion";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const fadeInSlideUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const features = [
  {
    id: "01",
    title: "100% Natural",
    description:
      "Pure fruit pulp extraction with world-class hygienic processing standards.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
  },
  {
    id: "02",
    title: "Farm Direct",
    description:
      "Procured directly from sustainable orchards for unmatched quality control.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
        />
      </svg>
    ),
  },
  {
    id: "03",
    title: "Zero Additives",
    description:
      "No preservatives or chemicals—delivering the authentic soul of the fruit.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden py-24 md:py-40 px-6">
      {/* ✅ NEW PREMIUM MINT GREEN GRADIENT BG (Top green -> White -> Bottom green) */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(16,185,129,0.18) 0%, rgba(255,255,255,1) 55%, rgba(16,185,129,0.18) 100%)",
          }}
        />

        {/* ✅ Soft mint orbs */}
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.55, 0.35] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] blur-[140px] rounded-full"
          style={{ background: "rgba(16,185,129,0.16)" }}
        />

        <motion.div
          animate={{ scale: [1, 1.06, 1], opacity: [0.25, 0.4, 0.25] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-[25%] -left-[15%] w-[70%] h-[70%] blur-[160px] rounded-full"
          style={{ background: "rgba(16,185,129,0.10)" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* 1. Header & Features Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="grid lg:grid-cols-12 gap-8 mb-24 items-end"
        >
          <div className="lg:col-span-8">
            <motion.span
              variants={fadeInSlideUp}
              className="text-[12px] font-bold tracking-[0.3em] text-emerald-700 uppercase block mb-6"
            >
              The Essence of Purity
            </motion.span>

            <motion.h2
              variants={fadeInSlideUp}
              className="text-6xl md:text-8xl font-serif font-light text-gray-900 leading-[0.9] tracking-tight"
            >
              Nature, <br />{" "}
              <span className="italic font-normal text-emerald-600">
                Unfiltered.
              </span>
            </motion.h2>
          </div>

          <div className="lg:col-span-4">
            <motion.p
              variants={fadeInSlideUp}
              className="text-lg text-gray-600 leading-relaxed font-light"
            >
              Joozmi isn't just a product; it’s a commitment to the earth. We
              capture the fleeting peak of flavor and lock it in for your
              senses.
            </motion.p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-start mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative group aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
            <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute bottom-10 left-10 z-20 text-white">
              <p className="text-xs font-bold tracking-[0.2em] uppercase opacity-70 mb-2">
                Sustainable Sourcing
              </p>
              <h4 className="text-3xl font-light italic">The Art of Purity</h4>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-12 py-12"
          >
            {features.map((feature, i) => (
              <motion.div
                key={i}
                variants={fadeInSlideUp}
                className="group flex gap-8 items-start"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white/80 backdrop-blur-xl shadow-xl flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500 border border-black/5">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-4">
                    <span className="text-[10px] text-emerald-300 font-mono">
                      [{feature.id}]
                    </span>
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-light">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* 3. NEW: EXPANDING / FRUBOTTLE SECTION */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="bg-white/70 backdrop-blur-xl rounded-[3rem] p-12 md:p-24 border border-emerald-200/40 relative overflow-hidden shadow-[0_40px_100px_-70px_rgba(16,185,129,0.45)]"
        >
          {/* Decorative Floating Circle */}
          <div className="absolute -bottom-20 -right-20 w-64 h-64 blur-3xl rounded-full bg-emerald-200/25" />

          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <motion.h2
                variants={fadeInSlideUp}
                className="text-5xl md:text-7xl font-serif font-light text-emerald-900 leading-tight mb-8"
              >
                We are <br />{" "}
                <span className="italic font-normal text-emerald-600">
                  Expanding!
                </span>
              </motion.h2>

              <motion.div
                variants={fadeInSlideUp}
                className="space-y-6 text-lg text-emerald-900/70 font-light leading-relaxed max-w-xl"
              >
                <p>
                  Get ready for a taste revolution as Joozmi proudly unveils its
                  new sub-brand,{" "}
                  <strong className="font-semibold text-emerald-900">
                    'Frubottle'
                  </strong>
                  !
                </p>
                <p>
                  Delight in the essence of nature with our extensive range of{" "}
                  <strong>14 distinct flavors</strong>, each crafted from the
                  finest, handpicked fruits.
                </p>
                <p>
                  From classic favorites to exotic blends, Frubottle promises a
                  refreshing journey for your palate.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInSlideUp}
                className="mt-10 flex items-center gap-4"
              >
                <div className="h-[1px] w-12 bg-emerald-300" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
                  Freshness Meets Variety
                </span>
              </motion.div>
            </div>

            <motion.div
              variants={fadeInSlideUp}
              className="bg-white/80 backdrop-blur-xl p-8 rounded-[2rem] shadow-2xl shadow-emerald-900/5 border border-emerald-100"
            >
              <p className="text-emerald-900/60 italic text-xl mb-6">
                "Embrace the pure joy of natural fruit juices as we bring you a
                symphony of flavors, bottled just for you."
              </p>

              <div className="flex flex-wrap gap-3">
                {["14 Flavors", "Zero Added Sugar", "Cold Pressed", "Eco-Friendly"].map(
                  (tag, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-[10px] font-bold uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
