import { Metadata } from "next";
import Partnerships from "./PartnershipsClient";

export const metadata: Metadata = {
  title: "Partnerships | NeoScratch Collaborations",
  description: "Explore our strategic partnerships with innovation hubs, universities, and industry leaders. Building stronger tech communities in Rwanda and beyond.",
  keywords: ["tech partnerships Rwanda", "kLab Rwanda partner", "University of Rwanda collaboration", "NeoScratch network"],
  openGraph: {
    title: "Partnerships | NeoScratch Collaborations",
    description: "Building stronger communities through strategic partnerships and global collaborations.",
    type: 'website',
  },
};

export default function Page() {
  return <Partnerships />;
}
