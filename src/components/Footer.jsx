import React from 'react';
import { ArrowUp, Linkedin, Github, Code, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Footer = () => {
  const { name, socials } = portfolioData.personal;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-[#1A1D24] border-t border-[#EFE4E6] dark:border-[#383E4B] py-10 relative z-10 text-sm text-[#2F3640] dark:text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#D98F9D] text-white font-bold flex items-center justify-center text-xs shadow-xs">
              DB
            </div>
            <div>
              <span className="font-bold text-[#222222] dark:text-white tracking-tight">{name} <span className="text-[#D98F9D]">©</span></span>
              <span className="text-xs text-[#2F3640] dark:text-slate-400 block font-medium">Software Engineer • Pune, India</span>
            </div>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            <a 
              href={socials.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-lg bg-[#FAF7F7] dark:bg-[#242831] border border-[#EFE4E6] dark:border-[#383E4B] text-[#2F3640] dark:text-slate-400 hover:text-[#D98F9D] transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a 
              href={socials.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-lg bg-[#FAF7F7] dark:bg-[#242831] border border-[#EFE4E6] dark:border-[#383E4B] text-[#2F3640] dark:text-slate-400 hover:text-[#D98F9D] transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a 
              href={socials.leetcode} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-lg bg-[#FAF7F7] dark:bg-[#242831] border border-[#EFE4E6] dark:border-[#383E4B] text-[#2F3640] dark:text-slate-400 hover:text-[#D98F9D] transition-colors"
              title="LeetCode"
            >
              <Code className="w-4 h-4" />
            </a>
            <a 
              href={socials.email} 
              className="p-2 rounded-lg bg-[#FAF7F7] dark:bg-[#242831] border border-[#EFE4E6] dark:border-[#383E4B] text-[#2F3640] dark:text-slate-400 hover:text-[#D98F9D] transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Copyright & Scroll Top */}
          <div className="flex items-center gap-4">
            <p className="text-xs font-medium text-[#2F3640] dark:text-slate-400">
              Handcrafted by {name} © {new Date().getFullYear()}
            </p>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#FAF7F7] dark:bg-[#242831] border border-[#EFE4E6] dark:border-[#383E4B] text-[#2F3640] dark:text-slate-400 hover:text-[#D98F9D] transition-colors"
              title="Scroll to top"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
