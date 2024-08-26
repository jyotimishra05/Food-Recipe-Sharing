import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecipes } from "./RecipeContext";
import  "../assets/styles/custom.css"

function AddRecipe() {
  const { addRecipe } = useRecipes();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState({
    title: "",
    description: "",
    ingredients: "",
    instructions: "",
    image: "",
  });

  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      console.error("No user found in localStorage");
      return;
    }

    const newRecipe = {
      ...recipe,
      id: Date.now(),
      ingredients: recipe.ingredients.split(",").map((i) => i.trim()),
      userId: user.uid,
    };

    console.log("Submitting new recipe:", newRecipe);

    addRecipe(newRecipe);
    navigate("/recipes");
  };
// console.log(recipe)
  return (
    <div className="bg-addrecipe-background bg-cover bg-center">
      <div className="container mx-auto p-6 ">
        <h1
          className="text-3xl font-bold mb-6 text-white text-center"
          style={{ textShadow: "2px 2px 4px black" }}
        >
          Add a New Recipe
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="bg-black opacity-80 p-8 rounded-md md:m-2">
            <div className="mb-4">
              <label className="block text-white text-xl  mb-2">Title</label>
              <input
                type="text"
                name="title"
                value={recipe.title}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-white text-xl  mb-2">
                Description
              </label>
              <textarea
                name="description"
                value={recipe.description}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-white text-xl  mb-2">
                Ingredients (comma separated)
              </label>
              <input
                type="text"
                name="ingredients"
                value={recipe.ingredients}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-white text-xl  mb-2">
                Instructions
              </label>
              <textarea
                name="instructions"
                value={recipe.instructions}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-white text-xl  mb-2">
                Image URL
              </label>
              <input
                type="text"
                name="image"
                value={recipe.image}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-lightBlue mt-4 text-white py-2 px-8 rounded hover:opacity-80"
            >
              Add Recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddRecipe;
