import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MessageCircleMore, Sparkles } from "lucide-react";
import { CONTACT_LINKS } from "../../utils/contactLinks";

const FloatingWhatsApp = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.a
      href={CONTACT_LINKS.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18, scale: 0.96 }}
      animate={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: [0, -4, 0], scale: 1 }}
      transition={shouldReduceMotion ? { duration: 0 } : { duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
      whileHover={shouldReduceMotion ? undefined : { scale: 1.04, y: -2 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
      className="group fixed bottom-5 right-5 z-[1100] inline-flex items-center gap-3 rounded-full border border-emerald-300/20 bg-black/55 px-4 py-3 text-sm font-medium text-white shadow-[0_18px_55px_rgba(0,0,0,0.45)] backdrop-blur-2xl transition-colors duration-300 hover:border-emerald-300/40 hover:bg-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:bottom-6 sm:right-6 sm:px-5"
    >
      <span className="absolute inset-0 rounded-full bg-emerald-400/15 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
      <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-emerald-300/15" />

      <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-full bg-emerald-400 text-black shadow-[0_12px_30px_rgba(16,185,129,0.35)] transition-transform duration-300 group-hover:scale-105">
        <MessageCircleMore className="h-5 w-5" />
      </span>

      <span className="relative hidden flex-col leading-tight sm:flex">
        <span className="inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.24em] text-emerald-200/80">
          <Sparkles className="h-3 w-3" />
          Available now
        </span>
        <span className="mt-0.5 text-sm text-white">Chat on WhatsApp</span>
      </span>
    </motion.a>
  );
};

export default FloatingWhatsApp;