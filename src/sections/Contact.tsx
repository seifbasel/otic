'use client';

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 md:py-36 bg-sandstone px-6 overflow-hidden">

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <span className="text-vibrant text-xs uppercase font-bold tracking-[0.35em] block mb-4">
              Collaborate With OTIC
            </span>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight max-w-xl">
              Begin a project shaped with restraint, precision, and care.
            </h2>
            <p className="mt-6 text-claywood/80 font-light leading-relaxed text-base md:text-lg max-w-xl">
              Share the outline of your space and we’ll respond with a clear,
              considered next step. Our process is built for clients who value
              detail, calm execution, and a premium finish.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-claywood/10 bg-background/50 backdrop-blur-sm p-5">
              <p className="text-[10px] uppercase tracking-[0.3em] text-vibrant mb-2">Response</p>
              <p className="text-sm text-claywood/80 leading-relaxed">Within one business day.</p>
            </div>
            <div className="rounded-2xl border border-claywood/10 bg-background/50 backdrop-blur-sm p-5">
              <p className="text-[10px] uppercase tracking-[0.3em] text-vibrant mb-2">Scope</p>
              <p className="text-sm text-claywood/80 leading-relaxed">Private homes and luxury fit-outs.</p>
            </div>
            <div className="rounded-2xl border border-claywood/10 bg-background/50 backdrop-blur-sm p-5">
              <p className="text-[10px] uppercase tracking-[0.3em] text-vibrant mb-2">Visit</p>
              <p className="text-sm text-claywood/80 leading-relaxed">Consultations by appointment.</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="relative rounded-[2rem] border border-white/20 bg-accent dark:bg-accent/70 text-foreground shadow-[0_24px_80px_rgba(0,0,0,0.18)] overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-claywood/10 rounded-full blur-3xl" />

            <div className="relative z-10 p-8 md:p-12 lg:p-14">
              <div className="mb-10">
                <h3 className="text-2xl md:text-3xl font-light tracking-tight">
                  Request a private studio consultation
                </h3>
                <p className="mt-3 text-sandstone/75 text-sm md:text-base leading-relaxed max-w-2xl">
                  Tell us what you’re planning and we’ll help shape it into a
                  refined, buildable brief.
                </p>
              </div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <label className="space-y-2">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-sandstone/70">Your name</span>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full bg-claywood/35 border border-sandstone/20 focus:border-white/40 rounded-xl text-sandstone px-4 py-3.5 text-sm focus:outline-none transition-colors placeholder:text-sandstone/50"
                    />
                  </label>
                  <label className="space-y-2">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-sandstone/70">Email address</span>
                    <input
                      type="email"
                      placeholder="Email address"
                      className="w-full bg-claywood/35 border border-sandstone/20 focus:border-white/40 rounded-xl text-sandstone px-4 py-3.5 text-sm focus:outline-none transition-colors placeholder:text-sandstone/50"
                    />
                  </label>
                </div>

                <label className="space-y-2 block">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-sandstone/70">Scope of interest</span>
                  <select className="w-full bg-claywood/35 border border-sandstone/20 focus:border-white/40 rounded-xl text-sandstone/80 px-4 py-3.5 text-sm focus:outline-none transition-colors">
                    <option>Select scope of interest</option>
                    <option>Complete dressing room fitout</option>
                    <option>Architectural kitchen and dining</option>
                    <option>Integrated wall panelling and doors</option>
                    <option>Full residential fit-out</option>
                  </select>
                </label>

                <label className="space-y-2 block">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-sandstone/70">Project notes</span>
                  <textarea
                    rows={5}
                    placeholder="Share the approximate size, style direction, and timeline..."
                    className="w-full bg-claywood/35 border border-sandstone/20 focus:border-white/40 rounded-xl text-sandstone px-4 py-3.5 text-sm focus:outline-none transition-colors resize-none placeholder:text-sandstone/50"
                  />
                </label>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                  <button className="bg-white hover:bg-white/90 text-accent font-medium text-xs uppercase tracking-[0.3em] px-8 py-4 rounded-full transition-colors w-full sm:w-auto">
                    Request Consultation
                  </button>
                  <p className="text-xs text-sandstone/75 leading-relaxed max-w-md">
                    We handle private residential projects, studio fit-outs, and
                    bespoke joinery enquiries.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
