import { Metadata } from "next";
import RequestWebsite from "./RequestClient";

export const metadata: Metadata = {
  title: "Request a Website | NeoScratch Inquiry",
  description: "Get a free quote for your next digital project. Specialized in custom web development, mobile apps, and SEO strategy for global businesses.",
  keywords: ["request website quote", "hire software developer Rwanda", "website inquiry Kigali"],
  openGraph: {
    title: "Request a Website | NeoScratch Inquiry",
    description: "Architect your digital presence with high-performance engineering. Send us your project brief today.",
    type: 'website',
  },
};

export default function Page() {
  return <RequestWebsite />;
}
