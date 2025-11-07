"use client";

import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PrimaryButton from './PrimaryButton';
import Image from 'next/image';

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

export default function BookStrategyCall() {
  // Refs for GSAP animations
  const containerRef = useRef<HTMLDivElement>(null);
  const leftSectionRef = useRef<HTMLDivElement>(null);
  const rightSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const leftSection = leftSectionRef.current;
    const rightSection = rightSectionRef.current;

    if (!container || !leftSection || !rightSection) return;

    // Set initial states - left section from far left, right section from far right
    gsap.set(leftSection, {
      opacity: 0,
      x: "-100vw", // Start from far left edge of viewport
      force3D: true
    });

    gsap.set(rightSection, {
      opacity: 0,
      x: "100vw", // Start from far right edge of viewport
      force3D: true
    });

    // Create timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        once: true
      }
    });

    // Animate elements with slower, more elegant timing
    tl.to(leftSection, {
      opacity: 1,
      x: 0,
      duration: 1.5, // Slower duration for viewport width distance
      ease: "power2.out"
    })
      .to(rightSection, {
        opacity: 1,
        x: 0,
        duration: 1.5, // Slower duration for viewport width distance
        ease: "power2.out"
      }, "-=1.2"); // Better overlap timing

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    businessName: '',
    help: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage(null);
    setPreviewUrl(null);

    try {
      const payload = {
        name: `${formData.firstName} ${formData.lastName}`.trim(),
        email: formData.email,
        company: formData.businessName,
        message: formData.help,
      };

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err?.error || 'Failed to send message');
      }

      const json = await res.json();
      setStatus('success');
      setPreviewUrl(json?.previewUrl ?? null);
      setFormData({ firstName: '', lastName: '', email: '', businessName: '', help: '' });
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err?.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <section className="relative overflow-hidden" ref={containerRef}>
 <div className="">
          <Image 
            src="/line.png" 
            alt="Enterprise Trust" 
            width={1200} 
            height={5} 
            className="w-full h-auto" 
          />
        </div>
      <div className="max-w-[1200px] pt-20 mx-auto px-6 relative z-10 overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-[1200px] mx-auto">

          {/* Left side - Contact Information */}
          <div className="space-y-8" ref={leftSectionRef}>
            <div>
              <h2 className="text-[30px] md:text-[42px] font-bold text-white mb-6 leading-tight">
                Let's Build the Systems That Move Your Mission Forward
              </h2>
              <p className="text-[18px] text-slate-300 leading-relaxed">
                We partner with agencies and enterprises ready to modernize operations, automate oversight, and act on data with confidence.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center space-x-4 transition-transform duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold">Email us:</p>
                  <p className="text-slate-300">rrutledge@rutledge.associates</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-center space-x-4 transition-transform duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold">Address:</p>
                  <p className="text-slate-300">8350 Bee Ridge Rd, Suite 262, Sarasota, FL 3424</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-4 transition-transform duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3a2 2 0 012 2v2a2 2 0 01-.586 1.414l-1.414 1.414a16 16 0 007.172 7.172l1.414-1.414A2 2 0 0120 15h2a2 2 0 012 2v3a2 2 0 01-2 2h-1C9.163 22 2 14.837 2 6V5a2 2 0 011-0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold">Phone</p>
                  <p className="text-slate-300">305-345-9077</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div
            className="p-8 transition-transform duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(133.24deg, #0D1832 53.4%, rgba(19, 36, 73, 0) 104.73%)',
              borderRadius: '20.0304px'
            }}
            ref={rightSectionRef}
          >
            <h3 className="text-[22px] font-bold text-white mb-8 text-center">Contact Us</h3>

            {status === 'success' && (
              <div className="mb-4 rounded-lg border border-green-500/30 bg-green-500/10 px-4 py-3 text-green-200">
                Thanks — your message has been sent. We’ll be in touch shortly.
                {previewUrl && (
                  <div className="mt-2 text-sm">
                    Preview (dev only): <a className="underline" href={previewUrl} target="_blank" rel="noreferrer">view email</a>
                  </div>
                )}
              </div>
            )}
            {status === 'error' && (
              <div className="mb-4 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-red-200">
                {errorMessage || 'Failed to send message.'}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid md:grid-cols-2 grid-col-1 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-slate-300 mb-2">
                    First Name*
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700/80 border border-slate-500/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all"
                    placeholder="Smith"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-slate-300 mb-2">
                    Last Name*
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700/80 border border-slate-500/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all"
                    placeholder="Dough"
                    required
                  />
                </div>
              </div>

              {/* Email and Business Name Fields */}
              <div className="grid md:grid-cols-2 grid-col-1 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700/80 border border-slate-500/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all"
                    placeholder="abc@gmail.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="businessName" className="block text-sm font-medium text-slate-300 mb-2">
                    Business Name*
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700/80 border border-slate-500/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all"
                    placeholder="Innovations"
                    required
                  />
                </div>
              </div>

              {/* Help Message */}
              <div>
                <label htmlFor="help" className="block text-sm font-medium text-slate-300 mb-2">
                  How Can We Help?*
                </label>
                <textarea
                  id="help"
                  name="help"
                  value={formData.help}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-700/80 border border-slate-500/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all resize-none"
                  placeholder="Type here..."
                  required
                />
              </div>

              {/* Submit Button */}
              <PrimaryButton
                type="submit"
                label={status === 'submitting' ? 'Sending…' : 'Schedule a Free Consultation'}
                disabled={status === 'submitting'}
                className="w-full justify-center md:text-[16px] text-[12px] px-6 py-3" 
              />
            </form>
          </div>
        </div>
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