"use client";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

const services = [
  {
    id: "01",
    title: "غرف ملابس",
    desc: "أنظمة واسعة مصممة حسب الطلب، بتوزيعات أنيقة، وإضاءة مدمجة، وتشطيبات خشبية راقية.",
    img: "/dressing.png",
  },
  {
    id: "02",
    title: "مطابخ",
    desc: "مساحات طهي تجمع بين العملية العالية والتكامل الخفي والتشطيبات الخشبية الدقيقة.",
    img: "/kitchen.png",
  },
  {
    id: "03",
    title: "أبواب",
    desc: "مداخل داخلية وأبواب محورية دقيقة الصنع، تمنح المساحة حضورًا هادئًا وأنيقًا.",
    img: "/door.png",
  },
  {
    id: "04",
    title: "التكسيات الخشبية",
    desc: "تكسية خشبية مصقولة أو ذات تموّج بصري أو طبعات متوازنة، تحول الجدران إلى عنصر معماري.",
    img: "/livingroom.png",
  },
  {
    id: "05",
    title: "غرف نوم",
    desc: "مساحات خاصة تُنفذ بعناية مع نجارة مخصصة، وإضاءة محيطية، وخامات تمنح إحساسًا بالسكينة.",
    img: "/bedroom.png",
  },
  {
    id: "06",
    title: "غرف معيشة",
    desc: "مساحات خاصة تُنفذ بعناية مع نجارة مخصصة، وإضاءة محيطية، وخامات تمنح إحساسًا بالسكينة.",
    img: "/living-2.png",
  },

];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function ServicesAr() {
  return (
    <section id="services" className="py-32 bg-background text-foreground px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-6"
        >
          <div>
            <span className="text-accent text-base uppercase font-bold  block mb-3">
خدماتنا            </span>
            <h2 className="text-4xl md:text-5xl font-light">
              عناصر معمارية مصممة بعناية
            </h2>
          </div>
          <p className="max-w-md text-foreground/60 font-light text-base md:text-right">
            كل تفصيلة تُقص وتُشكّل وتُنهى داخل منشأتنا لتنسجم بدقة مع المخطط
            المعماري للمساحة.
          </p>
        </motion.div>

        <div className="flex flex-col gap-24 md:gap-32">
          {services.map((svc, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={svc.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
              >
                <motion.div
                  variants={isEven ? fadeInUp : fadeInDown}
                  className={`relative w-full aspect-4/3 overflow-hidden rounded-2xl bg-card ${!isEven ? "lg:order-2" : ""}`}
                >
                  <Image
                    src={svc.img}
                    alt={svc.title}
                    fill
                    className="object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none" />
                </motion.div>

                <motion.div
                  variants={isEven ? fadeInDown : fadeInUp}
                  className={`flex flex-col justify-center ${!isEven ? "lg:order-1 lg:text-right" : ""}`}
                >
                  <span className="text-accent font-mono font-bold text-sm  block mb-4">
                    {svc.id}
                  </span>

                  <h3 className="text-3xl md:text-4xl font-light  mb-6">
                    {svc.title}
                  </h3>

                  <p
                    className={`text-foreground/60 text-base leading-relaxed mb-8 ${!isEven ? "lg:ml-auto" : ""}`}
                    style={{ maxWidth: "480px" }}
                  >
                    {svc.desc}
                  </p>

                  <div className={`${!isEven ? "lg:ml-auto" : ""}`}>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-accent text-base uppercase  font-semibold group/link"
                    >
                      اطلب هذه الخدمة
                      <svg
                        className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
