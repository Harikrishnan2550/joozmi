"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function ScrollLogoIntro() {
  const sectionRef = useRef(null);
  const logoRef = useRef(null);
  const timelineRef = useRef(null);
  const exitedRef = useRef(false);

  const logos = [
    "/logo/logo2.png",
    "/logo/blendit.png",
    "/logo/gusto.png",
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // 🔁 LOOPING LOGO ANIMATION
  useEffect(() => {
    const logo = logoRef.current;
    if (!logo) return;

    const tl = gsap.timeline({ repeat: -1 });
    timelineRef.current = tl;

    logos.forEach((_, i) => {
      tl.call(() => setActiveIndex(i));
      tl.fromTo(
        logo,
        { opacity: 0, scale: 0.92 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "power3.out",
        }
      );
      tl.to(logo, {
        opacity: 0,
        scale: 0.96,
        duration: 0.45,
        ease: "power2.inOut",
        delay: 0.8,
      });
    });

    return () => {
      tl.kill();
    };
  }, []);

  // ⬇️ SCROLL TO EXIT INTRO
  useEffect(() => {
    const section = sectionRef.current;
    const logo = logoRef.current;
    if (!section || !logo) return;

    const onScroll = () => {
      if (exitedRef.current) return;
      exitedRef.current = true;

      // stop looping animation
      timelineRef.current?.kill();

      gsap.to(logo, {
        y: -180,
        opacity: 0,
        duration: 0.9,
        ease: "power3.inOut",
        onComplete: () => {
          section.style.display = "none";

          // ✅ show navbar + home
          window.dispatchEvent(new Event("logoSequenceComplete"));
        },
      });

      window.removeEventListener("scroll", onScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="fixed inset-0 z-[9999] bg-white flex items-center justify-center"
    >
      <div
        ref={logoRef}
        className="relative w-[360px] sm:w-[420px] h-[160px] sm:h-[190px]"
      >
        <Image
          src={logos[activeIndex]}
          alt="Brand Logo"
          fill
          priority
          className="object-contain"
        />
      </div>

      {/* subtle scroll hint */}
      <div className="absolute bottom-12 text-xs tracking-[0.4em] text-black/40">
        SCROLL
      </div>
    </section>
  );
}
