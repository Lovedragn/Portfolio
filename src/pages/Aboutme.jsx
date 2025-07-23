import Skillroll from "../components/Skillroll";
import { aboutme } from "../constants/index.js";
import SujithCV from "../assets/Sujith CV.pdf";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Aboutme = () => {
  const aboutRef = useRef();
  const titleRef = useRef();
  const videoRef = useRef();
  const resumeRef = useRef();

  useGSAP(() => {
    document.fonts.ready.then(() => {
      // Split and mask title
      if (titleRef.current) {
        SplitText.create(titleRef.current, {
          type: "chars",
          mask: "lines",
          onSplit(self) {
            if (self.chars && self.chars.length > 0) {
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
            }
          },
        });
      }

      // Split and mask paragraph
      if (aboutRef.current) {
        SplitText.create(aboutRef.current, {
          type: "lines, words",
          mask: "lines",
          onSplit(self) {
            if (self.words && self.words.length > 0) {
              gsap.from(self.words, {
                scrollTrigger: {
                  trigger: aboutRef.current,
                  start: "top 90%",
                },
                y: 100,
                autoAlpha: 0,
                duration: 2,
                ease: "power3.out",
                stagger: 0.03,
              });
            }
          },
        });
      }

      // Animate video clip-path and play video on enter
      if (videoRef.current) {
        gsap.fromTo(
          videoRef.current,
          {
            clipPath: "polygon(19% 17%, 100% 0, 52% 45%, 27% 94%)",
          },
          {
            clipPath: "polygon(0% 0%, 81% 18%, 90% 60%, 28% 82%)",
            duration: 2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: videoRef.current,
              start: "top 50%",
              onEnter: () => {
                if (
                  videoRef.current &&
                  typeof videoRef.current.play === "function"
                ) {
                  videoRef.current.play();
                }
              },
              once: true,
            },
          }
        );
      }

      // Animate resume if it exists
      if (resumeRef.current) {
        gsap.fromTo(
          resumeRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: resumeRef.current,
              start: "top 90%",
            },
          }
        );
      }
    });
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
    <section className="flex justify-start items-center flex-col w-full text-white h-auto py-20 max-md:py-10">
      <div className="flex flex-col max-md:gap-5 items-start w-full h-auto px-10 pb-20 max-md:pb-10 max-md:px-5">
        <div className="flex items-end gap-2 pb-15 max-md:hidden">
          <h1
            ref={titleRef}
            className="text-white text-4xl font-bold overflow-hidden "
            style={{ fontFamily: "subtitle" }}
          >
            About me
          </h1>
          <img src="/images/down-arrow.svg" alt="arrow" className="w-6" />
        </div>

        <div className="flex  items-center justify-center w-full px-6 py-10 max-md:py-0">
          <div className="flex  max-md:flex-col max-md:gap-0 items-center justify-center gap-10 max-w-7xl w-full">
            <video
              ref={videoRef}
              src="/student1.mp4"
              className="rounded-xl border-white w-[40dvh] max-w-[300px] max-md:w-[200px]"
              muted
            />

            <div
              className="flex  flex-col justify-center items-start gap-6 text-gray-600 max-md:gap-10 max-md:items-center"
              style={{ fontFamily: "paragraph" }}
            >
              <h1
                ref={aboutRef}
                className="text-xl max-md:text-lg max-md:leading-snug  hover:text-white hover:underline"
              >
                {aboutme}
              </h1>

              <button
                ref={resumeRef}
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
