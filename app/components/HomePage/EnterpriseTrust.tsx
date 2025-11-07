"use client";

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import CTAButton from "../Shared/CTAButton";

export default function EnterpriseTrust() {
  const arrowRef = useRef<SVGSVGElement>(null);
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

  const features = [
    {
      title: "SOC 2 Compliant",
      subtitle: "Built-In Compliance From Prototype To Production"
    },
    {
      title: "Enterprise Security",
      subtitle: "Zero-Trust Architecture And Encrypted Everything"
    },
    {
      title: "99.99% SLA",
      subtitle: "Enterprise-Grade Reliability Guarantees"
    },
    {
      title: "Seamless IT Integration",
      subtitle: "Works With Existing Active Directory And Microsoft Ecosystem"
    },
    {
      title: "AI/ML Integration",
      subtitle: "Native Integration With Azure Cognitive Services And OpenAI"
    }
  ];

  return (
    <section className="pt-20 px-4  ">

      <div className="max-w-[1200px]  mx-auto">



        {/* Main Container - Matching the image design */}
        <motion.div
          className="relative rounded-[20.0304px] border border-blue-500/30 p-8 lg:p-12 overflow-hidden backdrop-blur-sm bg-[linear-gradient(133.24deg,#0D1832_53.4%,rgba(19,36,73,0)_104.73%)]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Background glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl"></div>

          <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Content */}
            <div className="space-y-6">
              <motion.h2
                className="text-3xl lg:text-4xl font-bold text-white leading-tight"
                variants={slideInLeft}
              >
                Enterprise Trust from{" "}
                <span className="text-blue-400">Day One</span>
              </motion.h2>

              <div className="space-y-4">
                <motion.p
                  className="text-slate-300 leading-relaxed text-base"
                  variants={slideInLeft}
                >
                  Your prototype is not just a demo—it is the foundation of your
                  production system. By transitioning to Microsoft Azure for
                  deployment, we ensure your rapid prototype can seamlessly
                  scale to serve millions meeting the strictest enterprise
                  requirements.
                </motion.p>

                <motion.p
                  className="text-slate-400 leading-relaxed text-base"
                  variants={slideInLeft}
                >
                  Get prototypes get thrown away when it is time to build the real
                  system. Our Azure transition approach means your working
                  prototype becomes your production platform—with enterprise
                  security, compliance, and scaling built in when you deploy.
                </motion.p>
              </div>

              <div className="pt-4">
                <CTAButton
                  href="https://cal.com/rutledge-associates"
                  className="group inline-flex items-center rounded-full btn-primary px-2 md:px-6 py-3 text-[12px] md:text-sm font-semibold shadow-lg shadow-blue-500/20 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30"
                >
                  Book Your 90-Day Strategy Call
                  <svg
                    ref={arrowRef}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="ml-2 h-4 w-4"
                  >
                    <path d="M13.172 12l-4.95 4.95 1.414 1.414L16 12l-6.364-6.364-1.414 1.414z" />
                  </svg>
                </CTAButton>
              </div>
              
            </div>

            {/* Right Features List - Timeline Design */}
            <div className="space-y-3">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex gap-4 group"
                  variants={slideInRight}
                >
                  {/* Icon with connector */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="relative">
                      {/* Glow effect */}
                      <div className="absolute -inset-2 bg-blue-500/30 rounded-full blur-xl group-hover:bg-blue-400/40 transition-all duration-300"></div>
                      {/* Icon circle */}
                      <div className="relative w-12 h-12 rounded-full bg-blue-500/20 border-2 border-blue-400/40 flex items-center justify-center backdrop-blur-sm group-hover:bg-blue-500/30 group-hover:border-blue-400/60 transition-all duration-300">
                        <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>

                  
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-4">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {feature.subtitle}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Image */}

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
    </section>
  );
}