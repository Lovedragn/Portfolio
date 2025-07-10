import React from "react";
import Navbar from "../components/Navbar";

const Hero = () => {
  return (
    <section className="bg-black w-full h-screen">
      <div className="flex flex-col justify-center items-center pt-5 bg-white w-full">
        <nav className="">
          <Navbar />
        </nav>

        <img
          src="/images/name-svg.svg"
          alt="yy"
          className="w-[90%] object-contain relative z-10 top-0"
        />
      </div>
    </section>
  );
};

export default Hero;
