"use client";

import { useState } from "react";

export default function ContactAr() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    scope: "اختر نطاق الاهتمام",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct the WhatsApp message string
    const text =
      `*طلب استشارة جديدة من أوتيك*\n\n` +
      `*الاسم:* ${formData.name || "لم يذكر"}\n` +
      `*البريد الإلكتروني:* ${formData.email || "لم يذكر"}\n` +
      `*نطاق الاهتمام:* ${formData.scope}\n` +
      `*ملاحظات المشروع:* ${formData.notes || "لا توجد ملاحظات"}`;

    const whatsappUrl = `https://wa.me/966544230533?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      id="contact"
      className="relative py-28 md:py-36 bg-sandstone px-6 overflow-hidden"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-claywood/20 to-transparent" />
      <div className="absolute -top-16 right-0 w-72 h-72 bg-vibrant/10 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">
        <div className="lg:col-span-5 flex flex-col justify-between text-right">
          <div>
            <span className="text-accent text-base font-bold  block mb-4">
              تواصل مع أوتيك
            </span>
            <h2 className="text-4xl md:text-5xl font-light  leading-tight max-w-xl mr-auto">
              ابدأ مشروعًا بصياغة تفاصيل مميزة، دقيقة، وفاخرة.
            </h2>
            <p className="mt-6 text-claywood/80 font-light leading-relaxed text-base md:text-lg max-w-xl mr-auto">
              شاركنا ملامح مساحتك وسنعود إليك بخطوة واضحة ومعتنى بها. نحن نعمل
              مع عملاء يقدّرون التفاصيل، والهدوء في التنفيذ، والنتيجة النهائية
              الراقية.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-claywood/10 bg-background/50 backdrop-blur-sm p-5">
              <p className="text-[10px] uppercase tracking-[0.3em] text-vibrant mb-2">
                الرد
              </p>
              <p className="text-sm text-claywood/80 leading-relaxed">
                خلال يوم عمل واحد.
              </p>
            </div>
            <div className="rounded-2xl border border-claywood/10 bg-background/50 backdrop-blur-sm p-5">
              <p className="text-[10px] uppercase tracking-[0.3em] text-vibrant mb-2">
                النطاق
              </p>
              <p className="text-sm text-claywood/80 leading-relaxed">
                الفلل والمشاريع الفاخرة.
              </p>
            </div>
            <div className="rounded-2xl border border-claywood/10 bg-background/50 backdrop-blur-sm p-5">
              <p className="text-[10px] uppercase tracking-[0.3em] text-vibrant mb-2">
                الزيارة
              </p>
              <p className="text-sm text-claywood/80 leading-relaxed">
                الاستشارة تكون بالحجز المسبق.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="relative rounded-4xl border border-white/20 bg-accent dark:bg-accent/70 text-foreground shadow-[0_24px_80px_rgba(0,0,0,0.18)] overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-claywood/10 rounded-full blur-3xl" />

            <div className="relative z-10 p-8 md:p-12 lg:p-14">
              <div className="mb-10 text-right">
                <h3 className="text-2xl md:text-3xl font-light ">
                  اطلب استشارة خاصة من الاستوديو
                </h3>
                <p className="mt-3 text-sandstone/75 text-sm md:text-base leading-relaxed max-w-2xl mr-auto">
                  أخبرنا بما تخطط له، وسنساعدك على تحويله إلى موجز تنفيذ واضح
                  ومصقول.
                </p>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <label className="space-y-2 block text-right">
                    <span className="text-sm text-sandstone/70">
                      اسمك الكريم
                    </span>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="اسمك الكريم"
                      className="w-full bg-claywood/35 border border-sandstone/20 focus:border-white/40 rounded-xl text-sandstone px-4 py-3.5 text-sm focus:outline-none transition-colors placeholder:text-sandstone/50 text-right"
                    />
                  </label>
                  <label className="space-y-2 block text-right">
                    <span className="text-sm text-sandstone/70">
                      البريد الإلكتروني
                    </span>
                    <input
                      type="email"
                      required
                      dir="ltr"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="البريد الإلكتروني"
                      className="w-full bg-claywood/35 border border-sandstone/20 focus:border-white/40 rounded-xl text-sandstone px-4 py-3.5 text-sm focus:outline-none transition-colors placeholder:text-sandstone/50 text-right"
                    />
                  </label>
                </div>

                <label className="space-y-2 block text-right">
                  <span className="text-sm text-sandstone/70">
                    نطاق الاهتمام
                  </span>
                  <select
                    value={formData.scope}
                    onChange={(e) =>
                      setFormData({ ...formData, scope: e.target.value })
                    }
                    className="w-full bg-sandstone dark:bg-claywood/35 border border-sandstone/20 focus:border-white/40 rounded-xl px-4 py-3.5 text-sm focus:outline-none transition-colors text-claywood dark:text-sandstone"
                  >
                    <option className="bg-background text-claywood dark:bg-onyx dark:text-sandstone">
                      اختر نطاق الاهتمام
                    </option>
                    <option className="bg-background text-claywood dark:bg-onyx dark:text-sandstone">
                      غرفة ملابس متكاملة
                    </option>
                    <option className="bg-background text-claywood dark:bg-onyx dark:text-sandstone">
                      مطبخ معماري فاخر
                    </option>
                    <option className="bg-background text-claywood dark:bg-onyx dark:text-sandstone">
                      أبواب وألواح جدارية مدمجة
                    </option>
                    <option className="bg-background text-claywood dark:bg-onyx dark:text-sandstone">
                      تنفيذ سكني متكامل
                    </option>
                  </select>
                </label>

                <label className="space-y-2 block text-right">
                  <span className="text-sm text-sandstone/70">
                    ملاحظات المشروع
                  </span>
                  <textarea
                    rows={5}
                    value={formData.notes}
                    onChange={(e) =>
                      setFormData({ ...formData, notes: e.target.value })
                    }
                    placeholder="شاركنا المساحة التقريبية، واتجاه الأسلوب، والجدول الزمني المتوقع..."
                    className="w-full bg-claywood/35 border border-sandstone/20 focus:border-white/40 rounded-xl text-sandstone px-4 py-3.5 text-sm focus:outline-none transition-colors resize-none placeholder:text-sandstone/50 text-right"
                  />
                </label>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                  <button
                    type="submit"
                    className="bg-white hover:bg-white/90 text-accent font-medium text-base px-8 py-4 rounded-full transition-colors w-full sm:w-auto"
                  >
                    طلب الاستشارة
                  </button>
                  <p className="text-base text-sandstone/75 leading-relaxed max-w-md">
                    نتعامل مع المشاريع السكنية الخاصة، والتشطيبات الفاخرة،
                    وأعمال النجارة المصممة حسب الطلب.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
