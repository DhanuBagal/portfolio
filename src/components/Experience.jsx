import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, Calendar, MapPin, CheckCircle2, ChevronDown, ChevronUp
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Experience = () => {
  const { experience } = portfolioData;
  const [expandedId, setExpandedId] = useState(experience[0].id);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#FAF7F7] dark:bg-[#1A1D24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header (Nikola Radeski Style) */}
        <div className="flex flex-col items-start mb-16">
          <span className="text-xs font-bold tracking-wider uppercase text-[#D98F9D] dark:text-[#D98F9D] mb-3">
            / 03 Experience
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#222222] dark:text-white tracking-tight leading-tight">
            Work <span className="text-[#D98F9D]">experience</span>
          </h2>
          <p className="text-[#2F3640] dark:text-slate-300 mt-3 max-w-2xl text-base leading-relaxed">
            My professional trajectory building production software features, microservices, and client solutions.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-[#EFE4E6] dark:bg-[#383E4B] transform -translate-x-1/2 hidden sm:block" />

          <div className="space-y-10">
            {experience.map((item, idx) => {
              const isExpanded = expandedId === item.id;
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="relative"
                >
                  {/* Timeline Node */}
                  <div className="absolute left-4 sm:left-1/2 top-6 w-8 h-8 rounded-full bg-white dark:bg-[#242831] border-2 border-[#D98F9D] flex items-center justify-center transform -translate-x-1/2 z-20 shadow-xs">
                    <Briefcase className="w-4 h-4 text-[#D98F9D]" />
                  </div>

                  {/* Experience Card Box */}
                  <div className={`sm:w-1/2 ${isEven ? 'sm:pr-10 sm:ml-0' : 'sm:pl-10 sm:ml-auto'}`}>
                    <div className="rose-card rounded-2xl p-6 sm:p-7">
                      
                      {/* Promotion Banner */}
                      {item.isPromoted && (
                        <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F2D5DA] dark:bg-[#3F2B32] border border-[#E4B8C1] dark:border-[#7F3643] text-[#8B3B4A] dark:text-[#F2D5DA] text-xs font-semibold">
                          <span>🎉 {item.promotionText}</span>
                        </div>
                      )}

                      {/* Role & Company Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-2">
                        <h3 className="text-xl font-bold text-[#222222] dark:text-white">
                          {item.role}
                        </h3>
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-[#2F3640] text-white shrink-0 w-fit">
                          {item.type}
                        </span>
                      </div>

                      <div className="text-[#D98F9D] font-bold text-sm mb-3">
                        {item.company}
                      </div>

                      {/* Info Pills */}
                      <div className="flex flex-wrap items-center gap-4 text-xs text-[#2F3640] dark:text-slate-400 font-medium mb-5 pb-4 border-b border-[#EFE4E6] dark:border-[#383E4B]">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-[#D98F9D]" />
                          <span>{item.period}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-[#D98F9D]" />
                          <span>{item.location}</span>
                        </div>
                      </div>

                      {/* Expandable Highlights List */}
                      <div className="space-y-3">
                        {item.highlights.slice(0, isExpanded ? item.highlights.length : 2).map((hl, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#2F3640] dark:text-slate-300 leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-[#D98F9D] shrink-0 mt-0.5" />
                            <div>
                              <strong className="text-[#222222] dark:text-white font-bold">{hl.title}: </strong>
                              <span>{hl.detail}</span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Toggle Expand Button */}
                      {item.highlights.length > 2 && (
                        <button
                          onClick={() => toggleExpand(item.id)}
                          className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#D98F9D] hover:underline pt-1"
                        >
                          <span>{isExpanded ? 'Show Less' : `View All (${item.highlights.length}) Details`}</span>
                          {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                        </button>
                      )}

                      {/* Tech Stack Tags */}
                      <div className="mt-5 pt-4 border-t border-[#EFE4E6] dark:border-[#383E4B] flex flex-wrap gap-1.5">
                        {item.techStack.map((tech) => (
                          <span key={tech} className="px-2.5 py-0.5 rounded bg-[#FAF7F7] dark:bg-[#2A2F3A] text-[#222222] dark:text-slate-300 text-[11px] font-medium border border-[#EFE4E6] dark:border-[#383E4B]">
                            {tech}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;
