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
    <section id="home" className="relative min-h-[92vh] pt-28 sm:pt-36 pb-16 flex items-center justify-center overflow-hidden" style={{ backgroundColor: 'var(--bg-main)', color: 'var(--text-primary)' }}>

      {/* Dynamic Ambient Earthy Amber Glow */}
      <div className="absolute top-12 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ backgroundColor: 'var(--bg-accent-subtle)' }} />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 rounded-full blur-3xl pointer-events-none" style={{ backgroundColor: 'rgba(196,123,106,0.12)' }} />

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
              <span className="text-xs font-mono font-bold tracking-wider uppercase" style={{ color: 'var(--accent)' }}>
                / Software Engineer & Full-Stack Developer
              </span>
            </div>

            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-6 shadow-xs" style={{ backgroundColor: 'var(--bg-accent-subtle)', border: '1px solid var(--border-accent)', color: 'var(--accent-warm-text)' }}>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span>Open for Full-Stack Roles • Pune, MH</span>
            </div>

            {/* Greeting */}
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.15] mb-4" style={{ color: 'var(--text-primary)' }}>
              Hi, I'm <span style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent-rose))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{name}</span>
            </h1>

            {/* Dynamic Animated Subtitle */}
            <div className="h-9 mb-5 flex items-center">
              <motion.div
                key={titleIndex}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3 }}
                className="text-lg sm:text-xl font-semibold flex items-center gap-2"
                style={{ color: 'var(--text-secondary)' }}
              >
                <span className="font-mono" style={{ color: 'var(--accent)' }}>✦</span>
                <span>{animatedTitles[titleIndex]}</span>
              </motion.div>
            </div>

            {/* Humanized Conversational Bio */}
            <p className="text-base sm:text-lg max-w-2xl leading-relaxed mb-8" style={{ color: 'var(--text-muted)' }}>
              High-performing software engineer with hands-on production experience building scalable full-stack applications, Spring Boot microservices, and AWS cloud workflows. Promoted to Junior Engineer in 6 months for shipping robust form versioning and data tracking solutions.
            </p>

            {/* Trust Star Badge */}
            <div className="flex items-center gap-3 p-3 px-4 rounded-xl mb-8 shadow-xs" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-main)' }}>
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-xs sm:text-sm font-bold" style={{ color: 'var(--text-primary)' }}>
                ★ 5.0 Rating • Trusted by international teams (USA, Italy & India)
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm transition-all duration-200"
                style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent-hover))', boxShadow: '0 0 20px var(--border-accent)' }}
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={handleCopyEmailClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold shadow-xs transition-all duration-200"
                style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-main)', color: 'var(--text-primary)' }}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span className="text-emerald-600">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" style={{ color: 'var(--accent)' }} />
                    <span>Copy Email</span>
                  </>
                )}
              </button>

              {/* <button
                onClick={handleDownloadResume}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-colors"
                style={{backgroundColor:'var(--pill-dark-bg)', color:'var(--text-primary)'}}
              >
                <Download className="w-4 h-4" />
                <span>Resume</span>
              </button> */}
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider mr-1" style={{ color: 'var(--text-very-faint)' }}>Profiles:</span>

              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg shadow-xs transition-colors"
                style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-main)', color: 'var(--text-faint)' }}
                title="LinkedIn Profile"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg shadow-xs transition-colors"
                style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-main)', color: 'var(--text-faint)' }}
                title="GitHub Profile"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg shadow-xs transition-colors"
                style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-main)', color: 'var(--text-faint)' }}
                title="LeetCode Profile"
                aria-label="LeetCode"
              >
                <Code className="w-4 h-4" />
              </a>

              <a
                href={socials.email}
                className="p-2.5 rounded-lg shadow-xs transition-colors"
                style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-main)', color: 'var(--text-faint)' }}
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
              <div className="flex items-center gap-4 pb-6 mb-6" style={{ borderBottom: '1px solid var(--border-main)' }}>
                <div className="w-14 h-14 rounded-2xl text-white font-extrabold text-xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent-rose))', boxShadow: '0 0 25px var(--border-accent)' }}>
                  DB
                </div>
                <div>
                  <h3 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
                    Dhanashree Bagal
                  </h3>
                  <p className="text-xs font-medium" style={{ color: 'var(--text-faint)' }}>
                    Software Engineer @ Qnopy India
                  </p>
                  <span className="inline-block mt-1 text-[11px] font-semibold font-mono" style={{ color: 'var(--accent)' }}>
                    Full-Stack Java, Angular 18 & AWS
                  </span>
                </div>
              </div>

              {/* Core Skill Pills */}
              <div className="space-y-3 mb-6">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider block" style={{ color: 'var(--text-very-faint)' }}>
                  Production Stack:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {["Java", "Spring Boot", "Angular 18", "React", "AWS EC2/S3", "MySQL", "Docker", "REST APIs"].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-medium"
                      style={{ backgroundColor: 'var(--bg-subtle)', color: 'var(--text-secondary)', border: '1px solid var(--border-subtle)' }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Human Work Highlight */}
              <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--bg-accent-subtle)', border: '1px solid var(--border-accent)' }}>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  💡 Promoted to Jr. Software Engineer in 6 months after successfully shipping form versioning architectures and data tracking workflows for enterprise client operations.
                </p>
              </div>
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 gap-3.5">
              {metrics.map((metric, index) => (
                <div key={index} className="tech-card rounded-xl p-4 flex flex-col justify-between">
                  <span className="text-2xl font-extrabold" style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent-rose))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    {metric.value}
                  </span>
                  <span className="text-xs font-medium mt-1" style={{ color: 'var(--text-faint)' }}>
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>

          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-14 flex justify-center">
          <a href="#about" className="flex flex-col items-center gap-1.5 transition-colors group" style={{ color: 'var(--text-faint)' }}>
            <span className="text-[11px] font-mono font-semibold tracking-wider uppercase">Scroll to explore</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;
