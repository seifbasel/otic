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
    title: "خزانة بوتيكية",
    category: "غرف الملابس",
    img: "/dressing.png",
    desc: "توزيعات مدروسة مع إضاءة مدمجة تمنح الغرفة حضورًا مرتبًا ومترفًا.",
  },
  {
    title: "غرفة نوم هادئة",
    category: "غرف نوم",
    img: "/bedroom.png",
    desc: "غرفة نوم مصممة بأعمال خشبية مخصصة وتفاصيل هادئة تمنح المساحة راحة وتوازنًا وأناقة دائمة.",
  },
  {
    title: "مطبخ هادئ بتفاصيل دقيقة",
    category: "مطابخ",
    img: "/kitchen.png",
    desc: "مركز عملي متكامل يجمع بين الخطوط الهادئة والتكامل الخفي للخدمات.",
  },
  {
    title: "باب رئيسي بملمس دافئ",
    category: "أبواب",
    img: "/door.png",
    desc: "باب داخلي يضبط حركة المساحة ويمنحها لغة تصميم واضحة ومتناغمة.",
  },
  {
    title: "نظام ألواح مجعدة",
    category: "التكسيات الخشبية",
    img: "/walls.png",
    desc: "كسوة خشبية تحول الجدار إلى عنصر معماري يضيف عمقًا وشخصية للمكان.",
  },
  {
    title: "وحدة ديكور مميزة",
    category: "وحدات ديكورية",
    img: "/decoration-unit-1.png",
    desc: "وحدة مصممة بعناية تجمع بين العرض والتخزين المخفي لتمنح المساحة مظهرًا أنيقًا ومتوازنًا.",
  },
  {
    title: "غرفة معيشة عصرية",
    category: "غرف المعيشة",
    img: "/living-1.png",
    desc: "مساحة معيشية متكاملة تعتمد على أعمال خشبية مخصصة تضيف الدفء والراحة والانسجام البصري.",
  },
  {
    title: "مطبخ بتصميم بسيط",
    category: "مطابخ",
    img: "/kitchen-1.png",
    desc: "خزائن مصممة حسب الطلب مع توزيع عملي وتفاصيل متقنة تلبي احتياجات الاستخدام اليومي.",
  },
  {
    title: "مطبخ بتشطيبات راقية",
    category: "مطابخ",
    img: "/kitchen-2.png",
    desc: "تشطيبات فاخرة وحرفية دقيقة تمنح المطبخ طابعًا خالدًا يجمع بين العملية والأناقة.",
  },
  {
    title: "ألواح جدارية بخطوط انسيابية",
    category: "التكسيات الخشبية",
    img: "/wall-paneling-1.png",
    desc: "ألواح خشبية تضيف إيقاعًا معماريًا وملمسًا غنيًا يعزز شخصية المساحة.",
  },
  {
    title: "باب داخلي بتفاصيل معمارية",
    category: "أبواب",
    img: "/door-1.png",
    desc: "باب داخلي بتشطيب متقن وخطوط هادئة يعزز الخصوصية ويحافظ على انسجام التصميم.",
  },
  {
    title: "غرف نوم عصرية",
    category: "غرف نوم",
    img: "/60.png",
    desc: "غرفة نوم مصممة بتفاصيل هادئة تمنح الغرفة راحة وتوازنًا وأناقة دائمة",
  },
  {
    title: "كراسي مقاهي فاخرة",
    category: "كراسي وطاولات",
    img: "/62.png",
    desc: "كراسي وطاولات خشبية مصممة بتفاصيل هادئة تمنح المكان راحة وتوازن وأناقة دائمة",
  },
  {
    title: "كراسي وطاولات خشبية فاخرة",
    category: "كراسي وطاولات",
    img: "/63.png",
    desc: "كراسي وطاولات خشبية مصممة بتفاصيل هادئة تمنح المكان راحة وتوازن وأناقة دائمة",
  },
  {
    title: "كراسي وطاولات خشبية دائرية",
    category: "كراسي وطاولات",
    img: "/64.png",
    desc: "كراسي وطاولات خشبية مصممة لتناسب هوية المكان وتوازن بين الراحة وأناقة دائمة",
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
