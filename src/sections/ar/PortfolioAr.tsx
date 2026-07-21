"use client";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const ITEMS_PER_PAGE = 8;

const categories = [
  "الكل",
  "غرف الملابس",
  "غرف نوم",
  "مطابخ",
  "أبواب",
  "التكسيات الخشبية",
  "غرف معيشة",
  "وحدات ديكورية",
  "كراسي وطاولات",
];

const projects = [
  {
    title: "خزانة ملابس فاخرة",
    category: "غرف الملابس",
    img: "/dressing.png",
    desc: "توزيع مدروس لمساحات التخزين مع إضاءة مدمجة تمنح الغرفة طابعًا أنيقًا ومرتبًا.",
  },
  {
    title: "غرفة نوم فاخرة",
    category: "غرف نوم",
    img: "/bedroom.png",
    desc: "غرفة نوم مصممة حسب الطلب بأعمال خشبية متكاملة، وخامات ناعمة، ونِسب متوازنة لراحة يومية متكاملة.",
  },
  {
    title: "غرفة نوم مزدوجة",
    category: "غرف نوم",
    img: "/45.png",
    desc: "غرفة نوم مصممة حسب الطلب بأعمال خشبية متكاملة، وخامات ناعمة، ونِسب متوازنة لراحة يومية متكاملة.",
  },
  {
    title: "خزانة ملابس خشبية",
    category: "غرف الملابس",
    img: "/44.png",
    desc: "توزيع مدروس لمساحات التخزين مع إضاءة مدمجة تمنح الغرفة طابعًا أنيقًا ومرتبًا.",
  },
  {
    title: "غرفة نوم مودرن كلاسيك",
    category: "غرف نوم",
    img: "/60.png",
    desc: "تصميم متقن بتفاصيل نظيفة يضفي على غرفة النوم مزيدًا من الراحة والأناقة.",
  },
  {
    title: "مطبخ بتصميم هادئ",
    category: "مطابخ",
    img: "/kitchen.png",
    desc: "مساحة عملية تجمع بين الخطوط الهادئة والتجهيزات المدمجة بأسلوب أنيق ومرتب.",
  },
  {
    title: "تكسية جدارية بملمس بارز",
    category: "التكسيات الخشبية",
    img: "/walls.png",
    desc: "تكسية خشبية تحول الجدار إلى عنصر معماري يضيف للمكان عمقًا وهوية مميزة.",
  },
  {
    title: "غرفة ملابس متكاملة",
    category: "غرف الملابس",
    img: "/50.jpg",
    desc: "توزيع مدروس لمساحات التخزين مع إضاءة مدمجة تمنح الغرفة طابعًا أنيقًا ومرتبًا.",
  },
  {
    title: "وحدة ديكور مميزة",
    category: "وحدات ديكورية",
    img: "/decoration-unit-1.png",
    desc: "وحدة عرض مصممة حسب الطلب، تجمع بين الرفوف المفتوحة والتخزين المخفي لإطلالة داخلية راقية.",
  },
  {
    title: "غرفة نوم كلاسيكية",
    category: "غرف نوم",
    img: "/68.png",
    desc: "غرفة نوم كلاسيكية بتفاصيل خشبية متقنة تمنح المساحة دفئًا وأناقة وراحة تدوم.",
  },
  {
    title: "غرفة معيشة عصرية",
    category: "غرف معيشة",
    img: "/living-1.png",
    desc: "مساحة معيشة متكاملة تضيف فيها الأعمال الخشبية المصممة خصيصًا دفئًا وراحة وانسجامًا بصريًا.",
  },
  {
    title: "نظام كسوة خشبية بخطوط طولية",
    category: "التكسيات الخشبية",
    img: "/70.jpg",
    desc: "خطوط خشبية منتظمة تضيف إلى الجدار عمقًا معماريًا وإيقاعًا بصريًا هادئًا.",
  },
  {
    title: "مطبخ بتصميم بسيط",
    category: "مطابخ",
    img: "/kitchen-1.png",
    desc: "خزائن مصممة حسب الطلب بتوزيع عملي وتفاصيل انسيابية تلائم احتياجات الاستخدام اليومي.",
  },
  {
    title: "خزانة ملابس بيضاء فاخرة",
    category: "غرف الملابس",
    img: "/57.png",
    desc: "توزيع مدروس لمساحات التخزين مع إضاءة مدمجة تمنح الغرفة طابعًا أنيقًا ومرتبًا.",
  },
  {
    title: "نظام جدار خشبي",
    category: "التكسيات الخشبية",
    img: "/59.png",
    desc: "معالجة خشبية متكاملة تحوّل الجدار إلى عنصر معماري بارز يثري المكان بالدفء والعمق.",
  },
  {
    title: "خزانة ملابس من الخشب الداكن",
    category: "غرف الملابس",
    img: "/58.png",
    desc: "خزانة مصممة بعناية تجمع بين سعة التخزين وأناقة الخشب الداكن لإطلالة مرتبة وفاخرة.",
  },
  {
    title: "غرفة معيشة مودرن كلاسيك",
    category: "غرف معيشة",
    img: "/living-2.png",
    desc: "مساحة معيشة متكاملة تضيف فيها الأعمال الخشبية المصممة خصيصًا دفئًا وراحة وانسجامًا بصريًا.",
  },
  {
    title: "مطبخ بتصميم استثنائي",
    category: "مطابخ",
    img: "/kitchen-2.png",
    desc: "تشطيبات فاخرة وحرفية دقيقة تجتمع في مطبخ أنيق بتصميم يتجاوز تغيّر الصيحات.",
  },
  {
    title: "كسوة جدارية من الخشب الأبيض",
    category: "التكسيات الخشبية",
    img: "/61.png",
    desc: "كسوة خشبية بلون أبيض تمنح الجدار حضورًا أنيقًا وإحساسًا أكثر رحابة وإشراقًا.",
  },
  {
    title: "باب رئيسي بتشطيب ناعم",
    category: "أبواب",
    img: "/door.png",
    desc: "باب داخلي ينظم إيقاع المساحة ويحافظ على وضوح التصميم وتوازنه.",
  },
  {
    title: "تكسية جدارية بخطوط طولية",
    category: "التكسيات الخشبية",
    img: "/wall-paneling-1.png",
    desc: "ألواح خشبية معمارية تضيف للمساحة ملمسًا وإيقاعًا وأناقة هادئة.",
  },
  {
    title: "باب داخلي بطابع معماري",
    category: "أبواب",
    img: "/door-1.png",
    desc: "باب داخلي مصنوع بإتقان وتفاصيل نظيفة تعزز الخصوصية والانسجام البصري.",
  },
  {
    title: "باب داخلي",
    category: "أبواب",
    img: "/46.png",
    desc: "باب داخلي مصنوع بإتقان وتفاصيل نظيفة تعزز الخصوصية والانسجام البصري.",
  },
  {
    title: "نظام كسوة خشبية بنمط شبكي",
    category: "التكسيات الخشبية",
    img: "/71.png",
    desc: "تكوين هندسي من الخشب يضيف للجدار إيقاعًا بصريًا وملمسًا معماريًا مميزًا.",
  },
  {
    title: "باب داخلي خشبي",
    category: "أبواب",
    img: "/47.png",
    desc: "باب داخلي مصنوع بإتقان وتفاصيل نظيفة تعزز الخصوصية والانسجام البصري.",
  },
  {
    title: "كسوة جدارية خشبية منحنية",
    category: "التكسيات الخشبية",
    img: "/66.png",
    desc: "تفاصيل خشبية منحنية تنساب مع الجدار وتمنح المساحة طابعًا دافئًا وأكثر سلاسة.",
  },
  {
    title: "كراسي مقهى عصرية",
    category: "كراسي وطاولات",
    img: "/62.png",
    desc: "كراسي وطاولات خشبية مصنوعة بإتقان وتفاصيل نظيفة تمنح الجلسة مزيدًا من الراحة.",
  },
  {
    title: "باب رئيسي بتشطيب ناعم وانسيابي",
    category: "أبواب",
    img: "/53.png",
    desc: "باب داخلي ينظم إيقاع المساحة ويحافظ على وضوح التصميم وتوازنه.",
  },
  {
    title: "كراسي وطاولات مقهى عصرية",
    category: "كراسي وطاولات",
    img: "/63.png",
    desc: "كراسي وطاولات خشبية مصنوعة بإتقان وتفاصيل نظيفة تمنح الجلسة مزيدًا من الراحة.",
  },
  {
    title: "جدار من خشب البلوط",
    category: "التكسيات الخشبية",
    img: "/67.png",
    desc: "جدار بكسوة من خشب البلوط يبرز جمال العروق الطبيعية ويضفي دفئًا ورقيًا على المكان.",
  },
  {
    title: "كراسي وطاولات خشبية دائرية",
    category: "كراسي وطاولات",
    img: "/64.png",
    desc: "كراسي وطاولات خشبية مصممة لتنسجم مع هوية المكان، وتوازن بين الراحة والأناقة الدائمة.",
  },
  {
    title: "باب رئيسي خشبي",
    category: "أبواب",
    img: "/54.png",
    desc: "باب داخلي ينظم إيقاع المساحة ويحافظ على وضوح التصميم وتوازنه.",
  },
  {
    title: "باب داخلي فاخر",
    category: "أبواب",
    img: "/49.png",
    desc: "باب داخلي مصنوع بإتقان وتفاصيل نظيفة تعزز الخصوصية والانسجام البصري.",
  },
  {
    title: "كرسي مقهى عصري",
    category: "كراسي وطاولات",
    img: "/72.png",
    desc: "كرسي خشبي عصري يجمع بين الراحة والخطوط النظيفة ليلائم أجواء المقاهي الحديثة.",
  },
];

