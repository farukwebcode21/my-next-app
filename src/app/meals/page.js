import React from "react";
import MealDb from "../../components/MealDb/Meal";

const MealDataPages = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h3>Searching Data</h3>
      <MealDb />
    </div>
  );
};

export default MealDataPages;
