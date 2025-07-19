import { navbar, socialLinks } from "../constants/index.js";
import { Link, useLocation, useNavigate } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import AnimatedLink from "./AnimatedLink.jsx";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const linkRefs = useRef([]);

  useGSAP(() => {
    gsap.from("#logo", {
      rotate: 360,
      scale: 0.6,
      delay: 5.5,
      duration: 2,
      ease: "power1.inOut",
    });
    gsap.fromTo(
      "#navlink",
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        
      },
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
color:"black",
        delay: 4.5,
        ease: "power2.in",
      }
    );

    linkRefs.current.forEach((el) => {
      if (!el) return;
      const underline = el.querySelector(".underline-bar");
      // Initial state
      gsap.set(underline, {
        scaleX: 0,
        transformOrigin: "left",
      });
      el.addEventListener("mouseenter", () => {
        gsap.set(underline, { transformOrigin: "left" });
        gsap.to(underline, {
          scaleX: 1,
          duration: 0.3,
          ease: "power2.inOut",
        });
      });
      el.addEventListener("mouseleave", () => {
        gsap.set(underline, { transformOrigin: "right" });
        gsap.to(underline, {
          scaleX: 0,
          duration: 0.2,
          backgroundColor:"black",
          ease: "power2.inOut",
        });
      });
    });
  }, []);

  return (
    <nav className="flex-center w-full absolute top-5 py-2 px-20 text-[1rem] text-white z-[9999]">
      <ul className="flex justify-between w-full">
        {navbar.map((item, index) => (
          <li
            key={index}
            id={"links"}
            className="cursor-hover-inverse-target relative "
            ref={(el) => (linkRefs.current[index] = el)}
          >
            {item.text === "Home" ? (
              <AnimatedLink to={item.link}>
                <img id="logo" src="logo.svg" width={30} />
              </AnimatedLink>
            ) : item.text === "Contact" ? (
              <button
                id={"navlink"}
                style={{ fontFamily: "paragraph" }}
                className="mix-blend-difference bg-transparent border-none outline-none cursor-pointer relative"
                onClick={() =>
                  navigate("/contact", {
                    state: { backgroundLocation: location },
                  })
                }
              >
                {item.text}
                <div className="underline-bar absolute bottom-0 left-0 h-[2px] w-full bg-white origin-left scale-x-0" />
              </button>
            ) : (
              <AnimatedLink
                id={"navlink"}
                to={item.link}
                style={{ fontFamily: "paragraph" }}
                className="mix-blend-difference relative"
              >
                {item.text}
                <div className="underline-bar absolute bottom-0 left-0 h-[2px] w-full bg-white origin-left scale-x-0" />
              </AnimatedLink>
            )}
          </li>
        ))}
        <ul className="flex flex-col items-end justify-start">
          {socialLinks.slice(0, 2).map((item, index) => (
            <li
              key={index + navbar.length}
              className="cursor-hover-inverse-target relative overflow-hidden"
              ref={(el) => (linkRefs.current[index + navbar.length] = el)}
            >
              <AnimatedLink
                id={"navlink"}
                to={item.link}
                style={{ fontFamily: "paragraph" }}
                className="mix-blend-difference relative"
              >
                {item.text}
                <div className="underline-bar absolute bottom-0 left-0 h-[2px] w-full bg-white origin-left scale-x-0" />
              </AnimatedLink>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  );
};

export default Navbar;
