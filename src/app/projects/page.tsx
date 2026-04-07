import type { Metadata } from "next";
import Projects from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Our Projects | NeoScratch Portfolio",
  description: "Explore our portfolio of high-performance digital products, custom web and mobile apps, and successful SEO campaigns delivered globally.",
  keywords: ["software portfolio Rwanda", "web development projects", "mobile app showcase", "NeoScratch case studies"],
  openGraph: {
    title: "Our Projects | NeoScratch Portfolio",
    description: "See how we build high-performance products that drive business growth.",
    type: 'website',
  },
};

export default function Page() {
  return <Projects />;
}
