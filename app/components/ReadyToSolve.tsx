"use client";

import { motion, Variants } from 'framer-motion';

export default function ReadyToSolve() {
  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const slideInLeft: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const slideInRight: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };
  const items = [
    {
      num: "01",
      title: "Free 30-Day Strategy Call",
      subtitle: "No Obligations. Just Solutions",
      color: "text-blue-400/20",
    },
    {
      num: "02",
      title: "24-Hour Response",
      subtitle: "Fast Scheduling. Faster Solutions",
      color: "text-blue-400/20",
    },
    {
      num: "03",
      title: "Rapid Implementation",
      subtitle: "From Call To Solution in 90 Days",
      color: "text-blue-400/20",
    },
  ];

  return (
    <section className="border-t border-white/10">
      <div className="relative max-w-[1200px] mx-auto">
        {/* top and bottom subtle band glow */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.06),transparent)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-[linear-gradient(to_top,rgba(255,255,255,0.06),transparent)]" />

        <motion.div 
          className="max-w-[1200px] mx-auto px-6 py-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="text-center">
            <motion.h2 
              className="text-2xl md:text-3xl font-bold"
              variants={slideInLeft}
            >
              Ready to Solve Your Problem Fast?
            </motion.h2>
            <motion.p 
              className="mt-2 text-sm text-white/70 max-w-2xl mx-auto"
              variants={slideInRight}
            >
              Book your 30-day strategy call and discover how we can transform your business challenge into a competitive advantage.
            </motion.p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {items.map((it, index) => (
              <motion.div 
                key={it.num} 
                className="relative overflow-hidden rounded-2xl px-6 py-8 bg-transparent transition-transform duration-300"
                variants={index % 2 === 0 ? slideInLeft : slideInRight}
                whileHover={{ scale: 1.05 }}
              >
                {/* big background number */}
                <div className=" inset-0 flex items-center justify-center select-none">
                  <span className={`text-7xl md:text-8xl font-black ${it.color}`}>{it.num}</span>
                </div>

                {/* foreground content */}
                <div className="relative z-10 -mt-5 text-center">
                  <div className="text-sm font-semibold text-white">{it.title}</div>
                  <div className="mt-1 text-[12px] text-white/60">{it.subtitle}</div>
                </div>

                {/* subtle ring to match band style */}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}