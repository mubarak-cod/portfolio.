import React, { memo, useMemo, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SiGithub } from "react-icons/si";
import {
    ArrowUpRight,
    Globe,
    LayoutPanelLeft,
    Monitor,
    Sparkles,
} from "lucide-react";

const themeSets = [
    {
        border: "from-emerald-400/40 via-white/10 to-transparent",
        glow: "from-emerald-400/25 via-emerald-400/10 to-transparent",
        accent: "text-emerald-300",
        wash: "from-emerald-400/18 via-black/0 to-black/0",
    },
    {
        border: "from-cyan-400/40 via-white/10 to-transparent",
        glow: "from-cyan-400/25 via-cyan-400/10 to-transparent",
        accent: "text-cyan-300",
        wash: "from-cyan-400/18 via-black/0 to-black/0",
    },
    {
        border: "from-fuchsia-400/40 via-white/10 to-transparent",
        glow: "from-fuchsia-400/25 via-fuchsia-400/10 to-transparent",
        accent: "text-fuchsia-300",
        wash: "from-fuchsia-400/18 via-black/0 to-black/0",
    },
    {
        border: "from-amber-300/40 via-white/10 to-transparent",
        glow: "from-amber-300/25 via-amber-300/10 to-transparent",
        accent: "text-amber-200",
        wash: "from-amber-300/18 via-black/0 to-black/0",
    },
];

