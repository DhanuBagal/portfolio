import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, CheckCircle2, Layers } from 'lucide-react';

export const ProjectModal = ({ project, onClose }) => {

  // Lock body scroll ONLY when a project modal is actually open
  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [project]);

  // Close on Escape key — only when modal is open
  useEffect(() => {
    if (!project) return;
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {/* Full-screen overlay — centers modal, NO overflow scroll here */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">

        {/* Backdrop — click to close */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 backdrop-blur-sm"
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
        />

        {/* Modal Window — fixed max height, flex column so footer stays pinned */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ type: 'spring', stiffness: 350, damping: 28 }}
          className="relative w-full max-w-2xl rounded-2xl z-10 shadow-2xl flex flex-col"
          style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-main)',
            maxHeight: 'min(90vh, 700px)',
          }}
        >
          {/* ── Header (sticky, never scrolls) ── */}
          <div
            className="flex items-start justify-between p-6 sm:p-7 pb-4 shrink-0"
            style={{ borderBottom: '1px solid var(--border-main)' }}
          >
            <div>
              <span
                className="text-xs font-mono font-bold px-2.5 py-0.5 rounded mb-2 inline-block"
                style={{ backgroundColor: 'var(--pill-dark-bg)', color: 'var(--accent)' }}
              >
                {project.category}
              </span>
              <h3
                className="text-xl sm:text-2xl font-bold"
                style={{ color: 'var(--text-primary)' }}
              >
                {project.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg transition-colors shrink-0 ml-4 mt-1"
              style={{
                backgroundColor: 'var(--bg-subtle)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-secondary)',
              }}
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* ── Scrollable Body (only this part scrolls) ── */}
          <div className="flex-1 overflow-y-auto px-6 sm:px-7 py-5 space-y-5 min-h-0">

            {/* Description */}
            <div>
              <h4
                className="text-xs font-mono font-bold uppercase tracking-wider mb-2"
                style={{ color: 'var(--text-very-faint)' }}
              >
                System Overview &amp; Architecture
              </h4>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {project.fullDescription}
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h4
                className="text-xs font-mono font-bold uppercase tracking-wider mb-3 flex items-center gap-1.5"
                style={{ color: 'var(--accent)' }}
              >
                <Layers className="w-4 h-4" /> Key Technical Highlights
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.keyFeatures.map((feat, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl flex items-start gap-2.5"
                    style={{ backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border-subtle)' }}
                  >
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: 'var(--accent)' }} />
                    <span className="text-xs leading-snug" style={{ color: 'var(--text-secondary)' }}>
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h4
                className="text-xs font-mono font-bold uppercase tracking-wider mb-2.5"
                style={{ color: 'var(--text-very-faint)' }}
              >
                Technologies &amp; Tools
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded text-xs font-mono font-medium"
                    style={{
                      backgroundColor: 'var(--bg-subtle)',
                      color: 'var(--text-secondary)',
                      border: '1px solid var(--border-subtle)',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* ── Footer CTAs (sticky, never scrolls) ── */}
          <div
            className="flex flex-wrap items-center justify-between gap-3 px-6 sm:px-7 py-4 shrink-0"
            style={{ borderTop: '1px solid var(--border-main)' }}
          >
            <div className="flex items-center gap-2.5">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all"
                style={{
                  backgroundColor: 'var(--bg-subtle)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-primary)',
                }}
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
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-white text-xs font-semibold transition-all"
                style={{
                  background: 'linear-gradient(135deg, var(--accent), var(--accent-hover))',
                  boxShadow: '0 0 15px var(--border-accent)',
                }}
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            </div>

            <button
              onClick={onClose}
              className="text-xs font-medium hover:underline"
              style={{ color: 'var(--text-very-faint)' }}
            >
              Close Window
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;
