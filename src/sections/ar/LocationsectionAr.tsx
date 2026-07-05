"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const locations = [
  {
    id: "riyadh",
    city: "الرياض",
    country: "السعودية",
    role: "المقر الرئيسي والمصنع",
    tagline: "هنا تبدأ كل قطعة.",
    address: ["المنطقة الصناعية، حي بدر", "61 شارع الاعتدال", "الرياض"],
    hours: [{ days: "السبت - الخميس", time: "18:00 - 9:00" }],
    phones: ["+966544230533", "+966569712996"],
    email: "contact@otic-home.com",
    coords: "24.5257°N 46.7126°E",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.5!2d46.7099885!3d24.5256714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f0d8bee043c99%3A0x33aecf7cdc17e845!2sOtic%20Wood!5e0!3m2!1sen!2seg!4v1782220344274!5m2!1sen!2seg",
  },
];

function GrainTexture({ opacity = 0.06 }: { opacity?: number }) {
  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none mix-blend-overlay"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity }}
    >
      <filter id="noise-ar">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.80"
          numOctaves="4"
          stitchTiles="stitch"
        />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noise-ar)" />
    </svg>
  );
}

function PulseDot() {
  return (
    <span className="relative flex h-2 w-2 shrink-0">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
      <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
    </span>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

export default function LocationsectionAr() {
  const [activeId, setActiveId] = useState(locations[0].id);
  const loc = locations.find((l) => l.id === activeId)!;

  const contactLinks = [
    ...loc.phones.map((phone) => ({
      href: `tel:${phone}`,
      label: phone,
      isPhone: true,
      icon: (
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.22 1.18 2 2 0 012.22 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.56-.56a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
      ),
    })),
    {
      href: `mailto:${loc.email}`,
      label: loc.email,
      isPhone: false,
      icon: (
        <>
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </>
      ),
    },
  ];

  return (
    <section
      id="location"
      className="relative py-24 md:py-32 px-4 md:px-6 overflow-hidden bg-background selection:bg-accent selection:text-background"
    >
      <GrainTexture opacity={0.4} />
      <div className="absolute top-0 bottom-0 left-1/2 w-px pointer-events-none hidden xl:block bg-linear-to-b from-transparent via-foreground/20 to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto relative z-10 font-sans">
        <span className="text-base font-medium text-accent">
          مواقع الاستوديو
        </span>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20 gap-8"
        >
          <div className="text-right">
            <h2 className="text-4xl md:text-5xl font-light  leading-tight text-foreground">
              نصنع هنا.
              <br />
              <em className="not-italic font-light text-accent">
                ونسلّم إلى كل مكان.
              </em>
            </h2>
          </div>
          <p className="max-w-xs text-sm font-light leading-relaxed md:text-left text-foreground/60">
            تعرّف على المشاريع المنجزة، ولمس المواد، والتواصل المباشر مع فريق
            التصميم.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-12 overflow-hidden rounded-2xl border border-border shadow-2xl shadow-black/50"
        >
          <nav className="lg:order-3 lg:col-span-3 relative flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible border-b lg:border-b-0 lg:border-l border-border bg-foreground/5">
            <GrainTexture opacity={0.1} />

            <div className="hidden lg:flex items-center gap-2 px-6 py-5 shrink-0">
              <div className="h-px flex-1 bg-foreground/20" />
              <span className="text-sm text-foreground/40">اختر</span>
              <div className="h-px flex-1 bg-foreground/20" />
            </div>

            {locations.map((l, i) => {
              const isActive = l.id === activeId;
              return (
                <button
                  key={l.id}
                  onClick={() => setActiveId(l.id)}
                  className={`relative flex items-center gap-4 px-6 py-5 lg:py-7 text-right transition-colors duration-300 cursor-pointer shrink-0 lg:shrink group ${
                    isActive ? "bg-foreground/10" : "hover:bg-foreground/[0.07]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="city-bar"
                      className="absolute right-0 top-0 bottom-0 w-0.75 hidden lg:block rounded-l-full bg-accent"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 40,
                      }}
                    />
                  )}
                  {isActive && (
                    <motion.div
                      layoutId="city-bar-h"
                      className="absolute bottom-0 left-0 right-0 h-0.5 lg:hidden bg-accent"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 40,
                      }}
                    />
                  )}

                  <span
                    className={`text-sm font-mono shrink-0 w-4 transition-colors ${isActive ? "text-accent" : "text-foreground/30"}`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="min-w-0">
                    <p
                      className={`text-sm font-light transition-colors duration-200 truncate ${isActive ? "text-foreground" : "text-foreground/70"}`}
                    >
                      {l.city}
                    </p>
                    <p
                      className={`text-sm mt-0.5 transition-colors duration-200 truncate ${isActive ? "text-accent" : "text-foreground/40"}`}
                    >
                      {l.country}
                    </p>
                  </div>

                  {isActive && (
                    <svg
                      className="mr-auto hidden lg:block shrink-0 text-accent"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path
                        d="M2 6h8M6 2l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button>
              );
            })}

            <div className="hidden lg:block mt-auto px-6 pb-6 pt-4 border-t border-border">
              <p className="text-sm font-mono leading-relaxed text-foreground/30">
                {loc.coords}
              </p>
            </div>
          </nav>

          <div className="lg:order-2 lg:col-span-5 relative overflow-hidden h-85 lg:h-auto bg-background">
            <AnimatePresence mode="wait">
              <motion.iframe
                key={loc.id + "-map"}
                src={loc.mapSrc}
                title={`موقع استوديو ${loc.city}`}
                width="100%"
                height="100%"
                className="absolute inset-0 w-full h-full"
                style={{
                  border: 0,
                  filter:
                    "grayscale(0.65) sepia(0.3) contrast(1.08) brightness(0.82)",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
              />
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={loc.city + "-badge"}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="absolute top-4 right-4 z-10 flex items-center gap-2.5 px-3 py-2 rounded-lg bg-background/80 backdrop-blur-md border border-border"
              >
                <PulseDot />
                <span className="text-base font-light text-foreground">
                  {loc.city} · {loc.country}
                </span>
              </motion.div>
            </AnimatePresence>

            <div className="absolute inset-x-0 bottom-0 h-32 pointer-events-none z-10 bg-linear-to-t from-background via-background/60 to-transparent" />
            <div className="absolute inset-y-0 left-0 w-20 pointer-events-none z-10 hidden lg:block bg-linear-to-l from-transparent to-background/40" />
          </div>

          <div className="lg:order-1 lg:col-span-4 relative flex flex-col border-t lg:border-t-0 lg:border-r border-border bg-foreground/5">
            <GrainTexture opacity={0.08} />

            <AnimatePresence mode="wait">
              <motion.div
                key={loc.id + "-info"}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 12 }}
                transition={{ duration: 0.42, ease: "easeOut" }}
                className="relative z-10 flex flex-col h-full p-8 lg:p-10 gap-8 text-right"
              >
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-col gap-8 h-full"
                >
                  <motion.div variants={itemVariants}>
                    <span className="inline-block text-sm font-medium px-2.5 py-1 rounded mb-4 text-accent bg-foreground/10 border border-border">
                      {loc.role}
                    </span>
                    <p className="text-xl font-light leading-snug text-foreground">
                      <span className="text-foreground/70">“</span>
                      {loc.tagline}
                      <span className="text-foreground/70">”</span>
                    </p>
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    className="relative h-px overflow-hidden bg-border"
                  >
                    <div className="absolute right-0 top-0 h-full w-12 bg-accent" />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <p className="text-base mb-3 text-foreground/50">العنوان</p>
                    <div className="space-y-0.5">
                      {loc.address.map((line, i) => (
                        <p
                          key={i}
                          className={`text-sm font-light leading-relaxed ${i === 0 ? "text-foreground" : "text-foreground/70"}`}
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <p className="text-base mb-3 text-foreground/50">
                      ساعات العمل
                    </p>
                    <div className="space-y-2.5">
                      {loc.hours.map((h) => (
                        <div
                          key={h.days}
                          className="flex justify-between items-baseline gap-4"
                        >
                          <span className="text-base font-light text-foreground/70">
                            {h.days}
                          </span>
                          <span className="flex-1 border-b border-dotted border-border mb-1"></span>
                          <span className="text-base font-mono text-foreground">
                            {h.time}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="space-y-3">
                    <p className="text-base mb-3 text-foreground/50 ">
                      التواصل
                    </p>
                    {contactLinks.map(({ href, label, icon, isPhone }) => (
                      <a
                        key={href}
                        href={href}
                        className="flex items-center gap-3 group justify-end"
                      >
                        <span
                          dir={isPhone ? "ltr" : undefined}
                          className={`text-base font-light transition-colors duration-200 group-hover:text-foreground text-foreground/70 truncate ${
                            isPhone ? "text-left" : ""
                          }`}
                        >
                          {label}
                        </span>
                        <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 border border-border transition-all duration-200 group-hover:bg-accent/20 group-hover:border-accent">
                          <svg
                            width="11"
                            height="11"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-accent"
                          >
                            {icon}
                          </svg>
                        </div>
                      </a>
                    ))}
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    className="mt-auto pt-5 border-t border-border flex items-center justify-between"
                  >
                    <span className="text-sm font-mono text-foreground/30">
                      {loc.coords.split(" ")[0]}
                    </span>
                    <a
                      href={`https://maps.google.com/?q=OTIC+Wood+${loc.city}`}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center gap-2 text-base font-medium transition-colors duration-200 hover:opacity-80 text-accent"
                    >
                      احصل على الاتجاهات
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        className="transform group-hover:-translate-x-1 transition-transform duration-200 text-accent"
                      >
                        <path
                          d="M2 6h8M6 2l4 4-4 4"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </motion.div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 items-center text-foreground/40">
          {[
            "عينات مواد مجانية عند الطلب",
            "الاستشارة الأولية مجانية",
            "يفضل الحجز المسبق",
          ].map((t) => (
            <div key={t} className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full shrink-0 bg-accent" />
              <span className="text-sm">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}