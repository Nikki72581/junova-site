export function Footer() {
  return (<footer className="border-t border-white/10">
    <div className="container-lg py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-white/60">
      <p>© {new Date().getFullYear()} Junova Partners LLC</p>
      <p className="text-sm">Independent ERP + AI Consulting • Not a VAR • Built for SMBs</p>
    </div>
  </footer>);
}