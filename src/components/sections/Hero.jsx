import React from "react";
import { ArrowRight, Download, Sparkles, Star } from "lucide-react";
// import { SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiMongodb } from 'react-icons/si';
import { Code, Server, Database } from "lucide-react";
import { PERSONAL_INFO, STATS } from "../../utils/contestants";
import { scrollToSection } from "../../hooks/useScrollSpy";
import FadeIn from "../animations/FadeIn";
import RadialGradientBackground from "../Backgrounds/RadialGradientBackground";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#050505] pt-28 pb-16 sm:pt-32 lg:min-h-screen lg:flex lg:items-center lg:pt-24"
    >
      <RadialGradientBackground variant="hero" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="text-left">
            <FadeIn delay={0}>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/5 px-4 py-2 text-xs font-medium tracking-[0.2em] text-white/80 backdrop-blur-xl">
                <Sparkles className="h-4 w-4 text-primary" />
                PORTFOLIO 2026
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <p className="mt-6 max-w-xl text-sm font-medium uppercase tracking-[0.3em] text-primary/90">
                {PERSONAL_INFO.title} | Based in {PERSONAL_INFO.location}
              </p>
            </FadeIn>

            <FadeIn delay={180}>
              <h1 className="mt-4 max-w-3xl text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
                I design and build modern web experiences for people who expect
                polish.
              </h1>
            </FadeIn>

            <FadeIn delay={260}>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                {PERSONAL_INFO.name} creates fast, responsive interfaces with
                React, Next.js, Tailwind CSS, and Node.js. The focus is simple:
                clear product thinking, smooth interaction design, and code that
                scales.
              </p>
            </FadeIn>

            <FadeIn delay={340}>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-black transition-transform duration-300 hover:-translate-y-0.5 hover:bg-primary/90"
                >
                  Get in Touch
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:border-primary/30 hover:bg-white/10">
                  <Download className="h-4 w-4" />
                  Download Resume
                </button>
              </div>
            </FadeIn>

            <FadeIn delay={420}>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
                  >
                    <div className="text-2xl font-semibold text-white">
                      {stat.value}
                    </div>
                    <p className="mt-2 text-sm leading-6 text-white/60">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={500}>
              <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-white/60">
                <span className="text-white/40">Tools:</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                  React
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                  Next.js
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                  Tailwind CSS
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                  Node.js
                </span>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={200}>
            <div className="relative mx-auto w-full max-w-[520px]">
              <div className="absolute -inset-4 rounded-[2rem] bg-primary/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/30 backdrop-blur-2xl sm:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                      Featured Stack
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-white">
                      Builds that feel premium
                    </h2>
                  </div>
                  <div className="rounded-2xl border border-primary/20 bg-primary/10 p-3 text-primary">
                    <Star className="h-5 w-5 fill-current" />
                  </div>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-black/30 p-5">
                    <p className="text-sm text-white/60">Primary Focus</p>
                    <p className="mt-3 text-xl font-semibold text-white">
                      Responsive UI systems
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/60">
                      Designing layouts that remain sharp, readable, and fast
                      across mobile, tablet, and desktop.
                    </p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-black/30 p-5">
                    <p className="text-sm text-white/60">Development Style</p>
                    <p className="mt-3 text-xl font-semibold text-white">
                      Clean, modular, scalable
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/60">
                      Reusable components, clear hierarchy, and animation used
                      with restraint.
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    {
                      icon: Code,
                      label: "Frontend (React)",
                      tone: "text-primary",
                    },
                    { icon: Code, label: "Next.js", tone: "text-white" },
                    {
                      icon: Code,
                      label: "Tailwind CSS",
                      tone: "text-cyan-300",
                    },
                    { icon: Server, label: "Node.js", tone: "text-green-400" },
                    {
                      icon: Database,
                      label: "MongoDB",
                      tone: "text-emerald-400",
                    },
                    {
                      icon: Sparkles,
                      label: "Motion-ready",
                      tone: "text-primary",
                    },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.label}
                        className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                      >
                        <Icon className={`h-5 w-5 ${item.tone}`} />
                        <span className="text-sm font-medium text-white/80">
                          {item.label}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 rounded-3xl border border-primary/15 bg-gradient-to-r from-primary/10 via-white/5 to-white/5 p-5">
                  <p className="text-sm uppercase tracking-[0.25em] text-primary/80">
                    {PERSONAL_INFO.availability}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/70">
                    Available for portfolio sites, product landing pages,
                    dashboards, and frontend systems that need a sharper visual
                    identity.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Hero;
