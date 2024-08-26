import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { HiX } from "react-icons/hi"; // Import the X icon from react-icons
import { useRecipes } from "./RecipeContext";
function RecipeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { recipes, deleteRecipe, canEditRecipe } = useRecipes();
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return <div className="container mx-auto p-6">Recipe not found.</div>;
  }

  const handleDelete = () => {
    deleteRecipe(recipe.id);
    navigate("/recipes");
  };

  const handleClose = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="container mx-auto p-6 ">
      {/* Close Button */}
      <button
        onClick={handleClose}
        className="absolute md:top-16 top-24 right-2  z-10 w-16 h-16 mt-2 
        rounded-full p-4 font-bold text-md text-white"
      >
        <HiX className="w-8 h-8" />
      </button>
      <div className="bg-white p-6 rounded-lg shadow-lg mt-4 relative">
        {recipe.image && (
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-64 object-cover rounded-t-lg mb-4"
          />
        )}
        <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
        <p className="text-gray-700 mb-4">{recipe.description}</p>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Ingredients:</h2>
          <ul className="list-disc list-inside">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Instructions:</h2>
          <p>{recipe.instructions}</p>
        </div>
        {canEditRecipe(recipe.id) && (
          <div className="mt-6 flex justify-between items-center">
            <Link
              to={`/recipe/${recipe.id}/edit`}
              className="text-blue-600 hover:underline text-xl"
            >
              Edit
            </Link>
            <button
              onClick={handleDelete}
              className="text-red-500 hover:underline p-3 rounded-lg text-xl hover:opacity-90"
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default RecipeDetail;
