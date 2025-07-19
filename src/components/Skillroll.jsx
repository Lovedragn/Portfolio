import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { skills } from "./../constants/index";

// Color mapping for each skill

// Main Rolls container
const Rolls = () => {
  return (
    <section className="w-full flex flex-col gap-6 overflow-hidden py-8 max-md:py-2 ">
      {skills.map((item, index) => (
        <Skillroll
          key={index}
          id={`roll-${index}`}
          skills={item.items}
          direction={item.direction}
        />
      ))}
    </section>
  );
};
const Skillroll = ({ id, skills, direction }) => {
  const containerRef = useRef();

  useEffect(() => {
    if (!containerRef.current) return;

    const content = containerRef.current;
    const width = content.scrollWidth / 3; // Adjust for triple content

    const dir = direction === "right" ? 1 : -1;

    // Set initial position
    gsap.set(content, {
      x: dir === 1 ? -width : 0,
    });

    const anim = gsap.to(content, {
      x: dir === 1 ? 0 : -width,
      duration: width / 40, // Adjust speed
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => {
          const val = parseFloat(x);
          return dir === 1 ? ((val + width) % width) - width : val % width;
        }),
      },
    });

    return () => anim.kill();
  }, [direction]);

  return (
    <div className="flex flex-col gap-4 relative overflow-hidden">
      {/* Gradient Overlays */}
      <div className="pointer-events-none absolute left-0 top-0 w-44 h-full z-10 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 w-44 h-full z-10 bg-gradient-to-l from-black to-transparent" />

      {/* Scrolling Content */}
      <div
        id={id}
        ref={containerRef}
        className="flex whitespace-nowrap text-2xl max-md:text-sm"
      >
        {[...skills, ...skills, ...skills].map((skill, index) => (
          <span
            key={index}
            className="mx-2 px-6 py-2 rounded-full  max-md:px-4 border-gray-700 border-1 bg-gradient-to-b from-gray-950 to-gray-800 font-extralight transition-colors duration-500"
          >
            {skill}
          </span>
        ))}
        
      </div>
      
      
    </div>
  );
};

export default Rolls;
