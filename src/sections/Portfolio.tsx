"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const ITEMS_PER_PAGE = 8;

const categories = [
  "All",
  "Wardrobes",
  "Bedrooms",
  "Kitchens",
  "Doors",
  "Wall Paneling",
  "Living Rooms",
  "Decorative Units",
];

const projects = [
  {
    title: "Boutique Wardrobe",
    category: "Wardrobes",
    img: "/dressing.png",
    desc: "Thoughtful storage planning with integrated lighting that gives the room a refined and orderly presence.",
  },
  {
    title: "Quiet Kitchen",
    category: "Kitchens",
    img: "/kitchen.png",
    desc: "A practical focal point that blends calm lines with discreet integration for a clean, functional result.",
  },
  {
    title: "Primary Door With Soft Finish",
    category: "Doors",
    img: "/door.png",
    desc: "An internal door that controls the rhythm of the space while keeping the design clear and balanced.",
  },
  {
    title: "Textured Wall System",
    category: "Wall Paneling",
    img: "/walls.png",
    desc: "Wood surfacing that transforms the wall into an architectural feature with added depth and character.",
  },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / ITEMS_PER_PAGE));
  const safeCurrentPage = Math.min(currentPage, totalPages);
  const paginatedProjects = filteredProjects.slice(
    (safeCurrentPage - 1) * ITEMS_PER_PAGE,
    safeCurrentPage * ITEMS_PER_PAGE,
  );

  const handleFilterChange = (cat: string) => {
    setActiveFilter(cat);
    setCurrentPage(1);
  };

  return (
    <section
      id="portfolio"
      className="relative w-full bg-background text-foreground px-6 py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-accent text-base uppercase font-bold block mb-3">
            Selected Work
          </span>
          <h2 className="text-4xl md:text-5xl font-light">
            Projects and Finishes
          </h2>
        </motion.div>

        <div className="flex flex-wrap gap-3 mb-16">
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

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {paginatedProjects.map((project, idx) => (
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
            Page {safeCurrentPage} of {totalPages}
          </p>

          <div className="flex items-center gap-2 flex-wrap justify-center">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="min-w-10 h-10 px-3 rounded-full border text-base uppercase tracking-[0.25em] transition-colors bg-transparent border-border text-foreground/60 hover:text-foreground hover:border-foreground/40 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`min-w-10 h-10 px-3 rounded-full border text-base uppercase tracking-[0.25em] transition-colors ${
                  page === safeCurrentPage
                    ? "bg-foreground text-background border-foreground"
                    : "bg-transparent border-border text-foreground/60 hover:text-foreground hover:border-foreground/40"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="min-w-10 h-10 px-3 rounded-full border text-base uppercase tracking-[0.25em] transition-colors bg-transparent border-border text-foreground/60 hover:text-foreground hover:border-foreground/40 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
