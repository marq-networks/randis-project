"use client";
import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";

type Story = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  metrics: { label: string; value: string }[];
  icon: string;
};

const STORIES: Story[] = [
  {
    id: "sdbe-platform",
    title: "SDBE Platform - Government Compliance",
    subtitle: "Service-Disabled Business Enterprise",
    description:
      "Enterprise-grade platform delivered in 90 days, featuring 95% FSM compliance, real-time analytics, and government-grade security. Comprehensive vendor management system with automated compliance workflows, settlement agreement tracking, and multi-stage review processes demonstrating our rapid enterprise delivery capability.",
    metrics: [
      { label: "Prototype to Production", value: "90 Days" },
      { label: "Compliance Rating", value: "95% FSM" },
      { label: "Security Grade", value: "Enterprise" },
    ],
    icon: "shield",
  },
  {
    id: "enterprise-data",
    title: "Enterprise Data Platform",
    subtitle: "Fortune 500 Financial Services",
    description:
      "Complete stakeholder dashboard and compliance system delivered from prototype to production in 45 days, featuring real-time analytics, automated reporting, and regulatory compliance tools that transformed how the client tracks performance metrics and addresses critical business requirements.",
    metrics: [
      { label: "Project Value", value: "$125K" },
      { label: "Delivery Time", value: "45 Days" },
      { label: "Cloud Platform", value: "Azure" },
    ],
    icon: "chart",
  },
    {
    id: "enterprise-data",
    title: "Enterprise Data Platform",
    subtitle: "Fortune 500 Financial Services",
    description:
      "Complete stakeholder dashboard and compliance system delivered from prototype to production in 45 days, featuring real-time analytics, automated reporting, and regulatory compliance tools that transformed how the client tracks performance metrics and addresses critical business requirements.",
    metrics: [
      { label: "Project Value", value: "$125K" },
      { label: "Delivery Time", value: "45 Days" },
      { label: "Cloud Platform", value: "Azure" },
    ],
    icon: "chart",
  },
    {
    id: "enterprise-data",
    title: "Enterprise Data Platform",
    subtitle: "Fortune 500 Financial Services",
    description:
      "Complete stakeholder dashboard and compliance system delivered from prototype to production in 45 days, featuring real-time analytics, automated reporting, and regulatory compliance tools that transformed how the client tracks performance metrics and addresses critical business requirements.",
    metrics: [
      { label: "Project Value", value: "$125K" },
      { label: "Delivery Time", value: "45 Days" },
      { label: "Cloud Platform", value: "Azure" },
    ],
    icon: "chart",
  },
    {
    id: "enterprise-data",
    title: "Enterprise Data Platform",
    subtitle: "Fortune 500 Financial Services",
    description:
      "Complete stakeholder dashboard and compliance system delivered from prototype to production in 45 days, featuring real-time analytics, automated reporting, and regulatory compliance tools that transformed how the client tracks performance metrics and addresses critical business requirements.",
    metrics: [
      { label: "Project Value", value: "$125K" },
      { label: "Delivery Time", value: "45 Days" },
      { label: "Cloud Platform", value: "Azure" },
    ],
    icon: "chart",
  },
   {
    id: "enterprise-data",
    title: "Enterprise Data Platform",
    subtitle: "Fortune 500 Financial Services",
    description:
      "Complete stakeholder dashboard and compliance system delivered from prototype to production in 45 days, featuring real-time analytics, automated reporting, and regulatory compliance tools that transformed how the client tracks performance metrics and addresses critical business requirements.",
    metrics: [
      { label: "Project Value", value: "$125K" },
      { label: "Delivery Time", value: "45 Days" },
      { label: "Cloud Platform", value: "Azure" },
    ],
    icon: "chart",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const getIcon = (iconType: string) => {
  switch (iconType) {
    case "shield":
      return (
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "chart":
      return (
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 3v18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return (
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
  }
};

export default function SuccessStories() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [storiesPerPage, setStoriesPerPage] = useState(2);
  const totalPages = Math.ceil(STORIES.length / storiesPerPage);

  const pathname = usePathname();
  const showLineDivider = pathname !== "/our-projects";

  const nextStory = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevStory = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  // Auto-loop functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalPages);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalPages]);

  // Set stories per page responsively (1 on mobile, 2 on desktop)
  useEffect(() => {
    const updateStoriesPerPage = () => {
      const perPage = window.innerWidth < 768 ? 1 : 2;
      setStoriesPerPage(perPage);
      setCurrentIndex((prev) => Math.min(prev, Math.ceil(STORIES.length / perPage) - 1));
    };
    updateStoriesPerPage();
    window.addEventListener("resize", updateStoriesPerPage);
    return () => window.removeEventListener("resize", updateStoriesPerPage);
  }, []);

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <section className="px-2 ">
        {showLineDivider && (
          <div className="">
            <Image 
              src="/line.png" 
              alt="Enterprise Trust" 
              width={1200} 
              height={5} 
              className="w-full h-auto" 
            />
          </div>
        )}
      <motion.div 
        className="max-w-[1200px] md:pt-20 sm:pt-0 mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
       
        {/* Header */}
        <div className="flex items-start justify-between md:mb-16 sm:mb-2 mb-6">
          <motion.div variants={cardVariants}>
            <h2 className="text-[32px] md:text-[48px] font-bold text-white leading-tight">
              <span className="text-[#0075FF]">Success</span> Stories
            </h2>
          </motion.div>
          <motion.p 
            className="max-w-md text-[18px] text-white/70 leading-relaxed hidden md:block"
            variants={cardVariants}
          >
            Real results for partnerships with organizations across multiple industries.
          </motion.p>
        </div>

        {/* Stories Grid with Navigation */}
        <div className="relative">
          {/* Navigation Arrows (hidden on mobile) */}
          <button
            onClick={prevStory}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm items-center justify-center transition-all duration-300 hover:scale-105 -translate-x-16"
            aria-label="Previous story"
          >
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={nextStory}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-[#0075FF] hover:bg-blue-500 shadow-lg shadow-blue-600/30 items-center justify-center transition-all duration-300 hover:scale-105 translate-x-16"
            aria-label="Next story"
          >
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Stories Carousel */}
           <div 
             className="overflow-hidden"
             onMouseEnter={handleMouseEnter}
             onMouseLeave={handleMouseLeave}
           >
             <motion.div 
               className="flex transition-transform duration-500 ease-in-out"
               style={{ transform: `translateX(-${currentIndex * 100}%)` }}
             >
               {STORIES.map((story) => (
                 <motion.div
                   key={story.id}
                   className="w-full md:w-1/2 flex-shrink-0 "
                   variants={cardVariants}
                   initial="hidden"
                   animate="visible"
                 >
              {/* Card */}
              <div className="mr-3 relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full overflow-hidden transition-all duration-300 hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/10">
                
                {/* Background Glow */}
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-500/5 to-transparent opacity-50" />
                
                {/* Icon */}
                <div className="relative z-10 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30 backdrop-blur-sm flex items-center justify-center">
                    {getIcon(story.icon)}
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-[22px] font-bold text-white mb-2 leading-tight">
                    {story.title}
                  </h3>
                  <p className="text-blue-400 text-[16px] font-medium mb-4">
                    {story.subtitle}
                  </p>
                  <p className="text-[18px] text-white/80 leading-relaxed mb-8">
                    {story.description}
                  </p>
                </div>

                {/* Metrics */}
                <div className="relative z-10 border-t border-white/10 pt-6">
                  <div className="grid grid-cols-3 gap-4">
                    {story.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-[18px] font-bold text-white mb-1">
                          {metric.value}
                        </div>
                        <div className="text-[14px] text-white/60 leading-tight">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              </div>
            </motion.div>
               ))}
             </motion.div>
           </div>

           {/* Carousel Indicators */}
           <div className="flex justify-center gap-2 mt-8">
             {Array.from({ length: totalPages }).map((_, index) => (
               <button
                 key={index}
                 onClick={() => setCurrentIndex(index)}
                 className={`w-3 h-3 rounded-full transition-all duration-300 ${
                   index === currentIndex 
                     ? 'bg-blue-500 scale-110' 
                     : 'bg-white/30 hover:bg-white/50'
                 }`}
                 aria-label={`Go to page ${index + 1}`}
               />
             ))}
           </div>
        </div>
      </motion.div>
    </section>
  );
}