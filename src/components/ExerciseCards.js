import React from "react";

const ExerciseCards = ({ exercises }) => {
  return (
    <div className="w-full flex justify-center pt-8">
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-12">
        {exercises.length > 0 ? (
          exercises.map((exercise, index) => (
            <div key={index} className="bg-transparent border-[1px] border-gray-300 shadow-lg rounded-lg p-6">
              <img src={exercise.gifUrl || "default-image-url"} alt={exercise.name} className="w-full  object-cover rounded-t-lg" />
              <h1 className="mt-4 text-xl font-semibold capitalize">{exercise.name}</h1>
              <div className="mt-4 flex space-x-4">
                <button className="bg-cOrange px-4 py-2 rounded-lg capitalize whitespace-nowrap">{exercise.bodyPart}</button>
                <button className="bg-transparent border-[1px] border-gray-300 px-4 py-2 rounded-lg whitespace-nowrap">Target: <span className="capitalize">{exercise.target}</span></button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">No exercises available for this category.</p>
        )}
      </div>
    </div>
  );
};

export default ExerciseCards;
