import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, Server, Cloud, Cpu, CheckCircle2, Award, 
  ShieldCheck, ArrowUpRight
} from 'lucide-react';

export const About = () => {
  const pillars = [
    {
      icon: Server,
      title: "Backend Microservices",
      subtitle: "Spring Boot & REST Architecture",
      description: "Building reliable backend services, optimizing SQL database queries, and designing multi-tenant REST APIs for enterprise clients."
    },
    {
      icon: Code2,
      title: "Frontend Engineering",
      subtitle: "Angular 18 & React 18",
      description: "Crafting responsive, user-friendly single page applications with modular component architecture and clean state management."
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      subtitle: "AWS EC2, S3 & Docker",
      description: "Deploying applications on AWS EC2, configuring S3 storage buckets, containerizing services with Docker, and setting up CI/CD pipelines."
    },
    {
      icon: Cpu,
      title: "Productivity Tools",
      subtitle: "AI Workflows & Copilot",
      description: "Utilizing modern developer tools like GitHub Copilot and ChatGPT for quick prototyping, SQL tuning, and thorough unit testing."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#F8FAFC] dark:bg-[#0B0F17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header (Nikola Radeski Style) */}
        <div className="flex flex-col items-start mb-16">
          <span className="text-xs font-mono font-bold tracking-wider uppercase text-indigo-600 dark:text-indigo-400 mb-3">
            / 01 About
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Building software with <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">care and clarity</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mt-3 max-w-2xl text-base leading-relaxed">
            I'm a full-stack engineer who enjoys taking complex backend requirements and turning them into fast, intuitive, human-centered applications.
          </p>
        </div>

        {/* Feature Story Card */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="tech-card rounded-2xl p-7 sm:p-9 mb-12 relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded bg-slate-900 text-white text-xs font-bold font-mono">
                  Current Role
                </span>
                <span className="text-xs font-semibold text-indigo-600 dark:text-cyan-400 font-mono">
                  Software Engineer @ Qnopy India
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4 leading-snug">
                From Intern to Core Developer in 6 Months
              </h3>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                I started as a Trainee Engineer at Qnopy in Pune and quickly took ownership of key production modules—including form versioning, asset tracking, and photo management for environmental engineering teams in the US. Thanks to consistent delivery and clean code, I was promoted to Junior Software Engineer within 6 months.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0" />
                  <span>Angular 18 & Spring Boot microservices</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0" />
                  <span>AWS Cloud Practitioner (CLF-C02)</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0" />
                  <span>Relational SQL query & index optimization</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0" />
                  <span>B.Tech Computer Science (9.28 CGPA)</span>
                </div>
              </div>
            </div>

            {/* Side Highlights */}
            <div className="lg:col-span-4 flex flex-col gap-3.5">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 flex items-start gap-3">
                <Award className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">Fast Progression</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">Promoted to Junior Software Engineer in 6 months for shipping high-impact features.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">AWS Certification</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">AWS Certified Cloud Practitioner for cloud architecture principles.</p>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* 4 Core Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="tech-card tech-card-hover rounded-2xl p-6 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/80 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-5 shadow-xs">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {pillar.title}
                  </h3>
                  <div className="text-xs font-semibold text-indigo-600 dark:text-cyan-400 mb-3 font-mono">
                    {pillar.subtitle}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                  <span>Core Specialization</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default About;
