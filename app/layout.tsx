import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "GridMint Digital Studio | Websites, Apps & AI Automation",
  description: "Websites, e-commerce, apps, AI integrations and growth systems for ambitious businesses. Nationwide service.",
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}