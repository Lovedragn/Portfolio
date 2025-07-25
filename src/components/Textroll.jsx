import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { roles } from "../constants"; // your array

gsap.registerPlugin(CustomEase);
CustomEase.create("hop", "0,0 C0.767,0 0.1,1 1,1 ");

const TextRoll = () => {
  const textRef = useRef();
  const countRef = useRef();
  const [index, setIndex] = useState(0);
  const [counter, setCounter] = useState(2005);

  useEffect(() => {
    gsap.fromTo("#counter-container", {
      y: 150,
      ease: "hop",
      
    },{ 
      y: 0,
      ease: "hop",
      delay: 2.7,
    });
    gsap.fromTo(
      "#text-container",
      {
        ease: "hop",
      },
      {
        overflow: "hidden",
        delay: 1.2,
        ease: "power1.out",
      }
    );
    gsap.fromTo(
      textRef.current,
      {
        yPercent: 100,
      },
      { delay: 6, yPercent: 0 }
    );
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
    <div className="flex max-md:flex-col text-7xl justify-around h-full items-center w-full pb-10 max-md:pb-10 font-bold text-white max-md:px-5 px-20 overflow-hidden max-md:hidden">
      <h1 className="max-md:text-6xl w-full flex items-start md:hidden">HI I'm</h1>
      <div id={"text-container"} className="flex w-full gap-5">
        <h1 className="text-6xl max-md:hidden">{`>`}</h1>
        <div ref={textRef} className="max-md:text-3xl max-md:pt-10">{roles[index]}</div>
      </div>
      <div
        id={"counter-container"}
        className="flex text-2xl max-md:text-xl border-4 border-white p-2 px-4 rounded-tl-4xl rounded-br-4xl"
      >
        @
        <h1 className="text-5xl max-md:text-2xl" ref={countRef}>
          {counter}
        </h1>
      </div>
    </div>
  );
};

export default TextRoll;
