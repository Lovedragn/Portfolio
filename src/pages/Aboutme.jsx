import Skillroll from "../components/Skillroll";
import {aboutme} from "../constants/index.js";
import SujithCV from "../assets/Sujith CV.pdf"

const Aboutme = () => {

    const download = () => {
        const link = document.createElement("a");
        link.href = SujithCV;
        link.download = "Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    return (
        <section
            className="flex justify-start items-center flex-col w-full text-white h-auto py-20">
            <div className="flex flex-col items-start w-full h-auto px-10 pb-20">
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
                    <video src="" className="border-1 rounded border-white aspect-[4/5] "/>
                    <div
                        className="flex flex-col justify-center items-start w-fit gap-10 text-balance text-normal text-gray-500 "
                        style={{fontFamily: "paragraph"}}
                    >
                        <h1 className="flex w-[80dvh]">{aboutme}</h1>
                        <button className=" text-black bg-white px-9 py-3 w-fit rounded-2xl text-xl"
                                onClick={() => download()}>Resume
                        </button>

                    </div>
                </div>
            </div>
            <Skillroll/>
        </section>
    );
};

export default Aboutme;
