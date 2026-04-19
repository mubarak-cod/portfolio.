import React, { Suspense, lazy, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { projects } from "../../data/projects";
import ProjectsBackground from "../Backgrounds/ProjectsBackground";
import FadeIn from "../animations/FadeIn";
import ProjectCard from "../ui/ProjectCard";

const ProjectDetailsModal = lazy(() => import("./ProjectDetailsModal"));

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
  const featuredProject = useMemo(() => projects[0], []);

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
              onClick={() => setActiveProject(featuredProject)}
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
          <Suspense fallback={null}>
            <ProjectDetailsModal
              project={activeProject}
              onClose={() => setActiveProject(null)}
            />
          </Suspense>
        ) : null}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;