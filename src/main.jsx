import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Works from "./sections/Works.jsx";
import Contact from "./sections/Contact.jsx";
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Layout from './Layout';
import React from "react";

function ModalSwitch() {
  const location = useLocation();
  const state = location.state;
  return (
    <>
      <Routes location={state?.backgroundLocation || location}>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="works" element={<Works />} />
        </Route>
      </Routes>
      {location.pathname === "/contact" && <ContactModal />}
    </>
  );
}

function ContactModal() {
  const navigate = useNavigate();
  return (
    <div className="modal-overlay">
      <button className="absolute top-4 right-4 z-50 bg-white text-black px-4 py-2 rounded" onClick={() => navigate(-1)}>Close</button>
      <Contact />
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ModalSwitch />
  </BrowserRouter>
);
