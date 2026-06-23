"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-claywood text-sandstone pt-24 pb-12 px-6 border-t border-sandstone/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
        <div className="md:col-span-4">
          <div className="flex items-center justify-center">
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

        <div className="md:col-span-3 space-y-4">
          <h4 className="text-base text-vibrant font-bold">Sections</h4>
          <ul className="space-y-2 text-sm font-medium text-desert/80">
            <li>
              <a
                href="#services"
                className="hover:text-sandstone transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="hover:text-sandstone transition-colors"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#products"
                className="hover:text-sandstone transition-colors"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#history"
                className="hover:text-sandstone transition-colors"
              >
                OTIC History
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2 space-y-4">
          <h4 className="text-base text-vibrant font-bold">Channels</h4>
          <ul className="space-y-2 text-sm font-medium text-desert/80">
            <li>
              <a
                href="https://www.instagram.com/otic_home?utm_source=qr"
                target="_blank"
                rel="noreferrer"
                className="hover:text-sandstone transition-colors"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@otic_home?_r=1&_t=ZS-97S4Gl9PPme"
                target="_blank"
                rel="noreferrer"
                className="hover:text-sandstone transition-colors"
              >
                TikTok
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/share/14idjbKdcWK/?mibextid=wwXIfr"
                target="_blank"
                rel="noreferrer"
                className="hover:text-sandstone transition-colors"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-3 space-y-4 text-sm font-medium text-desert/80">
          <h4 className="text-base text-vibrant font-bold">Factory Address</h4>
          <p>
            Industrial Zone, Badr District
            <br />
            61 Al Ittidal Street
          </p>
          <p className="text-base font-mono text-sandstone">
            contact@oticwood.com
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-sandstone/10 flex flex-col sm:flex-row justify-between items-center text-base text-desert/60 gap-4">
        <p>&copy; {new Date().getFullYear()} OTIC. All rights reserved.</p>
        <a
          href="https://seifbasel.vercel.app"
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center justify-center gap-2 text-desert/60 hover:text-sandstone transition-colors"
          aria-label="Visit Seif Pixels"
        >
          <span className="flex items-center gap-2">
            built by
            <span className="relative inline-block h-14 w-14 transition-transform duration-500 ease-out group-hover:rotate-360">
              <Image
                src="/seif.png"
                alt="seif pixels"
                fill
                aria-hidden="true"
                className="object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
            </span>
          </span>
        </a>
        <div className="flex gap-6">
          <a href="#" className="hover:text-sandstone transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-sandstone transition-colors">
            Terms of Use
          </a>
        </div>
      </div>
    </footer>
  );
}
