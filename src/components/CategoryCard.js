import React, { useContext, useEffect, useState } from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import { ExerciseOptions, fetchData } from "../utils/fetchData";
import { BodyPartContext } from "../context/BodyPartContext";

const CategoryCard = () => {
  const [categories, setCategories] = useState([]);
  const { bodyPart, setBodyPart } = useContext(BodyPartContext);

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

  const handleCategoryClick = (item) => {
    if (bodyPart === item) {
      setBodyPart(null);
    } else {
      setBodyPart(item);
    }
  };

  return (
    <div className="w-full mx-auto pt-12 lg:flex items-center justify-center overflow-x-auto scrollbar">
      <ScrollMenu>
        {categories.map((item, index) => (
          <div key={index} className="mx-4 mb-12 max-sm:mb-0">
            <div
              onClick={() => handleCategoryClick(item)}
              className={`px-8 py-12 max-h-[48px] rounded-lg text-center transition-transform flex items-center justify-center transform hover:cursor-pointer border ${bodyPart === item
                  ? "bg-cOrange text-white"
                  : "bg-transparent border-white text-white"
                }`}
              style={{ width: "200px" }}
            >
              <h1 className="text-2xl font-semibold capitalize whitespace-nowrap">{item}</h1>
            </div>
          </div>
        ))}
      </ScrollMenu>
    </div>
  );
};

export default CategoryCard;
