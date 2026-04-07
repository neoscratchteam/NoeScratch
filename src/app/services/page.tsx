import type { Metadata } from "next";
import Services from "./ServicesClient";

export const metadata: Metadata = {
  title: "Our Services | NeoScratch",
  description: "Explore our specialized services including custom web applications, mobile app engineering, Google Business Profile setups, and full-stack tech coaching in Rwanda.",
  keywords: ["web development services", "mobile app development", "Google Business Profile setup", "tech coaching Rwanda", "SEO optimization"],
  openGraph: {
    title: "Our Services | NeoScratch",
    description: "Explore our specialized services including custom web applications, mobile app engineering, Google Business Profile setups, and full-stack tech coaching in Rwanda.",
    type: 'website',
  },
};

export default function Page() {
  return <Services />;
}
