import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden ">
      <div className="absolute inset-0 -z-10 ">
        <Image src="/homepage/herosectionbg/hero.jpg" alt="Hero BG" fill className="object-cover" />
      </div>
      <div className="max-w-[1200px] h-[100vh] mx-auto px-6 pt-16 pb-20 grid md:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
        <div>
          <h1 className="section-title text-[32px] md:text-[46px] font-bold leading-[1.15]">
            Modernizing Compliance & Analytics for Government
          </h1>
          <p className="mt-4 text-white/80 text-[15px] md:text-[17px] max-w-xl">
            We help public sector organizations adopt privacy-first analytics, streamline compliance, and deliver trustworthy insights at enterprise scale.
          </p>
          <div className="mt-8 flex gap-4">
            <Link href="/contact" className="rounded-full btn-primary px-6 py-3 text-sm font-semibold">Get Started</Link>
            <Link href="/approach" className="rounded-full border border-white/20 hover:border-white/40 px-6 py-3 text-sm font-semibold">Learn More</Link>
          </div>
        </div>
        {/* <div className="relative h-[280px] md:h-[360px] rounded-2xl card overflow-hidden">
          <Image src="/homepage/hero section/hero.png" alt="Hero" fill className="object-cover" />
        </div> */}
      </div>
    </section>
  );
}