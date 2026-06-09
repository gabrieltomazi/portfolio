
import {
  About,
  Contact,
  Header,
  Hero,
  Particles,
  Projects,
  WrapperGSAP,
} from "@/components";


export default function Home() {
  return (
    <WrapperGSAP>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Particles />
    </WrapperGSAP>
  );
}
