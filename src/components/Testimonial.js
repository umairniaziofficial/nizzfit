import React from "react";

const Testimonial = () => {
  return (
    <div className="py-12 flex flex-col items-center justify-center bg-black min-h-screen">
      <div className="max-w-5xl mx-12">
        <h2 className="text-5xl font-semibold text-center mb-6 text-white">
          Client Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
          <div className="bg-cbg rounded-lg shadow-lg overflow-hidden">
            <div className="p-4">
              <p className="text-white mb-4">
                "NizzFit has completely transformed my fitness journey. The
                personalized training and expert guidance have helped me achieve
                my goals faster than I thought possible."
              </p>
              <p className="font-bold text-white">John Doe</p>
              <p className="text-sm text-white mb-2">Fitness Enthusiast</p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className="w-6 h-6 fill-current mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 0l2.45 6.305H20l-5.646 4.427 2.182 6.268-5.786-3.99-5.785 3.99 2.182-6.268L0 6.305h7.55L10 0z"
                    />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-white mt-2">
                I'm incredibly satisfied with my experience at NizzFit!
              </p>
            </div>
          </div>

          <div className="bg-cbg rounded-lg shadow-lg overflow-hidden">
            <div className="p-4">
              <p className="text-white mb-4">
                "The yoga classes at NizzFit have been a game-changer for my
                flexibility and overall well-being. I couldn't be happier with
                the supportive community and top-notch instructors."
              </p>
              <p className="font-bold text-white">Jane Smith</p>
              <p className="text-sm text-white mb-2">Yoga Lover</p>
              <div className="flex text-yellow-400">
                {[...Array(4)].map((_, index) => (
                  <svg
                    key={index}
                    className="w-6 h-6 fill-current mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 0l2.45 6.305H20l-5.646 4.427 2.182 6.268-5.786-3.99-5.785 3.99 2.182-6.268L0 6.305h7.55L10 0z"
                    />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-white mt-2">
                Proud to be part of the NizzFit community!
              </p>
            </div>
          </div>

          <div className="bg-cbg rounded-lg shadow-lg overflow-hidden">
            <div className="p-4">
              <p className="text-white mb-4">
                "I've been a runner for years, and NizzFit's training programs
                have taken my performance to the next level. Their dedication to
                excellence is unmatched."
              </p>
              <p className="font-bold text-white">Michael Brown</p>
              <p className="text-sm text-white mb-2">Runner</p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className="w-6 h-6 fill-current mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 0l2.45 6.305H20l-5.646 4.427 2.182 6.268-5.786-3.99-5.785 3.99 2.182-6.268L0 6.305h7.55L10 0z"
                    />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-white mt-2">
                Thriving with NizzFit's personalized training!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
