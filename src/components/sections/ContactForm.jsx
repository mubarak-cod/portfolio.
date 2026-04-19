import React, { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, Loader2, Send, Sparkles, TriangleAlert } from "lucide-react";

const fieldVariants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
};

const initialForm = {
  name: "",
  email: "",
  message: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const signalLineVariants = {
  idle: {
    pathLength: 0.25,
    opacity: 0.2,
  },
  animate: {
    pathLength: [0.18, 0.55, 0.18],
    opacity: [0.18, 0.36, 0.18],
    transition: {
      duration: 5.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const ContactForm = () => {
  const shouldReduceMotion = useReducedMotion();
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [isHighlighted, setIsHighlighted] = useState(false);
  const messageRef = useRef(null);
  const highlightTimerRef = useRef(null);

  const fieldList = useMemo(
    () => [
      {
        name: "name",
        label: "Your name",
        type: "text",
        placeholder: " ",
        autoComplete: "name",
      },
      {
        name: "email",
        label: "Email address",
        type: "email",
        placeholder: " ",
        autoComplete: "email",
      },
    ],
    []
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    if (status !== "idle") {
      setStatus("idle");
      setFeedbackMessage("");
    }
  };

  useEffect(() => {
    const handleIntent = (event) => {
      const presetMessage = event.detail?.message || "Hi, I’d like to hire you for a project...";

      setFormData((current) =>
        current.message.trim()
          ? current
          : {
              ...current,
              message: presetMessage,
            }
      );

      setStatus("idle");
      setFeedbackMessage("");
      setIsHighlighted(true);

      window.clearTimeout(highlightTimerRef.current);
      highlightTimerRef.current = window.setTimeout(() => setIsHighlighted(false), 1600);

      window.setTimeout(() => {
        messageRef.current?.focus({ preventScroll: true });
        messageRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 180);
    };

    window.addEventListener("portfolio-contact-intent", handleIntent);

    return () => {
      window.removeEventListener("portfolio-contact-intent", handleIntent);
      window.clearTimeout(highlightTimerRef.current);
    };
  }, []);

  const validateForm = () => {
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      return "Please fill in all fields before sending.";
    }

    if (!emailPattern.test(trimmedEmail)) {
      return "Please enter a valid email address.";
    }

    if (trimmedMessage.length < 20) {
      return "Tell me a bit more so I can respond with something useful.";
    }

    return "";
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setStatus("error");
      setFeedbackMessage(validationError);
      return;
    }

    setStatus("loading");
    setFeedbackMessage("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1400));
      setStatus("success");
      setFeedbackMessage("Message sent. I’ll get back to you soon.");
      setFormData(initialForm);
    } catch {
      setStatus("error");
      setFeedbackMessage("Something went wrong. Please try again in a moment.");
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      animate={isHighlighted ? { scale: 1.01 } : { scale: 1 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className={`relative overflow-hidden rounded-[2rem] border bg-white/5 p-5 shadow-[0_30px_90px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:p-6 lg:p-7 ${
        isHighlighted ? "border-emerald-300/40 ring-1 ring-emerald-300/20" : "border-white/10"
      }`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: shouldReduceMotion ? 0 : 0.1,
            delayChildren: 0.08,
          },
        },
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.12),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.05),transparent_30%)]" />
      <div className="relative z-10">
        <motion.div variants={fieldVariants} className="mb-5 flex items-center gap-2 text-sm text-white/55">
          <Sparkles className="h-4 w-4 text-emerald-300" />
          Let’s keep this simple and fast.
        </motion.div>

        <div className="grid gap-4">
          {fieldList.map((field) => (
            <motion.div key={field.name} variants={fieldVariants} className="relative">
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                value={formData[field.name]}
                onChange={handleChange}
                autoComplete={field.autoComplete}
                placeholder={field.placeholder}
                className="peer w-full rounded-[1.25rem] border border-white/10 bg-black/25 px-4 pb-3 pt-6 text-white outline-none transition-all duration-300 placeholder-transparent focus:border-emerald-300/60 focus:bg-black/35 focus:shadow-[0_0_0_1px_rgba(110,231,183,0.18)]"
              />
              <label
                htmlFor={field.name}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-white/45 transition-all duration-300 peer-focus:top-4 peer-focus:translate-y-0 peer-focus:text-xs peer-focus:text-emerald-300 peer-not-placeholder-shown:top-4 peer-not-placeholder-shown:translate-y-0 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-white/55"
              >
                {field.label}
              </label>
            </motion.div>
          ))}

          <motion.div variants={fieldVariants} className="relative">
            <textarea
              id="message"
              ref={messageRef}
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              placeholder=" "
              className="peer w-full resize-none rounded-[1.5rem] border border-white/10 bg-black/25 px-4 pb-3 pt-6 text-white outline-none transition-all duration-300 placeholder-transparent focus:border-emerald-300/60 focus:bg-black/35 focus:shadow-[0_0_0_1px_rgba(110,231,183,0.18)]"
            />
            <label
              htmlFor="message"
              className="pointer-events-none absolute left-4 top-6 text-sm text-white/45 transition-all duration-300 peer-focus:top-4 peer-focus:text-xs peer-focus:text-emerald-300 peer-not-placeholder-shown:top-4 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-white/55"
            >
              Tell me about your project
            </label>
          </motion.div>
        </div>

        <AnimatePresence mode="wait">
          {feedbackMessage ? (
            <motion.div
              key={status}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className={`mt-4 flex items-start gap-3 rounded-[1.25rem] border px-4 py-3 text-sm ${
                status === "success"
                  ? "border-emerald-400/25 bg-emerald-400/10 text-emerald-100"
                  : "border-rose-400/25 bg-rose-400/10 text-rose-100"
              }`}
            >
              {status === "success" ? (
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
              ) : (
                <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0 text-rose-300" />
              )}
              <span>{feedbackMessage}</span>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <motion.button
          type="submit"
          disabled={status === "loading"}
          variants={fieldVariants}
          whileHover={shouldReduceMotion || status === "loading" ? undefined : { scale: 1.01, y: -1 }}
          whileTap={shouldReduceMotion || status === "loading" ? undefined : { scale: 0.99 }}
          className="mt-5 inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-5 py-4 text-sm font-semibold text-black transition-all duration-300 hover:shadow-[0_0_40px_rgba(110,231,183,0.22)] disabled:cursor-not-allowed disabled:opacity-80"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send Message
              <Send className="h-4 w-4" />
            </>
          )}
        </motion.button>

        <motion.div
          variants={fieldVariants}
          className="relative mt-4 overflow-hidden rounded-[1.25rem] border border-white/10 bg-black/20 px-4 py-3"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(34,197,94,0.10),transparent_34%),radial-gradient(circle_at_right,rgba(255,255,255,0.04),transparent_28%)]" />
          <div className="relative z-10 flex items-center justify-between gap-3">
            <p className="text-xs tracking-[0.16em] text-white/45 uppercase">Message channel active</p>
            <div className="relative h-8 w-20 shrink-0 opacity-80">
              <motion.svg
                viewBox="0 0 96 48"
                className="h-full w-full overflow-visible"
                aria-hidden="true"
              >
                <motion.path
                  d="M8 24 C20 10, 36 10, 48 24 S76 38, 88 24"
                  fill="none"
                  stroke="rgba(110,231,183,0.55)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  variants={signalLineVariants}
                  initial="idle"
                  animate={shouldReduceMotion ? "idle" : "animate"}
                />
              </motion.svg>
              <motion.span
                className="absolute left-1 top-1 h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_14px_rgba(110,231,183,0.45)]"
                animate={
                  shouldReduceMotion
                    ? undefined
                    : { x: [0, 28, 56, 28, 0], opacity: [0.3, 0.95, 0.6, 0.95, 0.3] }
                }
                transition={
                  shouldReduceMotion
                    ? undefined
                    : { duration: 5.5, repeat: Infinity, ease: "easeInOut" }
                }
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.form>
  );
};

export default ContactForm;