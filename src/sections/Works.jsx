import { works } from "../constants/index.js";
import { Link } from "react-router-dom";

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
  return (
    <section className="flex justify-start rounded-t-2xl items-center flex-col w-full  bg-[var(--bg-main)] text-black h-auto ">
      <div className="revealer"></div>
      <div className="flex justify-start items-end pb-15 bg-black w-full px-20 text-white h-[60dvh] rounded-b-3xl">
        <h1
          className="inline-flex text-[6dvw] font-bold leading-tight"
          style={{ fontFamily: "subtitle" }}
        >
          Works &<br></br>Achievements
        </h1>
        <img src="/images/down-arrow.svg" alt="arrow" className="w-18 " />
      </div>
      <div className="flex  items-start w-full h-auto gap-20 px-20 ">
        <div className="flex flex-col w-full h-auto py-20">
          {works.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-3 text-2xl items-start gap-4 border-t border-[var(--border-dark)] px-2 "
            >
              {/* ID */}
              <h1
                className=" py-6 cursor-hover-inverse-target w-fit text-hover"
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
                  className=" w-fit cursor-hover-inverse-target font-bold text-inverse-hover"
                >
                  {item.text}
                </Link>

                <p className="text-base font-light text-balance no-underline text-black/50">
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
  );
};
export default Works;
