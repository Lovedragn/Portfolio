import { createContext, useContext, useState } from "react";

const TransitionContext = createContext();

export const useTransition = () => useContext(TransitionContext);

export const TransitionProvider = ({ children }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [onCover, setOnCover] = useState(null);

  return (
    <TransitionContext.Provider value={{ isTransitioning, setIsTransitioning, onCover, setOnCover }}>
      {children}
    </TransitionContext.Provider>
  );
}; 