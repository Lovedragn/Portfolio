import Navbar from "../components/Navbar";

const Hero = () => {
  return (
    <section className="bg-black w-full ">
      <div className="flex flex-col justify-center  items-center py-5 pt-15 bg-white w-full">
        <img
          src="/images/name-svg.svg"
          alt="yy"
          className="w-[90%] object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
