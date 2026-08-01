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
    <section id="skills" className="py-24 relative overflow-hidden bg-[#FAF7F7] dark:bg-[#1A1D24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header (Nikola Radeski Style) */}
        <div className="flex flex-col items-start mb-12">
          <span className="text-xs font-bold tracking-wider uppercase text-[#D98F9D] dark:text-[#D98F9D] mb-3">
            / 02 Tech Stack
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#222222] dark:text-white tracking-tight leading-tight">
            What I <span className="text-[#D98F9D]">work with</span>
          </h2>
          <p className="text-[#2F3640] dark:text-slate-300 mt-3 max-w-2xl text-base leading-relaxed">
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
                  ? 'bg-[#D98F9D] text-white shadow-xs'
                  : 'bg-white dark:bg-[#242831] text-[#2F3640] dark:text-slate-400 hover:text-[#222222] dark:hover:text-white border border-[#EFE4E6] dark:border-[#383E4B]'
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
              className="rose-card rounded-2xl p-6 sm:p-8"
            >
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#EFE4E6] dark:border-[#383E4B]">
                <div>
                  <h3 className="text-xl font-bold text-[#222222] dark:text-white flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#D98F9D]"></span>
                    {catGroup.category}
                  </h3>
                  <p className="text-xs text-[#2F3640] dark:text-slate-400 mt-1">{catGroup.description}</p>
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#FAF7F7] dark:bg-[#2A2F3A] text-[#2F3640] dark:text-slate-300 border border-[#EFE4E6] dark:border-[#383E4B]">
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
                      className="p-4 rounded-xl bg-[#FAF7F7] dark:bg-[#2A2F3A] border border-[#EFE4E6] dark:border-[#383E4B] hover:border-[#D98F9D] transition-colors flex items-center justify-between gap-3 group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-white dark:bg-[#1A1D24] border border-[#EFE4E6] dark:border-[#383E4B] flex items-center justify-center text-[#D98F9D] group-hover:scale-105 transition-transform shadow-xs">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-bold text-[#222222] dark:text-slate-200">
                          {skill.name}
                        </span>
                      </div>

                      <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded bg-white dark:bg-[#1A1D24] text-[#2F3640] dark:text-slate-300 border border-[#EFE4E6] dark:border-[#383E4B] shrink-0">
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
