import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AutoMATE — The Consultant Brain | Zero-Cost AI Discovery",
  description:
    "AutoMATE replaces expensive $10k agency discovery phases. Our AI understands your business workflow and finds the best automation tools — at zero cost. Powered by an RLM trained on 20,000+ real-world templates.",
  keywords: [
    "automation",
    "AI consultant",
    "workflow automation",
    "business process",
    "ROI calculator",
    "zero cost discovery",
  ],
  openGraph: {
    title: "AutoMATE — The Consultant Brain",
    description:
      "Replace $10k agency discovery with AI-powered workflow analysis. Zero cost.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-navy-950 text-slate-200">
        {children}
      </body>
    </html>
  );
}
