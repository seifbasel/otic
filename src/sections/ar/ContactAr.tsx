"use client";

export default function ContactAr() {
  return (
    <section id="contact" className="py-32 bg-sandstone px-6">
      <div className="max-w-4xl mx-auto bg-accent/60 dark:bg-accent text-sandstone p-8 md:p-16 rounded-3xl shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 bg-vibrant/10 rounded-full blur-3xl" />

        <div className="text-center mb-12">
          <span className="text-white/80 text-xs font-bold tracking-widest block mb-2">تعاون مع أوتيك</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">ابدأ تحولك الفضائي</h2>
        </div>

        <div className="space-y-6 max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="اسمك الكريم"
              className="w-full bg-claywood/50 border-b border-sandstone/30 focus:border-white text-sandstone px-4 py-3 text-sm focus:outline-none transition-colors placeholder:text-sandstone/60 text-right"
            />
            <input
              type="email"
              placeholder="البريد الإلكتروني"
              dir="ltr"
              className="w-full bg-claywood/50 border-b border-sandstone/30 focus:border-white text-sandstone px-4 py-3 text-sm focus:outline-none transition-colors placeholder:text-sandstone/60 text-right"
            />
          </div>
          <select className="w-full bg-claywood border-b border-sandstone/30 focus:border-white text-sandstone/70 px-4 py-3 text-sm focus:outline-none transition-colors">
            <option>اختر نطاق الاهتمام</option>
            <option>غرفة ملابس كاملة</option>
            <option>مطبخ معماري وطعام</option>
            <option>ألواح جدارية وأبواب متكاملة</option>
            <option>عقد سكني شامل</option>
          </select>
          <textarea
            rows={4}
            placeholder="أخبرنا عن أبعاد المشروع والجدول الزمني..."
            className="w-full bg-claywood/50 border-b border-sandstone/30 focus:border-white text-sandstone px-4 py-3 text-sm focus:outline-none transition-colors resize-none text-right"
          />
          <div className="text-center pt-4">
            <button className="bg-white hover:bg-white/90 text-accent font-bold text-sm tracking-widest px-10 py-4 rounded-full transition-colors w-full md:w-auto">
              طلب استشارة الاستوديو
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
