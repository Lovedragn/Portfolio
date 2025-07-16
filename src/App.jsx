import { useLocation } from "react-router-dom";
import Hero from "./pages/Hero.jsx";
import Aboutme from "./pages/Aboutme.jsx";
import Work from "./pages/Work.jsx";

const App = () => {
  const location = useLocation();

  return (
    <section className="flex flex-col justify-start items-center bg-[var(--bg-dark)] w-full h-auto">
      <Hero />
      <div className="line-chart" />
      {/* <Aboutme /> */}
      {/* <Work /> */}

    </section>
  );
};

export default App;
