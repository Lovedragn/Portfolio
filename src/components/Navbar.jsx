import { navbar, socialLinks } from "../constants/index.js";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex-center w-full px-15">
      <ul className="flex justify-between w-full ">
        {navbar.map((item, index) => (
          <li key={index}>
            <Link
              to={item.link}
              className="text-[.5rem] text-black font-black"
              style={{ fontFamily: "paragraph" }}
            >
              {item.text}
            </Link>
          </li>
        ))}
        <ul className="flex flex-col items-end  justify-start ">
          {socialLinks.map((item, index) => (
            
            <li key={index} className="last:leading-1">
              <Link
                to={item.link}
                className="text-[.5rem] text-black font-black"
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
