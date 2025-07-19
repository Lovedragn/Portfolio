import { useGSAP } from "@gsap/react";
import { CustomEase } from "gsap/CustomEase";
import gsap from "gsap";
import { useLocation } from "react-router-dom";
import { useRef } from "react";

gsap.registerPlugin(CustomEase);
CustomEase.create("hop", "0.9, 0, 0.1,1");

export const Reveler = () => {
  const location = useLocation();
  const revealerRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline();
    // Cover (in)
    tl.set(revealerRef.current, { scaleY: 0, transformOrigin: "center" })
      .to(revealerRef.current, { scaleY: 1, duration: 0.5, ease: "hop" })
      // Reveal (out)
      .to(revealerRef.current, { scaleY: 0, duration: 1, delay: 0.1, ease: "hop" });
  }, [location.pathname]);

  return (
    <div
      ref={revealerRef}
      className="revealer"
      style={{
        position: "fixed",
        inset: 0,
        background: "#ffffff", // Change color as needed
        zIndex: 99999,
        transform: "scaleY(0)",
        transformOrigin: "center",
        pointerEvents: "none",
      }}
    />
  );
};