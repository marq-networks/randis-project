import Link from "next/link";
import Image from "next/image";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 bg-[#0D1832] border-b border-white/10">
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image 
            src="/logo.png" 
            alt="Rutledge & Associates" 
            width={220} 
            height={62} 
            className="animate-[fadeIn_0.8s_ease-out] hover:scale-105 transition-transform duration-300"
          />
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-[14px] text-white/90 font-medium">
          <Link href="/" className="hover:text-white transition-colors animate-[fadeInUp_0.6s_ease-out_0.1s_both]">Home</Link>
          <Link href="/about" className="hover:text-white transition-colors animate-[fadeInUp_0.6s_ease-out_0.2s_both]">About Us</Link>
          <Link href="/capabilities" className="hover:text-white transition-colors animate-[fadeInUp_0.6s_ease-out_0.3s_both]">Commercial Solutions</Link>
          <Link href="/approach" className="hover:text-white transition-colors animate-[fadeInUp_0.6s_ease-out_0.4s_both]">Govt Solutions</Link>
          <Link href="/expect" className="hover:text-white transition-colors animate-[fadeInUp_0.6s_ease-out_0.5s_both]">Projects</Link>
        </nav>
        <Link href="/contact" className="flex items-center gap-2 bg-transparent border border-white/20 hover:border-white/40 text-white text-sm font-medium px-6 py-2.5 rounded-lg transition-all duration-200 hover:bg-white/5 hover:scale-105 animate-[fadeInUp_0.6s_ease-out_0.6s_both]">
          Contact Us
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
    </header>
  );
}