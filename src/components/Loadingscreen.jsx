import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect } from "react";

const Loadingscreen = () => {
  useEffect(() => {
    let counterElement = document.querySelector(".counter");
    let currentvalue = 0;
    const count = () => {
      if (!counterElement) return;
      if (currentvalue >= 100) {
        return;
      }
      currentvalue += Math.floor(Math.random() * 10) + 1;
      if (currentvalue > 100) {
        currentvalue = 100;
      }
      counterElement.textContent = currentvalue;
      let delay = Math.floor(Math.random() * 200) + 50;
      setTimeout(count, delay);
    };
    count();
  });

  useGSAP(() => {
    gsap.to("#counter", {
      delay: 3.5,
      opacity: 0,
    });
    gsap.to("#bar", {
      delay: 3.5,
      height: 0,
      stagger: { amount: 0.5 },
      ease: "power4.in",
    });
    gsap.from("#counter", {
      delay: 4,
      y: 700,
      stagger: {
        amount: 0.5,
      },
      ease: "power4.inOut",
    });
  });

  return (
    <div id={"overlay"} className="overlay bg-white/10 h-screen fixed w-[100vw] z-10 flex-center">
      <h1 id={"counter"} className="counter fixed w-full h-full flex justify-end items-end z-20 text-red-600 text-3xl font-black">
        00
      </h1>
      <div id={"bar"}  className="bar w-[20vw] h-[105vh] bg-white/30" />
      <div id={"bar"} className="bar w-[20vw] h-[105vh] bg-white/30" />
      <div id={"bar"} className="bar w-[20vw] h-[105vh] bg-white/30" />
      <div id={"bar"} className="bar w-[20vw] h-[105vh] bg-white/30" />
      <div id={"bar"} className="bar w-[20vw] h-[105vh] bg-white/30" />
    </div>
  );
};

export default Loadingscreen;
