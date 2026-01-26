"use client";

import { useEffect, useRef, useState, Suspense, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Float,
  Environment,
  Image as ThreeImage,
  PerspectiveCamera,
} from "@react-three/drei";
import Lenis from "@studio-freight/lenis";
import { motion, useScroll, useTransform } from "framer-motion";
import * as THREE from "three";

// ✅ PREMIUM BG NOISE (simple)
function BackgroundNoise() {
  return (
    <div className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-multiply">
      <div className="absolute inset-0 bg-[url('/noise.png')] bg-repeat" />
    </div>
  );
}

// ─── FLOATING FRUIT ACCENT ──────────────────────────────────────────────────
function FloatingFruit({
  imageUrl,
  position = [0, 0, 0],
  scale = 2,
  opacity = 0.22,
  renderOrder = 2,
}) {
  const meshRef = useRef();

  const texture = useMemo(() => {
    const tex = new THREE.TextureLoader().load(imageUrl);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }, [imageUrl]);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();

    // ✅ Only subtle floating (NO rotation)
    meshRef.current.position.y =
      position[1] + Math.sin(t * 0.7 + position[0]) * 0.18;
  });

  return (
    <mesh ref={meshRef} position={position} renderOrder={renderOrder}>
      <planeGeometry args={[scale, scale]} />
      <meshBasicMaterial
        map={texture}
        transparent
        opacity={opacity}
        depthWrite={false}
        depthTest={false}
      />
    </mesh>
  );
}

// ─── 3D SCENE ───────────────────────────────────────────────────────────────
function ProductScene({ currentProduct }) {
  const group = useRef();
  const { size } = useThree();
  const isMobile = size.width < 668;

  useFrame((state) => {
    if (!group.current) return;
    const x = state.pointer.x * 0.25;
    const y = state.pointer.y * 0.18;
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      x,
      0.06
    );
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      -y,
      0.06
    );
  });

  return (
    <>
      <PerspectiveCamera
        makeDefault
        position={isMobile ? [0, 0, 13.2] : [0, 0, 9]}
        fov={isMobile ? 38 : 32}
      />

      <Environment preset="studio" />
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 12, 5]} intensity={1.8} />
      <directionalLight position={[-12, -4, 3]} intensity={0.4} />

      <group ref={group}>
        {/* ✅ Fruits Around Product - Professional placement */}
        {!isMobile ? (
          <>
            <FloatingFruit
              imageUrl={currentProduct.fruit}
              position={[-2.8, 1.25, -0.6]}
              scale={2.05}
              opacity={0.18}
              renderOrder={1}
            />
            <FloatingFruit
              imageUrl={currentProduct.fruit}
              position={[2.9, 0.2, -0.6]}
              scale={1.85}
              opacity={0.17}
              renderOrder={1}
            />
            <FloatingFruit
              imageUrl={currentProduct.fruit}
              position={[-2.1, -1.9, -0.6]}
              scale={1.55}
              opacity={0.14}
              renderOrder={1}
            />
            <FloatingFruit
              imageUrl={currentProduct.fruit}
              position={[2.1, -2.2, -0.6]}
              scale={1.45}
              opacity={0.13}
              renderOrder={1}
            />
          </>
        ) : (
          <>
            <FloatingFruit
              imageUrl={currentProduct.fruit}
              position={[-1.55, 0.95, -0.8]}
              scale={1.55}
              opacity={0.22}
              renderOrder={1}
            />
            <FloatingFruit
              imageUrl={currentProduct.fruit}
              position={[1.55, 0.55, -0.8]}
              scale={1.45}
              opacity={0.2}
              renderOrder={1}
            />
            <FloatingFruit
              imageUrl={currentProduct.fruit}
              position={[-1.25, -1.55, -0.8]}
              scale={1.25}
              opacity={0.16}
              renderOrder={1}
            />
            <FloatingFruit
              imageUrl={currentProduct.fruit}
              position={[1.25, -1.65, -0.8]}
              scale={1.2}
              opacity={0.16}
              renderOrder={1}
            />
          </>
        )}

        {/* ✅ Product always on top */}
        <Float speed={1.4} rotationIntensity={0.05} floatIntensity={0.7}>
          <Suspense fallback={null}>
            <ThreeImage
              url={currentProduct.image}
              scale={isMobile ? [6.5, 8.5] : [2.9, 3.5]}
              position={isMobile ? [0, -0.25, 0] : [0, -0.2, 1.5]}
              transparent
              toneMapped={false}
              renderOrder={5}
            />
          </Suspense>
        </Float>
      </group>
    </>
  );
}

// ─── BIG BACKGROUND TEXT ─────────────────────────────────────────────────────
function BackgroundText({ text, progress, accentColor }) {
  const opacity = useTransform(progress, [0, 0.25, 0.75, 1], [0, 1, 1, 0]);
  const y = useTransform(progress, [0, 1], [40, -40]);
  const scale = useTransform(progress, [0, 0.6, 1], [0.96, 1, 1.06]);

  return (
    <motion.div
      style={{ opacity, y, scale }}
      className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden -z-10"
    >
      <h2
        className="text-[14vw] sm:text-[16vw] lg:text-[18vw] font-black leading-none select-none"
        style={{
          letterSpacing: "-0.06em",
          color: accentColor,
          opacity: 0.08,
        }}
      >
        {text.toUpperCase()}
      </h2>
    </motion.div>
  );
}

