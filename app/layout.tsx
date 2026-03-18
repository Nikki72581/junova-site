import type { Metadata } from "next";
import "./globals.css";
import { SiteShell } from "@/components/SiteShell";
export const metadata: Metadata = {
  title: "Junova — Independent ERP + AI Consulting",
  description: "We don't sell software. We build freedom.",
  icons: { icon: "/favicon.svg" },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body className="min-h-screen flex flex-col"><SiteShell>{children}</SiteShell></body></html>);
}