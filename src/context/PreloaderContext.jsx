import { createContext, useState, useContext } from "react";

const PreloaderContext = createContext();

export const usePreloader = () => useContext(PreloaderContext);

export const PreloaderProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <PreloaderContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </PreloaderContext.Provider>
  );
}; 