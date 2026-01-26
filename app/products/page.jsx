  "use client";

  import InfiniteMenu from "@/components/animations/InfiniteMenu";
  import Footer from "@/components/common/Footer";
  import { motion } from "framer-motion";

  /* ------------------------------------------------------------------ */
  /* PRODUCTS DATA (you can later move this to a separate file) */
  /* ------------------------------------------------------------------ */
  const products = [
    {
      title: "Mango",
      description: "Rich, golden mango pulp crafted from farm-fresh Alphonso mangoes.",
      image: "/products/mango2.png",
    },
    {
      title: "Strawberry",
      description: "Sweet and tangy strawberry pulp with a smooth premium finish.",
      image: "/products/strawberry2.png",
    },
    {
      title: "Tender Coconut",
      description: "Naturally refreshing tender coconut pulp with real coconut taste.",
      image: "/products/tender-coconut1.png",
    },
    {
      title: "Chikku",
      description: "Creamy chikku pulp packed with natural sweetness.",
      image: "/products/chikku1.png",
    },
    {
      title: "Avocado",
      description: "Smooth avocado pulp perfect for premium blends and desserts.",
      image: "/products/avocado1.png",
    },
    {
      title: "Custard Apple",
      description: "Exotic custard apple pulp with authentic tropical flavour.",
      image: "/products/custard-apple1.png",
    },
  ];

  /* ------------------------------------------------------------------ */
  /* PAGE */
  /* ------------------------------------------------------------------ */
  export default function ProductsPage() {
    return (
      <main className="relative overflow-hidden">
        {/* ============================================================= */}
        {/* BACKGROUND THEME (same premium green style) */}
        {/* ============================================================= */}
        <div className="fixed inset-0 -z-10">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(16,185,129,0.18) 0%, #ffffff 65%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-40 blur-3xl"
            style={{
              background:
                "radial-gradient(circle at 50% 20%, rgba(16,185,129,0.25), transparent 60%)",
            }}
          />
        </div>

        {/* ============================================================= */}
        {/* HERO / TITLE */}
        {/* ============================================================= */}
        <section className="pt-28 sm:pt-32 pb-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-black"
          >
            Our <span className="italic text-black/70">Products</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-5 max-w-2xl mx-auto text-base sm:text-lg text-black/60"
          >
            Discover our range of premium fruit pulps — crafted to preserve
            freshness, flavour and purity.
          </motion.p>
        </section>

        {/* ============================================================= */}
        {/* INFINITE MENU (YOUR OLD ANIMATION) */}
        {/* ============================================================= */}
        <section className="relative h-[100svh]">
          <InfiniteMenu items={products} scale={1.05} />
        </section>

        {/* ============================================================= */}
        {/* UPCOMING PRODUCTS / EXPANSION SECTION */}
        {/* ============================================================= */}
        <section className="relative py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-emerald-500">
                We are Expanding!
              </h2>

              <p className="mt-6 text-base sm:text-lg leading-relaxed text-black/65">
                Get ready for a taste revolution as Joozmi proudly unveils its new
                sub-brand, <strong>Frubottle</strong>. Crafted from handpicked fruits,
                our upcoming range features 14 distinct flavours — from timeless
                classics to exotic blends.
              </p>

              <p className="mt-4 text-base sm:text-lg leading-relaxed text-black/65">
                Experience the joy of natural fruit juices where freshness meets
                variety. Stay tuned as we expand your choices and bring you a
                vibrant new way to enjoy fruit.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "14 Flavours",
                  "100% Natural",
                  "No Preservatives",
                  "Premium Bottled Juices",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-full border border-black/10 bg-white/70 text-[10px] font-bold tracking-[0.25em] uppercase text-black/55 backdrop-blur-xl"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="overflow-hidden rounded-[2.5rem] shadow-[0_40px_120px_-60px_rgba(0,0,0,0.45)]">
                <img
                  src="/upcoming/frubottle.png"
                  alt="Upcoming Products"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* glow */}
              <div
                className="pointer-events-none absolute -inset-24 blur-3xl opacity-60"
                style={{
                  background:
                    "radial-gradient(circle at 50% 40%, rgba(16,185,129,0.35), transparent 65%)",
                }}
              />
            </motion.div>
          </div>
        </section>
      </main>
    );
  }
