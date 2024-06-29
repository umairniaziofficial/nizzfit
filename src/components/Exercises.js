import React, { useContext, useEffect } from "react";
import ExerciseCards from "./ExerciseCards";
import { BodyPartContext } from "../context/BodyPartContext";
import { ExerciseOptions, fetchData } from "../utils/fetchData";

const Exercises = () => {
  const { bodyPart, setExercises, exercises } = useContext(BodyPartContext);

  useEffect(() => {
    const fetchExercises = async () => {
      if (!bodyPart){
        try {
          const response = await fetchData('https://exercisedb.p.rapidapi.com/exercises',ExerciseOptions);
          setExercises(response);
        } catch (error) {
          console.error("Error fetching All Exercises", error);
        }
      }; 
      try {
        const response = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          ExerciseOptions
        );
        setExercises(response);
      } catch (error) {
        console.error("Error fetching exercises:", error);
      }
    };

    fetchExercises();
  }, [bodyPart, setExercises]); 

  return (
    <div className="w-screen bg-black text-white py-4">
      <div className="max-w-[90%] mx-auto flex-col">
        <h1 className="text-xl text-gray-300 text-center">Exercises</h1>
        <ExerciseCards exercises={exercises} />
      </div>
    </div>
  );
};

export default Exercises;
