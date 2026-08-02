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
    <section id="experience" className="py-24 relative overflow-hidden" style={{backgroundColor:'var(--bg-main)', color:'var(--text-primary)'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header (Nikola Radeski Style) */}
        <div className="flex flex-col items-start mb-16">
          <span className="text-xs font-mono font-bold tracking-wider uppercase mb-3" style={{color:'var(--accent)'}}>
            / 03 Experience
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight" style={{color:'var(--text-primary)'}}>
            Work <span style={{background:'linear-gradient(135deg, var(--accent), var(--accent-rose))', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text'}}>experience</span>
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed" style={{color:'var(--text-muted)'}}>
            My professional trajectory building production software features, microservices, and client solutions.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 transform -translate-x-1/2 hidden sm:block" style={{backgroundColor:'var(--border-subtle)'}} />

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
                  <div className="absolute left-4 sm:left-1/2 top-6 w-8 h-8 rounded-full flex items-center justify-center transform -translate-x-1/2 z-20" style={{backgroundColor:'var(--bg-card)', border:'2px solid #D4933A', boxShadow:'0 0 15px var(--border-accent)'}}>
                    <Briefcase className="w-4 h-4" style={{color:'var(--accent)'}} />
                  </div>

                  {/* Experience Card Box */}
                  <div className={`sm:w-1/2 ${isEven ? 'sm:pr-10 sm:ml-0' : 'sm:pl-10 sm:ml-auto'}`}>
                    <div className="tech-card rounded-2xl p-6 sm:p-7">
                      
                      {/* Promotion Banner */}
                      {item.isPromoted && (
                        <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold" style={{backgroundColor:'var(--bg-accent-subtle)', border:'1px solid var(--border-accent)', color:'var(--accent-warm-text)'}}>
                          <span>🎉 {item.promotionText}</span>
                        </div>
                      )}

                      {/* Role & Company Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-2">
                        <h3 className="text-xl font-bold" style={{color:'var(--text-primary)'}}>
                          {item.role}
                        </h3>
                        <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded text-white shrink-0 w-fit" style={{backgroundColor:'var(--pill-dark-bg)'}}>
                          {item.type}
                        </span>
                      </div>

                      <div className="font-bold text-sm mb-3 font-mono" style={{color:'var(--accent)'}}>
                        {item.company}
                      </div>

                      {/* Info Pills */}
                      <div className="flex flex-wrap items-center gap-4 text-xs font-medium mb-5 pb-4" style={{color:'var(--text-faint)', borderBottom:'1px solid var(--border-main)'}}>
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" style={{color:'var(--accent)'}} />
                          <span>{item.period}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5" style={{color:'var(--accent)'}} />
                          <span>{item.location}</span>
                        </div>
                      </div>

                      {/* Expandable Highlights List */}
                      <div className="space-y-3">
                          {item.highlights.slice(0, isExpanded ? item.highlights.length : 2).map((hl, hIdx) => (
                            <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed" style={{color:'var(--text-secondary)'}}>
                              <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{color:'var(--accent)'}} />
                              <div>
                                <strong className="font-bold" style={{color:'var(--text-primary)'}}>{hl.title}: </strong>
                                <span>{hl.detail}</span>
                              </div>
                            </div>
                          ))}
                      </div>

                      {/* Toggle Expand Button */}
                        {item.highlights.length > 2 && (
                          <button
                            onClick={() => toggleExpand(item.id)}
                            className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold hover:underline pt-1"
                            style={{color:'var(--accent)'}}
                          >
                            <span>{isExpanded ? 'Show Less' : `View All (${item.highlights.length}) Details`}</span>
                            {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                          </button>
                        )}

                      {/* Tech Stack Tags */}
                      <div className="mt-5 pt-4 flex flex-wrap gap-1.5" style={{borderTop:'1px solid var(--border-main)'}}>
                        {item.techStack.map((tech) => (
                          <span key={tech} className="px-2.5 py-0.5 rounded text-[11px] font-mono font-medium" style={{backgroundColor:'var(--bg-subtle)', color:'var(--text-secondary)', border:'1px solid var(--border-subtle)'}}>
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
