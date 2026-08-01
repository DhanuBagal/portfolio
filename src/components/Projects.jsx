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
    <section id="projects" className="py-24 relative overflow-hidden bg-[#FAF7F7] dark:bg-[#1A1D24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header (Nikola Radeski Style) */}
        <div className="flex flex-col items-start mb-16">
          <span className="text-xs font-bold tracking-wider uppercase text-[#D98F9D] dark:text-[#D98F9D] mb-3">
            / 04 Work & Projects
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#222222] dark:text-white tracking-tight leading-tight">
            Featured <span className="text-[#D98F9D]">projects</span>
          </h2>
          <p className="text-[#2F3640] dark:text-slate-300 mt-3 max-w-2xl text-base leading-relaxed">
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
              className="rose-card rose-card-hover rounded-2xl overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Visual Header Banner */}
                <div className="h-40 w-full bg-[#F2D5DA]/40 dark:bg-[#2A2026] p-6 relative flex flex-col justify-between border-b border-[#EFE4E6] dark:border-[#383E4B]">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded bg-[#2F3640] text-white text-xs font-semibold">
                      {project.category}
                    </span>
                    <FolderGit2 className="w-5 h-5 text-[#8B93A0] dark:text-slate-500 group-hover:text-[#D98F9D] transition-colors" />
                  </div>

                  <h3 className="text-lg font-bold text-[#222222] dark:text-white group-hover:text-[#D98F9D] transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                </div>

                {/* Card Content Body */}
                <div className="p-6">
                  <p className="text-xs sm:text-sm text-[#2F3640] dark:text-slate-300 leading-relaxed mb-5 line-clamp-3">
                    {project.summary}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded bg-[#FAF7F7] dark:bg-[#2A2F3A] text-[#222222] dark:text-slate-300 text-[11px] font-medium border border-[#EFE4E6] dark:border-[#383E4B]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-6 pt-4 flex items-center justify-between border-t border-[#EFE4E6] dark:border-[#383E4B] mt-auto">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D98F9D] hover:underline group/btn"
                >
                  <span>View Full Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-[#FAF7F7] dark:bg-[#2A2F3A] border border-[#EFE4E6] dark:border-[#383E4B] text-[#2F3640] dark:text-slate-400 hover:text-[#D98F9D] transition-colors"
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
