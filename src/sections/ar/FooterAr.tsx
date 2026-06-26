"use client";
import Image from "next/image";

export default function FooterAr() {
  return (
    <footer className="bg-claywood text-sandstone pt-24 pb-12 px-6 border-t border-sandstone/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
        <div className="md:col-span-4">
          <div className="flex items-center justify-center">
            <div className="relative w-200 h-50">
              <Image
                src="/logo-1.png"
                alt="شعار أوتيك"
                fill
                className="object-cover dark:hidden"
              />
              <Image
                src="/logo-2.png"
                alt="شعار أوتيك"
                fill
                className="object-cover hidden dark:block"
              />
            </div>
          </div>
        </div>

        <div className="md:col-span-3 space-y-4">
          <h4 className="text-base  text-vibrant font-bold">الأقسام</h4>
          <ul className="space-y-2 text-sm font-medium text-desert/80">
            <li>
              <a
                href="#services"
                className="hover:text-sandstone transition-colors"
              >
                الخدمات{" "}
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="hover:text-sandstone transition-colors"
              >
                الأعمال{" "}
              </a>
            </li>
            <li>
              <a
                href="#products"
                className="hover:text-sandstone transition-colors"
              >
                المنتجات
              </a>
            </li>
            <li>
              <a
                href="#history"
                className="hover:text-sandstone transition-colors"
              >
                تاريخ أوتيك
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2 space-y-4">
          <h4 className="text-base  text-vibrant font-bold">القنوات</h4>
          <ul className="space-y-2 text-sm font-medium text-desert/80">
            <li>
              <a
                href="https://www.instagram.com/otic_home?utm_source=qr"
                target="_blank"
                rel="noreferrer"
                className="hover:text-sandstone transition-colors"
              >
                إنستغرام
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@otic_home?_r=1&_t=ZS-97S4Gl9PPme"
                target="_blank"
                rel="noreferrer"
                className="hover:text-sandstone transition-colors"
              >
                تيك توك
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/share/14idjbKdcWK/?mibextid=wwXIfr"
                target="_blank"
                rel="noreferrer"
                className="hover:text-sandstone transition-colors"
              >
                فيسبوك
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-3 space-y-4 text-sm font-medium text-desert/80">
          <h4 className="text-base  text-vibrant font-bold">مقر المصنع</h4>
          <p>
            المنطقة الصناعية، حي بدر
            <br />
            61 شارع الاعتدال{" "}
          </p>
      
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-sandstone/10 flex flex-col sm:flex-row justify-between items-center text-base text-desert/60 gap-4">
        <div className="flex justify-center items-center gap-6">
          <a href="#" className="hover:text-sandstone transition-colors">
            سياسة الخصوصية
          </a>
          <a href="#" className="hover:text-sandstone transition-colors">
            شروط الاستخدام
          </a>
          <a
            href="https://seifbasel.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center justify-center gap-2 text-desert/60 hover:text-sandstone transition-colors"
            aria-label="Visit Seif Pixels"
          >
            <span className="flex items-center gap-2">
              تم البناء بواسطة
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
        </div>{" "}
        <p>&copy; {new Date().getFullYear()} أوتيك. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
}
