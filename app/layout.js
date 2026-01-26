import "./globals.css";
import SmoothScrollProvider from "@/components/animations/SmoothScrollProvider";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Fruit Pulp Company",
  description: "Premium Fruit Pulp Manufacturers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-white text-black antialiased">
        {/* Disable browser scroll restoration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('scrollRestoration' in history) {
                history.scrollRestoration = 'manual';
              }
              window.scrollTo(0,0);
            `,
          }}
        />

        <SmoothScrollProvider>
          {/* 🔒 SITE CONTENT (hidden initially) */}
          <div
            id="site-content"
            className="opacity-0 pointer-events-none transition-opacity duration-700"
          >
            <Navbar />
            <main className="relative overflow-hidden">{children}</main>
            <Footer />
          </div>
        </SmoothScrollProvider>

        {/* 🔓 REVEAL SITE AFTER INTRO */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener("logoIntroDone", () => {
                const site = document.getElementById("site-content");
                if (site) {
                  site.style.opacity = "1";
                  site.style.pointerEvents = "auto";
                }
              });

              // 🛟 Safety fallback
              setTimeout(() => {
                const site = document.getElementById("site-content");
                if (site && site.style.opacity !== "1") {
                  site.style.opacity = "1";
                  site.style.pointerEvents = "auto";
                }
              }, 2500);
            `,
          }}
        />
      </body>
    </html>
  );
}
