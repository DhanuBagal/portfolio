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
          className="relative w-full max-w-2xl bg-white dark:bg-[#161E2E] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-7 z-10 shadow-xl overflow-hidden my-8"
        >
          {/* Header */}
          <div className="flex items-start justify-between pb-4 border-b border-slate-200 dark:border-slate-800 gap-4">
            <div>
              <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-slate-900 text-cyan-300 mb-2 inline-block">
                {project.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                {project.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="py-5 space-y-5 max-h-[60vh] overflow-y-auto pr-1">
            
            {/* Description */}
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                System Overview & Architecture
              </h4>
              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-600 dark:text-cyan-400 mb-3 flex items-center gap-1.5">
                <Layers className="w-4 h-4" /> Key Technical Highlights
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.keyFeatures.map((feat, i) => (
                  <div key={i} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-800 dark:text-slate-300 leading-snug">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5">
                Technologies & Tools
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span 
                    key={tech}
                    className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-300 text-xs font-mono font-medium border border-slate-200 dark:border-slate-700/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Modal Footer CTAs */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-cyan-400 text-xs font-semibold transition-all"
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
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white text-xs font-semibold shadow-indigo-glow transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            </div>

            <button
              onClick={onClose}
              className="text-xs text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white font-medium"
            >
              Close Window
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};




