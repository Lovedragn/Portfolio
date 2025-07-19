import { useGSAP } from "@gsap/react";
import { CustomEase } from "gsap/CustomEase";
import gsap from "gsap";

gsap.registerPlugin(CustomEase);
CustomEase.create("hop", "0.9, 0, 0.1,1");

export const Reveler = () => {
  useGSAP(() => {
    gsap.to(".revealer", { scaleY: 0, duration: 1.25, delay: 1, ease: "hop" });
  }, []);
};