export default function PortfolioAr() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeFilter, setActiveFilter] = useState("الكل");
  const [loadedPages, setLoadedPages] = useState(1);

  const filteredProjects =
    activeFilter === "الكل"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredProjects.length / ITEMS_PER_PAGE),
  );
  const safeLoadedPages = Math.min(loadedPages, totalPages);

  const visibleProjects = filteredProjects.slice(
    0,
    safeLoadedPages * ITEMS_PER_PAGE,
  );

  const handleFilterChange = (cat: string) => {
    setActiveFilter(cat);
    setLoadedPages(1);
  };

  const handlePageClick = (page: number) => {
    setLoadedPages((prev) => Math.max(prev, page));
  };

  const handleLoadMore = () => {
    setLoadedPages((prev) => Math.min(totalPages, prev + 1));
  };

  const handleShowLess = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    setLoadedPages(1);
  };

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="relative w-full bg-background text-foreground px-6 py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-right"
        >
          <span className="text-accent text-base uppercase font-bold block mb-3">
            أعمال مختارة
          </span>
          <h2 className="text-4xl md:text-5xl font-light">أعمال وتصميمات</h2>
        </motion.div>

        <div className="flex flex-wrap gap-3 mb-16 justify-start md:justify-end">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleFilterChange(cat)}
              className={`relative px-5 py-2.5 text-base uppercase font-medium rounded-sm border transition-colors duration-300 cursor-pointer ${
                activeFilter === cat
                  ? "bg-foreground text-background border-foreground"
                  : "bg-transparent text-foreground/60 border-border hover:border-foreground/40 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  duration: 0.4,
                  delay: (idx % ITEMS_PER_PAGE) * 0.05,
                }}
                className="group cursor-pointer"
              >
                <div className="relative w-full aspect-4/5 overflow-hidden rounded-xl mb-5 bg-card border border-border group-hover:border-accent/30 transition-colors duration-300">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-onyx/0 group-hover:bg-onyx/40 transition-colors duration-300 z-10" />
                </div>

                <p className="text-accent text-base font-mono mb-1.5">
                  {project.category}
                </p>
                <h3 className="text-xl font-light group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-foreground/60 leading-relaxed max-w-sm">
                  {project.desc}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-base text-foreground/40">
            عرض {visibleProjects.length} من {filteredProjects.length}
          </p>

          <div className="flex items-center gap-2 flex-wrap justify-center">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageClick(page)}
                className={`w-10 h-10 shrink-0 rounded-full border text-base transition-colors inline-flex items-center justify-center leading-none ${
                  page <= safeLoadedPages
                    ? "bg-foreground text-background border-foreground"
                    : "bg-transparent border-border text-foreground/60 hover:text-foreground hover:border-foreground/40"
                }`}
              >
                <span className="flex items-center justify-center">{page}</span>
              </button>
            ))}

            {safeLoadedPages > 1 && (
              <button
                onClick={handleShowLess}
                className="h-10 px-5 rounded-full border text-base transition-colors inline-flex items-center justify-center leading-none bg-transparent border-border text-foreground/60 hover:text-foreground hover:border-foreground/40"
              >
                عرض أقل
              </button>
            )}

            <button
              onClick={handleLoadMore}
              disabled={safeLoadedPages === totalPages}
              className="h-10 px-5 rounded-full border text-base transition-colors inline-flex items-center justify-center leading-none bg-transparent border-border text-foreground/60 hover:text-foreground hover:border-foreground/40 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              عرض المزيد
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
