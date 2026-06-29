import Contact from "@/sections/Contact";
import DeliveredResults from "@/sections/DeliveredResults";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import History from "@/sections/History";
import LocationSection from "@/sections/Locationsection";
import Navbar from "@/sections/Navbar";
import Portfolio from "@/sections/Portfolio";
import Products from "@/sections/Products";
import Services from "@/sections/Services";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <DeliveredResults
        eyebrow="Delivered Results"
        title="Real Spaces, Fully Executed"
        description="A direct look at completed work on site, shown as delivered without captions, framing, or added narrative."
        sectionLabel="Delivered results gallery"
        closeLabel="Close image viewer"
        openedImageAlt="Opened delivered result"
        imageAltPrefix="Delivered result"
        previousLabel="Previous"
        nextLabel="Next"
        pageLabel="Page"
      />
      <Products />
      <History />
      <Contact />
      <LocationSection/>
      <Footer />
    </main>
  );
}
