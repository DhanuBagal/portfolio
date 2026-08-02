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
    <section id="education" className="py-24 relative overflow-hidden" style={{backgroundColor:'var(--bg-main)', color:'var(--text-primary)'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header (Nikola Radeski Style) */}
        <div className="flex flex-col items-start mb-16">
          <span className="text-xs font-mono font-bold tracking-wider uppercase mb-3" style={{color:'var(--accent)'}}>
            / 05 Education & Credentials
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight" style={{color:'var(--text-primary)'}}>
            Degrees & <span style={{background:'linear-gradient(135deg, var(--accent), var(--accent-rose))', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text'}}>certifications</span>
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed" style={{color:'var(--text-muted)'}}>
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
              <div className="w-9 h-9 rounded-lg flex items-center justify-center font-bold" style={{backgroundColor:'var(--bg-accent-subtle)', color:'var(--accent)'}}>
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold" style={{color:'var(--text-primary)'}}>Academic Degree</h3>
            </div>

            {education.map((edu, idx) => (
              <div key={idx} className="tech-card rounded-2xl p-7 relative overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{backgroundColor:'var(--bg-accent-subtle)', color:'var(--accent-warm-text)', border:'1px solid var(--border-accent)'}}>
                    {edu.badge}
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                    <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    <span>GPA: {edu.gpa}</span>
                  </div>
                </div>

                <h4 className="text-lg font-bold mb-1" style={{color:'var(--text-primary)'}}>{edu.degree}</h4>
                <div className="font-semibold text-sm mb-4 font-mono" style={{color:'var(--accent)'}}>{edu.institution}</div>

                <div className="flex flex-wrap items-center gap-4 text-xs font-medium mb-5 pb-4" style={{color:'var(--text-faint)', borderBottom:'1px solid var(--border-main)'}}>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" style={{color:'var(--accent)'}} />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" style={{color:'var(--accent)'}} />
                    <span>{edu.location}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  {edu.highlights.map((hl, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm" style={{color:'var(--text-secondary)'}}>
                      <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{color:'var(--accent)'}} />
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
              <div className="w-9 h-9 rounded-lg flex items-center justify-center font-bold" style={{backgroundColor:'var(--bg-accent-subtle)', color:'var(--accent)'}}>
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold" style={{color:'var(--text-primary)'}}>Industry Certifications</h3>
            </div>

            <div className="space-y-3.5">
              {certifications.map((cert, idx) => (
                <div 
                  key={idx}
                  className="tech-card rounded-xl p-5 transition-colors flex items-start justify-between gap-4"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5" style={{backgroundColor:'var(--bg-subtle)', border:'1px solid var(--border-subtle)', color:'var(--accent)'}}>
                      <ShieldCheck className="w-5 h-5" />
                    </div>

                    <div>
                      <h4 className="text-sm sm:text-base font-bold leading-snug" style={{color:'var(--text-primary)'}}>{cert.title}</h4>
                      <p className="text-xs mt-0.5" style={{color:'var(--text-faint)'}}>Issuer: {cert.issuer}</p>
                      
                      {cert.score && (
                        <span className="inline-block mt-2 px-2.5 py-0.5 rounded text-[11px] font-semibold" style={{backgroundColor:'var(--bg-accent-subtle)', color:'var(--accent-warm-text)', border:'1px solid var(--border-accent)'}}>
                          Score: {cert.score}
                        </span>
                      )}
                    </div>
                  </div>

                  {cert.code && (
                    <span className="px-2.5 py-1 rounded text-xs font-mono font-semibold shrink-0" style={{backgroundColor:'var(--pill-dark-bg)', color:'var(--accent)'}}>
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
