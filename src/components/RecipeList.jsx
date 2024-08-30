import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useRecipes } from "./RecipeContext";

function RecipeList() {
  const { recipes, canEditRecipe } = useRecipes();
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  useEffect(() => {
    setFilteredRecipes(recipes);
  }, [recipes]);
// console.log("recipe", recipes);
  const handleSearch = (query) => {
    const filtered = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredRecipes(filtered);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="relative w-full h-40">
        <label className="absolute top-4 right-4 text-white text-2xl font-bold opacity-80">
          Find the best recipes for cooking!
        </label>
        <input
          type="text"
          placeholder="Search recipes..."
          className="absolute md:top-16 top-24 md:right-4 right-0 p-2 border-none rounded md:w-1/2 w-full opacity-65"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      <h1 className="text-3xl font-bold mb-6">All Recipes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      
        {filteredRecipes.length==0?<h1 className=" font-bold text-white text-xl">Recipe not Found! </h1>:filteredRecipes.map((recipe) => (
          <div key={recipe.id} className="bg-white p-4 rounded-lg shadow-lg">
            {recipe.image && (
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
            )}
            <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
            <p className="text-gray-700">{recipe.description}</p>
            <div className="flex justify-between items-center mt-4">
              <Link
                to={`/recipe/${recipe.id}`}
                className="text-blue-500 hover:underline"
              >
                View Recipe
              </Link>
              {canEditRecipe(recipe.id) && (
                <Link
                  to={`/recipe/${recipe.id}/edit`}
                  className="text-yellow-500 hover:underline"
                >
                  Edit
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipeList;
