import React, { useEffect, useState } from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css"; // Import the CSS for the scrolling menu
import { ExerciseOptions, fetchData } from "../utils/fetchData";

const CategoryCard = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
          ExerciseOptions
        );
        setCategories(response);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = (index) => {
    setSelectedCategory(index);
  };

  return (
    <div className="w-full mx-auto pt-12 lg:flex items-center justify-center overflow-x-auto scrollbar">
      <ScrollMenu>
        {categories.map((item, index) => (
          <div key={index} className="mx-4 mb-12">
            <div
              onClick={() => handleCategoryClick(index)}
              className={`px-8 py-12 max-h-[48px] rounded-lg text-center transition-transform flex items-center justify-center transform hover:cursor-pointer border ${
                selectedCategory === index
                  ? "bg-cOrange text-white"
                  : "bg-transparent border-white text-white"
              }`}
              style={{ width: "200px" }}
            >
              <h1 className="text-2xl font-semibold">{item}</h1>
            </div>
          </div>
        ))}
      </ScrollMenu>
    </div>
  );
};

export default CategoryCard;
