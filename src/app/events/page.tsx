import { Metadata } from "next";
import Events from "./EventsClient";

export const metadata: Metadata = {
  title: "Events & Workshops | NeoScratch",
  description: "Join NeoScratch's high-impact workshops, tech summits, and software release events. Building the future of global engineering through knowledge exchange.",
  keywords: ["tech events Rwanda", "programming workshops Kigali", "software developer meetups", "NeoScratch training"],
  openGraph: {
    title: "Events & Workshops | NeoScratch",
    description: "Ignite your tech trajectory with our strategic innovation gatherings and expert workshops.",
    type: 'website',
  },
};

export default function Page() {
  return <Events />;
}
