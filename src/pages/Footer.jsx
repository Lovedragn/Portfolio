import { navbar, socialLinks, footer } from "../constants/index.js";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <nav className="flex items-center justify-between w-full h-[50vh] px-20 pt-20 pb-5 flex-col text-[1.5rem] font-bold bg-[var(--bg-main)] ">
      <ul className="flex justify-around items-start w-full h-fit">
        <div className="flex w-full h-full justify-start items-start">
          <Link to={"/"} className="cursor-hover-target">
            <img src="logo.svg" width={60} />
          </Link>
        </div>
        <div className="flex w-full h-full gap-40">
          <div className="flex gap-2">
            <div className="bg-black h-full w-[2px]" />
            <ul className="flex flex-col items-start ">
              {navbar.map((item, index) => (
                <li key={index} className="cursor-hover-inverse-target text-hover">
                  {item.text === "Contact" ? (
                    <button
                      style={{ fontFamily: "subtitle" }}
                      className="bg-transparent border-none cursor-pointer text-hover"
                      onClick={() =>
                        navigate("/contact", {
                          state: { backgroundLocation: location },
                        })
                      }
                    >
                      {item.text}
                    </button>
                  ) : (
                    <Link to={item.link} style={{ fontFamily: "subtitle" }}>
                      {item.text}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-2">
            <div className="bg-black h-full w-[2px]" />

            <ul className="flex flex-col items-start justify-start ">
              {socialLinks.map((item, index) => (
                <li key={index} className="cursor-hover-inverse-target text-hover">
                  <Link to={item.link} style={{ fontFamily: "subtitle" }}>
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ul>

      <ul className="text-[1rem] font-thin text-inverse-hover" style={{ fontFamily: "paragraph" }}>
        {footer}
      </ul>
    </nav>
  );
};

export default Footer;
