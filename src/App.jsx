import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "./pages/Hero";
import Aboutme from "./pages/Aboutme";
import Work from "./pages/Work.jsx";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const lenis = new Lenis();
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  return (
    <section className="flex flex-col justify-start items-center bg-[var(--bg-dark)] w-full h-auto">
      <Hero />

      <div className="line-chart" />
      <Aboutme />

      <Work />

 
    </section>
  );
};

export default App;
