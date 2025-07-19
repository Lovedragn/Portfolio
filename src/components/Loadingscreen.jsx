import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect } from "react";

const Loadingscreen = ({ onFinish }) => {
  let currentvalue = 0;
  useEffect(() => {
    let counterElement = document.querySelector(".counter");

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
  }, []);

  useGSAP(() => {
    gsap.to("#counter", {
     delay:3.5,
     opacity:0,
    });
    gsap.to("#bar", {
      delay: 4,
      height: 0,
      stagger: { amount: 0.5 },
      ease: "power1.inOut",
    });

    gsap.to("#overlay", {
      delay: 6,
      opacity: 0,
      pointerEvents: "none",
      onComplete: () => {
        if (onFinish) onFinish();
      },
    });
  }, [onFinish]);

  return (
    <div
      id={"overlay"}
      className="overlay h-screen fixed w-[100vw] z-9999 flex overflow-hidden "
    > 
      <h1
        id={"counter"}
        className="counter fixed w-full h-full flex justify-end items-end z-20 text-black text-9xl font-black"
      >
        00
      </h1>
      <div id={"bar"} className="bar w-[20dvw] h-[105vh] bg-[var(--bg-main)]" />
      <div id={"bar"} className="bar w-[20vw] h-[105vh] bg-[var(--bg-main)]" />
      <div id={"bar"} className="bar w-[20vw] h-[105vh] bg-[var(--bg-main)]" />
      <div id={"bar"} className="bar w-[20vw] h-[105vh] bg-[var(--bg-main)]" />
      <div id={"bar"} className="bar w-[20vw] h-[105vh] bg-[var(--bg-main)]" />
    </div>
  );
};

export default Loadingscreen;
