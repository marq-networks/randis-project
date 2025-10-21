import Link from "next/link";
import Image from "next/image";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-[#0A0F1C]/70 border-b border-white/10">
      <div className="max-w-[1200px] mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Logo" width={220} height={62} />
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-[13px] text-white/80">
          <Link href="/capabilities" className="hover:text-white">Capabilities</Link>
          <Link href="/approach" className="hover:text-white">Approach</Link>
          <Link href="/company" className="hover:text-white">Company</Link>
          <Link href="/expect" className="hover:text-white">What to Expect</Link>
        </nav>
        <Link href="/contact" className="rounded-full btn-primary text-sm font-semibold px-5 py-2">Let’s Talk</Link>
      </div>
    </header>
  );
}