import AboutHero from "@/components/about/AboutHero";
import AboutImageStory from "@/components/about/AboutImageStory";
import AboutStory from "@/components/about/AboutStory";
import AboutValues from "@/components/about/AboutValues";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";

export default function AboutPage() {
  return (
    <main className="relative min-h-[200vh] overflow-visible">

      <AboutHero />
      <AboutImageStory />
      <AboutStory />
      <AboutValues />

    </main>
  );
}
