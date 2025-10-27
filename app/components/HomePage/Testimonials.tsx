/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    [
      {
        name: "Michael T.",
        role: "Technology Director",
        company: "TechCorp",
        content: "Rudolph & Associates helped us turn abstract ideas into real physical solutions. Their mix of engineering prowess and design.",
        avatar: "MT"
      },
      {
        name: "Mark B.",
        role: "Operations Manager", 
        company: "InnovateCorp",
        content: "Rudolph & Associates helped us turn abstract ideas into real physical solutions. Their mix of engineering prowess and design.",
        avatar: "MB"
      },
      {
        name: "Ryan M.",
        role: "Product Development Manager",
        company: "FutureTech",
        content: "Working with Rudolph & Associates has been transformational for our business. From the initial concept to final product delivery, their team demonstrated exceptional expertise, insight, and creativity in developing solutions that transformed our business.",
        avatar: "RM"
      }
    ],
    // Column 2 (moves down)
    [
      {
        name: "Sarah K.",
        role: "Innovation Lead",
        company: "NextGen Solutions",
        content: "Rudolph & Associates helped us turn abstract ideas into real physical solutions. Their mix of engineering prowess and design.",
        avatar: "SK"
      },
      {
        name: "Ryan M.",
        role: "Senior Product Manager",
        company: "TechFlow",
        content: "Working with Rudolph & Associates has been transformational for our business. From the initial concept to final product delivery, their team demonstrated exceptional expertise, insight, and creativity in developing solutions that transformed our business.",
        avatar: "RM"
      }
    ],
    // Column 3 (moves up)
    [
      {
        name: "David R.",
        role: "Chief Technology Officer",
        company: "InnovateNow",
        content: "Rudolph & Associates helped us turn abstract ideas into real physical solutions. Their mix of engineering prowess and design.",
        avatar: "DR"
      },
      {
        name: "Michael T.",
        role: "Engineering Director",
        company: "BuildTech",
        content: "Rudolph & Associates helped us turn abstract ideas into real physical solutions. Their mix of engineering prowess and design.",
        avatar: "MT"
      },
      {
        name: "Mark S.",
        role: "Product Manager",
        company: "NextWave",
        content: "Working with Rudolph & Associates has been transformational for our business. From the initial concept to final product delivery, their team demonstrated exceptional expertise, insight, and creativity in developing solutions that transformed our business.",
        avatar: "MS"
      }
    ]
  ];

  const TestimonialCard = ({ testimonial }: { testimonial: any }) => (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 mb-6 hover:bg-slate-800/70 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
          {testimonial.avatar}
        </div>
        <div>
          <h4 className="text-white font-semibold text-[22px]">{testimonial.name}</h4>
          <p className="text-slate-400 text-sm">{testimonial.role}</p>
          <p className="text-slate-500 text-xs">{testimonial.company}</p>
        </div>
      </div>
      <p className="text-slate-300 leading-relaxed">{testimonial.content}</p>
    </div>
  );

  return (
    <section className="max-w-[1200px] mx-auto relative py-20 px-[10px] sm:px-6 lg:px-8 overflow-hidden">
   
      
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
          <h2 className="text-[42px] md:text-[48px] font-bold text-white mb-4">
            Testimonials
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative h-[600px] overflow-hidden">
          {/* Column 1 - Moves Up */}
          <div className="space-y-6">
            <div className="animate-slideUp">
              {testimonials[0].concat(testimonials[0]).map((testimonial, index) => (
                <TestimonialCard key={`col1-${index}`} testimonial={testimonial} />
              ))}
            </div>
          </div>

          {/* Column 2 - Moves Down */}
          <div className="space-y-6">
            <div className="animate-slideDown">
              {testimonials[1].concat(testimonials[1]).map((testimonial, index) => (
                <TestimonialCard key={`col2-${index}`} testimonial={testimonial} />
              ))}
            </div>
          </div>

          {/* Column 3 - Moves Up */}
          <div className="space-y-6">
            <div className="animate-slideUpSlow">
              {testimonials[2].concat(testimonials[2]).map((testimonial, index) => (
                <TestimonialCard key={`col3-${index}`} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default Testimonials;