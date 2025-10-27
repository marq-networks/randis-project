"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function OurApproach() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);
  const approachItemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const leftContent = leftContentRef.current;
    const rightContent = rightContentRef.current;
    const approachItems = approachItemsRef.current;

    if (!section || !title || !leftContent || !rightContent) return;

    // Set initial states
    gsap.set([title, leftContent, rightContent], { opacity: 0, y: 50 });
    gsap.set(approachItems, { opacity: 0, x: 50 });

    // Create timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    tl.to(title, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" })
      .to(leftContent, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.4")
      .to(rightContent, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.6")
      .to(approachItems, { 
        opacity: 1, 
        x: 0, 
        duration: 0.6, 
        stagger: 0.2, 
        ease: "power2.out" 
      }, "-=0.4");

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const approachSteps = [
    {
      title: "Assess & Strategize",
      description: "We don't reimagine your tech to map current systems, processes, and pain points. We develop a comprehensive roadmap aligned with your mission and compliance goals."
    },
    {
      title: "Prototype & Build",
      description: "We deliver secure, working prototypes fast — validating architecture, data integration and analytics capabilities, ensuring early stakeholder buy-in."
    },
    {
      title: "Deploy & Integrate",
      description: "We implement robust hardware platforms within your existing infrastructure, seamlessly deploying systems, automating workflows, and ensuring real-time deployment."
    },
    {
      title: "Train & Sustain",
      description: "We empower your workforce with training, governance frameworks and support mechanisms so your teams remain independently and your solution evolves."
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(147,51,234,0.1),transparent_50%)]" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Futuristic Hand with Globe */}
          <div ref={leftContentRef} className="relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Main Globe Container */}
              <div className="relative w-80 h-80 mx-auto">
                {/* Outer Glow Ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl animate-pulse" />
                
                {/* Main Globe */}
                <div className="absolute inset-8 rounded-full bg-gradient-to-br from-blue-500/30 to-cyan-400/30 backdrop-blur-sm border border-blue-400/30">
                  {/* Inner Globe Pattern */}
                  <div className="absolute inset-4 rounded-full bg-gradient-to-br from-blue-600/40 to-cyan-500/40 overflow-hidden">
                    {/* Network Lines */}
                    <div className="absolute inset-0">
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400/60 to-transparent"
                          style={{
                            top: `${20 + i * 10}%`,
                            transform: `rotate(${i * 22.5}deg)`,
                            transformOrigin: 'center'
                          }}
                        />
                      ))}
                    </div>
                    
                    {/* Connection Nodes */}
                    {[...Array(12)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-2 bg-blue-400 rounded-full animate-pulse"
                        style={{
                          top: `${20 + Math.sin(i * 0.5) * 30}%`,
                          left: `${30 + Math.cos(i * 0.7) * 40}%`,
                          animationDelay: `${i * 0.2}s`
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Floating Icons */}
                {[
                  { icon: "🔒", top: "10%", left: "20%" },
                  { icon: "📊", top: "20%", right: "15%" },
                  { icon: "⚡", bottom: "25%", left: "10%" },
                  { icon: "🛡️", bottom: "15%", right: "20%" },
                  { icon: "🔗", top: "50%", left: "5%" },
                  { icon: "📡", top: "40%", right: "5%" }
                ].map((item, i) => (
                  <div
                    key={i}
                    className="absolute w-8 h-8 bg-blue-500/20 backdrop-blur-sm rounded-lg border border-blue-400/30 flex items-center justify-center text-blue-300 animate-float"
                    style={{
                      ...item,
                      animationDelay: `${i * 0.5}s`
                    }}
                  >
                    {item.icon}
                  </div>
                ))}
              </div>

              {/* Robotic Hand */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8">
                <div className="w-32 h-20 bg-gradient-to-t from-slate-700 to-slate-600 rounded-t-3xl relative">
                  {/* Hand segments */}
                  <div className="absolute top-2 left-4 w-6 h-12 bg-gradient-to-b from-slate-600 to-slate-700 rounded-full" />
                  <div className="absolute top-2 left-11 w-6 h-14 bg-gradient-to-b from-slate-600 to-slate-700 rounded-full" />
                  <div className="absolute top-2 left-18 w-6 h-13 bg-gradient-to-b from-slate-600 to-slate-700 rounded-full" />
                  <div className="absolute top-2 right-4 w-6 h-11 bg-gradient-to-b from-slate-600 to-slate-700 rounded-full" />
                  
                  {/* Thumb */}
                  <div className="absolute top-6 left-1 w-5 h-8 bg-gradient-to-b from-slate-600 to-slate-700 rounded-full transform rotate-45" />
                  
                  {/* Tech details */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-blue-400 rounded-full animate-pulse" />
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-cyan-400 rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Our Approach Content */}
          <div ref={rightContentRef} className="space-y-8">
            <h2 
              ref={titleRef}
              className="text-4xl lg:text-5xl font-bold text-white mb-12"
            >
              Our Approach
            </h2>

            <div className="space-y-6">
              {approachSteps.map((step, index) => (
                <div
                  key={index}
                  ref={el => {
                    if (el) approachItemsRef.current[index] = el;
                  }}
                  className="flex items-start space-x-4 p-6 rounded-xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold group-hover:bg-green-400 transition-colors">
                    ✓
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}