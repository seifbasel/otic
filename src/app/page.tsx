import Contact from "@/sections/Contact";
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
      <Products />
      <History />
      <Contact />
      <LocationSection/>
      <Footer />
    </main>
  );
}
