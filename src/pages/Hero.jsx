import Navbar from "../components/Navbar";

const Hero = () => {
  return (
    <section className="bg-black w-full ">
      <div className=" flex flex-col justify-center rounded-b-3xl  items-center pt-15 py-5 bg-white w-full">
        <img
          src="/images/hero-name.svg"
          alt="yy"
          className="w-[90vw] cursor-hover-target object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
