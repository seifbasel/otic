'use client';

export default function History() {
  return (
    <section id="history" className="py-32 bg-desert/20 text-claywood px-6 border-t border-claywood/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5">
          <span className="text-vibrant text-xs uppercase font-bold tracking-widest block mb-2">OUR HERITAGE</span>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">Precision and Patience Over Time</h2>
          <p className="text-claywood/80 font-light leading-relaxed mb-6">
            OTIC was born from a collective desire to eliminate the friction between architectural intent and raw joinery execution. Over the years, we have transitioned from a boutique workbench studio into a technology-driven timber factory.
          </p>
          <div className="text-6xl font-serif text-cocoa/40 font-light">Est. 2024</div>
        </div>

        <div className="lg:col-span-7 grid grid-cols-2 gap-6">
          <div className="bg-claywood text-sandstone p-8 rounded-2xl flex flex-col justify-between h-55">
            <h4 className="text-4xl font-light text-vibrant">100%</h4>
            <p className="text-xs font-light tracking-wide uppercase text-desert">In-house premium wood engineering and panel execution.</p>
          </div>
          <div className="bg-sandstone text-claywood p-8 rounded-2xl flex flex-col justify-between h-55 border border-claywood/10">
            <h4 className="text-4xl font-light text-cocoa">Premium</h4>
            <p className="text-xs font-light tracking-wide uppercase text-claywood/70">Raw materials exclusively imported from sustainable European forests.</p>
          </div>
        </div>
      </div>
    </section>
  );
}