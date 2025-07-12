import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { skills } from "./../constants/index";

// Main component rendering multiple rolls
const Rolls = () => {
  return (
     <section className="w-full flex-col gap-6 flex-center overflow-hidden py-8 justify-evenly flex bg-white">
   
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

// Each roll
const Skillroll = ({ id, skills, direction }) => {
  const containerRef = useRef();

  useEffect(() => {
    if (!containerRef.current) return;

    const content = containerRef.current;
    const width = content.offsetWidth / 2; 
    const dir = direction === "right" ? 1 : -1;

    const anim = gsap.to(content, {
      x: dir * width,
      duration: width/12,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) =>
          dir === 1
            ? parseFloat(x) % width
            : -(Math.abs(parseFloat(x)) % width)
        ),
      },
    });

    return () => anim.kill();
  }, [direction]);

  return (
    <section className="flex flex-col gap-4 ">
      <div
        id={id}
        ref={containerRef}
        className="flex-center whitespace-nowrap  text-3xl font-semibold text-black"
      >
        {[...skills, ...skills,...skills].map((skill, index) => (
          <span
            key={index}
            className="mx-8  transition-colors duration-500 cursor-hover-target"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Rolls;
