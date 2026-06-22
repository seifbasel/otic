"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-claywood text-sandstone pt-24 pb-12 px-6 border-t border-sandstone/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
        {/* Brand Column */}
        <div className="md:col-span-4 ">
          <div className="flex items-center justify-center text-vibrant font-mono uppercase ">
            <div className="relative w-200 h-50">
              <Image
                src="/logo-1.png"
                alt="OTIC logo"
                fill
                className="object-cover dark:hidden"
              />
              <Image
                src="/logo-2.png"
                alt="OTIC logo"
                fill
                className="object-cover hidden dark:block"
              />
            </div>
          </div>
        </div>

        {/* Directory Links */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="text-base uppercase  text-vibrant font-bold">
            Collections
          </h4>
          <ul className="space-y-2 text-sm font-light text-desert/80">
            <li>
              <a
                href="#services"
                className="hover:text-sandstone transition-colors"
              >
                Dressing Rooms
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-sandstone transition-colors"
              >
                Kitchen Layouts
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-sandstone transition-colors"
              >
                Wall Surfacing
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-sandstone transition-colors"
              >
                Internal Doors
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Column */}
        <div className="md:col-span-2 space-y-4">
          <h4 className="text-base uppercase  text-vibrant font-bold">
            Channels
          </h4>
          <ul className="space-y-2 text-sm font-light text-desert/80">
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-sandstone transition-colors"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-sandstone transition-colors"
              >
                Tiktok
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-sandstone transition-colors"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>

        {/* Studio Info */}
        <div className="md:col-span-3 space-y-4 text-sm font-light text-desert/80">
          <h4 className="text-base uppercase  text-vibrant font-bold">
            Studio Hub
          </h4>
          <p>
            Industrial Zone Sector 4,
            <br />
            Premium Woodworks Center
          </p>
          <p className="text-base font-mono text-sandstone">
            contact@oticwood.com
          </p>
        </div>
      </div>

      {/* Under-Footer */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-sandstone/10 flex flex-col gap-4 text-base text-desert/60">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>
            &copy; {new Date().getFullYear()} OTIC Inc. All rights reserved.
          </p>{" "}
          <a
            href="https://seifbasel.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center justify-center gap-2 text-[11px] sm:text-xs font-medium tracking-[0.2em] uppercase text-desert/60 hover:text-sandstone transition-all duration-300"
            aria-label="Visit Seif Pixels"
          >
            <span className="group-hover:tracking-[0.25em] transition-all duration-300">
              built by
            </span>

            <span className="relative inline-block h-14 w-14 transition-transform duration-500 ease-out group-hover:rotate-360">
              <Image
                src="/seif.png"
                alt="seif pixels"
                fill
                aria-hidden="true"
                className="object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
            </span>
          </a>
          <div className="flex gap-6">
            <a href="#" className="hover:text-sandstone transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-sandstone transition-colors">
              Terms of Craft
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
