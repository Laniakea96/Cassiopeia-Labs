import type { Metadata } from "next";
import { Michroma, Sora } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import { siteConfig } from "@/data/siteConfig";
import "./globals.css";

// Michroma: titulares anchos y técnicos, como la rotulación de una misión espacial.
const michroma = Michroma({
  variable: "--font-michroma",
  subsets: ["latin", "latin-ext"],
  weight: "400",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: {
    default: "Cassiopeia Labs — Estudio independiente de apps móviles",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: "/images/logo-galaxy-lg.jpg",
        width: 512,
        height: 512,
        alt: "Cassiopeia Labs",
      },
    ],
  },
  twitter: {
    card: "summary",
    images: ["/images/logo-galaxy-lg.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${michroma.variable} ${sora.variable}`}>
      <body>
        <div className="sky" aria-hidden="true">
          <img className="sky-stars sky-far" src="/images/stars-c.svg" alt="" />
          <img className="sky-stars sky-mid" src="/images/stars-b.svg" alt="" />
          <img className="sky-stars sky-near" src="/images/stars-a.svg" alt="" />
        </div>

        <a className="skip-link" href="#contenido">
          Saltar al contenido
        </a>
        <Navbar />
        <main id="contenido">{children}</main>
        <Footer />

        <SmoothScroll />
      </body>
    </html>
  );
}
