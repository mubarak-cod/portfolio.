import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const gridStyles = {
  backgroundImage: [
    "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px)",
    "linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
  ].join(", "),
  backgroundSize: "72px 72px",
};

const floatingBlob = (className, gradient, animate, transition) => (
  <motion.div
    className={`absolute rounded-full blur-3xl ${className}`}
    style={{ background: gradient }}
    animate={animate}
    transition={transition}
  />
);

const ProjectsBackground = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.04),transparent_24%)]" />

      <motion.div
        className="absolute inset-0 opacity-25"
        style={gridStyles}
        animate={
          shouldReduceMotion
            ? undefined
            : { backgroundPosition: ["0px 0px", "96px 96px"] }
        }
        transition={
          shouldReduceMotion
            ? undefined
            : { duration: 18, repeat: Infinity, ease: "linear" }
        }
      />

      <motion.div
        className="absolute left-1/2 top-0 h-[62rem] w-[62rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(34,197,94,0.18)_0%,rgba(34,197,94,0.08)_24%,transparent_68%)] opacity-80 blur-3xl"
        animate={
          shouldReduceMotion
            ? undefined
            : { scale: [1, 1.08, 1], y: [0, 18, 0], opacity: [0.55, 0.78, 0.55] }
        }
        transition={
          shouldReduceMotion
            ? undefined
            : { duration: 14, repeat: Infinity, ease: "easeInOut" }
        }
      />

      {floatingBlob(
        "-left-24 top-32 h-72 w-72 bg-[radial-gradient(circle,rgba(16,185,129,0.35)_0%,rgba(16,185,129,0.12)_36%,transparent_72%)]",
        "radial-gradient(circle, rgba(16,185,129,0.35) 0%, rgba(16,185,129,0.12) 36%, transparent 72%)",
        shouldReduceMotion
          ? undefined
          : { x: [0, 36, 0], y: [0, -18, 0], scale: [1, 1.08, 1] },
        shouldReduceMotion
          ? undefined
          : { duration: 11, repeat: Infinity, ease: "easeInOut" }
      )}

      {floatingBlob(
        "right-[-6rem] top-40 h-[28rem] w-[28rem] bg-[radial-gradient(circle,rgba(255,255,255,0.16)_0%,rgba(34,197,94,0.10)_32%,transparent_74%)]",
        "radial-gradient(circle, rgba(255,255,255,0.16) 0%, rgba(34,197,94,0.10) 32%, transparent 74%)",
        shouldReduceMotion
          ? undefined
          : { x: [0, -30, 0], y: [0, 16, 0], scale: [1, 1.1, 1] },
        shouldReduceMotion
          ? undefined
          : { duration: 13, repeat: Infinity, ease: "easeInOut", delay: 0.4 }
      )}

      <motion.div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/70 to-transparent"
        animate={shouldReduceMotion ? undefined : { opacity: [0.2, 0.85, 0.2] }}
        transition={shouldReduceMotion ? undefined : { duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black via-black/60 to-transparent"
        animate={shouldReduceMotion ? undefined : { opacity: [0.55, 0.75, 0.55] }}
        transition={shouldReduceMotion ? undefined : { duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute inset-y-0 left-1/2 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent"
        animate={shouldReduceMotion ? undefined : { opacity: [0.15, 0.45, 0.15], scaleY: [0.9, 1.05, 0.9] }}
        transition={shouldReduceMotion ? undefined : { duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,transparent_52%,rgba(0,0,0,0.12)_100%)]" />
    </div>
  );
};

export default ProjectsBackground;