"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
export function NavBar() {
  const pathname = usePathname();
  const links = [
    { href: "/", label: "Home" },
    { href: "/people", label: "People" },
    { href: "/processes", label: "Processes" },
    { href: "/product", label: "Product" },
    { href: "/media", label: "Media" },
    { href: "/contact", label: "Contact" },
  ];
  return (<header className="sticky top-0 z-50 backdrop-blur bg-black/30 border-b border-white/10">
    <div className="container-lg flex items-center justify-between h-16">
      <Link href="/" className="flex items-center gap-2 font-bold">
        <Image src="/favicon.svg" alt="Junova logo" width={28} height={28} />
        <span>junova</span>
      </Link>
      <nav className="hidden md:flex items-center gap-1">
        {links.map(l => (<Link key={l.href} href={l.href} className={"px-3 py-2 rounded-full text-sm " + (pathname===l.href ? "bg-white text-black" : "text-white/80 hover:text-white")}>{l.label}</Link>))}
        <Link href="/client-login" className="ml-2 px-4 py-2 rounded-full border border-white/20 hover:border-white/60 text-sm">Client Login</Link>
      </nav>
      <a href="/contact" className="md:hidden px-3 py-2 rounded-full bg-white text-black text-sm font-semibold">Contact</a>
    </div>
  </header>);
}