"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "مطابخ مفصلة",
    category: "النجارة المعمارية",
    img: "/kitchen.webp",
    description: "مساحات طهي مصممة بعناية لتجمع بين العملية العالية والهدوء البصري.",
  },
  {
    title: "غرف ملابس فاخرة",
    category: "تصميم الفراغ",
    img: "/dressing.webp",
    description: "خزائن واسعة ومساحات تبديل ترتقي بالروتين اليومي إلى تجربة راقية.",
  },
  {
    title: "أبواب خشبية راقية",
    category: "بيانات المدخل",
    img: "/door.webp",
    description: "مداخل مصنوعة يدويًا تمنح الهوية المعمارية للمساحة لغة واضحة.",
  },
  {
    title: "ألواح جدارية صوتية",
    category: "التكامل الداخلي",
    img: "/walls.webp",
    description: "جدران بتفاصيل خشبية مدمجة توازن بين الجمال والوظيفة والراحة الصوتية.",
  },
];

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glareX, setGlareX] = useState(50);
  const [glareY, setGlareY] = useState(50);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setRotateX((y - rect.height / 2) / -12);
    setRotateY((x - rect.width / 2) / 12);
    setGlareX((x / rect.width) * 100);
    setGlareY((y / rect.height) * 100);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
      animate={{ rotateX, rotateY }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className={className}
    >
      {children}
      <div
        className="absolute inset-0 z-20 pointer-events-none rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay"
        style={{ background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.15), transparent 60%)` }}
      />
    </motion.div>
  );
}

export default function CraftsAr() {
  return (
    <section id="services" className="py-32 bg-background text-foreground px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-right">
          <span className="text-accent text-base font-bold  block mb-3">
            ما نقدمه
          </span>
          <h2 className="text-4xl md:text-5xl font-light ">
            حلولنا الحرفية
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <TiltCard className="group relative h-120 rounded-2xl cursor-pointer overflow-hidden border border-border shadow-lg hover:shadow-2xl hover:shadow-accent/10 transition-shadow duration-500">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="absolute inset-0 w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-out"
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-onyx via-onyx/60 to-transparent z-10 group-hover:via-onyx/40 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-right" style={{ transform: "translateZ(40px)" }}>
                  <span className="text-accent text-base font-bold mb-2 block">
                    {service.category}
                  </span>
                  <h3 className="text-2xl font-bold tracking-wide text-bone mb-3 group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-bone/60 text-sm font-medium leading-relaxed opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-out">
                    {service.description}
                  </p>
                </div>
                <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-accent/50 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-accent/50 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
