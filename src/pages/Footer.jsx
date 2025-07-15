import { navbar, socialLinks , footer } from "../constants/index.js";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <nav className="flex items-center w-full px-20 pt-20 pb-5 flex-col text-[1.5rem] font-bold bg-[var(--bg-main)] ">
      <ul className="flex justify-between items-start w-full ">
        <Link to={"/"} className="cursor-hover-target">
          <img src="logo.svg" width={60} />
        </Link>
        {navbar.map((item, index) => (
          <li key={index} className="cursor-hover-inverse-target">
            <Link to={item.link} style={{ fontFamily: "subtitle" }}>
              {item.text}
            </Link>
          </li>
        ))}
        <ul className="flex flex-col items-end justify-start ">
          {socialLinks.map((item, index) => (
            <li key={index} className="cursor-hover-inverse-target">
              <Link to={item.link} style={{ fontFamily: "subtitle" }}>
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </ul>
      <ul className="text-[1rem] font-thin" style={{fontFamily:"paragraph"}}>
        {footer}
      </ul>
    </nav>
  );
};

export default Footer;
