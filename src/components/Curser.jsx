import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Cursor = () => {
  const [hover, setHover] = useState(false);
  const [inverseHover, setInverseHover] = useState(false);

  const dotRef = useRef(null);
  const ringRef = useRef(null);

  // Move cursor
  useEffect(() => {
    const move = (e) => {
      const { clientX: x, clientY: y } = e;

      gsap.set(dotRef.current, { x, y });
      gsap.to(ringRef.current, {
        x,
        y,
        duration: .6,
        ease: "power3.out",
      });
    };

    const handleMouseOver = (e) => {
      if (e.target.closest(".cursor-hover-target")) {
        setHover(true);
      }
      if (e.target.closest(".cursor-hover-inverse-target")) {
        setInverseHover(true);
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.closest(".cursor-hover-target")) {
        setHover(false);
      }
      if (e.target.closest(".cursor-hover-inverse-target")) {
        setInverseHover(false);
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  // Effect 1: hover scaling
  useEffect(() => {
    gsap.to(dotRef.current, {
      scale: hover ? 6 : 1,
      duration: 0.5,
      ease: "power3.out",
    });

    gsap.to(ringRef.current, {
      scale: hover ? 0 : 1,
      duration: 0.3,
      ease: "power3.out",
    });
  }, [hover]);

  // Effect 2: inverse-hover (scale up + hide dot)
  useEffect(() => {
    gsap.to(dotRef.current, {
      scale: inverseHover ? 3 : 1,
      opacity: inverseHover ? 0 : 1,
      duration: 0.3,
      ease: "power3.out",
    });

    gsap.to(ringRef.current, {
      scale: inverseHover ? 2 : 1,
      duration: 0.3,
      ease: "power3.out",
    });
  }, [inverseHover]);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full mix-blend-difference z-[9999] pointer-events-none"
        style={{ transform: "translate(-50%, -50%)" }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-10 h-10 border-1 border-white rounded-full mix-blend-difference z-[9998] pointer-events-none"
        style={{ transform: "translate(-50%, -50%)" }}
      />
    </>
  );
};

export default Cursor;
