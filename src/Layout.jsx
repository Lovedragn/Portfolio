import Navbar from "./components/Navbar.jsx";
import Footer from "./pages/Footer.jsx";
import { Outlet, useLocation } from "react-router-dom";
import Cursor from "./components/Curser";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Loadingscreen from "./components/Loadingscreen.jsx";
import { Reveler } from "./components/Reveler";
import { useEffect, useState } from "react";

const Layout = () => {
  const location = useLocation();
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    setShowContent(false); // Hide content on route change
    const timeout = setTimeout(() => {
      setShowContent(true); // Show after animation
    }, 1500); // Match the total duration of the Reveler animation

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <>
      <Reveler />
      <Navbar />
      <Loadingscreen />
      <Cursor />
      <ScrollToTop />
      {showContent && <Outlet />}
      <Footer />
    </>
  );
};

export default Layout;
