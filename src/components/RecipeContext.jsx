// src/contexts/RecipeContext.js
import React, { createContext, useState, useContext, useEffect } from "react";
import {defaultRecipes} from "../utils/data"; // Adjust the path as necessary

const RecipeContext = createContext();

const getUserId = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user ? user.uid : null;
};

export function RecipeProvider({ children }) {
  const [recipes, setRecipes] = useState([]);
  const userId = getUserId();

  useEffect(() => {
    setRecipes((prevRecipes) =>
      prevRecipes.length ? prevRecipes : defaultRecipes
    );
  }, []);

  const addRecipe = (recipe) =>
    setRecipes((prevRecipes) => [...prevRecipes, recipe]);

  const updateRecipe = (updatedRecipe) => {
    setRecipes((prevRecipes) =>
      prevRecipes.map((r) => (r.id === updatedRecipe.id ? updatedRecipe : r))
    );
  };

  const deleteRecipe = (id) => {
    setRecipes((prevRecipes) =>
      prevRecipes.filter((recipe) => recipe.id !== id)
    );
  };

  const canEditRecipe = (recipeId) => {
    const recipe = recipes.find((r) => r.id === recipeId);
    return recipe && recipe.userId === userId;
  };

  return (
    <RecipeContext.Provider
      value={{ recipes, addRecipe, updateRecipe, deleteRecipe, canEditRecipe }}
    >
      {children}
    </RecipeContext.Provider>
  );
}

export function useRecipes() {
  return useContext(RecipeContext);
}
