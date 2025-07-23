import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Textroll from "../components/Textroll.jsx";
import { useRef } from "react";

import { CustomEase } from "gsap/CustomEase";
gsap.registerPlugin(CustomEase);
CustomEase.create("hop", "0,0 C0.767,0 0.1,1 1,1 ");

// Array of sliced SVGs in correct visual order
const slices = [
  "/images/hero-name/Slice-1.svg",
  "/images/hero-name/Slice-2.svg",
  "/images/hero-name/Slice-3.svg",
  "/images/hero-name/Slice-4.svg",
  "/images/hero-name/Slice-5.svg",
  "/images/hero-name/Slice-6.svg",
];

const Hero = () => {
  const containerRef = useRef();

  useGSAP(
    () => {
      gsap.from(".hero-slice", {
        opacity: 1,
        yPercent: 80, // adjust if needed
        duration: 1.2,
        delay: 5,
        stagger: {amount:0.2 , from:"center"},
        ease: "power3.inOut",
      });
    },
    { scope: containerRef }
  );

  useGSAP(() => {
    gsap.fromTo(
      ".section",
      {
        rotateX: 40,
        clipPath: "polygon(20% 70%, 80% 70%, 80% 70%, 20% 70%)",
      },
      {
        duration: 2.5,
        ease: "hop",
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        delay: 4.5,
        rotateX: 0,
      }
    );
  });

  return (
    <>
      <section className="section w-full flex items-between flex-col h-[110vh] max-md:h-full">
        <div
          ref={containerRef}
          className=" flex justify-center items-center pt-20 bg-white rounded-b-3xl"
        >
          {slices.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`slice-${i}`}
              className="hero-slice h-[30dvw] object-contain cursor-hover-target"
            />
          ))}
        </div>
        <Textroll />
      </section>
    </>
  );
};

export default Hero;
