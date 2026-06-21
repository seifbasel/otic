'use client';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-claywood text-sandstone pt-24 pb-12 px-6 border-t border-sandstone/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
        
        {/* Brand Column */}
        <div className="md:col-span-4 ">
          <div className="flex items-center justify-center text-vibrant font-mono uppercase tracking-widest">
            <div className="relative w-200 h-50">
              <Image src="/logo-1.png" alt="OTIC logo" fill className="object-cover dark:hidden" />
              <Image src="/logo-2.png" alt="OTIC logo" fill className="object-cover hidden dark:block" />
            </div>
          </div>
        </div>

        {/* Directory Links */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="text-xs uppercase tracking-widest text-vibrant font-bold">Collections</h4>
          <ul className="space-y-2 text-sm font-light text-desert/80">
            <li><a href="#services" className="hover:text-sandstone transition-colors">Dressing Rooms</a></li>
            <li><a href="#services" className="hover:text-sandstone transition-colors">Kitchen Layouts</a></li>
            <li><a href="#services" className="hover:text-sandstone transition-colors">Wall Surfacing</a></li>
            <li><a href="#services" className="hover:text-sandstone transition-colors">Internal Doors</a></li>
          </ul>
        </div>

        {/* Social Media Column */}
        <div className="md:col-span-2 space-y-4">
          <h4 className="text-xs uppercase tracking-widest text-vibrant font-bold">Channels</h4>
          <ul className="space-y-2 text-sm font-light text-desert/80">
            <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-sandstone transition-colors">Instagram</a></li>
            <li><a href="https://tiktok.com" target="_blank" rel="noreferrer" className="hover:text-sandstone transition-colors">Tiktok</a></li>
            <li><a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-sandstone transition-colors">Facebook</a></li>
          </ul>
        </div>

        {/* Studio Info */}
        <div className="md:col-span-3 space-y-4 text-sm font-light text-desert/80">
          <h4 className="text-xs uppercase tracking-widest text-vibrant font-bold">Studio Hub</h4>
          <p>Industrial Zone Sector 4,<br />Premium Woodworks Center</p>
          <p className="text-xs font-mono text-sandstone">contact@oticwood.com</p>
        </div>
      </div>

      {/* Under-Footer */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-sandstone/10 flex flex-col sm:flex-row justify-between items-center text-xs text-desert/60 gap-4">
        <p>&copy; {new Date().getFullYear()} OTIC Inc. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-sandstone transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-sandstone transition-colors">Terms of Craft</a>
        </div>
      </div>
    </footer>
  );
}
