import React, { useState } from "react";
import { Menu } from "react-feather";
import Logo from "../assets/Logo.svg";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const onCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-cbg text-gray-300 h-[10%] flex justify-between items-center">
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
        <div
          className={`nav-links duration-500 ${
            isMenuOpen ? "top-16 opacity-100" : "top-[-100%] opacity-0"
          } md:opacity-100 md:top-0 md:static absolute md:min-h-fit min-h-[60vh] left-0 md:w-auto w-full flex items-center transition-all ease-in-out`}
        >
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 bg-cbg w-full text-center max-sm:h-screen">
            <li className="max-sm:pt-4 px-3">
              <a
                className="hover:text-gray-500 transition-colors duration-200"
                href="/"
                onClick={onCloseMenu}
              >
                Home
              </a>
            </li>
            {["Exercises", "About us", "Contact us"].map((item) => (
              <li key={item} className="px-3">
                <a
                  className="hover:text-gray-500 transition-colors duration-200"
                  href={`/${item.toLowerCase().replace(/\s/g, "-")}`}
                  onClick={onCloseMenu}
                >
                  {item}
                </a>
              </li>
            ))}
            
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <Menu
            onClick={onToggleMenu}
            className="text-3xl cursor-pointer md:hidden"
          />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
