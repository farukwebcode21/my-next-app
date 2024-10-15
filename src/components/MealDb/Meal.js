"use client";
"use client";
import Image from "next/image";
import React, { useState } from "react";

const MealDb = () => {
  const [meals, setMeals] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    const searchResult = e.target.value;
    setSearchQuery(searchResult);
  };

  const loadData = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`
      );
      const data = await response.json();
      if (data.meals) {
        setMeals(data.meals);
      } else {
        setMeals([]); // Handle no results case
      }
    } catch (error) {
      console.error("Search error:", error);
    }
  };

  return (
    <>
      <input
        onChange={handleSearch}
        type="text"
        placeholder="Type here"
        className="input input-bordered input-success w-full max-w-xs"
      />
      <button onClick={loadData} className="btn btn-secondary w-[320px] mt-4">
        Search
      </button>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {meals.length > 0 ? (
          meals.map((meal) => (
            <>
              <div key={meal.idMeal} className="card p-4 shadow-lg">
                <Image
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  width={500}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <h4 className="text-xl font-semibold mt-2">{meal.strMeal}</h4>
                <p>{meal.strArea}</p>
              </div>
            </>
          ))
        ) : (
          <>
            <p>No Resutl Fond</p>
          </>
        )}
      </div>
    </>
  );
};

export default MealDb;
