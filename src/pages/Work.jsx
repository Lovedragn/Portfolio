
import {aboutme} from "../constants/index.js";

const Work = () => {
    return (
        <section
            className="flex justify-start items-center flex-col w-full text-white h-[100dvh] ">
            <div className="flex flex-col items-start w-full h-auto p-20  ">
                <div className="flex items-end gap-2 pb-15">
                    <h1
                        className="text-white text-4xl font-bold"
                        style={{fontFamily: "subtitle"}}
                    >
                        About me
                    </h1>

                    <img src="/images/down-arrow.svg" alt="arrow" className="w-6"/>
                </div>

                <div className="flex items-center justify-evenly w-full">
                    <video src="" className="border-1 rounded border-white aspect-[4,4]"/>
                    <div
                        className="flex justify-center items-center w-[80vh] text-balance text-normal text-gray-500 "
                        style={{fontFamily: "paragraph"}}
                    >
                        <h1>{aboutme}</h1>
                    </div>
                </div>

                <div className="flex justify-end items-center w-full mt-10">
                    <button className=" text-gray-200 bg-gray-800 px-9 py-3 rounded-2xl text-xl"
                            onClick={() => download()}>Resume
                    </button>
                </div>
            </div>

        </section>
    );
}
export default Work
