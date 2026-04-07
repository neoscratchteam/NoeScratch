import { Metadata } from "next";
import JoinUs from "./JoinUsClient";

export const metadata: Metadata = {
  title: "Join Our Team | Careers at NeoScratch",
  description: "Join Rwanda's leading tech innovation company. Explore careers in software development, UI/UX design, and DevOps at NeoScratch.",
  keywords: ["tech careers Rwanda", "hire developers Kigali", "software engineering jobs", "NeoScratch internships"],
  openGraph: {
    title: "Join Our Team | Careers at NeoScratch",
    description: "Be part of the future of technology in Africa. Explore open positions at NeoScratch.",
    type: 'website',
  },
};

export default function Page() {
  return <JoinUs />;
}
