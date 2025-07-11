import { navbar, socialLinks } from "../constants/index.js";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex-center w-full px-20 text-[1rem]  ">
      <ul className="flex justify-between w-full ">
        {navbar.map((item, index) => (
          <li key={index} className="cursor-hover-inverse-target">
            {item.text === "Home" ? (
              <Link
                to={item.link}
              >
                <img src="logo.svg" width={30} />
              </Link>
            ) : (
              <Link
                to={item.link}
                style={{ fontFamily: "paragraph" }}
              >
                {item.text}
              </Link>
            )}
          </li>
        ))}
        <ul className="flex flex-col items-end  justify-start ">
          {socialLinks.map((item, index) => (
            <li key={index} className="">
              <Link
                to={item.link}
                style={{ fontFamily: "paragraph" }}
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  );
};

export default Navbar;
