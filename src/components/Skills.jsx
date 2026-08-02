import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, Atom, FileCode, Layout, Palette, Smartphone, 
  Coffee, Server, Workflow, Boxes, Cloud, Container, GitBranch, Zap, 
  Database, Table, BarChart3, Bot
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Icon Map helper
const iconMap = {
  Code2, Atom, FileCode, Layout, Palette, Smartphone,
  Coffee, Server, Workflow, Boxes, Cloud, Container, GitBranch, Zap,
  Database, Table, BarChart3, Bot
};

export const Skills = () => {
  const { skills } = portfolioData;
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', ...skills.map(s => s.category)];

  const filteredSkills = activeTab === 'All' 
    ? skills 
    : skills.filter(s => s.category === activeTab);

  return (
    <section id="skills" className="py-24 relative overflow-hidden" style={{backgroundColor:'var(--bg-main)', color:'var(--text-primary)'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header (Nikola Radeski Style) */}
        <div className="flex flex-col items-start mb-12">
          <span className="text-xs font-mono font-bold tracking-wider uppercase mb-3" style={{color:'var(--accent)'}}>
            / 02 Tech Stack
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight" style={{color:'var(--text-primary)'}}>
            What I <span style={{background:'linear-gradient(135deg, var(--accent), var(--accent-rose))', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text'}}>work with</span>
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed" style={{color:'var(--text-muted)'}}>
            Languages, frameworks, and cloud infrastructure tools I rely on daily in production environments.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200`}
              style={activeTab === cat ? {background:'linear-gradient(135deg, var(--accent), var(--accent-hover))', color:'white', boxShadow:'0 0 15px var(--border-accent)'} : {backgroundColor:'var(--bg-card)', color:'var(--text-secondary)', border:'1px solid var(--border-main)'}}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="space-y-8">
          {filteredSkills.map((catGroup, idx) => (
            <motion.div
              key={catGroup.category}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="tech-card rounded-2xl p-6 sm:p-8"
            >
              <div className="flex items-center justify-between pb-4 mb-6" style={{borderBottom:'1px solid var(--border-main)'}}>
                <div>
                  <h3 className="text-xl font-bold flex items-center gap-2.5" style={{color:'var(--text-primary)'}}>
                    <span className="w-2.5 h-2.5 rounded-full" style={{background:'linear-gradient(135deg, var(--accent), var(--accent-rose))'}}></span>
                    {catGroup.category}
                  </h3>
                  <p className="text-xs mt-1" style={{color:'var(--text-faint)'}}>{catGroup.description}</p>
                </div>
                <span className="text-xs font-semibold font-mono px-3 py-1 rounded-full" style={{backgroundColor:'var(--bg-subtle)', color:'var(--text-secondary)', border:'1px solid var(--border-subtle)'}}>
                  {catGroup.items.length} Technologies
                </span>
              </div>

              {/* Skills Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {catGroup.items.map((skill) => {
                  const IconComponent = iconMap[skill.icon] || Code2;
                  return (
                    <div 
                      key={skill.name}
                      className="p-4 rounded-xl flex items-center justify-between gap-3 group transition-colors"
                      style={{backgroundColor:'var(--bg-subtle)', border:'1px solid var(--border-subtle)'}}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform shadow-xs" style={{backgroundColor:'var(--bg-card)', border:'1px solid var(--border-main)', color:'var(--accent)'}}>
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-bold" style={{color:'var(--text-primary)'}}>
                          {skill.name}
                        </span>
                      </div>

                      <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded shrink-0" style={{backgroundColor:'var(--bg-card)', color:'var(--accent)', border:'1px solid var(--border-accent)'}}>
                        {skill.tag || "Production"}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
