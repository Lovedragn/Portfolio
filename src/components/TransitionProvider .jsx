// src/context/TransitionContext.jsx
import { createContext, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

const TransitionContext = createContext();

export const useTransition = () => useContext(TransitionContext);

export const TransitionProvider = ({ children }) => {
  const revealerRef = useRef();
  const navigate = useNavigate();

  const triggerTransition = (url) => {
    const tl = gsap.timeline({
      onComplete: () => {
        navigate(url);
      },
    });

    tl.to(revealerRef.current, {
      scaleY: 1,
      transformOrigin: "bottom center",
      duration: 1,
      ease: "hop",
    });
  };

  return (
    <TransitionContext.Provider value={{ triggerTransition, revealerRef }}>
      {children}
    </TransitionContext.Provider>
  );
};
