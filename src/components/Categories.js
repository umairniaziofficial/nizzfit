import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  
  return (
    <div className="w-screen bg-black text-white py-12">
      <div className="mx-auto flex items-center flex-col">
        <h1 className="text-xl text-gray-300">Categories</h1>
        <CategoryCard />
      </div>
    </div>
  );
};

export default Categories;
