import { navbar, socialLinks } from "../constants/index.js";
import { Link, useLocation, useNavigate } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useEffect } from "react";

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
          duration: 0.3,
          ease: "power2.inOut",
        });
      });
    });
  }, []);

  return (
    <nav className="flex-center w-full absolute top-5 py-2 px-20 text-[1rem] text-white">
      <ul className="flex justify-between w-full">
        {navbar.map((item, index) => (
          <li
            key={index}
            className="cursor-hover-inverse-target relative "
            ref={(el) => (linkRefs.current[index] = el)}
          >
            {item.text === "Home" ? (
              <Link to={item.link}>
                <img id="logo" src="logo.svg" width={30} />
              </Link>
            ) : item.text === "Contact" ? (
              <button
                id="navlink"
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
              <Link
                id="navlink"
                to={item.link}
                style={{ fontFamily: "paragraph" }}
                className="mix-blend-difference relative"
              >
                {item.text}
                <div className="underline-bar absolute bottom-0 left-0 h-[2px] w-full bg-white origin-left scale-x-0" />
              </Link>
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
              <Link
                to={item.link}
                style={{ fontFamily: "paragraph" }}
                className="mix-blend-difference relative"
              >
                {item.text}
                <div className="underline-bar absolute bottom-0 left-0 h-[2px] w-full bg-white origin-left scale-x-0" />
              </Link>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  );
};

export default Navbar;
