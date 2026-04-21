import type { Metadata } from "next";
import { Instrument_Serif } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SiteEffects from "@/components/layout/SiteEffects";
import { siteConfig } from "@/data/siteConfig";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "Cassiopeia Labs — Estudio independiente de apps móviles",
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Estudio independiente de apps móviles. Piripi, Luupy y Mimoney.",
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: siteConfig.name,
    description:
      "Estudio independiente de apps móviles. Piripi, Luupy y Mimoney.",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={instrumentSerif.variable}>
      <body>
        <div className="bg-stack" aria-hidden="true">
          <div className="orb orb-blue"></div>
          <div className="orb orb-purple"></div>
          <div className="orb orb-red"></div>
          <div className="orb orb-extra"></div>
          <img
            className="stars s-a"
            src="/images/stars-a.svg"
            alt=""
            aria-hidden="true"
          />
          <img
            className="stars s-b"
            src="/images/stars-b.svg"
            alt=""
            aria-hidden="true"
          />
          <img
            className="stars s-c"
            src="/images/stars-c.svg"
            alt=""
            aria-hidden="true"
          />
          <div className="vignette"></div>
          <div className="grain"></div>
        </div>

        <div className="shell">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>

        <SiteEffects />
      </body>
    </html>
  );
}
