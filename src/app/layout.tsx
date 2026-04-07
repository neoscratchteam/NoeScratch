import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../index.css";
import { Providers } from "@/components/Providers";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingChat } from "@/components/FloatingChat";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NeoScratch | Global Engineering & Creative Studio",
  description: "High-performance digital products and specialized consultancy in Rwanda and beyond.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow pt-16 lg:pt-20">
              {children}
            </main>
            <Footer />
            <FloatingChat />
          </div>
        </Providers>
      </body>
    </html>
  );
}
