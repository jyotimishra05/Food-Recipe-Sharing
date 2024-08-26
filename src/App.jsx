import "./assets/styles/tailwind.css";
import "./assets/styles/custom.css";

// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import RecipeList from './components/RecipeList';
import About from "./components/About";
// import RecipeForm from './components/RecipeForm';
import RecipeDetail from './components/RecipeDetail';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Logout from './components/Logout';
import { RecipeProvider } from "./components/RecipeContext";
import AddRecipe from "./components/AddRecipe";
import EditRecipe from "./components/EditRecipe";



function App() {
  return (
    <RecipeProvider>
      <Router>
        <Navbar />
        <div className="min-h-screen bg-powderBlue">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<RecipeList />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
            <Route path="/add-recipe" element={<AddRecipe />} />
            <Route path="/recipe/:id/edit" element={<EditRecipe />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </RecipeProvider>
  );
}

export default App;
