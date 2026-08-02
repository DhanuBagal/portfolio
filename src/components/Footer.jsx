import React from 'react';
import { ArrowUp, Linkedin, Github, Code, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Footer = () => {
  const { name, socials } = portfolioData.personal;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 relative z-10 text-sm" style={{backgroundColor:'var(--bg-card)', borderTop:'1px solid var(--border-main)', color:'var(--text-faint)'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg text-white font-bold flex items-center justify-center text-xs shadow-xs" style={{background:'linear-gradient(135deg, var(--accent), var(--accent-rose))'}}>
              DB
            </div>
            <div>
              <span className="font-bold tracking-tight" style={{color:'var(--text-primary)'}}>{name} <span style={{color:'var(--accent)'}}>©</span></span>
              <span className="text-xs block font-medium" style={{color:'var(--text-faint)'}}>Software Engineer • Pune, India</span>
            </div>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            <a 
              href={socials.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-lg transition-colors"
              style={{backgroundColor:'var(--bg-subtle)', border:'1px solid var(--border-subtle)', color:'var(--text-secondary)'}}
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a 
              href={socials.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-lg transition-colors"
              style={{backgroundColor:'var(--bg-subtle)', border:'1px solid var(--border-subtle)', color:'var(--text-secondary)'}}
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a 
              href={socials.leetcode} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-lg transition-colors"
              style={{backgroundColor:'var(--bg-subtle)', border:'1px solid var(--border-subtle)', color:'var(--text-secondary)'}}
              title="LeetCode"
            >
              <Code className="w-4 h-4" />
            </a>
            <a 
              href={socials.email} 
              className="p-2 rounded-lg transition-colors"
              style={{backgroundColor:'var(--bg-subtle)', border:'1px solid var(--border-subtle)', color:'var(--text-secondary)'}}
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Copyright & Scroll Top */}
          <div className="flex items-center gap-4">
            <p className="text-xs font-medium" style={{color:'var(--text-faint)'}}>
              Handcrafted by {name} © {new Date().getFullYear()}
            </p>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg transition-colors"
              style={{backgroundColor:'var(--bg-subtle)', border:'1px solid var(--border-subtle)', color:'var(--text-secondary)'}}
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
