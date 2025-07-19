import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Works from "./sections/Works.jsx";
import Contact from "./sections/Contact.jsx";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Layout from "./Layout";
import { Reveler } from "./components/Reveler";

function ModalSwitch() {
  const location = useLocation();
  const state = location.state;
  const navigate = useNavigate();

  return (
    <>
      <Routes location={state?.backgroundLocation || location}>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="works" element={<Works />} />
        </Route>
      </Routes>

      {location.pathname === "/contact" && (
        <ContactModal onClose={() => navigate(-1)} />
      )}
    </>
  );
}

function ContactModal({ onClose }) {
  return (
    <div className="modal-overlay">
      <Contact onClose={onClose} />
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Reveler />

    <ModalSwitch />
  </BrowserRouter>
);
