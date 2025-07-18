import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Textroll from "../components/Textroll.jsx";
import { useRef } from "react";

import { CustomEase } from "gsap/CustomEase";
gsap.registerPlugin(CustomEase);
CustomEase.create("hop", "0,0 C0.767,0 0.1,1 1,1 ");

// Array of sliced SVGs in correct visual order
const slices = [
  "/public/images/hero-name/Slice-1.svg",
  "/public/images/hero-name/Slice-2.svg",
  "/public/images/hero-name/Slice-3.svg",
  "/public/images/hero-name/Slice-4.svg",
  "/public/images/hero-name/Slice-5.svg",
  "/public/images/hero-name/Slice-6.svg",
];

const Hero = () => {
  const containerRef = useRef();

  useGSAP(
    () => {
      gsap.from(".hero-slice", {
        opacity: 1,
        yPercent: 80,
        delay: 5, // adjust if needed
        duration: 0.7,
        stagger: 0.08,
        ease: "power1.out",
      });
    },
    { scope: containerRef }
  );

  useGSAP(() => {
    gsap.fromTo(
      ".section",
      {
        scaleY: 0.7,
        clipPath: "polygon(20% 70%, 80% 70%, 80% 70%, 20% 70%)",
      },
      {
        duration: 2,
        ease: "hop",
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        delay: 4.3,
        scaleY: 1,
      }
    );
  });

  return (
    <section className="section w-full flex items-between flex-col h-[110dvh]">
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
  );
};

export default Hero;
