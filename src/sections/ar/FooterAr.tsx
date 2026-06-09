"use client";
import Image from "next/image";

export default function FooterAr() {
  return (
    <footer className="bg-claywood text-sandstone pt-24 pb-12 px-6 border-t border-sandstone/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

        {/* Brand Column */}
        <div className="md:col-span-4">
          <div className="flex items-center justify-center">
            <div className="relative w-200 h-50">
              <Image src="/logo-2.png" alt="شعار أوتيك" fill className="object-cover" />
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="text-xs tracking-widest text-vibrant font-bold">تشكيلاتنا</h4>
          <ul className="space-y-2 text-sm font-medium text-desert/80">
            <li><a href="#services" className="hover:text-sandstone transition-colors">غرف الملابس</a></li>
            <li><a href="#services" className="hover:text-sandstone transition-colors">تصاميم المطابخ</a></li>
            <li><a href="#services" className="hover:text-sandstone transition-colors">تكسيات الجدران</a></li>
            <li><a href="#services" className="hover:text-sandstone transition-colors">الأبواب الداخلية</a></li>
          </ul>
        </div>

        {/* Social */}
        <div className="md:col-span-2 space-y-4">
          <h4 className="text-xs tracking-widest text-vibrant font-bold">قنواتنا</h4>
          <ul className="space-y-2 text-sm font-medium text-desert/80">
            <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-sandstone transition-colors">إنستغرام</a></li>
            <li><a href="https://pinterest.com" target="_blank" rel="noreferrer" className="hover:text-sandstone transition-colors">بينتريست</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-sandstone transition-colors">لينكدإن</a></li>
            <li><a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-sandstone transition-colors">فيسبوك</a></li>
          </ul>
        </div>

        {/* Studio Info */}
        <div className="md:col-span-3 space-y-4 text-sm font-medium text-desert/80">
          <h4 className="text-xs tracking-widest text-vibrant font-bold">مقرّ الاستوديو</h4>
          <p>المنطقة الصناعية، القطاع الرابع،<br />مركز الأعمال الخشبية الراقية</p>
          <p className="text-xs font-mono text-sandstone">contact@oticwood.com</p>
        </div>
      </div>

      {/* Under-footer */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-sandstone/10 flex flex-col sm:flex-row justify-between items-center text-xs text-desert/60 gap-4">
        <p>&copy; {new Date().getFullYear()} أوتيك. جميع الحقوق محفوظة.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-sandstone transition-colors">سياسة الخصوصية</a>
          <a href="#" className="hover:text-sandstone transition-colors">شروط الحرفة</a>
        </div>
      </div>
    </footer>
  );
}
