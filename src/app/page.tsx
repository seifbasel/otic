import Contact from "@/sections/Contact";
import Crafts from "@/sections/Crafts";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import History from "@/sections/History";
import Navbar from "@/sections/Navbar";
import Projects from "@/sections/Projects";
import Services from "@/sections/Services";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Crafts/>
      <History />
      <Contact />
      <Footer />
    </main>
  );
}
