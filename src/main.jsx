import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Works from "./sections/Works.jsx";
import Contact from "./sections/Contact.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from './Layout';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>, // layout with Navbar
    children: [
      { index: true, element: <App /> },
      { path: "works", element: <Works /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
