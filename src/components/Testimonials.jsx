import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageSquare, ShieldCheck, Quote } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Testimonials = () => {
  const testimonials = portfolioData.testimonials || [];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-[#FAF7F7] dark:bg-[#1A1D24]">
      {/* Background Glow Accent */}
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#F2D5DA]/30 dark:bg-[#3F2B32]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Nikola Radeski Style) */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold tracking-wider uppercase text-[#D98F9D] dark:text-[#D98F9D]">
              / Community Trust – Testimonials
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#222222] dark:text-white tracking-tight leading-tight mb-4">
            What <span className="text-[#D98F9D]">people</span> say
          </h2>

          <p className="text-base sm:text-lg text-[#2F3640] dark:text-slate-300 max-w-2xl leading-relaxed">
            A few thoughts from colleagues, managers, and partners who have experienced the value of building software together.
          </p>

          {/* Rating Summary Bar */}
          <div className="mt-6 flex flex-wrap items-center gap-4 p-3.5 px-5 rounded-2xl bg-white dark:bg-[#242831] border border-[#EFE4E6] dark:border-[#383E4B] shadow-xs">
            <div className="flex items-center gap-1 text-[#EF8700]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current text-[#EF8700]" />
              ))}
            </div>
            <span className="text-xs sm:text-sm font-bold text-[#222222] dark:text-slate-100">
              5.0 / 5.0 Average Rating
            </span>
            <span className="text-xs text-[#8B93A0] dark:text-slate-500">•</span>
            <span className="text-xs sm:text-sm text-[#2F3640] dark:text-slate-300 font-medium flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#D98F9D]" />
              Verified Team & Client Endorsements
            </span>
          </div>
        </div>

        {/* 3-Column / Masonry Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="rose-card rose-card-hover rounded-2xl p-7 flex flex-col justify-between relative group"
            >
              <div>
                {/* Rating Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current text-[#EF8700]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#F2D5DA] dark:text-[#3F2B32] group-hover:text-[#D98F9D] transition-colors" />
                </div>

                {/* Quote Text */}
                <p className="text-sm text-[#222222] dark:text-slate-200 leading-relaxed font-normal mb-6 italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Inner Card Separator & Author Info */}
              <div>
                <div className="w-full h-px bg-[#EFE4E6] dark:bg-[#383E4B] my-5" />

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#F2D5DA] dark:bg-[#3F2B32] text-[#8B3B4A] dark:text-[#F2D5DA] font-bold text-xs flex items-center justify-center border border-[#E4B8C1] dark:border-[#7F3643] shrink-0">
                      {item.avatarInitials}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#222222] dark:text-white leading-tight">
                        {item.author}
                      </h4>
                      <p className="text-xs text-[#2F3640] dark:text-slate-400 font-medium mt-0.5">
                        {item.role}
                      </p>
                      <p className="text-[11px] text-[#8B3B4A] dark:text-[#F2D5DA]">
                        {item.company}
                      </p>
                    </div>
                  </div>

                  <span className="text-[11px] font-medium text-[#8B93A0] dark:text-slate-500 shrink-0">
                    {item.date}
                  </span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
