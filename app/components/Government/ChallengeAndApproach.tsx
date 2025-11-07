"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import TransformChallenge from "../About/TransformChallenge";
import CTAButton from "../Shared/CTAButton";

gsap.registerPlugin(ScrollTrigger);

export default function ChallengeAndApproach() {
  const containerRef = useRef<HTMLDivElement>(null);
  const challengeTitleRef = useRef<HTMLHeadingElement>(null);
  const challengeContentRef = useRef<HTMLDivElement>(null);
  const challengeImageRef = useRef<HTMLDivElement>(null);
  const approachTitleRef = useRef<HTMLHeadingElement>(null);
  const approachContentRef = useRef<HTMLDivElement>(null);
  const approachImageRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);



  const challenges = [
    {
      id: 1,
      title: "When Operations Slow Down Under Complexity",
      description:
        "Disconnected tools and manual workarounds cost time and focus. We unify workflows, automate processes, and design systems that move as fast as your mission."
    },
    {
      id: 2,
      title: "When Compliance Drains Capacity",
      description:
        "Manual audits and spreadsheets keep teams stuck in review mode. We build automated compliance engines that track, validate, and report in real time."
    },
    {
      id: 3,
      title: "When Visibility Is Lost in Silos",
      description:
        "Data hidden in different systems leads to blind spots. We create dashboards and analytics environments that make insight instant."
    },
    {
      id: 4,
      title: "When Technology Doesn't Fit People",
      description:
        "Systems that confuse users never gain traction. We design intuitive, accessible interfaces that match the way people work."
    },
    {
      id: 5,
      title: "When Information Doesn't Inspire Action",
      description:
        "We transform raw data into visual intelligence that tells a story and guides next steps."
    }
  ];

  const approachSteps = [
    {
      id: 1,
      title: "Outcome",
      description: "Faster operations, cleaner data, and effortless coordination."
    },
    {
      id: 2,
      title: "Outcome",
      description: "Continuous readiness, lower risk, and restored confidence."
    },
    {
      id: 3,
      title: "Outcome",
      description: "Clear decisions, proactive action, measurable progress."
    },
    {
      id: 4,
      title: "Outcome",
      description: "Higher adoption, fewer errors, lasting change."
    },
    {
      id: 5,
      title: "Outcome",
      description: "Foresight instead of hindsight."
    },
    {
      id: 6,
      title: "Outcome",
      description: "Higher adoption, fewer errors, lasting change."
    }
  ];

  const processSteps = [
    { id: 1, title: "Discover", image: "/GovSolutions/01.png" },
    { id: 2, title: "Design", image: "/GovSolutions/02.png" },
    { id: 3, title: "Build", image: "/GovSolutions/03.png" },
    { id: 4, title: "Evolve", image: "/GovSolutions/04.png" }
  ];

  return (
    <div ref={containerRef}>
      <div className="">
        <Image
          src="/line.png"
          alt="Enterprise Trust"
          width={1200}
          height={200}
          className="w-full h-auto"
        />
      </div>
      {/* Combined Card Container using provided CSS */}
      <section className="pt-20">
        <div className="mx-auto max-w-[1170px] px-6">
          <div
            className="rounded-[20.0304px] border border-white/10 overflow-hidden"
            style={{
              background:
                "linear-gradient(133.24deg, #0D1832 53.4%, rgba(19, 36, 73, 0) 104.73%)",
            }}
          >
            {/* First Row: The Challenge */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch p-6 lg:p-8">
              {/* Left Content */}
              <div className="space-y-8">
                <h2
                  ref={challengeTitleRef}
                  className="text-[42px] md:text-[48px] font-bold text-white mb-8"
                >
                  The Challenge
                </h2>

                <div
                  ref={challengeContentRef}
                  className="space-y-6"
                >
                  {challenges.map((challenge) => (
                    <div
                      key={challenge.id}
                      className="flex gap-4 group"
                    >
                      {/* Red X Icon */}
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-6 h-6 rounded-full bg-red-500/20 border border-red-400/40 flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-red-400"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M18 6L6 18M6 6L18 18"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-300 transition-colors duration-300">
                          {challenge.title}
                        </h3>
                        <p className="text-white/70 text-base leading-relaxed">
                          {challenge.description}
                        </p>

                      </div>
                    </div>
                  ))}
                </div>
                <div
                  ref={buttonRef}
                  className="mt-8"
                >
                  <CTAButton
                    href="https://cal.com/rutledge-associates"
                    className="inline-flex  rounded-4xl items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4  font-medium text-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/25 group"
                  >
                    Get to Know Strategy Call
                    <svg
                      className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </CTAButton>
                </div>
              </div>

              {/* Right Image */}
              <div
                ref={challengeImageRef}
                className="relative h-full"
              >
                <div className="relative h-full min-h-[280px] sm:min-h-[340px] lg:min-h-[420px] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-900/30 to-slate-900/50 border border-blue-400/20 backdrop-blur-sm">
                  <div className="h-full relative bg-gradient-to-br from-blue-900/40 via-slate-800/60 to-slate-900/80 p-8">
                    <Image
                      src="/solution/hero/hero.png"
                      alt="Government Solutions Hero Background"
                      fill
                      className="object-cover h-full"
                    />
                  </div>
                </div>
              </div>
            </div>


            {/* Divider spacing between rows */}
            <TransformChallenge />

            {/* Second Row: Our Approach */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch p-6 lg:p-8">
              {/* Left Image */}
              <div
                ref={approachImageRef}
                className="relative h-full"
              >
                <div className="relative h-full min-h-[280px] sm:min-h-[340px] lg:min-h-[420px] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-900/30 to-slate-900/50 border border-blue-400/20 backdrop-blur-sm">
                  <div className="h-full relative bg-gradient-to-br from-blue-900/40 via-slate-800/60 to-slate-900/80 p-8">
                    <Image
                      src="/ourSolutions/approach.png"
                      alt="Our Approach Background"
                      fill
                      className="object-cover h-full"
                    />
                  </div>
                </div>
              </div>

              {/* Right Content */}
              <div className="space-y-8">
                <h2
                  ref={approachTitleRef}
                  className="text-[42px] md:text-[48px] font-bold text-white mb-8"
                >
                  Our Approach
                </h2>

                <div
                  ref={approachContentRef}
                  className="space-y-6"
                >
                  {approachSteps.map((step) => (
                    <div
                      key={step.id}
                      className="flex gap-4 group"
                    >
                      {/* Green Check Icon */}
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-6 h-6 rounded-full bg-green-500/20 border border-green-400/40 flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-green-400"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M20 6L9 17L4 12"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-300 transition-colors duration-300">
                          {step.title}
                        </h3>
                        <p className="text-white/70 text-base leading-relaxed">
                          {step.description}
                        </p>

                      </div>

                    </div>
                  ))}
                </div>
                <div
                  ref={buttonRef}
                  className="mt-8"
                >
                  <CTAButton
                    href="https://cal.com/rutledge-associates"
                    className="inline-flex  rounded-4xl items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4  font-medium text-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/25 group"
                  >
                    Get to Know Strategy Call
                    <svg
                      className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </CTAButton>
                </div>
              </div>
            </div>
            <div className="mx-auto max-w-[1170px] px-6">
              <div
                ref={processRef}
                className=" overflow-hidden p-6 md:p-8"

              >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 items-end">
                  {processSteps.map((step) => (
                    <div key={step.id} className="text-center">
                      <div className="relative mx-auto w-[140px] h-[90px] md:w-[180px] md:h-[110px]">
                        <Image
                          src={step.image}
                          alt={`${step.title} number`}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <p className="mt-2 text-base md:text-lg font-semibold text-white">
                        {step.title}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="mt-6 max-w-[800px] mx-auto text-center text-white/70 text-sm md:text-base leading-relaxed">
                  Each engagement begins with understanding the human problem, not the technical one. We collaborate, prototype,
                  and implement solutions that keep momentum long after go-live.
                </p>
              </div>
            </div>
          </div>
        </div>


      </section>

      {/* Process Section: 01 Discover, 02 Design, 03 Build, 04 Evolve */}
      <section className=" pb-16">

      </section>
    </div>
  );
}