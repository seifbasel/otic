"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Image from "next/image";

const INITIAL_VISIBLE_RESULTS = 8;
const RESULTS_INCREMENT = 4;

const deliveredResultImages = [
  "/31.png",
  "/32.png",
  "/33.png",
  "/34.png",
  "/35.png",
  "/36.png",
  "/37.png",
  "/38.png",
  "/39.png",
  "/40.png",
  "/41.png",
  "/42.png",
  "/43.png",
  "/51.png",
  "/52.jpeg",
  "/52.png",
  "/55.jpeg",
  "/56.jpeg",
];

const CARD_OFFSETS = deliveredResultImages.map((_, i) => ({
  rotate: i % 2 === 0 ? "-2deg" : "2deg",
  translateY:
    i % 4 === 1 ? "40px" : i % 4 === 2 ? "-32px" : i % 4 === 3 ? "64px" : "0px",
}));

type DeliveredResultsProps = {
  eyebrow: string;
  title: string;
  description: string;
  sectionLabel: string;
  closeLabel: string;
  openedImageAlt: string;
  imageAltPrefix: string;
  previousLabel: string;
  nextLabel: string;
  pageLabel: string;
};

export default function DeliveredResults({
  eyebrow,
  title,
  description,
  sectionLabel,
  closeLabel,
  openedImageAlt,
  imageAltPrefix,
  previousLabel,
  nextLabel,
  pageLabel,
}: DeliveredResultsProps) {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const prefersReducedMotion = useReducedMotion();

  const { visibleImages, totalPages } = useMemo(() => {
    const pages = Math.max(
      1,
      Math.ceil(
        Math.max(deliveredResultImages.length - INITIAL_VISIBLE_RESULTS, 0) /
          RESULTS_INCREMENT,
      ) + 1,
    );
    const count = Math.min(
      deliveredResultImages.length,
      INITIAL_VISIBLE_RESULTS + (currentPage - 1) * RESULTS_INCREMENT,
    );
    return {
      visibleImages: deliveredResultImages.slice(0, count),
      totalPages: pages,
    };
  }, [currentPage]);

  const scrollY = useRef(0);
  useEffect(() => {
    if (!activeImage) {
      document.body.style.overflow = "";
      document.body.style.top = "";
      window.scrollTo(0, scrollY.current);
      return;
    }
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveImage(null);
    };
    scrollY.current = window.scrollY;
    document.body.style.overflow = "hidden";
    document.body.style.top = `-${scrollY.current}px`;
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [activeImage]);

  return (
    <>
      <section
        aria-label={sectionLabel}
        className="relative w-full bg-background px-6 py-24 md:py-32 overflow-hidden"
        style={{ contentVisibility: "auto", containIntrinsicSize: "0 900px" }}
      >
        <div className="mx-auto max-w-7xl">
          {/* ── Header ── */}
          <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <span className="mb-3 block text-base font-bold uppercase text-accent">
                {eyebrow}
              </span>
              <h2 className="text-4xl font-light md:text-5xl">{title}</h2>
            </div>
            <p className="max-w-md text-base font-light leading-relaxed text-foreground/60">
              {description}
            </p>
          </div>

          {/* ── Grid ── */}
          {/*
            pb-24 on desktop gives the 64px max-stagger cards ~96px of real clearance
            before the pagination row, so no card tail ever overlaps it.
          */}
          <div className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-6 pb-6 lg:pb-24">
            <AnimatePresence initial={false}>
              {visibleImages.map((src, index) => {
                const { rotate } = CARD_OFFSETS[index];
                return (
                  <motion.button
                    key={src + index}
                    type="button"
                    onClick={() => setActiveImage(src)}
                    initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 32 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{
                      opacity: 0,
                      y: prefersReducedMotion ? 0 : -16,
                      scale: 0.97,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: prefersReducedMotion
                        ? 0
                        : (index % RESULTS_INCREMENT) * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    style={{ "--card-rotate": rotate } as React.CSSProperties}
                    className={[
                      "group relative overflow-hidden rounded-[1.75rem]",
                      "border border-border bg-card",
                      "card-shadow-lift transform-gpu",
                      "transition-transform duration-300 ease-out",
                      "hover:-translate-y-2 active:scale-[0.983]",
                      index % 4 !== 0 ? "lg:card-stagger" : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    data-stagger-index={index % 4}
                  >
                    <div className="relative aspect-[4/5] w-full">
                      <Image
                        src={src}
                        alt={`${imageAltPrefix} ${index + 1}`}
                        fill
                        loading={index < 4 ? "eager" : "lazy"}
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
                        sizes="(max-width: 479px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        quality={70}
                      />

                      {/* ── Dark gradient — always present, dims on hover ── */}
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent
                                   opacity-70 transition-opacity duration-400 group-hover:opacity-40"
                      />

                      {/* ── Hover reveal overlay ── */}
                      <div
                        className="absolute inset-0 flex flex-col items-center justify-center gap-3
                                   opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        {/* Expand icon ring */}
                        <div
                          className="flex h-12 w-12 items-center justify-center rounded-full
                                     border border-white/60 bg-white/10 backdrop-blur-sm
                                     scale-75 group-hover:scale-100
                                     transition-transform duration-300 ease-out"
                        >
                          {/* Two-arrow expand SVG — no external dep */}
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-white"
                          >
                            <path
                              d="M11 2h5v5M7 16H2v-5M2 2l5.5 5.5M16 16l-5.5-5.5"
                              stroke="currentColor"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>

                        {/* Image index pill */}
                        <span
                          className="rounded-full border border-white/30 bg-black/30 px-3 py-0.5
                                     text-[11px] font-medium uppercase tracking-widest text-white/80
                                     backdrop-blur-sm
                                     translate-y-2 group-hover:translate-y-0
                                     transition-transform duration-300 delay-75 ease-out"
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </AnimatePresence>
          </div>

          {/* ── Pagination ── */}
          {totalPages > 1 ? (
            <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
              <p className="text-sm text-foreground/40 tabular-nums">
                {pageLabel} {currentPage} / {totalPages}
              </p>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="min-w-10 rounded-full border border-border px-4 py-2 text-sm
                             text-foreground/60 transition-colors duration-200
                             hover:border-foreground/40 hover:text-foreground
                             disabled:cursor-not-allowed disabled:opacity-40"
                >
                  {previousLabel}
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      type="button"
                      onClick={() => setCurrentPage(page)}
                      className={[
                        "flex h-10 min-w-10 items-center justify-center rounded-full border px-3 text-sm transition-colors duration-200",
                        page === currentPage
                          ? "border-foreground bg-foreground text-background"
                          : "border-border text-foreground/60 hover:border-foreground/40 hover:text-foreground",
                      ].join(" ")}
                    >
                      {page}
                    </button>
                  ),
                )}

                <button
                  type="button"
                  onClick={() =>
                    setCurrentPage((p) => Math.min(totalPages, p + 1))
                  }
                  disabled={currentPage === totalPages}
                  className="min-w-10 rounded-full border border-border px-4 py-2 text-sm
                             text-foreground/60 transition-colors duration-200
                             hover:border-foreground/40 hover:text-foreground
                             disabled:cursor-not-allowed disabled:opacity-40"
                >
                  {nextLabel}
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </section>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {activeImage ? (
          <motion.div
            key="lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed inset-0 z-[120] bg-onyx/92 p-4 md:p-8"
            onClick={() => setActiveImage(null)}
          >
            {/* Close button */}
            <motion.button
              type="button"
              aria-label={closeLabel}
              onClick={() => setActiveImage(null)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center
                         rounded-full border border-white/20 bg-white/10 text-white
                         backdrop-blur-sm transition-colors duration-200 hover:bg-white/20"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1l12 12M13 1L1 13"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </motion.button>

            {/* Image count hint */}
            <motion.p
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, delay: 0.15 }}
              className="absolute left-5 top-5 z-10 text-xs font-medium uppercase tracking-widest text-white/40"
            >
              {activeImage}
            </motion.p>

            <div className="flex h-full w-full items-center justify-center">
              <motion.div
                key={activeImage}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -16 }}
                transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                className="relative h-full max-h-[88vh] w-full max-w-6xl"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={activeImage}
                  alt={openedImageAlt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <style>{`
        /* ── Shadow lift via ::after opacity — box-shadow itself never repaints ── */
        .card-shadow-lift {
          position: relative;
          box-shadow: 0 22px 60px rgba(0,0,0,0.12);
          rotate: var(--card-rotate, 0deg);
        }
        .card-shadow-lift::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          box-shadow: 0 32px 80px rgba(0,0,0,0.26);
          opacity: 0;
          transition: opacity 0.35s ease-out;
          pointer-events: none;
        }
        .card-shadow-lift:hover::after { opacity: 1; }

        /* ── Vertical stagger — lg only, data-driven ── */
        @media (min-width: 1024px) {
          .lg\\:card-stagger[data-stagger-index="1"] { translate: 0 40px; }
          .lg\\:card-stagger[data-stagger-index="2"] { translate: 0 -32px; }
          .lg\\:card-stagger[data-stagger-index="3"] { translate: 0 64px; }
        }
      `}</style>
    </>
  );
}
