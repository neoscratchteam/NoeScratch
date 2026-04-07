import { Metadata } from "next";
import Testimonials from "./TestimonialsClient";

export const metadata: Metadata = {
  title: "Testimonials | NeoScratch Success Stories",
  description: "See what our global clients say about NeoScratch. Success stories from leading companies in Rwanda and around the world.",
  keywords: ["NeoScratch reviews", "software company testimonials", "client feedback Kigali"],
  openGraph: {
    title: "Testimonials | NeoScratch Success Stories",
    description: "Real feedback from companies we've helped scale through engineering excellence.",
    type: 'website',
  },
};

export default function Page() {
  return <Testimonials />;
}
