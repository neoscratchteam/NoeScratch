import type { Metadata } from "next";
import Index from "./HomeClient";

export const metadata: Metadata = {
  title: "NeoScratch | Global Engineering & Creative Studio",
  description: "NeoScratch specializes in custom web and mobile app development, digital marketing, and SEO services in Rwanda. We build digital products that drive growth and visibility.",
  openGraph: {
    title: "NeoScratch | Global Engineering & Creative Studio",
    description: "Building high-performance digital products and specialized consultancy in Rwanda and beyond.",
    type: 'website',
  },
};

export default function Page() {
  return <Index />;
}
