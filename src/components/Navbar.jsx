import { navbar, socialLinks } from "../constants/index.js";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <nav className="flex-center w-full absolute top-5 py-2 px-20 text-[1rem] text-white">
      <ul className="flex justify-between w-full ">
        {navbar.map((item, index) => (
          <li key={index} className="cursor-hover-inverse-target ">
            {item.text === "Home" ? (
              <Link to={item.link}>
                <img src="logo.svg" width={30} />
              </Link>
            ) : item.text === "Contact" ? (
              <button
                style={{ fontFamily: "paragraph" }}
                className="mix-blend-difference bg-transparent border-none outline-none cursor-pointer"
                onClick={() => navigate("/contact", { state: { backgroundLocation: location } })}
              >
                {item.text}
              </button>
            ) : (
              <Link
                to={item.link}
                style={{ fontFamily: "paragraph" }}
                className="mix-blend-difference "
              >
                {item.text}
              </Link>
            )}
          </li>
        ))}
        <ul className="flex flex-col items-end justify-start ">
          {socialLinks.slice(0,2).map((item, index) => (
            <li key={index} className="cursor-hover-inverse-target">
              <Link
                to={item.link}
                style={{ fontFamily: "paragraph" }}
                className="mix-blend-difference"
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
