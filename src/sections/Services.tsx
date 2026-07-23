"use client";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

const services = [
  {
    id: "01",
    title: "Dressing Rooms",
    desc: "Walk-in statement systems custom-engineered with boutique configurations, integrated intelligent lighting, and premium veneers.",
    img: "/dressing.webp", // Replace with your actual image paths
  },
  {
    id: "02",
    title: "Kitchens",
    desc: "Culinary epicenters balancing robust utility with seamless hidden integrations and pristine timber millwork.",
    img: "/kitchen.webp",
  },
  {
    id: "03",
    title: "Doors",
    desc: "Grand entryways and internal structural pivot doors precision-cut to define spatial flow with minimalist elegance.",
    img: "/door.webp",
  },
  {
    id: "04",
    title: "Wall Panel Systems",
    desc: "Accoustic, fluted, or bookmatched rich timber wood surfacing that turns standard walls into architectural art.",
    img: "/livingroom.webp",
  },
  {
    id: "05",
    title: "Bedrooms",
    desc: "Private sanctuaries custom-crafted with bespoke joinery, integrated ambient lighting, and premium material palettes designed for ultimate tranquility.",
    img: "/bedroom.webp",
  },
  {
    id: "06",
    title: "Living Rooms",
    desc: "Curated living spaces crafted with tailored joinery, ambient lighting, and balanced material palettes that create a calm, refined atmosphere.",
    img: "/living-2.webp",
  },
];

// Animation variants for the premium fade-in effect
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8, // use a named easing compatible with Framer Motion types
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

export default function Services() {
  return (
    <section
      id="services"
      className="py-32 bg-background text-foreground px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-6"
        >
          <div>
            <span className="text-accent text-base uppercase font-bold  block mb-3">
              OUR CAPABILITIES
            </span>
            <h2 className="text-4xl md:text-5xl font-light ">
              Tailored Structural Elements
            </h2>
          </div>
          <p className="max-w-md text-foreground/60 font-light text-base">
            Every millimeter is custom cut, stained, and hand-finished within
            our facility to fit perfectly into your architectural blue-prints.
          </p>
        </motion.div>

        {/* Services List */}
        <div className="flex flex-col gap-24 md:gap-32">
          {services.map((svc, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={svc.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  !isEven ? "lg:direction-rtl" : ""
                }`}
              >
                {/* Image Column */}
                <motion.div
                  variants={isEven ? fadeInUp : fadeInDown}
                  className={`relative w-full aspect-4/3 overflow-hidden rounded-2xl bg-card ${
                    !isEven ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={svc.img}
                    alt={svc.title}
                    fill
                    className="object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* Subtle inner border for premium feel */}
                  <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none" />
                </motion.div>

                {/* Text Column */}
                <motion.div
                  variants={isEven ? fadeInDown : fadeInUp}
                  className={`flex flex-col justify-center ${
                    !isEven ? "lg:order-1 lg:text-right" : ""
                  }`}
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
                      Inquire Feature
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
