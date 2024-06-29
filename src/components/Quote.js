import React from 'react';

const Quote = () => {
  return (
    <div className="bg-black text-white py-8 px-4 md:py-12 md:px-6 relative">
      <div className="max-w-3xl mx-auto text-center relative">
        <div className="absolute hidden md:block top-0 left-0 transform -translate-x-4 -translate-y-4 text-cOrange text-6xl md:text-8xl">&ldquo;</div>
        <div className="absolute  hidden md:block bottom-0 right-0 transform translate-x-4 translate-y-4 text-cOrange text-6xl md:text-8xl">&rdquo;</div>
        <div className="relative z-10">
          <p className=" max-sm:text-base md:text-2xl mb-4 mx-3">
            Discover the power of transformation with NizzFit—where fitness meets community, and every journey toward wellness is supported with personalized care and expert guidance.
          </p>
          <p className="max-sm:text-base md:text-xl">NizzyFit</p>
        </div>
      </div>
    </div>
  );
};

export default Quote;
