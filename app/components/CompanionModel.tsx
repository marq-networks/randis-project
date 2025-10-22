"use client";
import Link from "next/link";

import { motion } from 'framer-motion';

export default function CompanionModel() {
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

  const slideInLeft = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  const slideInBottom = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };
  const tracks = [
    {
      id: "saas",
      title: "Visionary Prototyping",
      bullets: [
        "Co-design future-state systems with stakeholders",
        "Validate ideas through interaction, not just discussion",
        "Build live clickable prototypes in 7-14 days",
      ],
      ctaLabel: "SaaS Track",
      href: "/contact",
    },
    {
      id: "paas",
      title: "Visionary Prototyping",
      bullets: [
        "Co-design future-state systems with stakeholders",
        "Validate ideas through interaction, not just discussion",
        "Build live clickable prototypes in 7-14 days",
      ],
      ctaLabel: "PaaS Track",
      href: "/contact",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Whiteboard",
      description: "Align Vision And Core Concepts.",
    },
    {
      number: "02",
      title: "Prototype",
      description: "Test And Validate Interactively.",
    },
    {
      number: "03",
      title: "Azure-Powered Platform",
      description: "Deploy Scalable Enterprise Solution.",
    },
  ];

  return (
    <section className="border-t border-white/10">
      <motion.div 
        className="max-w-[1200px] mx-auto px-6 py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Heading */}
        <motion.h2 
          className="text-center text-2xl md:text-3xl font-bold"
          variants={slideInLeft}
        >
          The <span className="text-blue-500">Companion</span> Model: SaaS + PaaS
        </motion.h2>

        {/* Tracks */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {tracks.map((track, index) => (
            <motion.div
              key={track.id}
              className="relative rounded-[14px] min-h-[357px] bg-[linear-gradient(133.24deg,#0D1832_53.4%,rgba(19,36,73,0)_104.73%)] ring-1 ring-white/10 shadow-xl shadow-black/20 overflow-hidden transition-all duration-300"
              variants={track.id === 'saas' ? slideInLeft : slideInRight}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.2)" 
              }}
              transition={{ duration: 0.3 }}
            >
              {/* top accent line */}
              <div className="h-1 bg-gradient-to-r from-white/25 to-transparent" />

              <div className="p-6">
                <h3 className="text-lg font-semibold">{track.title}</h3>
                <ul className="mt-4 space-y-3 text-[13px] text-white/80">
                  {track.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="relative inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-500/20 ring-1 ring-blue-400/40">
                        <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 20 20" fill="currentColor">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom CTA bar */}
              <div className="px-6 pb-6 mt-auto">
                <div className="flex items-center justify-between rounded-xl bg-white/5 ring-1 ring-white/10 p-3">
                  <span className="text-sm font-semibold">{track.ctaLabel}</span>
                  <Link
                    href={track.href}
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 hover:bg-blue-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30 group"
                    aria-label={`${track.ctaLabel} →`}
                  >
                    <svg className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Steps */}
        <motion.div 
          className="mt-16"
          variants={slideInRight}
        >
          <h3 className="text-2xl font-bold text-center mb-8">How It Works</h3>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s, index) => (
            <motion.div 
              key={s.number} 
              className="text-center transition-transform duration-300"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative inline-block">
                <span className="text-6xl md:text-7xl font-black text-white/10 select-none">{s.number}</span>
              </div>
              <div className="mt-2 text-sm">
                <div className="font-semibold">{s.title}</div>
                <div className="mt-1 text-white/70">{s.description}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      </motion.div>
    </section>
  );
}