'use client';
import { motion } from 'motion/react';

const services = [
  { id: '01', title: 'Dressing Rooms', desc: 'Walk-in statement systems custom-engineered with boutique configurations, integrated intelligent lighting, and premium veneers.' },
  { id: '02', title: 'Architectural Kitchens', desc: 'Culinary epicenters balancing robust utility with seamless hidden integrations and pristine timber millwork.' },
  { id: '03', title: 'Bespoke Doors', desc: 'Grand entryways and internal structural pivot doors precision-cut to define spatial flow with minimalist elegance.' },
  { id: '04', title: 'Wall Panel Systems', desc: 'Accoustic, fluted, or bookmatched rich timber wood surfacing that turns standard walls into architectural art.' },
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-sandstone text-claywood px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-6">
          <div>
            <span className="text-vibrant text-xs uppercase font-bold tracking-widest block mb-2">OUR CAPABILITIES</span>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight">Tailored Structural Elements</h2>
          </div>
          <p className="max-w-md text-claywood/80 font-light">
            Every millimeter is custom cut, stained, and hand-finished within our facility to fit perfectly into your architectural blue-prints.
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
                <span className="text-vibrant font-mono font-bold block mb-4 group-hover:text-sandstone transition-colors">{svc.id}</span>
                <h3 className="text-2xl font-normal mb-3">{svc.title}</h3>
                <p className="text-sm font-light leading-relaxed text-claywood/70 group-hover:text-sandstone/80 transition-colors">{svc.desc}</p>
              </div>
              <span className="text-xs uppercase tracking-widest font-semibold pt-4 opacity-0 group-hover:opacity-100 transition-opacity text-vibrant">
                Inquire Feature &rarr;
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}