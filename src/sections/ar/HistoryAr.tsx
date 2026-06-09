"use client";

export default function HistoryAr() {
  return (
    <section id="history" className="py-32 bg-desert/20 text-claywood px-6 border-t border-claywood/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5">
          <span className="text-vibrant text-xs font-bold tracking-widest block mb-2">إرثنا</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">الدقة والصبر عبر الزمن</h2>
          <p className="text-claywood/80 font-medium leading-relaxed mb-6">
            وُلدت أوتيك من رغبة جماعية في إزالة الاحتكاك بين النية المعمارية وتنفيذ النجارة الخام. على مرّ السنين، انتقلنا من ورشة عمل متخصصة إلى مصنع أخشاب مدفوع بالتكنولوجيا.
          </p>
          <div className="text-6xl font-bold text-cocoa/40">تأسست ٢٠٢٤</div>
        </div>

        <div className="lg:col-span-7 grid grid-cols-2 gap-6">
          <div className="bg-claywood text-sandstone p-8 rounded-2xl flex flex-col justify-between h-55">
            <h4 className="text-4xl font-bold text-vibrant">١٠٠٪</h4>
            <p className="text-xs font-medium tracking-wide text-desert">هندسة خشبية راقية وتنفيذ ألواح داخلي بالكامل.</p>
          </div>
          <div className="bg-sandstone text-claywood p-8 rounded-2xl flex flex-col justify-between h-55 border border-claywood/10">
            <h4 className="text-4xl font-bold text-cocoa">مميّز</h4>
            <p className="text-xs font-medium tracking-wide text-claywood/70">مواد خام تُستورد حصريًا من الغابات الأوروبية المستدامة.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
