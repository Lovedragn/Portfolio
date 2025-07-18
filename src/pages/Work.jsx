import { works } from "../constants/index.js";
import { Link } from "react-router-dom";

const Work = () => {
  return (
    <section className="flex justify-start rounded-t-2xl items-center flex-col w-full bg-[var(--bg-main)] text-black h-auto p-20">
      <div className="revealer"></div>
      <div className="flex  items-start w-full h-auto gap-20 ">
        <div className="flex items-end gap-2 pb-15">
          <h1 className="text-4xl font-bold" style={{ fontFamily: "subtitle" }}>
            Works
          </h1>

          <img
            src="/images/down-arrow.svg"
            alt="arrow"
            className="w-6 invert"
          />
        </div>
        <div className="flex flex-col w-full h-auto pt-30">
          {works.slice(0, 4).map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-3 text-2xl items-start gap-4 border-t border-[var(--border-dark)] px-2"
            >
              {/* ID */}
              <h1
                className="leading-0 py-6 cursor-hover-inverse-target w-fit "
                style={{ fontFamily: "paragraph" }}
              >
                {String(index + 1).padStart(2, "0")}
              </h1>

              {/* Text + Title */}
              <div className="flex flex-col leading-0  py-6 w-fit h-fit  cursor-hover-inverse-target hover:underline">
                <Link
                  to={item.live}
                  style={{ fontFamily: "paragraph" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black"
                >
                  {item.text}
                </Link>
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
export default Work;
