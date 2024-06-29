import React from "react";
import AboutImage from "../assets/AboutUsImage.jpg";

const AboutComponent = () => {
  return (
    <div className="bg-black text-white py-12" id="About">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 pr-8 mb-6 md:mb-0">
          <h2 className="text-4xl font-semibold mb-4">
            Discover the Power of Transformation with NizzFit
          </h2>
          <p className="text-base mb-6">
            At NizzFit, we believe in the transformative power of fitness. Our
            mission is to empower individuals to achieve their wellness goals
            through personalized training and community support.
          </p>
          <p className="text-base">
            Whether you're just starting your fitness journey or aiming to reach
            new heights, NizzFit provides the tools and support you need. Our
            expert trainers and welcoming community are here to help you every
            step of the way.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src={AboutImage}
            alt="NizzFit About"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
