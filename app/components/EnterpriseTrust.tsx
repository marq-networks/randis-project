"use client";

import { motion } from 'framer-motion';

export default function EnterpriseTrust() {
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
    <section className="py-16 px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Main Container - Matching the image design */}
        <motion.div 
          className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900 rounded-2xl border border-blue-500/30 p-8 lg:p-12 overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Background glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-2xl"></div>
          
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
                  className="text-slate-300 leading-relaxed text-sm"
                  variants={slideInLeft}
                >
                  Your prototype is not just a demo—its the foundation of your 
                  production system. By transitioning to Microsoft Azure for 
                  deployment, we ensure your rapid prototypes meet the 
                  strictest enterprise mission and meaning the strictest enterprise 
                  requirements.
                </motion.p>
                
                <motion.p 
                  className="text-slate-400 leading-relaxed text-sm"
                  variants={slideInLeft}
                >
                  Get prototypes get thrown away when its time to build the real system. 
                  Our Azure transition approach means your working prototype becomes your 
                  production platform—with enterprise security, compliance, and scaling 
                  built in when you deploy.
                </motion.p>
              </div>
              
              <div className="pt-2">
                <motion.button 
                  className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-200 group text-sm hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30"
                  variants={slideInLeft}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Your 90-Day Strategy Call
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.button>
              </div>
            </div>
            
            {/* Right Features List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4 backdrop-blur-sm hover:bg-slate-800/70 hover:border-slate-600/50 transition-all duration-300"
                  variants={slideInRight}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-start space-x-3">
                    {/* Check Icon */}
                    <div className="flex-shrink-0 w-6 h-6 mt-0.5">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-semibold mb-2 text-base">
                        {feature.title}
                      </h3>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        {feature.subtitle}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}