import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { testimonials } from "../../data/testimonials";
import FadeIn from "../animations/FadeIn";
import TestimonialCard from "../ui/TestimonialCard";

const getSlidesPerView = (width) => {
  if (width >= 1280) return 3;
  if (width >= 768) return 2;
  return 1;
};

const Testimonials = () => {
  const shouldReduceMotion = useReducedMotion();
  const viewportRef = useRef(null);
  const autoplayRef = useRef(null);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [activeIndex, setActiveIndex] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [isJumping, setIsJumping] = useState(false);

  const loopOffset = slidesPerView;
  const loopedTestimonials = useMemo(
    () => [
      ...testimonials.slice(-slidesPerView),
      ...testimonials,
      ...testimonials.slice(0, slidesPerView),
    ],
    [slidesPerView]
  );

  useEffect(() => {
    const updateMeasurements = () => {
      const width = viewportRef.current?.getBoundingClientRect().width || 0;
      setViewportWidth(width);
      setSlidesPerView(getSlidesPerView(window.innerWidth));
    };

    updateMeasurements();

    const observerTarget = viewportRef.current;
    let observer;

    if (observerTarget && typeof ResizeObserver !== "undefined") {
      observer = new ResizeObserver(updateMeasurements);
      observer.observe(observerTarget);
    } else {
      window.addEventListener("resize", updateMeasurements);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      } else {
        window.removeEventListener("resize", updateMeasurements);
      }
    };
  }, []);

  useEffect(() => {
    setActiveIndex(slidesPerView);
    setIsJumping(false);
  }, [slidesPerView]);

  useEffect(() => {
    if (shouldReduceMotion || isPaused || testimonials.length <= 1) {
      return undefined;
    }

    autoplayRef.current = window.setInterval(() => {
      setActiveIndex((current) => current + 1);
    }, 4800);

    return () => {
      if (autoplayRef.current) {
        window.clearInterval(autoplayRef.current);
      }
    };
  }, [isPaused, shouldReduceMotion]);

  useEffect(() => {
    if (shouldReduceMotion) {
      return undefined;
    }

    const upperBound = loopOffset + testimonials.length;
    const lowerBound = loopOffset - 1;

    if (activeIndex === upperBound) {
      const timer = window.setTimeout(() => {
        setIsJumping(true);
        setActiveIndex(loopOffset);
        window.setTimeout(() => setIsJumping(false), 30);
      }, 700);

      return () => window.clearTimeout(timer);
    }

    if (activeIndex === lowerBound) {
      const timer = window.setTimeout(() => {
        setIsJumping(true);
        setActiveIndex(loopOffset + testimonials.length - 1);
        window.setTimeout(() => setIsJumping(false), 30);
      }, 700);

      return () => window.clearTimeout(timer);
    }

    return undefined;
  }, [activeIndex, loopOffset, shouldReduceMotion]);

  const slideWidthPx = viewportWidth > 0 ? viewportWidth / slidesPerView : 0;
  const translateX = -(activeIndex * slideWidthPx);

  const goNext = () => setActiveIndex((current) => current + 1);
  const goPrev = () => setActiveIndex((current) => current - 1);

  const carouselTransition = isJumping
    ? { duration: 0 }
    : { type: "spring", stiffness: 130, damping: 22, mass: 0.85 };

  return (
    <section
      id="testimonials"
      className="relative isolate overflow-hidden border-t border-white/5 bg-[#050505] py-24 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.08),transparent_24%)]" />
      <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <FadeIn delay={80}>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/8 px-4 py-2 text-xs font-medium uppercase tracking-[0.32em] text-emerald-200 backdrop-blur-xl">
              <Sparkles className="h-3.5 w-3.5" />
              Client Feedback
            </div>
          </FadeIn>

          <FadeIn delay={160}>
            <h2 className="mt-6 text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl">
              What Clients Say
            </h2>
          </FadeIn>

          <FadeIn delay={240}>
            <p className="mt-6 text-base leading-8 text-white/65 sm:text-lg">
              Real feedback from clients I&apos;ve worked with across different industries and countries.
            </p>
          </FadeIn>
        </div>

        <div className="relative mt-14">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div className="text-sm text-white/45">
              Smooth autoplay, swipe gestures, and premium motion built for trust.
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous testimonial"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/7 text-white shadow-[0_16px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-300 hover:border-emerald-400/40 hover:bg-emerald-400/10 hover:text-white hover:shadow-[0_18px_45px_rgba(16,185,129,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Next testimonial"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/7 text-white shadow-[0_16px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-300 hover:border-emerald-400/40 hover:bg-emerald-400/10 hover:text-white hover:shadow-[0_18px_45px_rgba(16,185,129,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div
            ref={viewportRef}
            className="overflow-hidden rounded-[2.25rem]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocusCapture={() => setIsPaused(true)}
            onBlurCapture={() => setIsPaused(false)}
          >
            <motion.div
              className="flex touch-pan-y select-none"
              drag={shouldReduceMotion ? false : "x"}
              dragElastic={0.08}
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(_, info) => {
                if (shouldReduceMotion) {
                  return;
                }

                if (info.offset.x < -60) {
                  goNext();
                } else if (info.offset.x > 60) {
                  goPrev();
                }
              }}
              animate={{ x: translateX }}
              transition={carouselTransition}
              style={{ willChange: "transform" }}
            >
              {loopedTestimonials.map((testimonial, index) => (
                <div
                  key={`${testimonial.id}-${index}`}
                  className="shrink-0 px-3"
                  style={{ width: `${100 / slidesPerView}%` }}
                >
                  <TestimonialCard testimonial={testimonial} index={index} />
                </div>
              ))}
            </motion.div>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-sm text-white/45">
            <span>
              {String(((activeIndex - loopOffset + testimonials.length) % testimonials.length) + 1).padStart(2, "0")}
              /{String(testimonials.length).padStart(2, "0")}
            </span>
            <span>Drag or swipe to browse client stories.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;