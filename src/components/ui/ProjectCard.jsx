import React, { memo, useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Globe, Sparkles, Wand2 } from "lucide-react";

const themeSets = [
    {
        border: "from-emerald-400/35 via-white/10 to-transparent",
        glow: "from-emerald-400/20 via-emerald-400/8 to-transparent",
        accent: "text-emerald-300",
        pill: "border-emerald-400/20 bg-emerald-400/8",
    },
    {
        border: "from-cyan-400/35 via-white/10 to-transparent",
        glow: "from-cyan-400/20 via-cyan-400/8 to-transparent",
        accent: "text-cyan-300",
        pill: "border-cyan-400/20 bg-cyan-400/8",
    },
    {
        border: "from-fuchsia-400/35 via-white/10 to-transparent",
        glow: "from-fuchsia-400/20 via-fuchsia-400/8 to-transparent",
        accent: "text-fuchsia-300",
        pill: "border-fuchsia-400/20 bg-fuchsia-400/8",
    },
    {
        border: "from-amber-300/35 via-white/10 to-transparent",
        glow: "from-amber-300/20 via-amber-300/8 to-transparent",
        accent: "text-amber-200",
        pill: "border-amber-300/20 bg-amber-300/8",
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 28 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
    },
};

const ProjectCard = ({ project, index }) => {
    const shouldReduceMotion = useReducedMotion();
    const theme = useMemo(() => themeSets[index % themeSets.length], [index]);
    const isComingSoon = Boolean(project.comingSoon);
    const imageAlt = project.imageAlt || `${project.title} preview`;
    const liveUrl = project.liveUrl || project.demoUrl || "#";
    const displayUrl = liveUrl.replace(/^https?:\/\//, "");

    return (
        <motion.a
            href={isComingSoon ? "#" : liveUrl}
            target={isComingSoon ? undefined : "_blank"}
            rel={isComingSoon ? undefined : "noopener noreferrer"}
            variants={cardVariants}
            whileHover={
                shouldReduceMotion
                    ? undefined
                    : { y: -10, rotateX: 4, rotateY: -4, scale: 1.015 }
            }
            whileTap={shouldReduceMotion ? undefined : { scale: 0.99 }}
            aria-label={
                isComingSoon
                    ? "More projects coming soon"
                    : `Open ${project.title} live website in a new tab`
            }
            className="group relative block h-full cursor-pointer will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            style={{
                transformStyle: "preserve-3d",
            }}
        >
            <div
                className={`absolute inset-0 rounded-[2rem] bg-gradient-to-br ${theme.glow} blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100`}
            />

            <div
                className={`relative h-full overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b ${theme.border} p-[1px] shadow-[0_28px_90px_rgba(0,0,0,0.48)] transition-all duration-500 group-hover:border-white/20 group-hover:shadow-[0_36px_110px_rgba(0,0,0,0.62)] group-focus-visible:border-white/20`}
            >
                <div className="relative h-full overflow-hidden rounded-[calc(2rem-1px)] bg-[#080808]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.07),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.08),transparent_28%)]" />
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100">
                        <div className="absolute inset-0 rounded-[calc(2rem-1px)] ring-1 ring-inset ring-white/10" />
                    </div>

                    <div className="relative overflow-hidden border-b border-white/8">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0" />

                        {isComingSoon ? (
                            <div className="flex min-h-[240px] items-center justify-center bg-[linear-gradient(135deg,rgba(16,185,129,0.12),rgba(255,255,255,0.03),rgba(6,182,212,0.08))] px-6 py-8">
                                <div className="max-w-sm text-center">
                                    <div className={`mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl border ${theme.pill} text-white/80 backdrop-blur-md`}>
                                        <Wand2 className="h-6 w-6" />
                                    </div>
                                    <p className="text-xs uppercase tracking-[0.35em] text-white/45">
                                        More work on the way
                                    </p>
                                    <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">
                                        More Projects Coming Soon
                                    </h3>
                                    <p className="mt-4 text-sm leading-7 text-white/65">
                                        Fresh case studies will be added here soon as new builds go live.
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <div className="relative aspect-[16/11] overflow-hidden bg-[#101010]">
                                <img
                                    src={project.image}
                                    alt={imageAlt}
                                    loading="lazy"
                                    decoding="async"
                                    className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110 group-focus-visible:scale-110"
                                />
                                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.42)),radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_35%)] opacity-95 transition-opacity duration-500 group-hover:opacity-100" />
                                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/12 bg-black/30 px-3 py-1.5 text-[11px] uppercase tracking-[0.28em] text-white/70 backdrop-blur-md">
                                    <Sparkles className="h-3.5 w-3.5 text-white/70" />
                                    {project.category}
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="relative flex h-full flex-col gap-5 p-5 sm:p-6">
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <p className="text-[10px] uppercase tracking-[0.32em] text-white/35">
                                    Case Study {String(index + 1).padStart(2, "0")}
                                </p>
                                <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">
                                    {project.title}
                                </h3>
                            </div>
                            <div className={`rounded-full border px-3 py-1.5 text-[11px] uppercase tracking-[0.28em] ${theme.pill} ${theme.accent}`}>
                                {project.category}
                            </div>
                        </div>

                        <p className="text-sm leading-7 text-white/65 sm:text-[15px]">
                            {project.description}
                        </p>

                        {!isComingSoon ? (
                            <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/72 backdrop-blur-md transition-colors duration-300 group-hover:border-white/15 group-hover:bg-white/7 group-focus-visible:border-white/15">
                                <Globe className="h-4 w-4 shrink-0 text-emerald-300" />
                                <span className="truncate" title={liveUrl}>
                                    {displayUrl}
                                </span>
                            </div>
                        ) : null}

                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="rounded-full border border-white/10 bg-white/6 px-3 py-1.5 text-xs text-white/72 backdrop-blur-md"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="mt-auto flex flex-col gap-3 pt-2 sm:flex-row">
                            {isComingSoon ? (
                                <div className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/55">
                                    <Wand2 className="h-4 w-4" />
                                    Update coming soon
                                </div>
                            ) : (
                                <span
                                    aria-hidden="true"
                                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[0_16px_40px_rgba(255,255,255,0.18)] group-focus-visible:-translate-y-0.5"
                                >
                                    Visit Website
                                    <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                </span>
                            )}

                            {!isComingSoon ? (
                                <span className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/75 transition-colors duration-300 group-hover:border-white/20 group-hover:bg-white/10 group-hover:text-white">
                                    Open live site
                                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </span>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
        </motion.a>
    );
};

export default memo(ProjectCard);