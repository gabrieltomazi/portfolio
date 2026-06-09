import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Particles from "@/components/Particles";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Particles />
      
    </div>
  );
}
