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
    <section id="projects" className="py-24 relative overflow-hidden" style={{backgroundColor:'var(--bg-main)', color:'var(--text-primary)'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header (Nikola Radeski Style) */}
        <div className="flex flex-col items-start mb-16">
          <span className="text-xs font-mono font-bold tracking-wider uppercase mb-3" style={{color:'var(--accent)'}}>
            / 04 Work & Projects
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight" style={{color:'var(--text-primary)'}}>
            Featured <span style={{background:'linear-gradient(135deg, var(--accent), var(--accent-rose))', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text'}}>projects</span>
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed" style={{color:'var(--text-muted)'}}>
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
                <div className="h-40 w-full p-6 relative flex flex-col justify-between" style={{background:'linear-gradient(135deg, rgba(212,147,58,0.25), rgba(44,26,14,0.7), rgba(196,123,106,0.25))', borderBottom:'1px solid var(--border-main)'}}>
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded text-xs font-mono font-semibold" style={{backgroundColor:'var(--pill-dark-bg)', color:'var(--accent)', border:'1px solid var(--border-accent)'}}>
                      {project.category}
                    </span>
                    <FolderGit2 className="w-5 h-5" style={{color:'var(--accent)'}} />
                  </div>

                  <h3 className="text-lg font-bold text-white line-clamp-2">
                    {project.title}
                  </h3>
                </div>

                {/* Card Content Body */}
                <div className="p-6">
                  <p className="text-xs sm:text-sm leading-relaxed mb-5 line-clamp-3" style={{color:'var(--text-muted)'}}>
                    {project.summary}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded text-[11px] font-mono font-medium"
                        style={{backgroundColor:'var(--bg-subtle)', color:'var(--text-secondary)', border:'1px solid var(--border-subtle)'}}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-6 pt-4 flex items-center justify-between mt-auto" style={{borderTop:'1px solid var(--border-main)'}}>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold hover:underline group/btn"
                  style={{color:'var(--accent)'}}
                >
                  <span>View Full Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg transition-colors"
                    style={{backgroundColor:'var(--bg-subtle)', border:'1px solid var(--border-subtle)', color:'var(--text-secondary)'}}
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
