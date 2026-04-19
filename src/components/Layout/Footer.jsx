import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Mail, ChevronUp } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiGithub, SiInstagram } from "react-icons/si";
import { Nav_LINKS, PERSONAL_INFO } from "../../utils/contestants";
import { scrollToSection } from "../../hooks/useScrollSpy";
import FadeIn from "../animations/FadeIn";

const socialLinks = [
    { label: "GitHub", href: "https://github.com/", icon: SiGithub },
    { label: "LinkedIn", href: "https://www.linkedin.com/", icon: FaLinkedinIn },
    { label: "Instagram", href: "https://www.instagram.com/", icon: SiInstagram },
    { label: "Email", href: "mailto:hello@yourportfolio.dev", icon: Mail },
];

const footerVariants = {
    hidden: { opacity: 0, y: 24 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
    },
};

const Footer = () => {
    const shouldReduceMotion = useReducedMotion();

    const handleScrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <motion.footer
            className="relative overflow-hidden border-t border-white/10 bg-[#08101a] text-white"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={footerVariants}
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent_24%)]" />
            <motion.div
                className="absolute right-[-6rem] top-[-4rem] h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(34,197,94,0.16)_0%,rgba(34,197,94,0.06)_38%,transparent_72%)] blur-3xl"
                animate={shouldReduceMotion ? undefined : { x: [0, -18, 0], y: [0, 14, 0], scale: [1, 1.06, 1] }}
                transition={shouldReduceMotion ? undefined : { duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative z-10 mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
                <div className="grid gap-10 lg:grid-cols-[1.15fr_0.95fr_0.9fr] lg:items-start">
                    <div>
                        <button
                            type="button"
                            onClick={handleScrollTop}
                            className="inline-flex items-center gap-2 text-2xl font-semibold tracking-[-0.04em] text-white transition-colors duration-300 hover:text-emerald-300"
                        >
                            {PERSONAL_INFO.name}
                            <ChevronUp className="h-5 w-5" />
                        </button>
                        <p className="mt-4 max-w-md text-sm leading-7 text-white/60 sm:text-base">
                            I build polished interfaces with the kind of clarity, motion, and structure that make a portfolio feel like a product.
                        </p>
                    </div>

                    <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-white/40">Navigation</p>
                        <div className="mt-5 flex flex-col gap-3">
                            {Nav_LINKS.map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => scrollToSection(link.id)}
                                    className="group inline-flex w-fit items-center gap-2 text-left text-base text-white/75 transition-colors duration-300 hover:text-white"
                                >
                                    <span className="relative">
                                        {link.label}
                                        <span className="absolute -bottom-1 left-0 h-px w-0 bg-emerald-300 transition-all duration-300 group-hover:w-full" />
                                    </span>
                                    <ArrowUpRight className="h-4 w-4 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-white/40">Connect</p>
                        <div className="mt-5 flex flex-wrap gap-3">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;

                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-300/30 hover:text-white hover:shadow-[0_0_24px_rgba(110,231,183,0.12)]"
                                    >
                                        <Icon className="h-4 w-4" />
                                        {social.label}
                                    </a>
                                );
                            })}
                        </div>

                        <button
                            type="button"
                            onClick={handleScrollTop}
                            className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/70 transition-all duration-300 hover:border-emerald-300/30 hover:text-white"
                        >
                            Back to top
                            <ChevronUp className="h-4 w-4" />
                        </button>
                    </div>
                </div>

                <FadeIn delay={120}>
                    <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
                        <p>
                            © {new Date().getFullYear()} {PERSONAL_INFO.name}. Crafted with care.
                        </p>
                        <p>
                            Available for freelance, product work, and clean frontend systems.
                        </p>
                    </div>
                </FadeIn>
            </div>
        </motion.footer>
    );
};

export default Footer;