import React, { useState } from "react";
import { Menu } from "react-feather";
import Logo from "../assets/Logo.svg";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-cbg text-gray-300 h-[10%]">
      <nav className="flex justify-between items-center w-[92%] mx-auto">
        <div className="flex items-center">
         <a href="/">
            <img
              className="w-16 cursor-pointer"
              src={Logo}
              alt="Company Logo"
            />
         </a>
        </div>
        <div className={`nav-links duration-500 ${isMenuOpen ? 'top-0' : 'top-[-100%]'} md:static absolute md:min-h-fit min-h-[60vh] left-0 md:w-auto w-full flex items-center px-5`}>
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            <li>
              <a
                className="hover:text-gray-500 transition-colors duration-200"
                href="/"
              >
                Home
              </a>
            </li>
            {['Exercises', 'About us', 'Contact us'].map((item) => (
              <li key={item}>
                <a
                  className="hover:text-gray-500 transition-colors duration-200"
                  href={`/${item.toLowerCase().replace(/\s/g, '-')}`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <button className="bg-cOrange text-white px-5 py-2 rounded-full brightness-75 hover:brightness-100 transition-colors duration-200">
            Sign in
          </button>
          <Menu onClick={onToggleMenu} className="text-3xl cursor-pointer md:hidden" />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
