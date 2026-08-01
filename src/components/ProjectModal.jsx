import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, CheckCircle2, Layers } from 'lucide-react';

export const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#1A1D24]/60 dark:bg-black/80 backdrop-blur-xs"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ type: 'spring', stiffness: 350, damping: 28 }}
          className="relative w-full max-w-2xl bg-white dark:bg-[#242831] border border-[#EFE4E6] dark:border-[#383E4B] rounded-2xl p-6 sm:p-7 z-10 shadow-lg overflow-hidden my-8"
        >
          {/* Header */}
          <div className="flex items-start justify-between pb-4 border-b border-[#EFE4E6] dark:border-[#383E4B] gap-4">
            <div>
              <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-[#2F3640] text-white mb-2 inline-block">
                {project.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#222222] dark:text-white">
                {project.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-[#F0F2F5] dark:bg-[#2A2F3A] text-[#2F3640] dark:text-slate-400 hover:text-[#222222] dark:hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="py-5 space-y-5 max-h-[60vh] overflow-y-auto pr-1">
            
            {/* Description */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#8B93A0] dark:text-slate-400 mb-2">
                System Overview & Architecture
              </h4>
              <p className="text-[#2F3640] dark:text-slate-300 text-sm leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#D98F9D] mb-3 flex items-center gap-1.5">
                <Layers className="w-4 h-4" /> Key Technical Highlights
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.keyFeatures.map((feat, i) => (
                  <div key={i} className="p-3 rounded-xl bg-[#FAF7F7] dark:bg-[#2A2F3A] border border-[#EFE4E6] dark:border-[#383E4B] flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#D98F9D] shrink-0 mt-0.5" />
                    <span className="text-xs text-[#222222] dark:text-slate-300 leading-snug">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#8B93A0] dark:text-slate-400 mb-2.5">
                Technologies & Tools
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span 
                    key={tech}
                    className="px-2.5 py-1 rounded bg-[#F0F2F5] dark:bg-[#2A2F3A] text-[#222222] dark:text-slate-300 text-xs font-medium border border-[#D5D8DC] dark:border-[#383E4B]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Modal Footer CTAs */}
          <div className="pt-4 border-t border-[#EFE4E6] dark:border-[#383E4B] flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#F0F2F5] dark:bg-[#2A2F3A] border border-[#D5D8DC] dark:border-[#383E4B] text-[#222222] dark:text-slate-200 hover:text-[#D98F9D] text-xs font-semibold transition-all"
              >
                <Github className="w-4 h-4" />
                <span>Source Code</span>
              </a>

              <a
                href={project.demoLink}
                onClick={(e) => {
                  e.preventDefault();
                  alert(`Demo link for ${project.title} can be linked to your live environment.`);
                }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#D98F9D] hover:bg-[#C77D8B] text-white text-xs font-semibold shadow-xs transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            </div>

            <button
              onClick={onClose}
              className="text-xs text-[#8B93A0] dark:text-slate-500 hover:text-[#222222] font-medium"
            >
              Close Window
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};




