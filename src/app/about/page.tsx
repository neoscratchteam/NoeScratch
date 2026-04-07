import { Metadata } from "next";
import About from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us | NeoScratch",
  description: "Learn about NeoScratch, a global software engineering studio in Rwanda dedicated to innovation, technical excellence, and digital transformation.",
  keywords: ["about NeoScratch", "software house Rwanda", "Theogene Iradukunda", "Kigali tech company"],
  openGraph: {
    title: "About Us | NeoScratch",
    description: "Engineering the future of global business through innovative software solutions.",
    type: 'website',
  },
};

export default function Page() {
  return <About />;
}
