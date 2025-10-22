"use client";

import Link from "next/link";
import { motion } from 'framer-motion';

export default function PartnerCTA() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const slideInBottom = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };
  return (
    <section className="border-t border-white/10">
      <div className="relative max-w-[1200px] mx-auto">
        {/* subtle top glow */}
        <div className="pointer-events-none absolute inset-x-0 -top-10 h-16 bg-gradient-to-t from-[050A11] to-[0075FF] blur-md" />
        <motion.div 
          className="max-w-[1200px] mx-auto px-6 py-16 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            className="text-2xl md:text-3xl font-bold"
            variants={slideInRight}
          >
            Ready to Partner with a Proven Leader?
          </motion.h2>
          <motion.p 
            className="mt-3 text-[13px] text-white/70"
            variants={slideInLeft}
          >
            Download Our Capability Statement Today And Discover How Excelcus Can
            Support Your Mission With Expertise And Innovation!
          </motion.p>

          <motion.div 
            className="mt-8 flex justify-center"
            variants={slideInBottom}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-500 transition-all duration-300 px-6 py-3 text-sm font-semibold shadow-lg shadow-blue-900/30 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30 group"
            >
              View Capability Statement
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
        {/* subtle bottom glow */}
        <div className="pointer-events-none absolute inset-x-0 -bottom-10 h-16 bg-gradient-to-t from-white/5 to-transparent blur-md" />
      </div>
    </section>
  );
}