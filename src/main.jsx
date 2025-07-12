import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Works from "./sections/Works.jsx";
import Contact from "./sections/Contact.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = new createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/works", element: <Works /> },
  { path: "/contact", element: <Contact /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>
);
