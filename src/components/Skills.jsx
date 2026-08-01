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
    <section id="skills" className="py-24 relative overflow-hidden bg-[#F8FAFC] dark:bg-[#0B0F17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header (Nikola Radeski Style) */}
        <div className="flex flex-col items-start mb-12">
          <span className="text-xs font-mono font-bold tracking-wider uppercase text-indigo-600 dark:text-indigo-400 mb-3">
            / 02 Tech Stack
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            What I <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">work with</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mt-3 max-w-2xl text-base leading-relaxed">
            Languages, frameworks, and cloud infrastructure tools I rely on daily in production environments.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                activeTab === cat
                  ? 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-indigo-glow'
                  : 'bg-white dark:bg-[#161E2E] text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800'
              }`}
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
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200 dark:border-slate-800">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500"></span>
                    {catGroup.category}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">{catGroup.description}</p>
                </div>
                <span className="text-xs font-semibold font-mono px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
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
                      className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80 hover:border-indigo-500/60 transition-colors flex items-center justify-between gap-3 group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-white dark:bg-[#0B0F17] border border-slate-200 dark:border-slate-800 flex items-center justify-center text-indigo-600 dark:text-cyan-400 group-hover:scale-105 transition-transform shadow-xs">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-bold text-slate-900 dark:text-slate-200">
                          {skill.name}
                        </span>
                      </div>

                      <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded bg-white dark:bg-[#0B0F17] text-indigo-600 dark:text-cyan-300 border border-indigo-200 dark:border-indigo-800/60 shrink-0">
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
