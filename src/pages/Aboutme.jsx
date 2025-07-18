import Skillroll from "../components/Skillroll";
import { aboutme } from "../constants/index.js";
import SujithCV from "../assets/Sujith CV.pdf";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText"; // ✅ new syntax

gsap.registerPlugin(ScrollTrigger, SplitText);

const Aboutme = () => {
  const aboutRef = useRef();
  const titleRef = useRef();
  const videoRef = useRef();

  useGSAP(() => {
    // Split and mask title
    SplitText.create(titleRef.current, {
      type: "chars",
      mask: "lines",
      onSplit(self) {
        gsap.from(self.chars, {
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 90%",
          },
          y: 100,
          autoAlpha: 0,
          duration: 0.5,
          ease: "power3.out",
          stagger: 0.03,
        });
      },
    });

    // Split and mask paragraph
    SplitText.create(aboutRef.current, {
      type: "lines, words",
      mask: "lines",
      onSplit(self) {
        gsap.from(self.words, {
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 90%",
          },
          y: 100,
          autoAlpha: 0,
          duration: 2,
          ease: "power3.out",
          stagger: 0.02,
          
        });
      },
    });

  
    const tl = gsap.timeline({
  scrollTrigger: {
    trigger: videoRef.current,
    start: "top 30%",
    once: true,
    onEnter: () => {
      videoRef.current.play();
    },
  },
});

tl.fromTo(
  videoRef.current,
  {
    clipPath: "polygon(17.55% 94.18%, 61.03% 56.46%, 100% 0%, 27.26% 19.5%)",
  },
  {
    duration: 2,
    ease: "power3.out",
    clipPath: "polygon(21.87% 100%, 92.35% 80.66%, 99.86% 26.42%, 0% 0%)",
  }
);


    gsap.fromTo(
      "#resume",
      {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      },
      {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#resume", // 💡 Set trigger element
          start: "top 70%", // adjust as needed
        },
      }
    );
  }, []);

  const download = () => {
    const link = document.createElement("a");
    link.href = SujithCV;
    link.download = "Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="flex justify-start items-center flex-col w-full text-white h-auto py-20">
      <div className="flex flex-col items-start w-full h-auto px-10 pb-20">
        <div className="flex items-end gap-2 pb-15">
          <h1
            ref={titleRef}
            className="text-white text-4xl font-bold overflow-hidden text-hover"
            style={{ fontFamily: "subtitle" }}
          >
            About me
          </h1>
          <img src="/images/down-arrow.svg" alt="arrow" className="w-6" />
        </div>

        <div className="flex items-center justify-center w-full px-6 py-10">
          <div className="flex items-center justify-center gap-10 max-w-7xl w-full">
            <video
              ref={videoRef}
              src="/student1.mp4"
              className="rounded-xl border-white w-[40dvh] max-w-[300px]"
              preload="false"
              muted
            />

            <div
              className="flex flex-col justify-center items-start gap-6 text-gray-600"
              style={{ fontFamily: "paragraph" }}
            >
              <h1
                ref={aboutRef}
                className="text-xl md:text-2xl leading-snug text-balance max-w-xl text-hover"
              >
                {aboutme}
              </h1>

              <button
                id={"resume"}
                className="text-black bg-white px-8 py-3 rounded-2xl text-lg shadow-md hover:bg-gray-100 transition"
                onClick={download}
              >
                Resume
              </button>
            </div>
          </div>
        </div>
      </div>
      <Skillroll />
    </section>
  );
};

export default Aboutme;
