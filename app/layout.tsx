import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
export const metadata: Metadata = {
  title: "Junova — Independent ERP + AI Consulting",
  description: "We don't sell software. We build freedom.",
  icons: { icon: "/favicon.svg" },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body className="min-h-screen flex flex-col"><NavBar /><main className="flex-1">{children}</main><Footer /></body></html>);
}