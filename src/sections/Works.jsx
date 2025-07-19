import { works } from "../constants/index.js";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const LinkButton = ({ item }) => {
  return (
    <Link
      to={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-3 py-2 bg-black text-white rounded-md text-sm w-fit hover:bg-[#555555]"
    >
      <img src="/github.svg" className="w-5 invert" alt="GitHub" />
      GitHub
    </Link>
  );
};

const Works = () => {
  const overlayRef = useRef();
  const [overlayVisible, setOverlayVisible] = useState(true);

  useEffect(() => {
    if (overlayRef.current) {
      gsap.to(overlayRef.current, {
        y: "10%",
        duration: 2,
        ease: "power3.inOut",
        onComplete: () => setOverlayVisible(false),
      });
    }
  }, []);

  return (
    <div style={{ position: "relative" }}>
      {overlayVisible && (
        <div
          ref={overlayRef}
          style={{
            position: "fixed",
            inset: 0,
            background: "#fff",
            zIndex: 100000,
            width: "100vw",
            height: "100vh",
          }}
        />
      )}
      <section className="flex justify-start rounded-t-2xl items-center flex-col w-full  bg-[var(--bg-main)] text-black h-auto ">
        <div className="flex justify-start items-end pb-15 max-md:pb-5 bg-black w-full px-20 max-md:px-5 text-white h-[60vh] max-md:h-[30vh] rounded-b-3xl cursor-hover-target">
          <h1
            className="inline-flex text-[6dvw] max-md:text-[10dvw] font-bold leading-tight"
            style={{ fontFamily: "subtitle" }}
          >
            Works &<br></br>Achievements
          </h1>
          <img src="/images/down-arrow.svg" alt="arrow" className="w-18 max-md:w-8" />
        </div>
        <div className="flex  items-start w-full h-auto gap-20 px-20 max-md:px-5 max-md:gap-10">
          <div className="flex flex-col w-full h-auto py-20 max-md:py-5">
            {works.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-3 text-2xl items-start gap-4 border-t border-[var(--border-dark)] px-2 max-md:grid-cols-1 max-md:px-0 max-md:gap-[0]"
              >
                {/* ID */}
                <h1
                  className=" py-6 cursor-hover-inverse-target w-fit text-inverse-hover"
                  style={{ fontFamily: "subtitle" }}
                >
                  {item.id}
                </h1>

                {/* Text + Title */}
                <div className="flex flex-col py-6 w-fit h-fit gap-2">
                  <Link
                    to={item.live}
                    style={{ fontFamily: "subtitle" }}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-inverse-hover text-red-600 w-fit cursor-hover-inverse-target font-bold"
                  >
                    {item.text}
                  </Link>

                  <p className="text-base font-light text-balance text-[var(--bg-border-dark)]">
                    {item.description}
                  </p>
                  <LinkButton item={item} />
                </div>

                {/* Image */}

                {item.image && (
                  <Link
                    to={item.live}
                    style={{ fontFamily: "paragraph" }}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black"
                  >
                    <img
                      src={item.image}
                      alt={item.text}
                      className="w-44 py-4 object-cover rounded-2xl justify-self-end cursor-hover-target"
                    />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Works;
