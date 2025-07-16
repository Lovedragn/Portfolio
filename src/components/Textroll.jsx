import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { roles } from "../constants"; // your array

gsap.registerPlugin(CustomEase);
CustomEase.create("textcount", "M0,0 C0.25,0.1 0.25,1 1,1"); // similar to easeInOut

const TextRoll = () => {
  const textRef = useRef();
  const countRef = useRef();
  const [index, setIndex] = useState(0);
  const [counter, setCounter] = useState(2005);

  useEffect(() => {
    gsap.from("#counter-container", {
      yPercent: 80,
      ease: "power1.out",
      delay: 4.2,
    });
    gsap.from("#text-container", {
      xPercent: -40,
      ease: "power1.out",
      delay: 4.2,
    });
    const interval = setInterval(() => {
      // Animate out text
      gsap.to(textRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.4,
        ease: "power2.inOut",
        onComplete: () => {
          setIndex((prev) => (prev + 1) % roles.length);
        },
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Animate in text
    gsap.fromTo(
      textRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, ease: "power1.out" }
    );
  }, [index]);

  useEffect(() => {
    if (counter < 2026) {
      setCounter((prev) => prev + 1); // update counter
    }
    // Animate counter number (smooth tick)
    gsap.to(countRef.current, {
      innerText: counter,
      duration: 3,
      snap: { innerText: 1 },
      ease: CustomEase.create(
        "custom",
        "M0,0 C0.422,0.094 0.381,0.736 0.754,0.932 0.809,0.974 0.901,1.026 1,1 "
      ),
    });
  }, [counter]);

  return (
    <div className="flex text-7xl  justify-between items-end h-full w-full pb-20 font-bold text-white  px-20 overflow-hidden">
      <div id={"text-container"} className="flex-center gap-5">
        <h1 className="text-6xl">{`>`}</h1>
        <div ref={textRef}>{roles[index]}</div>
      </div>
      <div
        id={"counter-container"}
        className="flex text-2xl border-4 border-white p-2 px-4 rounded-tl-4xl rounded-br-4xl"
      >
        @
        <h1 className="text-5xl" ref={countRef}>
          {counter}
        </h1>
      </div>
    </div>
  );
};

export default TextRoll;
