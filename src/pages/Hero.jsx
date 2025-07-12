
import Textroll from "../components/textroll";

const Hero = () => {
  return (
    <section className="w-full flex items-between gap-15 flex-col h-[100dvh] ">
      <div className=" flex flex-col justify-center rounded-b-3xl items-center pt-15 py-5 bg-white w-full">
        <img
          src="/images/hero-name.svg"
          alt="yy"
          className="w-[90vw] cursor-hover-target object-contain"
        />
        
      </div>
      <Textroll/>
    </section>
  );
};

export default Hero;
