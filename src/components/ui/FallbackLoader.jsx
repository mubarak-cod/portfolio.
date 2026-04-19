import React from "react";

const ringStyle = (duration, delay = 0) => ({
  animation: `loaderOrbit ${duration}s linear infinite`,
  animationDelay: `${delay}s`,
});

const FallbackLoader = () => {
  return (
    <div className="fixed inset-0 z-[2000] grid place-items-center overflow-hidden bg-[#050709]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,197,94,0.16),transparent_34%),radial-gradient(circle_at_85%_20%,rgba(255,255,255,0.08),transparent_28%),radial-gradient(circle_at_50%_90%,rgba(16,185,129,0.14),transparent_34%)]" />

      <div className="relative flex flex-col items-center gap-7 px-6 text-center">
        <div className="relative h-44 w-44 sm:h-52 sm:w-52">
          <div
            className="absolute inset-0 rounded-full border border-emerald-300/25"
            style={ringStyle(5.5)}
          />
          <div
            className="absolute inset-3 rounded-full border border-white/20"
            style={ringStyle(4.2, -0.8)}
          />
          <div
            className="absolute inset-7 rounded-full border border-emerald-200/30"
            style={ringStyle(3.2, -0.3)}
          />

          <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-emerald-300 shadow-[0_0_22px_rgba(110,231,183,0.75)]" />
          <span className="absolute bottom-7 left-0 h-2 w-2 rounded-full bg-white/70 shadow-[0_0_16px_rgba(255,255,255,0.45)]" />
          <span className="absolute right-5 top-8 h-1.5 w-1.5 rounded-full bg-emerald-200/80" />

          <div className="absolute inset-[28%] grid place-items-center rounded-full border border-white/10 bg-black/35 backdrop-blur-xl">
            <div className="h-8 w-8 rounded-full bg-emerald-300/85 shadow-[0_0_30px_rgba(110,231,183,0.75)] animate-loaderCorePulse" />
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-[11px] uppercase tracking-[0.38em] text-white/45">Initializing Portfolio</p>
          <h2 className="text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
            Building the experience...
          </h2>
          <div className="mx-auto mt-2 h-1.5 w-52 overflow-hidden rounded-full bg-white/10">
            <span className="block h-full w-1/2 rounded-full bg-gradient-to-r from-emerald-300 via-white to-emerald-300 animate-loaderSlide" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FallbackLoader;