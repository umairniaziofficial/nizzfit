import React, { useState, useContext } from "react";
import { BodyPartContext } from "../context/BodyPartContext";
import { ExerciseOptions, fetchData } from "../utils/fetchData";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [searchMessage, setSearchMessage] = useState("");
  const { exercises, setExercises } = useContext(BodyPartContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (search.trim() !== "") {
      const searchTerm = search.toLowerCase();
      const filteredExercises = exercises.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(searchTerm) ||
          exercise.target.toLowerCase().includes(searchTerm) ||
          exercise.equipment.toLowerCase().includes(searchTerm) ||
          exercise.bodyPart.toLowerCase().includes(searchTerm)
      );

      if (filteredExercises.length > 0) {
        setExercises(filteredExercises);
        setSearchMessage("");
      } else {
        setSearchMessage("No results found.");
        const response = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          ExerciseOptions
        );
        setExercises(response);
      }
    } else {
      setSearchMessage("");
      const response = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        ExerciseOptions
      );
      setExercises(response);
    }
  };

  const handleClear = async () => {
    setSearch("");
    setSearchMessage("");
    const response = await fetchData(
      "https://exercisedb.p.rapidapi.com/exercises",
      ExerciseOptions
    );
    setExercises(response);
  };

  return (
    <div className="w-full bg-black text-white">
      <div className="w-[90%] mx-auto">
        <h1 className="text-center text-4xl py-8 font-semibold tracking-wider">
          Search Exercises
        </h1>
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto flex items-center justify-center"
        >
          <input
            type="text"
            className="bg-transparent border-[1px] border-gray-300 rounded-l-lg outline-none text-white w-full py-2 px-3"
            placeholder="Search here..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search exercises"
          />
          <button
            type="submit"
            className="bg-cOrange py-2 px-3 border-[1px] rounded-r-lg border-gray-300 ml-[0.009rem] transition-colors duration-200 hover:bg-[#ff8c00]"
          >
            Search
          </button>
          <button
            type="button"
            className="bg-gray-500 py-2 px-3 border-[1px] rounded-lg border-gray-300 ml-2 transition-colors duration-200 hover:bg-gray-600"
            onClick={handleClear}
          >
            Clear
          </button>
        </form>
        {searchMessage && (
          <p className="text-center text-red-500 mt-4">{searchMessage}</p>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
