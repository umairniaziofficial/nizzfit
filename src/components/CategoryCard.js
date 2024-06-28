import React, { useEffect, useState } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css"; // Import the CSS for the scrolling menu

const CategoryCard = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    setCategories(["Cardio", "Strength", "Flexibility", "BodyWorkout"]);
  }, []);

  const handleCategoryClick = (index) => {
    setSelectedCategory(index);
  };

  return (
    <div className="w-screen flex items-center justify-center pt-12 ">
      <ScrollMenu>
        {categories.map((item, index) => (
          <div key={index} className="mx-4">
            <div
              onClick={() => handleCategoryClick(index)}
              className={`px-8 py-12 rounded-lg text-center transition-transform flex items-center justify-center transform hover:cursor-pointer border ${
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
