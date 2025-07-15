import { Outlet, useLocation } from "react-router-dom";
import Contact from "./sections/Contact.jsx";
import Hero from "./pages/Hero.jsx";
import Aboutme from "./pages/Aboutme.jsx";
import Work from "./pages/Work.jsx";

const App = () => {
  const location = useLocation();
  const previousLocation = location.state?.previousLocation;

  return (
    <section className="flex flex-col justify-start items-center bg-[var(--bg-dark)] w-full h-auto">
      <Hero />
      <div className="line-chart" />
      <Aboutme />
      <Work />
{/* 
      {previousLocation && <Contact />} */}

    </section>
  );
};

export default App;
