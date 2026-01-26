"use client";

import ScrollLogoIntro from "@/components/animations/ScrollLogoIntro";

import HomeStory from "@/components/home/HomeStory";
import AboutSection from "@/components/home/AboutSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ProcessSection from "@/components/home/ProcessSection";
import ProductsPreview from "@/components/home/ProductsPreview";
import ContactPage from "@/components/home/ContactPage";

export default function Home() {
  return (
    <>
      {/* ✅ INTRO (only logo, fixed, disappears) */}
      <ScrollLogoIntro />

      {/* ✅ HOME CONTENT (Navbar + Footer come from RootLayout) */}
      <div id="home" className="relative bg-white text-black">
        <HomeStory />
        <WhyChooseUs />
        <ProcessSection />
        <AboutSection />
        <ProductsPreview />
        <ContactPage />
      </div>
    </>
  );
}
