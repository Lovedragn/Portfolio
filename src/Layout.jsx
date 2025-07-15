import React, { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./pages/Footer.jsx";
import Contact from "./sections/Contact.jsx"; // ⬅️ your overlay component
import { Outlet } from "react-router-dom";
import Cursor from './components/Curser';
import ScrollToTop from "./components/ScrollToTop.jsx";
const Layout = () => {
  const [showContact, setShowContact] = useState(false);

  return (
    <>
    <Cursor/>
    <ScrollToTop/>
      <Navbar onContactClick={() => setShowContact(true)} />

      {showContact && <Contact onClose={() => setShowContact(false)} />}
      <Outlet />

      <Footer />

    </>
  );
};

export default Layout;
