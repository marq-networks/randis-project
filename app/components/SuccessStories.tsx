'use client'
import { useEffect, useState } from "react";
import Link from "next/link";

type Story = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  metrics: { label: string; value: string }[];
};

const STORIES: Story[] = [
  {
    id: "vendor-mgmt",
    title: "Vendor Management (SDBE)",
    subtitle: "Service-Disabled Business Enterprise",
    description:
      "Enterprise-grade platform delivered in 90 days, featuring 95% FSM compliance, real-time analytics, and government-grade security. Comprehensive vendor management system with automated compliance workflows, settlement agreement tracking, and multi-stage review processes demonstrating our rapid enterprise delivery capability.",
    metrics: [
      { label: "Prototype to Production", value: "90 Days" },
      { label: "Compliance Rating", value: "95% FSM" },
      { label: "Security Grade", value: "Enterprise" },
    ],
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
  },
  {
    id: "compliance-analytics",
    title: "Compliance Analytics Suite",
    subtitle: "State Agency",
    description:
      "Unified compliance analytics with automated reporting, policy tracking, and interactive dashboards enabling faster audit cycles and operational decisions across departments.",
    metrics: [
      { label: "Project Value", value: "$275K" },
      { label: "Delivery Time", value: "60 Days" },
      { label: "Cloud Platform", value: "Azure" },
    ],
  },
  {
    id: "case-management",
    title: "Case Management Portal",
    subtitle: "County Justice Department",
    description:
      "Digitized case intake, review workflows, and performance monitoring with secure role-based access and audit trails lowering processing time and backlogs.",
    metrics: [
      { label: "Project Value", value: "$180K" },
      { label: "Delivery Time", value: "75 Days" },
      { label: "Cloud Platform", value: "Azure" },
    ],
  },
  {
    id: "grants-management",
    title: "Grants Management System",
    subtitle: "Public Health Department",
    description:
      "Automated application reviews, compliance checks, and reporting dashboards improving transparency and accelerating funding decisions for statewide programs.",
    metrics: [
      { label: "Project Value", value: "$220K" },
      { label: "Delivery Time", value: "50 Days" },
      { label: "Cloud Platform", value: "Azure" },
    ],
  },
  {
    id: "citizen-services",
    title: "Citizen Services Portal",
    subtitle: "City Services",
    description:
      "Modern self-service portal with status tracking, notifications, and accessibility-first UX, reducing call center volume and boosting service satisfaction.",
    metrics: [
      { label: "Project Value", value: "$150K" },
      { label: "Delivery Time", value: "40 Days" },
      { label: "Cloud Platform", value: "Azure" },
    ],
  },
  {
    id: "risk-audit",
    title: "Risk & Audit Dashboard",
    subtitle: "Transportation Authority",
    description:
      "Real-time risk scoring, audit workflow automation, and evidence collection integrated with policy engines to strengthen governance and compliance.",
    metrics: [
      { label: "Project Value", value: "$200K" },
      { label: "Delivery Time", value: "45 Days" },
      { label: "Cloud Platform", value: "Azure" },
    ],
  },
  {
    id: "procurement-intelligence",
    title: "Procurement Intelligence",
    subtitle: "Education Board",
    description:
      "Spend analytics, supplier risk insights, and automated compliance checks enabling data-driven procurement decisions and measurable cost savings.",
    metrics: [
      { label: "Project Value", value: "$175K" },
      { label: "Delivery Time", value: "55 Days" },
      { label: "Cloud Platform", value: "Azure" },
    ],
  },
  {
    id: "incident-response",
    title: "Incident Response Hub",
    subtitle: "Emergency Management",
    description:
      "Centralized incident tracking, escalation workflows, and multi-agency coordination with live analytics improving response time and outcomes.",
    metrics: [
      { label: "Project Value", value: "$160K" },
      { label: "Delivery Time", value: "35 Days" },
      { label: "Cloud Platform", value: "Azure" },
    ],
  },
  {
    id: "trust-framework",
    title: "Data-Sharing Trust Framework",
    subtitle: "Multi-Agency Coalition",
    description:
      "Secure inter-agency data-sharing with consent management, lineage tracking, and policy-driven access controls accelerating collaboration and insights.",
    metrics: [
      { label: "Project Value", value: "$300K" },
      { label: "Delivery Time", value: "90 Days" },
      { label: "Cloud Platform", value: "Azure" },
    ],
  },
];


