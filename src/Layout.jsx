import React from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./pages/Footer.jsx";
import { Outlet } from "react-router-dom";
import Cursor from "./components/Curser";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Loadingscreen from "./components/Loadingscreen.jsx";
const Layout = () => {
  return (
    <>
     <Loadingscreen/>
      <Cursor />
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
