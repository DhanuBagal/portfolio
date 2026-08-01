import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, Download, Copy, Check, Clock } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Navbar = ({ darkMode, setDarkMode, onCopyEmail }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [copied, setCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    // { name: 'Reviews', href: '#testimonials' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  // Update live clock for Pune time (IST, GMT+5:30)
  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      };
      const timeStr = new Intl.DateTimeFormat('en-US', options).format(new Date());
      setCurrentTime(timeStr);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyEmailClick = () => {
    const email = portfolioData.personal.email;
    navigator.clipboard.writeText(email);
    setCopied(true);
    if (onCopyEmail) onCopyEmail(email);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadResume = () => {
    alert("Downloading Dhanashree Bagal's Resume...");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-3 sm:py-4 px-3 sm:px-6 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Brand & Live Time Signature */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 to-cyan-500 text-white font-extrabold flex items-center justify-center text-sm shadow-indigo-glow transition-transform duration-300 group-hover:scale-105 shrink-0">
            DB
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm sm:text-base tracking-tight text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors flex items-center gap-1.5">
              Dhanashree Bagal <span className="text-xs text-indigo-500">©</span>
            </span>
            <div className="flex items-center gap-2 text-[11px] font-medium text-slate-600 dark:text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Available</span>
              <span className="text-slate-400 dark:text-slate-600">•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-cyan-500" />
                <span>Pune {currentTime && `(${currentTime})`}</span>
              </span>
            </div>
          </div>
        </a>

        {/* Floating Pill Navigation Bar (Nikola Radeski Inspired) */}
        <nav className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full floating-nav border border-slate-200/80 dark:border-slate-800">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${isActive ? 'text-slate-900 dark:text-white font-bold' : 'text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400'
                  }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white dark:bg-[#1E293B] shadow-xs border border-indigo-200 dark:border-indigo-500/30 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Right Quick Action Controls */}
        <div className="hidden md:flex items-center gap-2.5">
          {/* Copy Email Button */}
          <button
            onClick={handleCopyEmailClick}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-xl bg-white dark:bg-[#161E2E] border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:border-indigo-500/50 transition-all shadow-xs"
            title="Copy Email"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-indigo-500" />
                <span>Copy Email</span>
              </>
            )}
          </button>

          {/* Dark/Light Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2.5 rounded-xl bg-white dark:bg-[#161E2E] border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all shadow-xs"
            title="Toggle Theme"
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          {/* Download Resume Button */}
          <button
            onClick={handleDownloadResume}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white shadow-indigo-glow transition-all duration-200 transform active:scale-95 shrink-0"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile Menu & Theme Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg bg-white dark:bg-[#161E2E] border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white dark:bg-[#161E2E] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-200"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden tech-card rounded-2xl border border-slate-200 dark:border-slate-800 mt-3 px-5 py-6 shadow-lg max-w-7xl mx-auto"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-slate-900 dark:text-slate-200 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 text-sm font-semibold transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
                <button
                  onClick={handleCopyEmailClick}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-900 dark:text-white"
                >
                  <Copy className="w-3.5 h-3.5 text-indigo-500" />
                  <span>Copy Email: {portfolioData.personal.email}</span>
                </button>

                <button
                  onClick={handleDownloadResume}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white font-semibold text-xs shadow-xs"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume PDF</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
