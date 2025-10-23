"use client";
import Image from "next/image";

import { motion, Variants } from 'framer-motion';

export default function CapabilitiesGrid() {
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

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const items = [
    {
      id: 1,
      title: "Compliance Automation",
      description: "Streamline audits, reporting, and regulatory tracking.",
      image: "/homepage/our capabilities/image1.png",
    },
    {
      id: 2,
      title: "Performance Analytics & Dashboards",
      description: "Turn data into decision support.",
      image: "/homepage/our capabilities/image2.png",
    },
    {
      id: 3,
      title: "Health Informatics",
      description: "Integrate public health data across systems.",
      image: "/homepage/our capabilities/image3.png",
    },
    {
      id: 4,
      title: "Workforce & Training Solutions",
      description: "Integrate public health data across systems.",
      image: "/homepage/our capabilities/image4.png",
    },
  ];

  return (
    <section className="border-t border-white/10">
      <motion.div 
        className="max-w-[1200px] mx-auto px-6 py-14"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold"
            variants={slideInRight}
          >
            Our Capabilities
          </motion.h2>
          <motion.p 
            className="mt-2 text-white/70 text-[12px] md:text-[13px]"
            variants={slideInLeft}
          >
            Transforming Business Visions Into Production-Grade Systems.
          </motion.p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              className="group rounded-2xl bg-gradient-to-r from-[#0D1832] to-[#132449] border border-white/10 shadow-xl shadow-black/20 overflow-hidden flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
              variants={index % 2 === 0 ? slideInLeft : slideInRight}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* top accent line */}
              <div className="h-1" />

              <div className="p-5 flex-1">
                <h3 className="text-[15px] font-semibold leading-tight tracking-wide">{item.title}</h3>
                <Image src="/homepage/our capabilities/line.png" alt={item.title} width={200} height={150} className="mt-4 rounded-xl" />
                <p className="mt-2 text-[13px] text-white/70">{item.description}</p>
              </div>

              <div className="px-5 pb-5 mt-auto">
                <div className="relative aspect-[4/3] rounded-xl bg-white/3 ring-1 ring-white/10 overflow-hidden shadow-inner">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}