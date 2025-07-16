import Textroll from "../components/Textroll.jsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  useGSAP(() => {
    gsap.from("#hero-name", {
      yPercent: 50,
      delay: 4.5,
      duration:0.6,
      ease:"back.Out"
    });
  });
  return (
    <section className="w-full flex items-between gap-15 flex-col h-[110dvh]">
      <div className=" flex flex-col justify-center rounded-b-3xl items-center pt-15 py-5 bg-white w-full ">
        <img
          id={"hero-name"}
          src="/images/hero-name.svg"
          alt="yy"
          className="w-[90vw] cursor-hover-target object-contain"
        />
      </div>
      <Textroll />
    </section>
  );
};

export default Hero;
