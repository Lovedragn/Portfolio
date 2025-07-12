import Skillroll from "../components/Skillroll";
import { aboutme } from "../constants/index.js";

const Aboutme = () => {
  return (
    <section className="flex justify-start items-center flex-col w-full border-t-1 border-white text-white h-[100dvh] ">
      <div className="flex flex-col items-start w-full h-auto p-10 ">
        <div className="flex items-end gap-2 pb-15">
          <h1
            className="text-white text-4xl font-bold"
            style={{ fontFamily: "subtitle" }}
          >
            About me
          </h1>

          <img src="/images/down-arrow.svg" alt="arrow" className="w-6" />
        </div>
        
        <div className="flex items-center justify-evenly w-full">
          <video src="" className="border-1 rounded border-white"/>
          <div className="flex justify-center items-center w-[80vh] text-balance text-normal" style={{fontFamily:"paragraph"}}>
            <h1>{aboutme}</h1>
          </div>
        </div>
      </div>
      <Skillroll />
    </section>
  );
};

export default Aboutme;
