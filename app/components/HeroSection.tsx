"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05
    }
  }
};

const slideInLeft: Variants = {
  hidden: { 
    opacity: 0, 
    x: -30 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
        duration: 0.4,
        ease: "easeOut"
      }
  }
};

const slideInRight: Variants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const slideInBottom: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden h-screen mx-auto">
      {/* Background video */}
      <video
        className="absolute inset-0 -z-10 w-full h-full object-cover"
        src="/homepage/herosectionbg/herobg.mp4"
        autoPlay
        muted
        loop
        playsInline
        poster="/homepage/herosectionbg/hero.jpg"
      />
      {/* Soft overlays to improve legibility and match design */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_80%_-20%,rgba(37,99,235,0.25),transparent)]" />
      <div className="absolute bottom-0 left-0 right-0 h-32 -z-10 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute top-6 left-6 right-6 h-px bg-white/10" />

      <div className="max-w-[1200px] min-h-[72vh] md:min-h-[80vh] mx-auto px-6 flex items-center">
        <motion.div 
          className="max-w-[680px] motion-element"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="section-title text-white text-[36px] md:text-[56px] font-extrabold leading-[1.1] tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]"
            variants={slideInLeft}
          >
            Modernizing Compliance & Analytics for Government
          </motion.h1>
          <motion.p 
            className="mt-4 text-white/80 text-[15px] md:text-[17px] max-w-[640px]"
            variants={slideInRight}
          >
            We build mission-ready SaaS/PaaS systems that automate audits, enable performance insight, and empower public sector decision-making.
          </motion.p>
          <motion.div 
            className="mt-8"
            variants={slideInBottom}
          >
            <Link href="/contact" className="group inline-flex items-center rounded-full btn-primary px-6 py-3 text-sm font-semibold shadow-lg shadow-blue-500/20 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30">
              Book Your 90-Day Strategy Call
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="ml-2 h-4 w-4"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3 }}
              >
                <path d="M13.172 12l-4.95 4.95 1.414 1.414L16 12l-6.364-6.364-1.414 1.414z" />
              </motion.svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}