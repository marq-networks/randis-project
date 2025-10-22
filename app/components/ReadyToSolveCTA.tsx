import React from 'react';

const ReadyToSolveCTA = () => {
  return (
    <section className=" max-w-[1200px] mx-auto relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
     
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-700/20 to-transparent"></div>
      </div>
      
      <div className="relative max-w-[1200px] mx-auto text-center">
        {/* Main heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          Ready to Solve Your Problem Fast?
        </h2>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
          Book your strategy session and discover how we can transform your business challenges into competitive advantage.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Primary CTA Button */}
          <button className="group relative px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-4xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 flex items-center gap-2">
            <span>Request a demo</span>
            <svg 
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          
          {/* Secondary CTA Button */}
          <button className="group relative px-8 py-4 bg-transparent border-2 border-slate-600 hover:border-slate-500 text-white font-semibold rounded-4xl transition-all duration-300 transform hover:scale-105 hover:bg-slate-800/50 flex items-center gap-2">
            <span>Contact Us</span>
            <svg 
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default ReadyToSolveCTA;