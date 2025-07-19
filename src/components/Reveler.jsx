import { useTransition } from "../context/TransitionContext";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export const Reveler = () => {
  const { isTransitioning, setIsTransitioning, onCover, setOnCover } =
    useTransition();
  const revealerRef = useRef();

  useEffect(() => {
    if (!isTransitioning) return;
    gsap.set(revealerRef.current, {
      scaleY: 0,
      transformOrigin: "center 80%",
      scaleX: 0.4,
    });
    gsap.to(revealerRef.current, {
      scaleY: 1,
      duration: 1.1,
      ease: "power3.inOut",
      scaleX: 1,
      onComplete: () => {
        // Call onCover to change the URL
        if (onCover) onCover();
        setOnCover(null);
        // Now animate out (uncover)
        gsap.to(revealerRef.current, {
          scaleY: 0,
          willChange:"transform",
          transformOrigin:"top 0%",
          duration: 1,
          ease: "power3.inOut",
          onComplete: () => setIsTransitioning(false),
        });
      },
    });
  }, [isTransitioning, onCover, setOnCover, setIsTransitioning]);

  return (
    <div
      ref={revealerRef}
      style={{
        position: "fixed",
        inset: 0,
        background: "#fff",
        zIndex: 99999,
        width: "100vw",
        height: "100vh",
        transform: "scaleY(0)",
        pointerEvents: isTransitioning ? "auto" : "none",
      }}
    />
  );
};
