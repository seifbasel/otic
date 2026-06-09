"use client";
import Link from "next/link";

interface LangSwitcherProps {
  currentLang: "en" | "ar";
  className?: string;
}

export default function LangSwitcher({ currentLang, className = "" }: LangSwitcherProps) {
  return (
    <Link
      href={currentLang === "en" ? "/ar" : "/"}
      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border  bg-onyx/20 border-accent text-bone hover:text-accent transition-all duration-300 text-[11px] uppercase tracking-widest font-medium ${className}`}
      aria-label={currentLang === "en" ? "Switch to Arabic" : "التبديل إلى الإنجليزية"}
    >
      {currentLang === "en" ? (
        <>
          <span className="opacity-60">EN</span>
          <span className="text-bone">|</span>
          <span>AR</span>
        </>
      ) : (
        <>
          <span>EN</span>
          <span className="text-bone/30">|</span>
          <span className="opacity-60">AR</span>
        </>
      )}
    </Link>
  );
}
