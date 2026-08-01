import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Download, Linkedin, Github, Code, Mail, MapPin, 
  Award, ShieldCheck, Star, ChevronDown, Copy, Check, Calendar
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Hero = ({ onCopyEmail }) => {
  const { name, animatedTitles, socials, metrics, email } = portfolioData.personal;
  const [titleIndex, setTitleIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % animatedTitles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [animatedTitles]);

  const handleCopyEmailClick = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    if (onCopyEmail) onCopyEmail(email);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadResume = () => {
    alert("Downloading Dhanashree Bagal's Resume...");
  };

  return (
    <section id="home" className="relative min-h-[92vh] pt-28 sm:pt-36 pb-16 flex items-center justify-center overflow-hidden bg-[#F8FAFC] dark:bg-[#0B0F17]">
      
      {/* Dynamic Ambient Indigo & Cyan Glow */}
      <div className="absolute top-12 left-1/4 w-96 h-96 bg-indigo-500/15 dark:bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-cyan-500/15 dark:bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Content Column */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Slash Section Tag (Developer Style) */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-mono font-bold tracking-wider uppercase text-indigo-600 dark:text-indigo-400">
                / Software Engineer & Full-Stack Developer
              </span>
            </div>

            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-xs font-semibold mb-6 border border-emerald-200 dark:border-emerald-800/80 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span>Open for Full-Stack Roles • Pune, MH</span>
            </div>

            {/* Greeting */}
            <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15] mb-4">
              Hi, I'm <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent">{name}</span>
            </h1>

            {/* Dynamic Animated Subtitle */}
            <div className="h-9 mb-5 flex items-center">
              <motion.div
                key={titleIndex}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3 }}
                className="text-lg sm:text-xl font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2"
              >
                <span className="text-cyan-500 font-mono">✦</span>
                <span>{animatedTitles[titleIndex]}</span>
              </motion.div>
            </div>

            {/* Humanized Conversational Bio */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed mb-8">
              High-performing software engineer with hands-on production experience building scalable full-stack applications, Spring Boot microservices, and AWS cloud workflows. Promoted to Junior Engineer in 6 months for shipping robust form versioning and data tracking solutions.
            </p>

            {/* Trust Star Badge */}
            <div className="flex items-center gap-3 p-3 px-4 rounded-xl bg-white dark:bg-[#161E2E] border border-slate-200 dark:border-slate-800 mb-8 shadow-xs">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">
                ★ 5.0 Rating • Trusted by international teams (USA, Italy & India)
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white font-semibold text-sm shadow-indigo-glow transition-all duration-200"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={handleCopyEmailClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-[#161E2E] border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 text-slate-800 dark:text-slate-200 text-sm font-semibold shadow-xs transition-all duration-200"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-indigo-500" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>

              <button
                onClick={handleDownloadResume}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900 text-white dark:bg-slate-800 dark:hover:bg-slate-700 text-sm font-medium transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Resume</span>
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mr-1">Profiles:</span>
              
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white dark:bg-[#161E2E] border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500/50 transition-colors shadow-xs"
                title="LinkedIn Profile"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white dark:bg-[#161E2E] border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500/50 transition-colors shadow-xs"
                title="GitHub Profile"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white dark:bg-[#161E2E] border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500/50 transition-colors shadow-xs"
                title="LeetCode Profile"
                aria-label="LeetCode"
              >
                <Code className="w-4 h-4" />
              </a>

              <a
                href={socials.email}
                className="p-2.5 rounded-lg bg-white dark:bg-[#161E2E] border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500/50 transition-colors shadow-xs"
                title="Send Email"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

          </motion.div>

          {/* Profile Card Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Profile Highlight Card */}
            <div className="tech-card rounded-2xl p-7 relative overflow-hidden">
              <div className="flex items-center gap-4 pb-6 mb-6 border-b border-slate-200 dark:border-slate-800">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-600 to-cyan-500 text-white font-extrabold text-xl flex items-center justify-center shadow-indigo-glow shrink-0">
                  DB
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Dhanashree Bagal
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                    Software Engineer @ Qnopy India
                  </p>
                  <span className="inline-block mt-1 text-[11px] font-semibold text-indigo-600 dark:text-cyan-400 font-mono">
                    Full-Stack Java, Angular 18 & AWS
                  </span>
                </div>
              </div>

              {/* Core Skill Pills */}
              <div className="space-y-3 mb-6">
                <span className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                  Production Stack:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {["Java", "Spring Boot", "Angular 18", "React", "AWS EC2/S3", "MySQL", "Docker", "REST APIs"].map((tech) => (
                    <span 
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 text-xs font-medium border border-slate-200 dark:border-slate-700/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Human Work Highlight */}
              <div className="p-4 rounded-xl bg-indigo-50/60 dark:bg-indigo-950/40 border border-indigo-200/80 dark:border-indigo-800/60">
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  💡 Promoted to Jr. Software Engineer in 6 months after successfully shipping form versioning architectures and data tracking workflows for enterprise client operations.
                </p>
              </div>
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 gap-3.5">
              {metrics.map((metric, index) => (
                <div key={index} className="tech-card rounded-xl p-4 flex flex-col justify-between">
                  <span className="text-2xl font-extrabold text-slate-900 dark:text-white bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                    {metric.value}
                  </span>
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400 mt-1">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>

          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-14 flex justify-center">
          <a href="#about" className="flex flex-col items-center gap-1.5 text-slate-400 dark:text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group">
            <span className="text-[11px] font-mono font-semibold tracking-wider uppercase">Scroll to explore</span>
            <ChevronDown className="w-4 h-4 animate-bounce group-hover:text-indigo-600 dark:group-hover:text-indigo-400" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;
