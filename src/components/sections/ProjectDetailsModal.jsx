import React from "react";
import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { ExternalLink, X } from "lucide-react";

const ProjectDetailsModal = ({ project, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 z-[1200] flex items-center justify-center bg-black/78 px-4 py-6 backdrop-blur-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a0a0a] shadow-[0_40px_140px_rgba(0,0,0,0.7)]"
        initial={{ y: 32, scale: 0.96, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        exit={{ y: 24, scale: 0.98, opacity: 0 }}
        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-white/8 px-5 py-4 sm:px-6">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-white/40">Case study</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">{project.title}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-white/10 bg-white/5 p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Close project details"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="grid gap-0 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="border-b border-white/8 lg:border-b-0 lg:border-r lg:border-white/8">
            <div className="aspect-[4/3] bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.22),transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent)] p-5 sm:p-6">
              <div className="flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#07110b] p-5 sm:p-6">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.25em] text-white/40">
                  <span>{project.category}</span>
                  <span>{project.demoUrl.replace(/^https?:\/\//, "")}</span>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
                  <div className="rounded-[1.3rem] border border-white/10 bg-white/7 p-5">
                    <p className="text-sm uppercase tracking-[0.26em] text-white/35">Highlights</p>
                    <p className="mt-4 text-2xl font-semibold text-white">{project.description}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-xs text-white/70"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-3">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div
                        key={key}
                        className="rounded-[1.2rem] border border-white/10 bg-black/25 p-4"
                      >
                        <p className="text-[10px] uppercase tracking-[0.24em] text-white/35">{key}</p>
                        <p className="mt-3 text-lg font-semibold text-white">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-auto grid gap-3 pt-5 sm:grid-cols-2">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-semibold text-black transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    Open live site
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/75 transition-colors duration-300 hover:bg-white/10 hover:text-white"
                  >
                    <SiGithub className="h-4 w-4" />
                    View source
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="p-5 sm:p-6">
            <p className="text-sm uppercase tracking-[0.26em] text-white/35">Case notes</p>
            <div className="mt-5 space-y-4 text-sm leading-7 text-white/65">
              <p>
                The preview is designed like a live landing page so the section feels like a product gallery instead of a static portfolio grid.
              </p>
              <p>
                The modal keeps the interaction smooth on desktop and mobile, with tap-safe controls and a strong visual hierarchy for fast scanning.
              </p>
              <p>
                Scroll back into the section and the navbar will stay in sync through the existing scroll spy, because this section now exposes the correct projects anchor.
              </p>
            </div>

            <div className="mt-6 rounded-[1.4rem] border border-white/10 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-[0.26em] text-white/35">Technology stack</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-xs text-white/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetailsModal;