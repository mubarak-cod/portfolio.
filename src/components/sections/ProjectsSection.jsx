import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { ArrowRight, ExternalLink, X } from "lucide-react";
import { projects } from "../../data/projects";
import ProjectsBackground from "../Backgrounds/ProjectsBackground";
import FadeIn from "../animations/FadeIn";
import ProjectCard from "../ui/ProjectCard";

const sectionVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08,
    },
  },
};

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    if (!activeProject) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveProject(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeProject]);

  return (
    <section
      id="projects"
      className="relative isolate overflow-hidden border-t border-white/5 bg-[#050505] py-24 sm:py-28"
    >
      <ProjectsBackground />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn delay={90}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.3em] text-white/60 backdrop-blur-xl">
              Selected Work
            </div>
          </FadeIn>

          <FadeIn delay={170}>
            <h2 className="mt-6 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
              Projects built like premium product launches.
            </h2>
          </FadeIn>

          <FadeIn delay={250}>
            <p className="mt-6 text-base leading-8 text-white/65 sm:text-lg">
              A curated showcase of real builds with browser-frame previews, motion-rich interactions, and case-study style storytelling.
            </p>
          </FadeIn>
        </div>

        <motion.div
          className="mt-14 grid gap-6 lg:grid-cols-2"
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpen={setActiveProject}
            />
          ))}
        </motion.div>

        <FadeIn delay={200}>
          <div className="mt-14 flex flex-col items-center justify-between gap-4 rounded-[2rem] border border-white/10 bg-white/5 px-6 py-6 text-center backdrop-blur-xl sm:flex-row sm:text-left">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-white/40">
                Want a deeper look?
              </p>
              <p className="mt-2 text-lg font-medium text-white/85">
                Open any project for metrics, stack breakdown, and live links.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setActiveProject(projects[0])}
              className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-5 py-3 text-sm font-semibold text-black transition-transform duration-300 hover:-translate-y-0.5"
            >
              Preview featured case study
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </FadeIn>
      </div>

      <AnimatePresence>
        {activeProject ? (
          <motion.div
            className="fixed inset-0 z-[1200] flex items-center justify-center bg-black/78 px-4 py-6 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
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
                  <p className="text-xs uppercase tracking-[0.28em] text-white/40">
                    Case study
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">
                    {activeProject.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveProject(null)}
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
                        <span>{activeProject.category}</span>
                        <span>{activeProject.demoUrl.replace(/^https?:\/\//, "")}</span>
                      </div>

                      <div className="mt-6 grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
                        <div className="rounded-[1.3rem] border border-white/10 bg-white/7 p-5">
                          <p className="text-sm uppercase tracking-[0.26em] text-white/35">
                            Highlights
                          </p>
                          <p className="mt-4 text-2xl font-semibold text-white">
                            {activeProject.description}
                          </p>
                          <div className="mt-6 flex flex-wrap gap-2">
                            {activeProject.technologies.map((tech) => (
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
                          {Object.entries(activeProject.metrics).map(([key, value]) => (
                            <div
                              key={key}
                              className="rounded-[1.2rem] border border-white/10 bg-black/25 p-4"
                            >
                              <p className="text-[10px] uppercase tracking-[0.24em] text-white/35">
                                {key}
                              </p>
                              <p className="mt-3 text-lg font-semibold text-white">
                                {value}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-auto grid gap-3 pt-5 sm:grid-cols-2">
                        <a
                          href={activeProject.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-semibold text-black transition-transform duration-300 hover:-translate-y-0.5"
                        >
                          Open live site
                          <ExternalLink className="h-4 w-4" />
                        </a>
                        <a
                          href={activeProject.githubUrl}
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
                  <p className="text-sm uppercase tracking-[0.26em] text-white/35">
                    Case notes
                  </p>
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
                    <p className="text-xs uppercase tracking-[0.26em] text-white/35">
                      Technology stack
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {activeProject.technologies.map((tech) => (
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
        ) : null}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;