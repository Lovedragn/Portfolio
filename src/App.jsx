import Lenis from "@studio-freight/lenis";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Hero from "./pages/Hero";
import Navbar from "./components/Navbar";
import Curser from "./components/Curser";
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
            <Curser/>
            <nav className="flex-center w-full absolute top-5 py-2">
                <Navbar/>
            </nav>

            <Hero/>
            <div className="flex-center w-[95dvw] border-1 border-[var(--border-dark)] rounded-full"/>
            <Aboutme/>
        </section>
    );
};

export default App;
