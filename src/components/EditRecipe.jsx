import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecipes } from "./RecipeContext";

function EditRecipe() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { recipes, updateRecipe } = useRecipes();
  const existingRecipe = recipes.find((r) => r.id === parseInt(id));
  const [recipe, setRecipe] = useState(existingRecipe || { ingredients: [] });

  useEffect(() => {
    if (!existingRecipe) {
      navigate("/recipes");
    }
  }, [existingRecipe, navigate]);

  useEffect(() => {
    if (existingRecipe) {
      setRecipe({
        ...existingRecipe,
        ingredients: existingRecipe.ingredients.join(", "),
      });
    }
  }, [existingRecipe]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe({
      ...recipe,
      ingredients: recipe.ingredients.split(",").map((i) => i.trim()),
    });
    navigate(`/recipe/${recipe.id}`);
  };

  return (
    <div className="bg-addrecipe-background bg-cover bg-center">
      <div className="container mx-auto p-6">
        <h1
          className="text-3xl font-bold mb-6 text-white text-center"
          style={{ textShadow: "2px 2px 4px black" }}
        >
          Edit Recipe
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="bg-black opacity-80 p-8 rounded-md md:m-2">
            <div className="mb-4">
              <label className="block text-white text-xl  font-semibold mb-2">
                Title
              </label>
              <input
                type="text"
                name="title"
                value={recipe.title || ""}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-white text-xl  font-semibold mb-2">
                Description
              </label>
              <textarea
                name="description"
                value={recipe.description || ""}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-white text-xl  font-semibold mb-2">
                Ingredients (comma separated)
              </label>
              <input
                type="text"
                name="ingredients"
                value={recipe.ingredients || ""}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-white text-xl  font-semibold mb-2">
                Instructions
              </label>
              <textarea
                name="instructions"
                value={recipe.instructions || ""}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-white text-xl  font-semibold mb-2">
                Image URL
              </label>
              <input
                type="text"
                name="image"
                value={recipe.image || ""}
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
              Update Recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditRecipe;
