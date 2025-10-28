"use client";

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

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
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
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
      image: "/01.png",
      title: "Free 90-Day Strategy Call",
      subtitle: "No Obligations, Just Solutions",
      color: "text-blue-400/20",
    },
    {
      num: "02",
      image: "/02.png",
      title: "24-Hour Response",
      subtitle: "Fast Scheduling, Faster Solutions",
      color: "text-blue-400/20",
    },
    {
      num: "03",
      image: "/03.png",
      title: "Rapid Implementation",
      subtitle: "From Call To Solution In 90 Days",
      color: "text-blue-400/20",
    },
  ];

  return (
    <section className="">
         <div className="">
          <Image 
            src="/line.png" 
            alt="Enterprise Trust" 
            width={1200} 
            height={5} 
            className="w-full h-auto" 
          />
        </div>
      <div className="relative max-w-[1200px] mx-auto pt-20">
     
       
        <motion.div
          className=""
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="text-center">
            <motion.h2
              className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight"
              variants={slideInLeft}
            >
              Ready to Solve Your Problem Fast?
            </motion.h2>
            <motion.p
              className="mt-6 text-lg text-white/70 max-w-2xl mx-auto"
              variants={slideInRight}
            >
              Book your 90-day strategy call and discover how we can transform your business challenge into a competitive advantage.
            </motion.p>
          </div>

          <div className=" grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12">
            {items.map((it, index) => (
              <motion.div
                key={it.num}
                className="relative overflow-hidden px-8 py-4 md:py-12 bg-transparent transition-transform duration-300"
                variants={index % 2 === 0 ? slideInLeft : slideInRight}
                whileHover={{ scale: 1.02 }}
              >
                {/* big background number */}
                <div className="inset-0 flex items-center justify-center select-none">
                  <div className="relative w-full h-full min-h-[140px] md:min-h-[240px] transform scale-[0.6] md:scale-80]">
                    <Image
                      src={it.image}
                      alt={`Step ${it.num}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* foreground content */}
                <div className="relative -mt-14  md:-mt-16 z-10 text-center space-y-3">
                  <h3 className="text-sm md:text-[18px] font-bold text-white leading-tight">{it.title}</h3>
                  <p className="text-base text-white/70 leading-relaxed">{it.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <div className="">
          <Image 
            src="/line.png" 
            alt="Enterprise Trust" 
            width={1200} 
            height={5} 
            className="w-full h-auto" 
          />
        </div>
    </section >
  );
}