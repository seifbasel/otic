"use client";

export default function HistoryAr() {
  return (
    <section id="history" className="relative py-28 md:py-36 bg-desert/20 text-claywood px-6 border-t border-claywood/10 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-claywood/25 to-transparent" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        <div className="lg:col-span-5 text-right">
          <span className="text-accent text-base uppercase font-bold tracking-[0.35em] block mb-4">
            إرثنا
          </span>
          <h2 className="text-4xl md:text-5xl font-light  leading-tight mb-6 max-w-xl mr-auto">
            الدقة والاتزان والصبر في صناعة التفاصيل.
          </h2>
          <p className="text-claywood/80 font-light leading-relaxed mb-8 max-w-xl text-base md:text-lg mr-auto">
            وُلدت أوتيك استجابةً لفجوة مألوفة في السوق: مساحات جميلة في الفكرة،
            لكنها لا تُنفذ بنفس الانضباط. بدأنا كورشة صغيرة متخصصة، ثم تطورنا إلى
            استوديو نجارة مركّز يصوغ كل سطح وتفصيل بعناية عالية.
          </p>

          <div className="flex flex-wrap gap-3 mb-8 justify-end">
            <div className="px-4 py-2 rounded-full border border-claywood/15 bg-sandstone/40 text-[10px] uppercase tracking-[0.3em] text-claywood/70">
              نجارة حسب الطلب
            </div>
            <div className="px-4 py-2 rounded-full border border-claywood/15 bg-sandstone/40 text-[10px] uppercase tracking-[0.3em] text-claywood/70">
              تنفيذ معماري متكامل
            </div>
          </div>

          <div className="text-5xl md:text-6xl font-serif text-cocoa/40 font-light">
            تأسست 2024
          </div>
        </div>

        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          <div className="bg-claywood text-sandstone p-7 md:p-8 rounded-2xl flex flex-col justify-between min-h-56 shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
            <div>
              <h4 className="text-4xl md:text-5xl font-light text-vibrant mb-3">100%</h4>
              <p className="text-base font-light tracking-[0.25em] uppercase text-desert leading-relaxed">
                تصميم وتصنيع وتشطيب داخل المنشأة مع رقابة كاملة على الجودة.
              </p>
            </div>
            <p className="mt-8 text-sm text-sandstone/60 leading-relaxed">
              عملية هادئة لكنها دقيقة جدًا، والنتيجة ثبات واضح في مستوى كل مشروع
              ننفذه.
            </p>
          </div>

          <div className="bg-sandstone text-claywood p-7 md:p-8 rounded-2xl flex flex-col justify-between min-h-56 border border-claywood/10 shadow-[0_12px_40px_rgba(36,26,25,0.08)]">
            <div>
              <h4 className="text-4xl md:text-5xl font-light text-cocoa mb-3">فاخر</h4>
              <p className="text-base font-light tracking-[0.25em] uppercase text-claywood/70 leading-relaxed">
                اختيار الخامات قائم على خشب متين ومختار بعناية وبمسؤولية.
              </p>
            </div>
            <p className="mt-8 text-sm text-claywood/70 leading-relaxed">
              نختار موادًا تنضج جمالًا مع الوقت وتدعم الهدوء والفخامة التي
              يتوقعها عملاؤنا.
            </p>
          </div>

          <div className="sm:col-span-2 bg-background/60 backdrop-blur-sm border border-claywood/10 rounded-2xl p-7 md:p-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-vibrant block mb-3">
                  فلسفة الاستوديو
                </span>
                <p className="text-xl md:text-2xl font-light  max-w-3xl leading-relaxed">
                  نصنع بعقلية الورشة المنضبطة، وبهدوء بيوت التصميم الفاخر.
                </p>
              </div>
              <p className="text-sm text-claywood/70 max-w-md leading-relaxed text-right md:text-left">
                كل مشروع نعامله على أنه مساحة يجب أن تبدو سهلة وبسيطة، لأن كل
                الجهد الحقيقي يكون قد أنجز بدقة في الخلفية.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
