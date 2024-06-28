import React from "react";
import BannerImage from "../assets/BannerImage.png"
const Banner = () => {
  return (
    <div className="flex flex-wrap items-center lg:justify-between justify-center w-full h-screen max-sm:h-auto  bg-[#000000] px-12 overflow-hidden">
      <div className="w-full md:w-1/2 text-white px-4 lg:py-0 py-16 flex flex-col gap-2 md:text-left text-center">
        <h1 className="text-6xl max-sm:text-6xl  font-bold leading-tight mb-4 ">
          Get fit and healthy
        </h1>
        <p className="text-base md:text-lg text-gray-300 mb-6 max-w-xl max-sm:text-2xl">
          Transform your body and mind with our expert fitness programs.
        </p>
        <div className="flex space-x-4 lg:justify-start justify-center">
          <button className="bg-cOrange text-white px-6 py-3 rounded-lg hover:bg-[#ff8c00] transition-colors duration-300">
            Get Started
          </button>
          <button className="bg-transparent border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-[#000000] transition-colors duration-300">
            Learn More
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 px-4 max-sm:hidden">
        <img
          src={BannerImage}
          alt="Fitness Banner"
          className="w-full h-auto shadow-lg"
        />
      </div>
    </div>
  );
};

export default Banner;