export default function SuccessStories() {
  const [paused, setPaused] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(1);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const update = () => setItemsPerView(mq.matches ? 2 : 1);
    update();
    if (mq.addEventListener) mq.addEventListener('change', update);
    else mq.addListener(update);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', update);
      else mq.removeListener(update);
    };
  }, []);

  const slides = Array.from(
    { length: Math.ceil(STORIES.length / itemsPerView) },
    (_, i) => STORIES.slice(i * itemsPerView, i * itemsPerView + itemsPerView)
  );

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 4000);
    return () => window.clearInterval(id);
  }, [paused, slides.length]);

  useEffect(() => {
    setCurrent(0);
  }, [itemsPerView]);

  const go = (direction: 'prev' | 'next') => {
    setCurrent((c) =>
      direction === 'next' ? (c + 1) % slides.length : (c - 1 + slides.length) % slides.length
    );
  };

  return (
    <section className="border-t border-white/10">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="flex items-start justify-between">
          <h2 className="text-2xl md:text-3xl font-bold">
            <span className="text-blue-500">Success</span> Stories
          </h2>
          <p className="max-w-xl text-sm text-white/70 hidden md:block">
            Real results for partnerships with organizations across multiple industries.
          </p>
        </div>

        <div className="relative mt-8">
          {/* Left/Right arrows */}
          <button
            type="button"
            className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 ring-1 ring-white/20 backdrop-blur flex items-center justify-center"
            aria-label="Previous"
            onClick={() => go('prev')}
          >
            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 flex items-center justify-center"
            aria-label="Next"
            onClick={() => go('next')}
          >
            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Carousel track */}
          <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} className="overflow-hidden px-1">
            <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${current * 100}%)` }}>
              {slides.map((group, idx) => (
                <div key={idx} className="min-w-full grid md:grid-cols-2 gap-6">
                  {group.map((s) => (
                    <div
                      key={s.id}
                      className="relative rounded-[20px] min-h-[260px] md:min-h-[320px] bg-[linear-gradient(133.24deg,#0D1832_53.4%,rgba(19,36,73,0)_104.73%)] ring-1 ring-white/15 shadow-xl shadow-black/30 overflow-hidden"
                    >
                      {/* top accent line */}
                      <div className="h-1 bg-gradient-to-r from-white/25 to-transparent" />
                      <div className="h-1 bg-gradient-to-r from-white/25 to-transparent" />
                      {/* subtle top-left glow */}
                   <div className="absolute top-0 left-0 w-[240px] h-[160px] bg-[radial-gradient(120px_80px_at_40px_40px,rgba(255,255,255,0.16),transparent)] opacity-40 pointer-events-none" />

                      <div className="p-6">
                        {/* icon + heading row */}
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-[12px] bg-white/10 ring-1 ring-white/25 backdrop-blur-sm flex items-center justify-center shadow-md shadow-black/30">
                            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                           <div>
                            <div className="text-base md:text-lg font-semibold text-white">{s.title}</div>
                            <div className="text-[12px] text-white/70">{s.subtitle}</div>
                           </div>
                        </div>

                        <p className="mt-3 text-[13px] leading-relaxed text-white/75">
                          {s.description}
                        </p>

                        {/* dashed divider */}
                       <div className="mt-4 border-t border-dashed border-white/15" />
                      </div>

                      {/* bottom metrics bar */}
                      <div className="px-6 pb-6 mt-auto">
                        <div className="grid grid-cols-3 gap-4 p-3">
                          {s.metrics.map((m) => (
                            <div key={m.label}>
                              <div className="text-sm md:text-base font-semibold text-white">{m.value}</div>
                              <div className="text-[11px] text-white/55">{m.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}