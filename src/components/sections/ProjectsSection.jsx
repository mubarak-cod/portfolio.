import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
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
  const showcaseProjects = useMemo(
    () => [
      ...projects,
      {
        id: "coming-soon",
        title: "More Projects Coming Soon",
        description:
          "Fresh premium case studies will be added here as they launch.",
        image: "",
        category: "Coming Soon",
        technologies: ["Design in progress", "New builds", "Updated regularly"],
        metrics: {},
        liveUrl: "#",
        githubUrl: null,
        comingSoon: true,
      },
    ],
    []
  );

  return (
    <section
      id="projects"
      className="relative isolate overflow-hidden border-t border-white/5 bg-[#050505] py-24 sm:py-28"
    >
      <ProjectsBackground />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <FadeIn delay={90}>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/8 px-4 py-2 text-xs font-medium uppercase tracking-[0.3em] text-emerald-200 backdrop-blur-xl">
              <Sparkles className="h-3.5 w-3.5" />
              Selected Work
            </div>
          </FadeIn>

          <FadeIn delay={170}>
            <h2 className="mt-6 text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl">
              Premium projects designed to impress at first glance.
            </h2>
          </FadeIn>

          <FadeIn delay={250}>
            <p className="mt-6 text-base leading-8 text-white/65 sm:text-lg">
              A curated grid of polished case studies with smooth motion, clean hierarchy, and product-level presentation.
            </p>
          </FadeIn>
        </div>

        <motion.div
          className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          variants={sectionVariants}
          initial={false}
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
        >
          {showcaseProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </motion.div>

        <FadeIn delay={200}>
          <div className="mt-14 flex flex-col items-center justify-between gap-4 rounded-[2rem] border border-white/10 bg-white/5 px-6 py-6 text-center backdrop-blur-xl sm:flex-row sm:text-left">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-white/40">
                Direct access
              </p>
              <p className="mt-2 text-lg font-medium text-white/85">
                Every card opens the live website in a new tab.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ProjectsSection;