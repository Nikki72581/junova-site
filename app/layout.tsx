import type { Metadata } from "next";
import "./globals.css";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Nicole Ronchetti — ERP, AI & Building",
  description: "Acumatica consultant, builder, writer. Senior Consultant at Stellar One. Founder of Junova.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