// ─── PRODUCT SECTION ────────────────────────────────────────────────────────
function ProductSection({ product, index, totalProducts }) {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.18, 0.75, 1],
    [0, 1, 1, 0]
  );
  const contentY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100svh] flex items-start lg:items-center snap-start lg:snap-center pt-20 lg:pt-0"
    >
      <BackgroundText
        text={product.name}
        progress={scrollYProgress}
        accentColor={product.accent}
      />

      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 lg:px-8">
        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className="grid lg:grid-cols-12 gap-10 items-center"
        >
          {/* LEFT TEXT */}
          <div className="lg:col-span-6 text-center lg:text-left lg:pl-28 lg:mt-20">
            <div className="inline-flex items-center gap-3 mb-6 px-5 py-2 bg-white/80 backdrop-blur-xl rounded-full border border-black/10 shadow-sm">
              <span className="text-xs font-semibold tracking-[0.25em] text-black/55 uppercase">
                Premium Fruit Pulp
              </span>
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ background: product.accent }}
              />
            </div>

            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.02] mt-7 lg:mt-10"
              style={{ fontFamily: "Amanojaku" }}
            >
              <span style={{ color: product.accent }}>{product.name}</span>
            </motion.h3>

            {/* Mobile Canvas */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-6 flex justify-center lg:hidden"
            >
              <div className="w-[280px] h-[380px]">
                <Canvas dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
                  <ProductScene currentProduct={product} />
                </Canvas>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-6 text-lg sm:text-xl text-black/65 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              {product.short}
            </motion.p>

            <div className="mt-10 text-sm text-black/40 tracking-[0.25em] uppercase">
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(totalProducts).padStart(2, "0")}
            </div>
          </div>

          <div className="lg:col-span-6 hidden lg:block" />
        </motion.div>
      </div>
    </section>
  );
}

// ─── MAIN COMPONENT ─────────────────────────────────────────────────────────
export default function ProductStory({ products }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showIndicator, setShowIndicator] = useState(true);
  const containerRef = useRef(null);
  const lenisRef = useRef(null);

  // ✅ Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      smoothTouch: false,
    });

    lenisRef.current = lenis;

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // ✅ Active section tracking
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll(".product-section"));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sections.indexOf(entry.target);
            if (index !== -1) setActiveIndex(index);
          }
        });
      },
      { threshold: 0.55 }
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  // ✅ Hide indicator when user leaves ProductStory
  useEffect(() => {
    const containerEl = containerRef.current;
    if (!containerEl) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        setShowIndicator(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    io.observe(containerEl);
    return () => io.disconnect();
  }, []);

  const currentProduct = products[activeIndex] || products[0];

  return (
    <main ref={containerRef} className="relative snap-y snap-mandatory">
      {/* ✅ PREMIUM GREEN THEME BACKGROUND (TOP -> WHITE -> BOTTOM) */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        {/* main gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(
                180deg,
                rgba(16,185,129,0.22) 0%,
                rgba(255,255,255,1) 55%,
                rgba(16,185,129,0.14) 100%
              )
            `,
          }}
        />

        {/* soft premium glows */}
        <div
          className="absolute -top-24 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full blur-3xl opacity-70"
          style={{ background: "rgba(16,185,129,0.14)" }}
        />
        <div
          className="absolute bottom-[-180px] left-[-160px] h-[520px] w-[520px] rounded-full blur-3xl opacity-60"
          style={{ background: "rgba(16,185,129,0.10)" }}
        />
        <div
          className="absolute bottom-[-220px] right-[-170px] h-[560px] w-[560px] rounded-full blur-3xl opacity-55"
          style={{ background: "rgba(16,185,129,0.09)" }}
        />

        <BackgroundNoise />
      </div>

      {/* Desktop fixed canvas */}
      <div
        className={`fixed inset-0 z-0 pointer-events-none hidden lg:block transition-all duration-500 ${
          showIndicator ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute top-0 right-0 h-full w-[62%]">
          <Canvas dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
            <ProductScene key={currentProduct.id} currentProduct={currentProduct} />
          </Canvas>
        </div>
      </div>

      {/* Scrollable content */}
      <div className="relative z-10">
        {products.map((product, index) => (
          <div key={product.id} className="product-section">
            <ProductSection
              product={product}
              index={index}
              totalProducts={products.length}
            />
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      <div
        className={`fixed left-10 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col gap-4 transition-all duration-500 ${
          showIndicator
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {products.map((product, index) => (
          <button
            key={product.id}
            onClick={() => {
              const section =
                document.querySelectorAll(".product-section")[index];
              if (!section) return;

              if (lenisRef.current) {
                lenisRef.current.scrollTo(section, { offset: 0 });
              } else {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="group flex items-center gap-4"
          >
            <span
              className={`h-10 w-[3px] rounded-full transition-all duration-500 ${
                activeIndex === index ? "opacity-100" : "opacity-30"
              }`}
              style={{
                background: activeIndex === index ? product.accent : "#cbd5e1",
              }}
            />
            <span
              className={`text-xs tracking-[0.3em] uppercase transition-all duration-500 ${
                activeIndex === index ? "text-black" : "text-black/35"
              }`}
            >
              {product.name}
            </span>
          </button>
        ))}
      </div>
    </main>
  );
}
