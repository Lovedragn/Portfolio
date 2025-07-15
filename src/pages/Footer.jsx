import { navbar, socialLinks, footer } from "../constants/index.js";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <nav className="flex items-center justify-between w-full h-[50vh] px-20 pt-20 pb-5 flex-col text-[1.5rem] font-bold bg-[var(--bg-main)] ">
      <ul className="flex justify-around items-start w-full h-fit">
        <div className="flex w-full h-full justify-start items-start">
        <Link to={"/"} className="cursor-hover-target">
          <img src="logo.svg" width={60} />
        </Link>
        </div>
        <div className="flex w-full h-full gap-20">
          <ul className="flex flex-col items-start border-l-2 leading-normal ">
            {navbar.map((item, index) => (
              <li key={index} className="cursor-hover-inverse-target text-start">
                <Link to={item.link} style={{ fontFamily: "subtitle" }}>
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex flex-col items-start justify-start ">
            {socialLinks.map((item, index) => (
              <li key={index} className="cursor-hover-inverse-target">
                <Link to={item.link} style={{ fontFamily: "subtitle" }}>
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </ul>

      <ul className="text-[1rem] font-thin" style={{ fontFamily: "paragraph" }}>
        {footer}
      </ul>
    </nav>
  );
};

export default Footer;
