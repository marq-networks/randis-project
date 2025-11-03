"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);


  const benefits = [
    {
      id: 1,
      title: "Government-Grade Delivery",
      description: "Security, Compliance Framework And Scalable Infrastructure Built From Day One.",
      icon: (
        <svg className="w-16 h-16 text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 2,
      title: "Mission-Driven Ownership",
      description: "Veteran And Woman-Owned With Deep Government Experience And Accountability.",
      icon: (
        <svg className="w-16 h-16 text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    },
    {
      id: 3,
      title: "Full-Stack Execution",
      description: "From User Interface To Operations, We Deliver Complete Technology System Lifecycle.",
      icon: (
        <svg className="w-16 h-16 text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M9 9H15V15H9V9Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M9 1V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M15 1V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M9 21V23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M15 21V23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M1 9H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M21 9H23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M1 15H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M21 15H23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 ">
      <div 
        ref={containerRef}
        className="max-w-[1200px] mx-auto px-6"
      >
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-[42px] md:text-[48px] font-bold text-white mb-4"
          >
            Why Choose Us
          </h2>
        </div>

        <div 
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
        >
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="text-center group hover:scale-105 transition-all duration-300"
            >
              {/* Icon Container */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  {/* Glow effect */}
                  <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-xl group-hover:bg-blue-400/30 transition-all duration-300"></div>
                  {/* Icon background */}
                  <div className="relative w-24 h-24 rounded-full bg-slate-800/50 border border-blue-400/30 flex items-center justify-center backdrop-blur-sm group-hover:bg-slate-700/50 group-hover:border-blue-400/50 transition-all duration-300">
                    {benefit.icon}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-sm mx-auto">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}