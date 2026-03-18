"use client";
import { usePathname } from "next/navigation";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideShell =
    pathname?.startsWith("/learn") || pathname?.startsWith("/studio");

  return (
    <>
      {!hideShell && <NavBar />}
      <main className="flex-1">{children}</main>
      {!hideShell && <Footer />}
    </>
  );
}
