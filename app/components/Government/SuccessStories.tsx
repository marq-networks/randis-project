"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle2, ArrowLeft, ArrowRight } from "lucide-react";

export default function SuccessStories() {
  const GAP_PX = 24; // must match `gap-6`
  const baseStories = [
    {
      title: "SDBE InSights Platform 2.0",
      subtitle:
        "A modern enterprise solution for managing diverse business vendor relationships and compliance.",
      features: [
        "End-to-end vendor lifecycle and payment tracking",
        "Automated workflows and intelligent search",
        "Real-time analytics and executive dashboards",
        "Secure, cloud-native architecture",
      ],
      outcome:
        "Streamlined vendor management, improved transparency, and measurable operational efficiency.",
    },
    {
      title: "Compliance Reporting Platform (CRP)",
      subtitle:
        "Built for Maryland's Department of Public Safety and Correctional Services to fulfill the Duvall Settlement Agreement.",
      features: [
        "Automated audit tracking for 18+ compliance types",
        "Real-time dashboards and exception alerts",
        "Role-based security and full audit trails",
      ],
      outcome:
        "70% reduction in manual effort, immediate insight into mental-health compliance, and total accountability.",
    },
  ];

  const extraStories = Array.from({ length: 18 }, (_, i) => ({
    title: `Agency Success Story ${i + 3}`,
    subtitle:
      "Modernizing oversight and analytics to improve transparency, accountability, and mission outcomes.",
    features: [
      "Automated compliance checks and exception handling",
      "Unified data pipelines with role-based access",
      "Real-time dashboards for leadership visibility",
    ],
    outcome: "Quantifiable time savings and improved decision confidence across departments.",
  }));

  const stories = [...baseStories, ...extraStories];

  const viewportRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [stepPx, setStepPx] = useState(0);
  const [visibleCount, setVisibleCount] = useState(2);
  const [cardWidthPx, setCardWidthPx] = useState(0);

  // Measure card width + gap to calculate slide distance
  useEffect(() => {
    const measure = () => {
      const row = rowRef.current;
      const viewport = viewportRef.current;
      if (!row || !viewport) return;
      const gap = GAP_PX;
      const isDesktop = window.innerWidth >= 768;
      const visible = isDesktop ? 2 : 1;
      const viewportWidth = viewport.clientWidth;
      const rawWidth = visible === 2 ? (viewportWidth - gap) / 2 : viewportWidth;
      const cardWidth = Math.floor(rawWidth); // avoid overflow from sub-pixel rounding
      setVisibleCount(visible);
      setCardWidthPx(cardWidth);
      setStepPx(cardWidth + gap);
      setIndex((prev) => Math.min(prev, Math.max(0, stories.length - visible)));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [stories.length]);

  const maxIndex = Math.max(0, stories.length - visibleCount);
  const handlePrev = () => setIndex((i) => Math.max(0, i - 1));
  const handleNext = () => setIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <section className="pt-16 pb-6">
      <div className="mx-auto max-w-[1170px] px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-[40px] md:text-[56px] font-extrabold tracking-wide uppercase">GOVERNMENT</h1>
          <p className="mt-2 text-sm md:text-base text-white/80 font-semibold">
            Technology That Strengthens Public Trust
          </p>
          <p className="mt-3 text-white/60 text-sm md:text-base max-w-3xl mx-auto">
            From compliance monitoring to vendor management, our platforms help agencies operate
            with transparency, accountability, and impact.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Arrows */}
          <button
            aria-label="previous"
            onClick={handlePrev}
            disabled={index === 0}
            className={`hidden md:flex absolute -left-16 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full border bg-white/5 ${
              index === 0 ? "border-white/10 opacity-40 cursor-not-allowed" : "border-white/20"
            }`}
          >
            <ArrowLeft className="w-5 h-5 text-white/80" />
          </button>
          <button
            aria-label="next"
            onClick={handleNext}
            disabled={index === maxIndex}
            className={`hidden md:flex absolute -right-16 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full border bg-white/5 ${
              index === maxIndex ? "border-white/10 opacity-40 cursor-not-allowed" : "border-white/20"
            }`}
          >
            <ArrowRight className="w-5 h-5 text-white/80" />
          </button>

          <div ref={viewportRef} className="overflow-hidden">
            <div
              ref={rowRef}
              style={{
                transform: `translateX(-${index * stepPx}px)`,
                transition: "transform 500ms ease",
              }}
              className="flex gap-6"
            >
              {stories.map((story, idx) => (
                <div
                  key={idx}
                  className="rounded-[20px] border border-white/10 overflow-hidden flex-shrink-0"
                  style={{
                    width: `${cardWidthPx}px`,
                    background:
                      "linear-gradient(133.24deg, #0D1832 53.4%, rgba(19, 36, 73, 0) 104.73%)",
                  }}
                >
                  <div className="p-6 md:p-8 space-y-4">
                    <h2 className="text-xl md:text-2xl font-bold">{story.title}</h2>
                    <p className="text-white/70 text-sm md:text-base">{story.subtitle}</p>

                    {/* Features */}
                    <div className="space-y-3 pt-2">
                      {story.features.map((f, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="mt-0.5">
                            <CheckCircle2 className="w-5 h-5 text-green-400" />
                          </div>
                          <p className="text-white/80 text-sm md:text-base">{f}</p>
                        </div>
                      ))}
                    </div>

                    {/* Divider and Outcome */}
                    <div className="mt-6 pt-4 border-t border-white/10">
                      <p className="text-base font-semibold">Outcome</p>
                      <p className="mt-2 text-white/70 text-sm md:text-base">{story.outcome}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}