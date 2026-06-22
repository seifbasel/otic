'use client';
import { motion } from 'motion/react';

const projects = [
  { title: 'The Obsidian Kitchen', category: 'Kitchen / Minimalist', img: '/kitchen.png' },
  { title: 'Oak Canopy Walk-In', category: 'Dressing Room / Luxury', img: '/dressing.png' },
  { title: 'Oak Canopy Walk-In', category: 'Wooden Doors / Premium', img: '/door.png' },
  { title: 'Slat Wall Linear Integration', category: 'Panels / Acoustic', img: '/walls.png' }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-claywood text-sandstone px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-vibrant text-base uppercase font-bold  block mb-2">CURATED PORTFOLIO</span>
          <h2 className="text-4xl md:text-5xl font-light ">Recent Spatial Realizations</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {projects.map((proj, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative h-112.5 w-full overflow-hidden rounded-xl mb-6 bg-cocoa/20">
                <div className="absolute inset-0 bg-linear-to-t from-claywood via-transparent to-transparent opacity-60 z-10 group-hover:opacity-20 transition-opacity duration-300" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={proj.img} 
                  alt={proj.title} 
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out" 
                />
              </div>
              <p className="text-base text-vibrant font-mono uppercase tracking-wider mb-1">{proj.category}</p>
              <h3 className="text-2xl font-light tracking-wide group-hover:text-vibrant transition-colors duration-300">{proj.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}