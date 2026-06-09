"use client";
import { motion } from "motion/react";

const services = [
  {
    id: "٠١",
    title: "غرف الملابس",
    desc: "أنظمة خزائن واسعة مُصمَّمة خصيصًا بإضاءة ذكية وأسطح قشرة خشبية راقية، تحوّل الروتين اليومي إلى تجربة فنية.",
  },
  {
    id: "٠٢",
    title: "المطابخ المعمارية",
    desc: "محاور طهي تجمع بين الوظيفة الصارمة والجماليات السلسة، مع تشطيبات خشبية دقيقة ومخفيّات متكاملة.",
  },
  {
    id: "٠٣",
    title: "الأبواب المخصصة",
    desc: "مداخل فاخرة وأبواب محورية داخلية مقطوعة بدقة لتحديد تدفق الفضاء بأناقة بسيطة وهوية معمارية واضحة.",
  },
  {
    id: "٠٤",
    title: "أنظمة ألواح الجدران",
    desc: "تكسيات خشبية صوتية أو مخدَّدة أو مطابِقة للكتاب تحوّل الجدران العادية إلى لوحات معمارية حية.",
  },
];

export default function ServicesAr() {
  return (
    <section id="services" className="py-32 bg-sandstone text-claywood px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-6">
          <div>
            <span className="text-vibrant text-xs font-bold tracking-widest block mb-2">قدراتنا</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">عناصر هيكلية مخصصة</h2>
          </div>
          <p className="max-w-md text-claywood/80 font-medium leading-relaxed">
            كل مليمتر يُقطع ويُصبغ ويُشطَّب يدويًا داخل مصنعنا ليتلاءم تمامًا مع مخططاتك المعمارية.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((svc, idx) => (
            <motion.div
              key={svc.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-desert/30 p-8 rounded-2xl border border-claywood/5 flex flex-col justify-between h-80 hover:bg-claywood hover:text-sandstone transition-all duration-300 group"
            >
              <div>
                <span className="text-vibrant font-bold block mb-4 text-xl group-hover:text-sandstone transition-colors">{svc.id}</span>
                <h3 className="text-2xl font-bold mb-3">{svc.title}</h3>
                <p className="text-sm font-medium leading-relaxed text-claywood/70 group-hover:text-sandstone/80 transition-colors">{svc.desc}</p>
              </div>
              <span className="text-xs tracking-widest font-bold pt-4 opacity-0 group-hover:opacity-100 transition-opacity text-vibrant">
                استفسر عن الخدمة ←
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
