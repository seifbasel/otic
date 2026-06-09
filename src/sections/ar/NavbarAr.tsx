"use client";
import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Image from "next/image";
import LangSwitcher from "@/components/LangSwitcher";

export default function NavbarAr() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return false;
  });

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) setHidden(true);
    else setHidden(false);
    setScrolled(latest > 50);
  });

  const handleLinkClick = () => setMenuOpen(false);

  const menuVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
    exit: {
      opacity: 0,
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  return (
    <>
      {/* Mobile Full-Screen Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            <motion.a
              variants={itemVariants}
              href="#services"
              onClick={handleLinkClick}
              className="text-3xl font-semibold text-bone uppercase tracking-widest hover:text-accent transition-colors"
            >
              خدماتنا
            </motion.a>
            <motion.a
              variants={itemVariants}
              href="#projects"
              onClick={handleLinkClick}
              className="text-3xl font-semibold text-bone uppercase tracking-widest hover:text-accent transition-colors"
            >
              مشاريعنا
            </motion.a>
            <motion.a
              variants={itemVariants}
              href="#history"
              onClick={handleLinkClick}
              className="text-3xl font-semibold text-bone uppercase tracking-widest hover:text-accent transition-colors"
            >
              إرثنا
            </motion.a>
            <motion.a
              variants={itemVariants}
              href="#contact"
              onClick={handleLinkClick}
              className="text-3xl font-semibold text-bone uppercase tracking-widest hover:text-accent transition-colors"
            >
              تواصل معنا
            </motion.a>
            <motion.div variants={itemVariants} className="mt-8">
              <button className="bg-accent hover:bg-accent/90 text-white font-semibold text-sm tracking-wider px-10 py-3.5 rounded-full transition-colors">
                ابدأ مشروعك
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Navigation Pill */}
      <motion.nav
        variants={{ visible: { y: 0 }, hidden: { y: "-120%" } }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-6xl rounded-full transition-all duration-300 ${
          scrolled
            ? "bg-onyx/80 border border-foreground/10 backdrop-blur-md shadow-2xl px-6 md:px-8"
            : "bg-transparent px-4 md:px-6"
        }`}
      >
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Right: Logo (RTL — logo is the "start" side) */}
          <div className="shrink-0 flex items-center h-full py-2">
            <Image
              src="/logo-2.png"
              alt="شعار أوتيك"
              width={300}
              height={300}
              priority
              className="h-20 md:h-40 w-auto object-contain transition-all duration-500"
            />
          </div>

          {/* Center: Desktop Nav links */}
          <div className="hidden md:flex items-center gap-8 text-sm text-bone">
            <a
              href="#services"
              className="hover:text-accent text-xl transition-colors font-medium tracking-wide"
            >
              خدماتنا
            </a>
            <a
              href="#projects"
              className="hover:text-accent text-xl transition-colors font-medium tracking-wide"
            >
              مشاريعنا
            </a>
            <a
              href="#history"
              className="hover:text-accent text-xl transition-colors font-medium tracking-wide"
            >
              إرثنا
            </a>
            <a
              href="#contact"
              className="hover:text-accent text-xl transition-colors font-medium tracking-wide"
            >
              تواصل معنا
            </a>
          </div>

          {/* Left: Actions (RTL — actions are the "end" side) */}
          <div className="flex items-center gap-3 md:gap-4">
            <LangSwitcher currentLang="ar" />

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-foreground/10 bg-card/20 hover:bg-accent/20 transition-all text-foreground cursor-pointer"
              aria-label="تبديل الوضع"
            >
              {isDark ? (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M14 12a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>

            {/* Desktop CTA */}
            <button className="hidden md:block bg-accent hover:bg-accent/90 text-white font-semibold text-sm tracking-wide px-5 py-2.5 rounded-full transition-colors cursor-pointer">
              استفسر الآن
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex md:hidden flex-col justify-center items-center w-10 h-10 gap-1.5 cursor-pointer z-60 text-foreground"
              aria-label="تبديل القائمة"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="w-6 h-[1.5px] bg-current block"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-6 h-[1.5px] bg-current block"
              />
              <motion.span
                animate={
                  menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
                }
                className="w-6 h-[1.5px] bg-current block"
              />
            </button>
          </div>
        </div>
      </motion.nav>
    </>
  );
}
