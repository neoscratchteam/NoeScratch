import type { Metadata } from "next";
import Contact from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | NeoScratch",
  description: "Get in touch with NeoScratch for your next digital project. Whether it's a website, an app, or digital marketing, we're here to help you scale globally.",
  keywords: ["contact software developer Rwanda", "hire website designers", "Kigali tech studio contact"],
  openGraph: {
    title: "Contact Us | NeoScratch",
    description: "Get in touch with NeoScratch for your next digital project. Built for growth and visibility.",
    type: 'website',
  },
};

export default function Page() {
  return <Contact />;
}
