import Image from "next/image";

/* eslint-disable @next/next/no-html-link-for-pages */
export default function Footer() {
  return (
    <footer className="">
      <div className="max-w-[1200px] mx-auto px-6 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Branding */}
          <div className="space-y-4 animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
            <h3 className="text-xl font-bold text-white">
              Rutledge &<br />
              Associates
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Transforming businesses through strategic consulting and innovative solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 animate-[fadeInUp_0.8s_ease-out_0.3s_both]">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  About Us
                </a>
              </li>
              <li>
                <a href="/capabilities" className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Our Services
                </a>
              </li>
              <li>
                <a href="/approach" className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Commercial Solutions
                </a>
              </li>
              <li>
                <a href="/expect" className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Govt. Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="space-y-4 animate-[fadeInUp_0.8s_ease-out_0.4s_both]">
            <h4 className="text-lg font-semibold text-white">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Visionary Positioning
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Enterprise Scaling
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Discovery Sprints
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="space-y-4 animate-[fadeInUp_0.8s_ease-out_0.5s_both]">
            <h4 className="text-lg font-semibold text-white">Contact us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-slate-400 text-sm">503-3456-6891</span>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="text-slate-400 text-sm">
                  <div>Philomath, Oregon 97370,</div>
                  <div>United States</div>
                </div>
              </div>
            </div>
          </div>
        </div>
</div>
        {/* Copyright */}

          <div className="">
          <Image
            src="/line.png"
            alt="Enterprise Trust"
            width={1200}
            height={2}
            className="w-full h-[50px]"
          />
        </div>
        <div className="py-8 animate-[fadeInUp_0.8s_ease-out_0.6s_both]">
          <p className="text-slate-500 text-sm text-center">
            © 2024 Rutledge & Associates. All rights reserved.
          </p>
        </div>
    
    </footer>
  );
}