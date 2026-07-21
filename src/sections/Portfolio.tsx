"use client";
import { useRef, useState } from "react";
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
  "Chairs & Tables",
];

const projects = [
  {
    title: "Boutique Wardrobe",
    category: "Wardrobes",
    img: "/dressing.png",
    desc: "Thoughtful storage planning with integrated lighting that gives the room a refined and orderly presence.",
  },
  {
    title: "Premium Bedroom",
    category: "Bedrooms",
    img: "/bedroom.png",
    desc: "A custom-designed bedroom featuring integrated woodwork, soft textures, and balanced proportions for everyday comfort.",
  },
  {
    title: "Double Bedroom",
    category: "Bedrooms",
    img: "/45.png",
    desc: "A custom-designed bedroom featuring integrated woodwork, soft textures, and balanced proportions for everyday comfort.",
  },
  {
    title: "Wooden Wardrobe",
    category: "Wardrobes",
    img: "/44.png",
    desc: "Thoughtful storage planning with integrated lighting that gives the room a refined and orderly presence.",
  },
  {
    title: "Modern classic bedroom",
    category: "Bedrooms",
    img: "/60.png",
    desc: "A finely crafted bedroom door with clean detailing that enhances comfort.",
  },
  {
    title: "Quiet Kitchen",
    category: "Kitchens",
    img: "/kitchen.png",
    desc: "A practical focal point that blends calm lines with discreet integration for a clean, functional result.",
  },

  {
    title: "Textured Wall System",
    category: "Wall Paneling",
    img: "/walls.png",
    desc: "Wood surfacing that transforms the wall into an architectural feature with added depth and character.",
  },
  {
    title: "Dressing Wardrobe",
    category: "Wardrobes",
    img: "/50.jpg",
    desc: "Thoughtful storage planning with integrated lighting that gives the room a refined and orderly presence.",
  },
  {
    title: "Statement Decoration Unit",
    category: "Decorative Units",
    img: "/decoration-unit-1.png",
    desc: "A custom-built display piece that balances open shelving and concealed storage for a refined interior.",
  },
  {
    title: "Classic bedroom",
    category: "Bedrooms",
    img: "/68.png",
    desc: "A finely crafted bedroom door with clean detailing that enhances comfort.",
  },
  {
    title: "Contemporary Living Room",
    category: "Living Rooms",
    img: "/living-1.png",
    desc: "A cohesive living environment where custom woodwork creates warmth, comfort, and visual continuity.",
  },
  {
    title: "Linear wood Paneling System",
    category: "Wall Paneling",
    img: "/70.jpg",
    desc: "Wood surfacing that transforms the wall into an architectural feature with added depth and character.",
  },
  {
    title: "Minimalist Kitchen",
    category: "Kitchens",
    img: "/kitchen-1.png",
    desc: "Tailored cabinetry with efficient layouts and seamless detailing designed for everyday performance.",
  },
  {
    title: "Premium White Wardrobe",
    category: "Wardrobes",
    img: "/57.png",
    desc: "Thoughtful storage planning with integrated lighting that gives the room a refined and orderly presence.",
  },
  {
    title: "Wooden Wall System",
    category: "Wall Paneling",
    img: "/59.png",
    desc: "Wood surfacing that transforms the wall into an architectural feature with added depth and character.",
  },
  {
    title: "Dark Wood Wardrobe",
    category: "Wardrobes",
    img: "/58.png",
    desc: "Thoughtful storage planning with integrated lighting that gives the room a refined and orderly presence.",
  },
  {
    title: "Modern Classic Living Room",
    category: "Living Rooms",
    img: "/living-2.png",
    desc: "A cohesive living environment where custom woodwork creates warmth, comfort, and visual continuity.",
  },
  {
    title: "Signature Kitchen",
    category: "Kitchens",
    img: "/kitchen-2.png",
    desc: "Premium finishes and precise craftsmanship combine to create a timeless kitchen with lasting appeal.",
  },
  {
    title: "White Wood Wall Paneling System",
    category: "Wall Paneling",
    img: "/61.png",
    desc: "Wood surfacing that transforms the wall into an architectural feature with added depth and character.",
  },
  {
    title: "Primary Door With Soft Finish",
    category: "Doors",
    img: "/door.png",
    desc: "An internal door that controls the rhythm of the space while keeping the design clear and balanced.",
  },
  {
    title: "Linear Wall Paneling",
    category: "Wall Paneling",
    img: "/wall-paneling-1.png",
    desc: "Architectural wood panels that introduce texture, rhythm, and understated elegance to the space.",
  },
  {
    title: "Architectural Interior Door",
    category: "Doors",
    img: "/door-1.png",
    desc: "A finely crafted interior door with clean detailing that enhances both privacy and visual harmony.",
  },
  {
    title: "Interior Door",
    category: "Doors",
    img: "/46.png",
    desc: "A finely crafted interior door with clean detailing that enhances both privacy and visual harmony.",
  },
  {
    title: "Grid Wood Paneling System",
    category: "Wall Paneling",
    img: "/71.png",
    desc: "Wood surfacing that transforms the wall into an architectural feature with added depth and character.",
  },
  {
    title: "wooden Interior Door",
    category: "Doors",
    img: "/47.png",
    desc: "A finely crafted interior door with clean detailing that enhances both privacy and visual harmony.",
  },
  {
    title: "Round Wooden Wall Paneling System",
    category: "Wall Paneling",
    img: "/66.png",
    desc: "Wood surfacing that transforms the wall into an architectural feature with added depth and character.",
  },

  {
    title: "Modern Cafe Chairs",
    category: "Chairs & Tables",
    img: "/62.png",
    desc: "A finely crafted wooden chairs and tables with clean detailing that enhances comfort.",
  },
  {
    title: "Primary Door With Soft Smooth Finish",
    category: "Doors",
    img: "/53.png",
    desc: "An internal door that controls the rhythm of the space while keeping the design clear and balanced.",
  },
  {
    title: "Modern Cafe Chairs and Tables",
    category: "Chairs & Tables",
    img: "/63.png",
    desc: "A finely crafted wooden chairs and tables with clean detailing that enhances comfort.",
  },
  {
    title: "Oak Wood Wall",
    category: "Wall Paneling",
    img: "/67.png",
    desc: "Wood surfacing that transforms the wall into an architectural feature with added depth and character.",
  },
  {
    title: "Round Wooden Chairs and Tables",
    category: "Chairs & Tables",
    img: "/64.png",
    desc: "Wooden chairs and tables designed to suit the identity of the space, balancing comfort with lasting elegance.",
  },
  {
    title: "Primary Wooden Door",
    category: "Doors",
    img: "/54.png",
    desc: "An internal door that controls the rhythm of the space while keeping the design clear and balanced.",
  },
  {
    title: "Premium Interior Door",
    category: "Doors",
    img: "/49.png",
    desc: "A finely crafted interior door with clean detailing that enhances both privacy and visual harmony.",
  },
  {
    title: "Modern Cafe Chair",
    category: "Chairs & Tables",
    img: "/72.png",
    desc: "A finely crafted wooden chairs and tables with clean detailing that enhances comfort.",
  },
];

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const [loadedPages, setLoadedPages] = useState(1);

  const filteredProjects =
    activeFilter === "All"
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
    // Scroll back to the top of the section first so the collapse
    // reads as a smooth transition instead of a sudden cut below
    // the fold, then reset the visible items.
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
            Showing {visibleProjects.length} of {filteredProjects.length}
          </p>

          <div className="flex items-center gap-2 flex-wrap justify-center">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageClick(page)}
                className={`w-10 h-10 shrink-0 rounded-full border text-base uppercase tracking-normal transition-colors inline-flex items-center justify-center leading-none ${
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
                className="h-10 px-5 rounded-full border text-base uppercase tracking-[0.25em] transition-colors inline-flex items-center justify-center leading-none bg-transparent border-border text-foreground/60 hover:text-foreground hover:border-foreground/40"
              >
                Show Less
              </button>
            )}

            <button
              onClick={handleLoadMore}
              disabled={safeLoadedPages === totalPages}
              className="h-10 px-5 rounded-full border text-base uppercase tracking-[0.25em] transition-colors inline-flex items-center justify-center leading-none bg-transparent border-border text-foreground/60 hover:text-foreground hover:border-foreground/40 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Load More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
