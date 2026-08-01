import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, Award, ShieldCheck, CheckCircle2, 
  Star, Calendar, MapPin
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Education = () => {
  const { education, certifications } = portfolioData;

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-[#F8FAFC] dark:bg-[#0B0F17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header (Nikola Radeski Style) */}
        <div className="flex flex-col items-start mb-16">
          <span className="text-xs font-mono font-bold tracking-wider uppercase text-indigo-600 dark:text-indigo-400 mb-3">
            / 05 Education & Credentials
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Degrees & <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">certifications</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mt-3 max-w-2xl text-base leading-relaxed">
            Computer science academic foundation with distinction and industry-recognized AWS & Java certifications.
          </p>
        </div>

        {/* Dual Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Academic Education */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            <div className="flex items-center gap-2.5 mb-1">
              <div className="w-9 h-9 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Academic Degree</h3>
            </div>

            {education.map((edu, idx) => (
              <div key={idx} className="tech-card rounded-2xl p-7 relative overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 text-xs font-semibold border border-indigo-200 dark:border-indigo-800/80">
                    {edu.badge}
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                    <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    <span>GPA: {edu.gpa}</span>
                  </div>
                </div>

                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{edu.degree}</h4>
                <div className="text-indigo-600 dark:text-cyan-400 font-semibold text-sm mb-4 font-mono">{edu.institution}</div>

                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 dark:text-slate-400 font-medium mb-5 pb-4 border-b border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-indigo-500" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  {edu.highlights.map((hl, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right Column: Certifications */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            <div className="flex items-center gap-2.5 mb-1">
              <div className="w-9 h-9 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Industry Certifications</h3>
            </div>

            <div className="space-y-3.5">
              {certifications.map((cert, idx) => (
                <div 
                  key={idx}
                  className="tech-card rounded-xl p-5 hover:border-indigo-500/60 transition-colors flex items-start justify-between gap-4"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-indigo-600 dark:text-cyan-400 shrink-0 mt-0.5">
                      <ShieldCheck className="w-5 h-5" />
                    </div>

                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug">{cert.title}</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">Issuer: {cert.issuer}</p>
                      
                      {cert.score && (
                        <span className="inline-block mt-2 px-2.5 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-[11px] font-semibold border border-emerald-200 dark:border-emerald-800/80">
                          Score: {cert.score}
                        </span>
                      )}
                    </div>
                  </div>

                  {cert.code && (
                    <span className="px-2.5 py-1 rounded bg-slate-900 text-cyan-300 text-xs font-mono font-semibold shrink-0">
                      {cert.code}
                    </span>
                  )}
                </div>
              ))}
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Education;
