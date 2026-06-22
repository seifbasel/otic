"use client";
import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Image from "next/image";
import LangSwitcher from "@/components/LangSwitcher";

const THEME_STORAGE_KEY = "otic-theme";

const links = [
  { href: "#services", label: "خدماتنا" },
  { href: "#portfolio", label: "الأعمال" },
  { href: "#products", label: "المنتجات" },
  { href: "#history", label: "سجلنا" },
  { href: "#contact", label: "تواصل معنا" },
  { href: "#location", label: "الموقع" },
];

export default function NavbarAr() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const syncTheme = () => {
      const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
      if (stored === "dark") {
        setIsDark(true);
        return;
      }
      if (stored === "light") {
        setIsDark(false);
        return;
      }

      setIsDark(document.documentElement.classList.contains("dark"));
    };

    syncTheme();

    const handleStorage = (event: StorageEvent) => {
      if (event.key === THEME_STORAGE_KEY) {
        syncTheme();
      }
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const applyTheme = (nextDark: boolean) => {
    const html = document.documentElement;
    html.classList.toggle("dark", nextDark);
    html.style.colorScheme = nextDark ? "dark" : "light";
    window.localStorage.setItem(THEME_STORAGE_KEY, nextDark ? "dark" : "light");
    setIsDark(nextDark);
  };

  const toggleTheme = () => {
    applyTheme(!isDark);
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
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {links.map((link) => (
              <motion.a
                key={link.href}
                variants={itemVariants}
                href={link.href}
                onClick={handleLinkClick}
                className="text-3xl font-light text-sand uppercase  hover:text-accent transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-col items-center gap-4"
            >
              <LangSwitcher currentLang="ar" />
              <button className="bg-accent hover:bg-accent/90 text-white font-medium text-sm uppercase tracking-wider px-10 py-3.5 rounded-full transition-colors">
                <a href="#contact"> ابدأ مشروعك</a>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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

          <div className="hidden md:flex items-center gap-8 text-sm uppercase  text-bone">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3 md:gap-4">
            <LangSwitcher currentLang="ar" className="hidden md:flex" />

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-foreground/10 bg-onyx/20 hover:bg-accent/20 transition-all text-bone cursor-pointer"
              aria-label="تبديل المظهر"
            >
              {isDark ? (
                <svg
                  className="w-5 h-5 "
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

            <button className="hidden md:block bg-accent hover:bg-accent/90 text-bone font-medium text-base uppercase tracking-wider px-5 py-2.5 rounded-full transition-colors cursor-pointer">
              اطلب استشارة
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex md:hidden flex-col justify-center items-center w-10 h-10 gap-1.5 cursor-pointer z-60 text-bone"
              aria-label="تبديل القائمة"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="w-6 h-[1.5px] bg-accent block transition-transform"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-6 h-[1.5px] bg-accent block transition-opacity"
              />
              <motion.span
                animate={
                  menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
                }
                className="w-6 h-[1.5px] bg-accent block transition-transform"
              />
            </button>
          </div>
        </div>
      </motion.nav>
    </>
  );
}
