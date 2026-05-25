import React, { memo, useMemo, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { Quote, Star, BadgeCheck, Globe, UserRound } from "lucide-react";

const themeSets = [
  {
    glow: "from-emerald-400/20 via-emerald-400/6 to-transparent",
    ring: "from-emerald-400/35 via-white/10 to-transparent",
    accent: "text-emerald-200",
  },
  {
    glow: "from-cyan-400/20 via-cyan-400/6 to-transparent",
    ring: "from-cyan-400/35 via-white/10 to-transparent",
    accent: "text-cyan-200",
  },
  {
    glow: "from-fuchsia-400/20 via-fuchsia-400/6 to-transparent",
    ring: "from-fuchsia-400/35 via-white/10 to-transparent",
    accent: "text-fuchsia-200",
  },
  {
    glow: "from-amber-300/20 via-amber-300/6 to-transparent",
    ring: "from-amber-300/35 via-white/10 to-transparent",
    accent: "text-amber-100",
  },
];

const TestimonialCard = ({ testimonial, index }) => {
  const shouldReduceMotion = useReducedMotion();
  const theme = useMemo(() => themeSets[index % themeSets.length], [index]);
  const [avatarFailed, setAvatarFailed] = useState(false);
  const avatarUrl = useMemo(() => {
    const seed = encodeURIComponent(testimonial.avatarSeed || testimonial.name);
    return `https://api.dicebear.com/7.x/notionists/svg?seed=${seed}&backgroundColor=0f172a,111827,0b1220&radius=24`;
  }, [testimonial.avatarSeed, testimonial.name]);
  const initials = useMemo(() => {
    return testimonial.name
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase())
      .join("");
  }, [testimonial.name]);

  return (
    <article
      className={`group relative h-full transition-transform duration-500 ${shouldReduceMotion ? "" : "hover:-translate-y-2"}`}
    >
      <div className={`absolute inset-0 rounded-[2rem] bg-gradient-to-br ${theme.glow} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`} />

      <div className={`relative h-full overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b ${theme.ring} p-[1px] shadow-[0_24px_80px_rgba(0,0,0,0.42)] transition-all duration-500 group-hover:border-white/20 group-hover:shadow-[0_30px_90px_rgba(0,0,0,0.58)]`}>
        <div className="relative h-full overflow-hidden rounded-[calc(2rem-1px)] bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6 sm:p-7 backdrop-blur-xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.08),transparent_24%)] opacity-90" />

          <div className="relative flex h-full flex-col">
            <div className="flex items-start gap-4">
              <div className="relative shrink-0">
                <div className={`absolute -inset-2 rounded-[1.15rem] bg-gradient-to-br ${theme.glow} blur-lg opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
                {avatarFailed ? (
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-[1.15rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),rgba(16,185,129,0.18)_36%,rgba(15,23,42,0.95)_100%)] text-sm font-semibold text-white shadow-lg transition-transform duration-500 group-hover:scale-105">
                    {initials}
                  </div>
                ) : (
                  <img
                    src={avatarUrl}
                    alt={`${testimonial.name} avatar`}
                    loading="lazy"
                    decoding="async"
                    onError={() => setAvatarFailed(true)}
                    className="relative h-16 w-16 rounded-[1.15rem] border border-white/10 bg-white/5 object-cover shadow-lg transition-transform duration-500 group-hover:scale-105"
                  />
                )}
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="truncate text-lg font-semibold tracking-[-0.03em] text-white sm:text-xl">
                    {testimonial.name}
                  </h3>
                  <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/6 px-2.5 py-1 text-[11px] font-medium text-white/70 backdrop-blur-md">
                    <Globe className="h-3.5 w-3.5" />
                    {testimonial.flag} {testimonial.country}
                  </span>
                </div>

                <p className="mt-1 text-sm text-white/60 sm:text-[15px]">
                  {testimonial.role} at {testimonial.company}
                </p>

                <div className="mt-3 flex items-center gap-1.5 text-amber-300" aria-label={`${testimonial.rating} out of 5 stars`}>
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className={`h-4 w-4 ${starIndex < testimonial.rating ? "fill-current" : "text-white/20"}`}
                    />
                  ))}
                  <span className="ml-1 text-xs font-medium text-white/50">5.0</span>
                </div>
              </div>
            </div>

            <div className="relative mt-6 flex-1">
              <Quote className="absolute left-0 top-0 h-9 w-9 text-white/12" />
              <blockquote className="relative pl-6 text-sm leading-7 text-white/74 sm:text-[15px]">
                {testimonial.quote}
              </blockquote>
            </div>

            <div className="mt-6 flex items-center justify-between gap-3 border-t border-white/8 pt-5">
              <div className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium ${theme.accent} backdrop-blur-md`}>
                <BadgeCheck className="h-3.5 w-3.5" />
                Trusted feedback
              </div>

              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-white/38">
                Verified client voice
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default memo(TestimonialCard);