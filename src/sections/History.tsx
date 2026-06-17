'use client';

export default function History() {
  return (
    <section id="history" className="relative py-28 md:py-36 bg-desert/20 text-claywood px-6 border-t border-claywood/10 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-claywood/25 to-transparent" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        <div className="lg:col-span-5">
          <span className="text-vibrant text-xs uppercase font-bold tracking-[0.35em] block mb-4">
            Our Heritage
          </span>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-6 max-w-xl">
            Precision, restraint, and the patience to do it properly.
          </h2>
          <p className="text-claywood/80 font-light leading-relaxed mb-8 max-w-xl text-base md:text-lg">
            OTIC began as a response to a familiar gap in the market: spaces that
            were designed beautifully but built without the same discipline. We
            grew from a small boutique workshop into a focused woodworks studio
            where every surface, junction, and finish is treated with care.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <div className="px-4 py-2 rounded-full border border-claywood/15 bg-sandstone/40 text-[10px] uppercase tracking-[0.3em] text-claywood/70">
              Bespoke Joinery
            </div>
            <div className="px-4 py-2 rounded-full border border-claywood/15 bg-sandstone/40 text-[10px] uppercase tracking-[0.3em] text-claywood/70">
              Architectural Fit-Outs
            </div>
          </div>

          <div className="text-5xl md:text-6xl font-serif text-cocoa/40 font-light">
            Est. 2024
          </div>
        </div>

        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          <div className="bg-claywood text-sandstone p-7 md:p-8 rounded-2xl flex flex-col justify-between min-h-56 shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
            <div>
              <h4 className="text-4xl md:text-5xl font-light text-vibrant mb-3">100%</h4>
              <p className="text-xs font-light tracking-[0.25em] uppercase text-desert leading-relaxed">
                Designed, fabricated, and finished in-house for full quality control.
              </p>
            </div>
            <p className="mt-8 text-sm text-sandstone/60 leading-relaxed">
              A quiet process, but a very exact one. The result is consistency
              across every project we deliver.
            </p>
          </div>

          <div className="bg-sandstone text-claywood p-7 md:p-8 rounded-2xl flex flex-col justify-between min-h-56 border border-claywood/10 shadow-[0_12px_40px_rgba(36,26,25,0.08)]">
            <div>
              <h4 className="text-4xl md:text-5xl font-light text-cocoa mb-3">Premium</h4>
              <p className="text-xs font-light tracking-[0.25em] uppercase text-claywood/70 leading-relaxed">
                Material sourcing rooted in durable, responsibly selected timber.
              </p>
            </div>
            <p className="mt-8 text-sm text-claywood/70 leading-relaxed">
              We choose materials that age gracefully and support the calm,
              elevated atmosphere our clients expect.
            </p>
          </div>

          <div className="sm:col-span-2 bg-background/60 backdrop-blur-sm border border-claywood/10 rounded-2xl p-7 md:p-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-vibrant block mb-3">
                  Studio Mindset
                </span>
                <p className="text-xl md:text-2xl font-light tracking-tight max-w-3xl leading-relaxed">
                  We build with the discipline of a workshop and the restraint of
                  a luxury interior house.
                </p>
              </div>
              <p className="text-sm text-claywood/70 max-w-md leading-relaxed">
                Every project is guided by the same idea: the most premium spaces
                feel effortless because the detail work has been done properly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
