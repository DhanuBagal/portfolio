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
    <section id="home" className="relative min-h-[92vh] pt-28 sm:pt-36 pb-16 flex items-center justify-center overflow-hidden bg-[#FAF7F7] dark:bg-[#1A1D24]">
      
      {/* Subtle Warm Backdrop Ambient Glow */}
      <div className="absolute top-12 left-1/4 w-96 h-96 bg-[#F2D5DA]/40 dark:bg-[#3F2B32]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Content Column */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Slash Section Tag (Nikola Radeski Style) */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-bold tracking-wider uppercase text-[#D98F9D] dark:text-[#D98F9D]">
                / Software Engineer & Full-Stack Developer
              </span>
            </div>

            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2D5DA] dark:bg-[#3F2B32] text-[#8B3B4A] dark:text-[#F2D5DA] text-xs font-semibold mb-6 border border-[#E4B8C1] dark:border-[#7F3643]">
              <span className="w-2 h-2 rounded-full bg-[#D98F9D] animate-ping"></span>
              <span>Open for Full-Stack Roles • Pune, MH</span>
            </div>

            {/* Greeting */}
            <h1 className="text-4xl sm:text-6xl font-extrabold text-[#222222] dark:text-white tracking-tight leading-[1.15] mb-4">
              Hi, I'm <span className="text-[#D98F9D]">{name}</span>
            </h1>

            {/* Dynamic Animated Subtitle */}
            <div className="h-9 mb-5 flex items-center">
              <motion.div
                key={titleIndex}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3 }}
                className="text-lg sm:text-xl font-semibold text-[#2F3640] dark:text-slate-300 flex items-center gap-2"
              >
                <span className="text-[#D98F9D]">✦</span>
                <span>{animatedTitles[titleIndex]}</span>
              </motion.div>
            </div>

            {/* Humanized Conversational Bio */}
            <p className="text-base sm:text-lg text-[#2F3640] dark:text-slate-300 max-w-2xl leading-relaxed mb-8">
              High-performing software engineer with hands-on production experience building scalable full-stack applications, Spring Boot microservices, and AWS cloud workflows. Promoted to Junior Engineer in 6 months for shipping robust form versioning and data tracking solutions.
            </p>

            {/* Trust Star Badge */}
            <div className="flex items-center gap-3 p-3 px-4 rounded-xl bg-white dark:bg-[#242831] border border-[#EFE4E6] dark:border-[#383E4B] mb-8 shadow-xs">
              <div className="flex items-center gap-1 text-[#EF8700]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-xs sm:text-sm font-bold text-[#222222] dark:text-slate-200">
                ★ 5.0 Rating • Trusted by international teams (USA, Italy & India)
              </span>
            </div>

            {/* Action Buttons (Nikola Radeski Style) */}
            <div className="flex flex-wrap items-center gap-3 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#D98F9D] hover:bg-[#C77D8B] text-white font-semibold text-sm shadow-xs transition-all duration-200"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={handleCopyEmailClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-[#242831] border border-[#EFE4E6] dark:border-[#383E4B] hover:border-[#D98F9D] text-[#222222] dark:text-slate-200 text-sm font-semibold shadow-xs transition-all duration-200"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#D98F9D]" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>

              <button
                onClick={handleDownloadResume}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#2F3640] text-white hover:bg-[#1A1D24] text-sm font-medium transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Resume</span>
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-[#8B93A0] dark:text-slate-500 uppercase tracking-wider mr-1">Profiles:</span>
              
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white dark:bg-[#242831] border border-[#EFE4E6] dark:border-[#383E4B] text-[#2F3640] dark:text-slate-400 hover:text-[#D98F9D] hover:border-[#D98F9D] transition-colors shadow-xs"
                title="LinkedIn Profile"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white dark:bg-[#242831] border border-[#EFE4E6] dark:border-[#383E4B] text-[#2F3640] dark:text-slate-400 hover:text-[#D98F9D] hover:border-[#D98F9D] transition-colors shadow-xs"
                title="GitHub Profile"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white dark:bg-[#242831] border border-[#EFE4E6] dark:border-[#383E4B] text-[#2F3640] dark:text-slate-400 hover:text-[#D98F9D] hover:border-[#D98F9D] transition-colors shadow-xs"
                title="LeetCode Profile"
                aria-label="LeetCode"
              >
                <Code className="w-4 h-4" />
              </a>

              <a
                href={socials.email}
                className="p-2.5 rounded-lg bg-white dark:bg-[#242831] border border-[#EFE4E6] dark:border-[#383E4B] text-[#2F3640] dark:text-slate-400 hover:text-[#D98F9D] hover:border-[#D98F9D] transition-colors shadow-xs"
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
            <div className="rose-card rounded-2xl p-7 relative overflow-hidden">
              <div className="flex items-center gap-4 pb-6 mb-6 border-b border-[#EFE4E6] dark:border-[#383E4B]">
                <div className="w-14 h-14 rounded-2xl bg-[#D98F9D] text-white font-extrabold text-xl flex items-center justify-center shadow-xs shrink-0">
                  DB
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#222222] dark:text-white">
                    Dhanashree Bagal
                  </h3>
                  <p className="text-xs text-[#2F3640] dark:text-slate-400 font-medium">
                    Software Engineer @ Qnopy India
                  </p>
                  <span className="inline-block mt-1 text-[11px] font-semibold text-[#8B3B4A] dark:text-[#F2D5DA]">
                    Full-Stack Java, Angular 18 & AWS
                  </span>
                </div>
              </div>

              {/* Core Skill Pills */}
              <div className="space-y-3 mb-6">
                <span className="text-xs font-semibold text-[#8B93A0] dark:text-slate-500 uppercase tracking-wider block">
                  Production Stack:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {["Java", "Spring Boot", "Angular 18", "React", "AWS EC2/S3", "MySQL", "Docker", "REST APIs"].map((tech) => (
                    <span 
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-[#F0F2F5] dark:bg-[#2A2F3A] text-[#222222] dark:text-slate-300 text-xs font-medium border border-[#D5D8DC] dark:border-[#383E4B]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Human Work Highlight */}
              <div className="p-4 rounded-xl bg-[#FAF7F7] dark:bg-[#2A2F3A] border border-[#EFE4E6] dark:border-[#383E4B]">
                <p className="text-xs text-[#2F3640] dark:text-slate-300 leading-relaxed">
                  💡 Promoted to Jr. Software Engineer in 6 months after successfully shipping form versioning architectures and data tracking workflows for enterprise client operations.
                </p>
              </div>
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 gap-3.5">
              {metrics.map((metric, index) => (
                <div key={index} className="rose-card rounded-xl p-4 flex flex-col justify-between">
                  <span className="text-2xl font-extrabold text-[#222222] dark:text-white">
                    {metric.value}
                  </span>
                  <span className="text-xs font-medium text-[#2F3640] dark:text-slate-400 mt-1">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>

          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-14 flex justify-center">
          <a href="#about" className="flex flex-col items-center gap-1.5 text-[#8B93A0] dark:text-slate-500 hover:text-[#D98F9D] transition-colors group">
            <span className="text-[11px] font-semibold tracking-wider uppercase">Scroll to explore</span>
            <ChevronDown className="w-4 h-4 animate-bounce group-hover:text-[#D98F9D]" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;
