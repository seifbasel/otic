"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

const slides = [
  { src: "/1.jpg", alt: "1" },
  { src: "/2.jpg", alt: "2" },
  { src: "/3.jpg", alt: "3" },
  { src: "/4.jpg", alt: "4" },
  { src: "/5.jpg", alt: "5" },
  { src: "/6.jpg", alt: "6" },
];

function IconSculpture() {
  return (
    <svg
      viewBox="0 0 520 100vh"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMinYMid meet"
      className="absolute left-0 top-0 h-full w-120 pointer-events-none opacity-50 mix-blend-soft-light"
      aria-hidden="true"
    >
      <defs>
        <clipPath id="sculptureClip">
          <rect x="0" y="0" width="520" height="1080" />
        </clipPath>
      </defs>
      <g clipPath="url(#sculptureClip)">
        {/* Outer arch — ghost fill */}
        <rect
          x="60"
          y="22%"
          width="340"
          height="66%"
          rx="170"
          fill="#ffffff"
          fillOpacity="0.06"
        />
        <rect
          x="60"
          y="22%"
          width="340"
          height="66%"
          rx="170"
          fill="none"
          stroke="#ffffff"
          strokeWidth="0.5"
          strokeOpacity="0.25"
        />

        {/* Mid arch */}
        <rect
          x="110"
          y="25%"
          width="240"
          height="60%"
          rx="120"
          fill="#ffffff"
          fillOpacity="0.05"
        />
        <rect
          x="110"
          y="25%"
          width="240"
          height="60%"
          rx="120"
          fill="none"
          stroke="#ffffff"
          strokeWidth="0.5"
          strokeOpacity="0.3"
        />

        {/* Outer dashed orbit */}
        <rect
          x="20"
          y="18%"
          width="420"
          height="72%"
          rx="210"
          fill="none"
          stroke="#c9a96e"
          strokeWidth="0.4"
          strokeDasharray="5 12"
          strokeOpacity="0.2"
        />

        {/* Door legs — bottom solid blocks (icon DNA) */}
        <rect
          x="60"
          y="82%"
          width="120"
          height="18%"
          rx="0"
          fill="#ffffff"
          fillOpacity="0.08"
        />
        <rect
          x="280"
          y="82%"
          width="120"
          height="18%"
          rx="0"
          fill="#ffffff"
          fillOpacity="0.08"
        />

        {/* Door lintel — horizontal bar */}
        <rect
          x="60"
          y="80%"
          width="340"
          height="20"
          rx="0"
          fill="#ffffff"
          fillOpacity="0.1"
        />

        {/* Crown cap */}
        <rect
          x="190"
          y="22%"
          width="80"
          height="14"
          rx="0"
          fill="#ffffff"
          fillOpacity="0.15"
        />

        {/* Vertical axis line */}
        <line
          x1="230"
          y1="8%"
          x2="230"
          y2="22%"
          stroke="#ffffff"
          strokeWidth="0.6"
          strokeOpacity="0.3"
        />

        {/* Ghost inner arch path (traced from icon polygon) */}
        <path
          d="M150 80% L150 38% Q150 28% 230 28% Q310 28% 310 38% L310 80%"
          fill="none"
          stroke="#c9a96e"
          strokeWidth="1"
          strokeOpacity="0.4"
        />
        <path
          d="M175 80% L175 42% Q175 32% 230 32% Q285 32% 285 42% L285 80%"
          fill="none"
          stroke="#c9a96e"
          strokeWidth="0.5"
          strokeOpacity="0.2"
        />

        {/* Keystone dot */}
        <circle
          cx="230"
          cy="22%"
          r="7"
          fill="none"
          stroke="#ffffff"
          strokeWidth="0.8"
          strokeOpacity="0.5"
        />
        <circle cx="230" cy="22%" r="2.5" fill="#c9a96e" fillOpacity="0.8" />

        {/* Corner joints */}
        <circle
          cx="62"
          cy="80%"
          r="5"
          fill="none"
          stroke="#ffffff"
          strokeWidth="0.7"
          strokeOpacity="0.4"
        />
        <circle
          cx="398"
          cy="80%"
          r="5"
          fill="none"
          stroke="#ffffff"
          strokeWidth="0.7"
          strokeOpacity="0.4"
        />

        {/* Construction guide lines */}
        <line
          x1="150"
          y1="28%"
          x2="150"
          y2="80%"
          stroke="#ffffff"
          strokeWidth="0.3"
          strokeDasharray="3 10"
          strokeOpacity="0.12"
        />
        <line
          x1="310"
          y1="28%"
          x2="310"
          y2="80%"
          stroke="#ffffff"
          strokeWidth="0.3"
          strokeDasharray="3 10"
          strokeOpacity="0.12"
        />
      </g>
    </svg>
  );
}

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((p) => (p + 1) % slides.length),
      5500,
    ); // Slower, more cinematic timing
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full bg-black flex items-center overflow-hidden">
      {/* ── Cinematic Background Carousel ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.8, ease: [0.25, 0.1, 0.25, 1] }} // Smooth, luxury easing
          className="absolute inset-0"
        >
          <Image
            src={slides[current].src}
            alt={slides[current].alt}
            fill
            className="object-cover"
            priority={current === 0}
            quality={90}
          />
        </motion.div>
      </AnimatePresence>

      {/* ── Premium Dark Overlays ── */}
      {/* Vignette + Base Dark Wash */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, transparent 0%, rgba(0,0,0,0.4) 100%), linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.65) 100%)",
        }}
      />

      {/* Left side gradient to ensure text pops */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)",
        }}
      />

      {/* Subtle warm luxury tint */}
      <div className="absolute inset-0 bg-amber-900/10 z-[1] mix-blend-overlay pointer-events-none" />

      {/* ── Icon-inspired architectural sculpture (left side, behind text) ── */}
      <div className="absolute inset-0 z-[2] pointer-events-none">
        <IconSculpture />
      </div>

      {/* ── Content Layout ── */}
      <div className="max-w-7xl w-full relative z-10 px-8 md:px-16 lg:px-24 flex flex-col justify-center h-full">
        <div className="max-w-xl">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 48 }} // Wider accent line for luxury
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            className="h-[1px] bg-accent mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-accent uppercase tracking-[0.35em] font-medium text-[11px] mb-6"
          >
            Artisanal Wood Craftsmanship
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-5xl md:text-6xl lg:text-7xl font-light text-white leading-[1.08]  mb-8"
          >
            Premium Furniture,
            <br />
            <span className="text-accent font-normal italic">
              Shaping Interiors.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.9 }}
            className="text-white/60 font-light text-base leading-relaxed mb-10 border-l-2 border-accent pl-5 max-w-md"
          >
            From bespoke dressing rooms to architectural state-of-the-art
            kitchen hubs. We craft the structural identity of modern living
            spaces.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col gap-8"
          >
            <div>
              <a
                href="#portfolio"
                className="group relative border border-white/20 hover:border-accent text-white px-10 py-4 rounded-sm tracking-[0.2em] text-[10px] uppercase transition-all duration-500 inline-block overflow-hidden"
              >
                <span className="relative z-10">View Portfolio</span>
                {/* Subtle hover fill effect */}
                <div className="absolute inset-0 bg-accent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white z-10 tracking-[0.2em] text-[10px] uppercase">
                  View Portfolio
                </span>
              </a>
            </div>

            {/* Refined Luxury Carousel Dots */}
            <div className="flex gap-3 items-center">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Slide ${i + 1}`}
                  className={`h-0.5 rounded-full transition-all duration-700 ease-out cursor-pointer ${
                    i === current
                      ? "w-10 bg-accent"
                      : "w-5 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 text-[10px] tracking-[0.3em] uppercase animate-bounce z-10">
        Scroll To Explore
      </div>
    </section>
  );
}
