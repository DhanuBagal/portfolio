import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FolderGit2, Github, ArrowRight
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const Projects = () => {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#F8FAFC] dark:bg-[#0B0F17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header (Nikola Radeski Style) */}
        <div className="flex flex-col items-start mb-16">
          <span className="text-xs font-mono font-bold tracking-wider uppercase text-indigo-600 dark:text-indigo-400 mb-3">
            / 04 Work & Projects
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Featured <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">projects</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mt-3 max-w-2xl text-base leading-relaxed">
            Full-stack web applications, automated cloud pipelines, and security architectures built with clean code.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="tech-card tech-card-hover rounded-2xl overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Visual Header Banner */}
                <div className="h-40 w-full bg-gradient-to-tr from-indigo-900/30 via-slate-900/60 to-cyan-900/30 p-6 relative flex flex-col justify-between border-b border-slate-200 dark:border-slate-800">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded bg-slate-900/90 text-cyan-300 text-xs font-mono font-semibold border border-cyan-800/40">
                      {project.category}
                    </span>
                    <FolderGit2 className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                </div>

                {/* Card Content Body */}
                <div className="p-6">
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5 line-clamp-3">
                    {project.summary}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-300 text-[11px] font-mono font-medium border border-slate-200 dark:border-slate-700/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-6 pt-4 flex items-center justify-between border-t border-slate-200 dark:border-slate-800 mt-auto">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-cyan-400 hover:underline group/btn"
                >
                  <span>View Full Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors"
                    title="View Source Code"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Modal Popup */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};

export default Projects;
