import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-wrap items-center lg:justify-between justify-center w-full h-screen bg-[#000000] px-12 overflow-hidden">
      <div className="w-full md:w-1/2 text-white px-4 lg:py-0 py-16 flex flex-col gap-2 md:text-left text-center">
        <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 ">
          Get fit and healthy
        </h1>
        <p className="text-base md:text-lg text-gray-300 mb-6 max-w-xl">
          Transform your body and mind with our expert fitness programs.
        </p>
        <div className="flex space-x-4 md:justify-start justify-center">
          <button className="bg-cOrange text-white px-6 py-3 rounded-lg hover:bg-[#ff8c00] transition-colors duration-300">
            Get Started
          </button>
          <button className="bg-transparent border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-[#000000] transition-colors duration-300">
            Learn More
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 px-4">
        <img
          src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Fitness Banner"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Banner;
