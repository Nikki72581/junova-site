import { NavBar } from "./NavBar";
import { Footer } from "./Footer";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
