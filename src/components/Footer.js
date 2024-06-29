/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Youtube, Instagram, Linkedin } from "react-feather";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-xl font-semibold mb-4">Connect with Us</h2>
            <p className="text-gray-400 mb-2">
              Follow us on social media for updates:
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/nizzypedia"
                className="text-gray-400 hover:text-white transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://www.youtube.com/channel/UCNQtR7NfjyQeomETmtaW_GA"
                className="text-gray-400 hover:text-white transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube size={24} />
              </a>
              <a
                href="https://www.instagram.com/nizzypedia/?hl=en"
                className="text-gray-400 hover:text-white transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-end">
            <p className="text-gray-400">
              &copy; 2024 NizzFit. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
