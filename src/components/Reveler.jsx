import { useGSAP } from "@gsap/react";
import { CustomEase } from "gsap/CustomEase";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import { useTransition } from "../context/TransitionContext.jsx";

gsap.registerPlugin(CustomEase);
CustomEase.create("hop", "0.9, 0, 0.1,1");

export const Reveler = () => {
  const revealerRef = useRef();
  const { isTransitioning, onCoverCallback, setOnCoverCallback, setTransitioning } = useTransition();

  useEffect(() => {
    if (!isTransitioning) return;
    const tl = gsap.timeline({
      onComplete: () => {
        setTransitioning(false);
      },
    });
    tl.set(revealerRef.current, {
      scaleY: 0,
      transformOrigin: "center 80%",
      scaleX: 0.4,
    })
      .to(revealerRef.current, {
        scaleY: 1,
        duration: 1.1,
        ease: "hop",
        scaleX: 1,
        onComplete: () => {
          if (onCoverCallback) {
            onCoverCallback();
            setOnCoverCallback(null);
          }
        },
      })
      .to(revealerRef.current, {
        scaleY: 0,
        duration: 0.9,
        delay: 0.1,
        ease: "hop",
        scaleX: 1,
        transformOrigin: "top 10%",
      });
  }, [isTransitioning, onCoverCallback, setOnCoverCallback, setTransitioning]);

  return (
    <div
      ref={revealerRef}
      className="revealer"
      style={{
        position: "fixed",
        inset: 0,
        background: "#ffffff",
        zIndex: 99999,
        transform: "scaleY(0)",
        pointerEvents: "none",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        pointerEvents: isTransitioning ? "auto" : "none",
      }}
    />
  );
};
