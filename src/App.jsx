import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "./pages/Hero";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const lenis = new Lenis();
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);
  return (
    <section className="flex justify-center items-center bg-black w-full h-auto text-black">
      <Hero />
    </section>
  );
};

export default App;