const ProjectCard = ({ project, index, onOpen }) => {
    const cardRef = useRef(null);
    const shouldReduceMotion = useReducedMotion();
    const theme = useMemo(() => themeSets[index % themeSets.length], [index]);

    return (
        <motion.article
            ref={cardRef}
            variants={{
                hidden: { opacity: 0, y: 42, scale: 0.97 },
                show: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
                },
            }}
            whileHover={
                shouldReduceMotion
                    ? undefined
                    : { y: -8, rotateX: 5, rotateY: -6, scale: 1.01 }
            }
            whileTap={shouldReduceMotion ? undefined : { scale: 0.99 }}
            className="group relative h-full"
            style={{
                transformStyle: "preserve-3d",
                contentVisibility: "auto",
                containIntrinsicSize: "720px",
            }}
        >
            <div
                className={`absolute inset-0 rounded-[2rem] bg-gradient-to-br ${theme.glow} blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
            />

            <div
                className={`relative h-full overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b ${theme.border} p-[1px] shadow-[0_30px_100px_rgba(0,0,0,0.55)]`}
            >
                <div className="relative h-full overflow-hidden rounded-[calc(2rem-1px)] bg-[#0b0b0b]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.06),transparent_30%)]" />

                    <div className="border-b border-white/8 bg-white/3 px-4 py-3 sm:px-5">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1.5">
                                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                            </div>
                            <div className="flex-1 rounded-full border border-white/8 bg-black/40 px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-white/45">
                                {project.demoUrl.replace(/^https?:\/\//, "")}
                            </div>
                        </div>
                    </div>

                    <motion.div
                        className="relative grid gap-5 px-4 py-4 sm:px-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch lg:gap-6 lg:px-6 lg:py-6"
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        <div className="relative flex min-h-[250px] flex-col justify-between overflow-hidden rounded-[1.8rem] border border-white/10 bg-gradient-to-br from-white/[0.08] via-white/[0.04] to-transparent p-5 sm:p-6">
                            <div className={`absolute inset-0 bg-gradient-to-br ${theme.wash} opacity-60`} />
                            <div className="relative z-10 flex items-center justify-between gap-3">
                                <div className={`inline-flex items-center gap-2 rounded-full border border-white/12 bg-black/30 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.28em] ${theme.accent}`}>
                                    <Sparkles className="h-3.5 w-3.5" />
                                    {project.category}
                                </div>
                                <span className="rounded-full border border-white/12 bg-black/30 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-white/45">
                                    Case Study {String(index + 1).padStart(2, "0")}
                                </span>
                            </div>

                            <div className="relative z-10 mt-6">
                                <p className="text-xs uppercase tracking-[0.32em] text-white/40">
                                    Live-style preview
                                </p>
                                <h3 className="mt-3 max-w-md text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                                    {project.title}
                                </h3>
                                <p className="mt-4 max-w-lg text-sm leading-7 text-white/70 sm:text-[15px]">
                                    {project.description}
                                </p>
                            </div>

                            <div className="relative z-10 mt-7 flex flex-wrap gap-2">
                                {project.technologies.slice(0, 3).map((tech) => (
                                    <span
                                        key={tech}
                                        className="rounded-full border border-white/10 bg-black/35 px-3 py-1.5 text-xs text-white/70 backdrop-blur-md"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="relative z-10 mt-6 grid grid-cols-3 gap-3">
                                {Object.entries(project.metrics).slice(0, 3).map(([key, value]) => (
                                    <div
                                        key={key}
                                        className="rounded-2xl border border-white/10 bg-black/25 p-3 backdrop-blur-md"
                                    >
                                        <p className="text-[10px] uppercase tracking-[0.22em] text-white/40">
                                            {key}
                                        </p>
                                        <p className="mt-2 text-sm font-semibold text-white">{value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative min-h-[250px] overflow-hidden rounded-[1.8rem] border border-white/10 bg-black/30 p-4 sm:p-5">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.09),transparent_36%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent)]" />
                            <div className="relative z-10 flex h-full flex-col gap-4">
                                <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.28em] text-white/40">
                                    <span className="inline-flex items-center gap-2">
                                        <Monitor className="h-3.5 w-3.5 text-white/60" />
                                        Browser frame
                                    </span>
                                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-white/55">
                                        <LayoutPanelLeft className="h-3.5 w-3.5" />
                                        Motion ready
                                    </span>
                                </div>

                                <div className="relative flex min-h-[180px] flex-1 overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#07110b] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,197,94,0.28),transparent_30%),radial-gradient(circle_at_80%_25%,rgba(255,255,255,0.08),transparent_22%),radial-gradient(circle_at_50%_100%,rgba(16,185,129,0.18),transparent_35%)]" />

                                    <div className="relative z-10 grid flex-1 grid-rows-[auto_1fr_auto] gap-4 p-5 sm:p-6">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                                                    Preview surface
                                                </p>
                                                <p className="mt-2 text-xl font-semibold text-white">
                                                    {project.title}
                                                </p>
                                            </div>
                                            <div className={`rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs ${theme.accent}`}>
                                                {project.category}
                                            </div>
                                        </div>

                                        <div className="grid gap-3 self-center">
                                            <div className="rounded-[1.2rem] border border-white/10 bg-white/7 p-4 backdrop-blur-md">
                                                <div className="flex items-center justify-between text-sm text-white/60">
                                                    <span>Hero section</span>
                                                    <span className={theme.accent}>01</span>
                                                </div>
                                                <div className="mt-3 h-3 w-2/3 rounded-full bg-white/12" />
                                                <div className="mt-2 h-3 w-1/2 rounded-full bg-white/8" />
                                            </div>
                                            <div className="grid grid-cols-2 gap-3">
                                                <div className="rounded-[1.2rem] border border-white/10 bg-black/25 p-4 backdrop-blur-md">
                                                    <p className="text-[10px] uppercase tracking-[0.24em] text-white/40">
                                                        Interactions
                                                    </p>
                                                    <p className="mt-3 text-sm text-white/75">
                                                        Scroll, hover, and tap behaviors tuned for mobile.
                                                    </p>
                                                </div>
                                                <div className="rounded-[1.2rem] border border-white/10 bg-black/25 p-4 backdrop-blur-md">
                                                    <p className="text-[10px] uppercase tracking-[0.24em] text-white/40">
                                                        Stack
                                                    </p>
                                                    <p className="mt-3 text-sm text-white/75">
                                                        {project.technologies.slice(0, 2).join(" + ")}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="rounded-full border border-white/10 bg-black/35 px-2.5 py-1 text-[11px] text-white/70"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="grid gap-3 sm:grid-cols-2">
                                    <button
                                        type="button"
                                        onClick={() => onOpen(project)}
                                        className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-semibold text-black transition-transform duration-300 hover:-translate-y-0.5"
                                    >
                                        Open case study
                                        <ArrowUpRight className="h-4 w-4" />
                                    </button>
                                    <div className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/65">
                                        <SiGithub className="h-4 w-4" />
                                        {project.githubUrl ? "Code available" : "Private repository"}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/8 px-4 py-4 sm:px-5">
                        <div className="flex items-center gap-2 text-sm text-white/55">
                            <Globe className="h-4 w-4 text-white/35" />
                            Designed as a product-style landing page preview.
                        </div>
                        <button
                            type="button"
                            onClick={() => onOpen(project)}
                            className="inline-flex items-center gap-2 text-sm font-medium text-white transition-colors duration-300 hover:text-emerald-300"
                        >
                            View details
                            <ArrowUpRight className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </div>
        </motion.article>
    );
};

export default memo(ProjectCard);