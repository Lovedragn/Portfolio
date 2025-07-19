import { createContext, useContext, useState } from "react";

const TransitionContext = createContext();

export const useTransition = () => useContext(TransitionContext);

export const TransitionProvider = ({ children }) => {
  const [isTransitioning, setTransitioning] = useState(false);
  const [onCoverCallback, setOnCoverCallback] = useState(null);

  return (
    <TransitionContext.Provider value={{ isTransitioning, setTransitioning, onCoverCallback, setOnCoverCallback }}>
      {children}
    </TransitionContext.Provider>
  );
}; 