import Contact from "@/sections/Contact";
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
      <History />
      <Contact />
      <Footer />
    </main>
  );
}
