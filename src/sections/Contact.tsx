'use client';

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-sandstone  px-6">
      <div className="max-w-4xl mx-auto bg-accent/60 dark:bg-accent text-sandstone p-8 md:p-16 rounded-3xl shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-vibrant/10 rounded-full blur-3xl" />
        
        <div className="text-center mb-12">
          <span className="text-vibrant text-xs uppercase font-bold tracking-widest block mb-2">COLLABORATE WITH OTIC</span>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight">Initiate Your Spatial Transformation</h2>
        </div>

        <form className=" space-y-6 max-w-2xl mx-auto" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full bg-claywood/50 border-b border-sandstone/30 focus:border-vibrant text-sandstone px-4 py-3 text-sm focus:outline-none transition-colors"
            />
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full bg-claywood/50 border-b border-sandstone/30 focus:border-vibrant text-sandstone px-4 py-3 text-sm focus:outline-none transition-colors"
            />
          </div>
          <select className="w-full bg-claywood border-b border-sandstone/30 focus:border-vibrant text-sandstone/70 px-4 py-3 text-sm focus:outline-none transition-colors">
            <option>Select Scope of Interest</option>
            <option>Complete Dressing Room Fitout</option>
            <option>Architectural Kitchen & Dining</option>
            <option>Integrated Wall Panelling & Doors</option>
            <option>Full Scale Residential Contract</option>
          </select>
          <textarea 
            rows={4} 
            placeholder="Tell us about the project dimensions and timeline details..." 
            className="w-full bg-claywood/50 border-b border-sandstone/30 focus:border-vibrant text-sandstone px-4 py-3 text-sm focus:outline-none transition-colors resize-none"
          />
          <div className="text-center pt-4">
            <button className="bg-vibrant hover:bg-vibrant/90 text-white font-medium text-xs uppercase tracking-widest px-10 py-4 rounded-full transition-colors w-full md:w-auto">
              Request Studio Consultation
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}