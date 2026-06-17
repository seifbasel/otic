"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const categories = [
  "All",
  "Dressing Rooms",
  "Architectural Kitchens",
  "Bespoke Doors",
  "Wall Paneling",
];

const projects = [
  {
    title: "Boutique Wardrobe",
    category: "Dressing Rooms",
    img: "/dressing.png",
    desc: "Custom-engineered with boutique configurations and integrated intelligent lighting.",
  },
  {
    title: "Minimalist Culinary",
    category: "Architectural Kitchens",
    img: "/kitchen.png",
    desc: "Culinary epicenters balancing seamless hidden integrations and minimalist forms.",
  },
  {
    title: "Grand Mahogany Door",
    category: "Bespoke Doors",
    img: "/door.png",
    desc: "Internal structural doors defining spatial flow with minimalist elegance and rich wood tones.",
  },
  {
    title: "Fluted Oak System",
    category: "Wall Paneling",
    img: "/walls.png",
    desc: "Rich timber wood surfacing that turns standard walls into architectural installations.",
  },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="portfolio"
      className="relative w-full bg-background text-foreground px-6 py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-accent text-xs uppercase font-bold tracking-widest block mb-3">
            SELECTED WORK
          </span>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight">
            Our Portfolio
          </h2>
        </motion.div>

        {/* ── Filter Options ── */}
        <div className="flex flex-wrap gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`relative px-5 py-2.5 text-xs uppercase tracking-widest font-medium rounded-sm border transition-colors duration-300 cursor-pointer ${
                activeFilter === cat
                  ? "bg-foreground text-background border-foreground"
                  : "bg-transparent text-foreground/60 border-border hover:border-foreground/40 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── Filtered Grid ── */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
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

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-onyx/0 group-hover:bg-onyx/40 transition-colors duration-300 z-10" />
                </div>

                <p className="text-accent text-[10px] font-mono uppercase tracking-[0.2em] mb-1.5">
                  {project.category}
                </p>
                <h3 className="text-xl font-light tracking-wide group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
