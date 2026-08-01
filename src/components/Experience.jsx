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
    <section id="experience" className="py-24 relative overflow-hidden bg-[#F8FAFC] dark:bg-[#0B0F17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header (Nikola Radeski Style) */}
        <div className="flex flex-col items-start mb-16">
          <span className="text-xs font-mono font-bold tracking-wider uppercase text-indigo-600 dark:text-indigo-400 mb-3">
            / 03 Experience
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Work <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">experience</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mt-3 max-w-2xl text-base leading-relaxed">
            My professional trajectory building production software features, microservices, and client solutions.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 transform -translate-x-1/2 hidden sm:block" />

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
                  <div className="absolute left-4 sm:left-1/2 top-6 w-8 h-8 rounded-full bg-white dark:bg-[#161E2E] border-2 border-indigo-500 flex items-center justify-center transform -translate-x-1/2 z-20 shadow-indigo-glow">
                    <Briefcase className="w-4 h-4 text-indigo-600 dark:text-cyan-400" />
                  </div>

                  {/* Experience Card Box */}
                  <div className={`sm:w-1/2 ${isEven ? 'sm:pr-10 sm:ml-0' : 'sm:pl-10 sm:ml-auto'}`}>
                    <div className="tech-card rounded-2xl p-6 sm:p-7">
                      
                      {/* Promotion Banner */}
                      {item.isPromoted && (
                        <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 text-emerald-700 dark:text-emerald-300 text-xs font-semibold">
                          <span>🎉 {item.promotionText}</span>
                        </div>
                      )}

                      {/* Role & Company Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-2">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                          {item.role}
                        </h3>
                        <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded bg-slate-900 text-white shrink-0 w-fit">
                          {item.type}
                        </span>
                      </div>

                      <div className="text-indigo-600 dark:text-cyan-400 font-bold text-sm mb-3 font-mono">
                        {item.company}
                      </div>

                      {/* Info Pills */}
                      <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 dark:text-slate-400 font-medium mb-5 pb-4 border-b border-slate-200 dark:border-slate-800">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                          <span>{item.period}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-indigo-500" />
                          <span>{item.location}</span>
                        </div>
                      </div>

                      {/* Expandable Highlights List */}
                      <div className="space-y-3">
                        {item.highlights.slice(0, isExpanded ? item.highlights.length : 2).map((hl, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                            <div>
                              <strong className="text-slate-900 dark:text-white font-bold">{hl.title}: </strong>
                              <span>{hl.detail}</span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Toggle Expand Button */}
                      {item.highlights.length > 2 && (
                        <button
                          onClick={() => toggleExpand(item.id)}
                          className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-cyan-400 hover:underline pt-1"
                        >
                          <span>{isExpanded ? 'Show Less' : `View All (${item.highlights.length}) Details`}</span>
                          {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                        </button>
                      )}

                      {/* Tech Stack Tags */}
                      <div className="mt-5 pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-1.5">
                        {item.techStack.map((tech) => (
                          <span key={tech} className="px-2.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-300 text-[11px] font-mono font-medium border border-slate-200 dark:border-slate-700/80">
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
