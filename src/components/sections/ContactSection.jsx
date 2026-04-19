import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Phone, Sparkles } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiGithub, SiInstagram } from "react-icons/si";
import { PERSONAL_INFO } from "../../utils/contestants";
import ContactForm from "./ContactForm";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/", icon: SiGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: FaLinkedinIn },
  { label: "Instagram", href: "https://www.instagram.com/", icon: SiInstagram },
];

const contactRows = [
  {
    label: "Email",
    value: "hello@yourportfolio.dev",
    href: "mailto:hello@yourportfolio.dev",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+234 800 000 0000",
    href: "tel:+2348000000000",
    icon: Phone,
  },
  {
    label: "Location",
    value: PERSONAL_INFO.location,
    href: null,
    icon: MapPin,
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

const ContactSection = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden border-t border-white/5 bg-[#050505] py-24 sm:py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.14),transparent_28%),radial-gradient(circle_at_right,rgba(255,255,255,0.06),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent)]" />
      <motion.div
        className="absolute left-[-8rem] top-16 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.35)_0%,rgba(16,185,129,0.12)_34%,transparent_72%)] blur-3xl"
        animate={shouldReduceMotion ? undefined : { x: [0, 30, 0], y: [0, -18, 0], scale: [1, 1.06, 1] }}
        transition={shouldReduceMotion ? undefined : { duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-10rem] bottom-8 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.12)_0%,rgba(34,197,94,0.08)_34%,transparent_72%)] blur-3xl"
        animate={shouldReduceMotion ? undefined : { x: [0, -24, 0], y: [0, 14, 0], scale: [1, 1.08, 1] }}
        transition={shouldReduceMotion ? undefined : { duration: 14, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.22 }}
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.3em] text-white/60 backdrop-blur-xl">
            <Sparkles className="h-4 w-4 text-emerald-300" />
            Contact
          </motion.div>
          <motion.h2 variants={itemVariants} className="mt-6 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
            Got an idea? Let’s talk.
          </motion.h2>
          <motion.p variants={itemVariants} className="mt-6 text-base leading-8 text-white/65 sm:text-lg">
            If you need a product site, a sharper frontend, or a collaboration that feels thoughtful and fast, send a note. I respond best to clear ideas, ambitious goals, and good timing.
          </motion.p>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
          <motion.aside
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.34)] backdrop-blur-2xl sm:p-7"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.18 }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.14),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.04),transparent_30%)]" />
            <div className="relative z-10 flex h-full flex-col justify-between gap-8">
              <div>
                <motion.p variants={itemVariants} className="text-sm uppercase tracking-[0.28em] text-white/40">
                  Let’s build something great
                </motion.p>
                <motion.p variants={itemVariants} className="mt-5 max-w-xl text-2xl font-medium leading-tight text-white sm:text-3xl">
                  I design and build polished portfolio sites, landing pages, and product experiences that feel premium from the first scroll.
                </motion.p>
                <motion.p variants={itemVariants} className="mt-5 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
                  Tell me what you’re building, what matters most, and where you want the experience to land. I’ll help shape the idea into something clear, sharp, and launch-ready.
                </motion.p>
              </div>

              <motion.div variants={itemVariants} className="grid gap-3">
                {contactRows.map((contact) => {
                  const Icon = contact.icon;

                  const card = (
                    <div className="flex items-center gap-4 rounded-[1.25rem] border border-white/10 bg-black/25 px-4 py-4 transition-colors duration-300 hover:border-emerald-300/30 hover:bg-black/30">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-emerald-300">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs uppercase tracking-[0.24em] text-white/35">{contact.label}</p>
                        <p className="mt-1 truncate text-sm font-medium text-white/85">{contact.value}</p>
                      </div>
                      {contact.href ? <ArrowUpRight className="h-4 w-4 text-white/35" /> : null}
                    </div>
                  );

                  return contact.href ? (
                    <a key={contact.label} href={contact.href} className="block">
                      {card}
                    </a>
                  ) : (
                    <div key={contact.label}>{card}</div>
                  );
                })}
              </motion.div>

              <motion.div variants={itemVariants} className="rounded-[1.5rem] border border-white/10 bg-black/25 p-4">
                <p className="text-xs uppercase tracking-[0.28em] text-white/40">Find me online</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;

                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-300/30 hover:text-white"
                      >
                        <Icon className="h-4 w-4" />
                        {social.label}
                      </a>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </motion.aside>

          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;