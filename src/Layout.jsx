import Navbar from "./components/Navbar.jsx";
import Footer from "./pages/Footer.jsx";
import { Outlet, useLocation } from "react-router-dom";
import Cursor from "./components/Curser";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Loadingscreen from "./components/Loadingscreen.jsx";
import { useEffect, useState, useRef } from "react";
import { PreloaderProvider, usePreloader } from "./context/PreloaderContext.jsx";

const LayoutInner = () => {
  const location = useLocation();
  const { isLoading, setIsLoading } = usePreloader();
  const [showPreloader, setShowPreloader] = useState(true);
  const isFirstLoad = useRef(true);

  useEffect(() => {
    if (isFirstLoad.current) {
      setIsLoading(true);
      setShowPreloader(true);
    } else {
      setIsLoading(false);
      setShowPreloader(false);
    }
  }, [location.pathname, setIsLoading]);

  // When preloader is done
  const handlePreloaderDone = () => {
    setIsLoading(false);
    setShowPreloader(false);
    isFirstLoad.current = false;
  };

  return (
    <>
      {showPreloader && <Loadingscreen onFinish={handlePreloaderDone} />}
      <Navbar theme="light" />
      <Cursor />
      <ScrollToTop />
      {!isLoading && <Outlet />}
      <Footer />
    </>
  );
};

const Layout = () => (
  <PreloaderProvider>
    <LayoutInner />
  </PreloaderProvider>
);

export default Layout;
