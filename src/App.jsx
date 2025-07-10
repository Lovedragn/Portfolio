import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "./pages/Hero";
import Navbar from "./components/Navbar";
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const lenis = new Lenis();
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  return (
    <section className="flex flex-col justify-start items-center bg-black w-full h-auto">
      <nav className="flex-center w-full absolute top-0 py-2">
        <Navbar />
      </nav>
      <Hero />
      <div className="w-full h-screen"></div>
    </section>
  );
};

export default App;
