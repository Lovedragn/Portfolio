import { navbar } from "../constants/index.js";
import { Link }  from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="flex-center w-full h-10 bg-white border-2 border-red-500">
      <ul className="flex justify-start gap-6 w-full bg-gray-700 px-4 py-2">
        {navbar.map((item, index) => (
          <li key={index}>
            <Link              href={item.link}
              className="text-white hover:text-red-400 transition-colors duration-200"
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
