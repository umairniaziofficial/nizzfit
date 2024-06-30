import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ExerciseCards = ({ exercises }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExercises = () => {
      setTimeout(() => {
        setLoading(false);
      }, 1000); 
    };
    fetchExercises();
  }, []);

  return (
    <div className="w-full flex justify-center pt-8">
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-12">
        {loading ? (
          <div className="w-full col-span-2 flex justify-center items-center">
            {/* Bouncing Dots Loader */}
            <div className="flex flex-row gap-2">
              <div className="w-4 h-4 rounded-full bg-cOrange animate-bounce"></div>
              <div className="w-4 h-4 rounded-full bg-cOrange animate-bounce [animation-delay:-0.3s]"></div>
              <div className="w-4 h-4 rounded-full bg-cOrange animate-bounce [animation-delay:-0.5s]"></div>
            </div>
          </div>
        ) : (
          exercises.length > 0 ? (
            exercises.map((exercise, index) => (
              <Link
                key={index}
                to={`/exercise/${exercise.id}`}
                className="block bg-transparent border-[1px] border-gray-300 shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105"
              >
                <img
                  src={exercise.gifUrl || "default-image-url"}
                  alt={exercise.name}
                  className="w-full object-cover rounded-t-lg"
                />
                <h1 className="mt-4 text-xl font-semibold capitalize">
                  {exercise.name}
                </h1>
                <div className="mt-4 flex space-x-4">
                  <button className="bg-cOrange px-4 py-2 rounded-lg capitalize whitespace-nowrap">
                    {exercise.bodyPart}
                  </button>
                  <button className="bg-transparent border-[1px] border-gray-300 px-4 py-2 rounded-lg whitespace-nowrap">
                    Target: <span className="capitalize">{exercise.target}</span>
                  </button>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-gray-500 text-center col-span-2">
              No exercises available for this category.
            </p>
          )
        )}
      </div>
    </div>
  );
};

export default ExerciseCards;
