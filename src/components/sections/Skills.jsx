import React from 'react';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiReactquery,
} from "react-icons/si";
import FadeIn from "../animations/FadeIn";
import RadialGradientBackground from "../Backgrounds/RadialGradientBackground";

const Skills = () => {
  const techStack = [
    {
      name: "React.js",
      icon: SiReact,
      description: "Building interactive component-driven user interfaces.",
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      description: "Creating fast, SEO-friendly apps with modern routing.",
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      description: "Writing scalable, strongly typed frontend code.",
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      description: "Crafting responsive UIs with utility-first styling.",
    },
    {
      name: "Framer Motion",
      icon: SiFramer,
      description: "Designing smooth, meaningful animations and transitions.",
    },
    {
      name: "React Query",
      icon: SiReactquery,
      description: "Managing async state, caching, and server data efficiently.",
    },
  ];

  return (
    <section id="skills" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <RadialGradientBackground variant="about" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn delay={100} duration={600}>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Tech Stack & Expertise
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-300">
              Tools I use to build clean interfaces, reliable products, and high-performance web experiences.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <FadeIn key={tech.name} delay={180 + index * 90} duration={650}>
                <article className="group h-full rounded-xl border border-green-800/40 bg-gradient-to-br from-gray-950/70 to-gray-900/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-green-500/60 hover:shadow-[0_0_30px_rgba(34,197,94,0.2)]">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/10 ring-1 ring-green-500/30 transition-all duration-300 group-hover:bg-green-500/20">
                    <Icon className="h-6 w-6 text-green-400 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{tech.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-300">
                    {tech.description}
                  </p>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;