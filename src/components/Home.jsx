import React from "react";
import { Link } from "react-router-dom";
import { useRecipes } from "./RecipeContext";
import TestimonialSlider from "./TestimonialSlider";
import cooking1 from  "../assets/images/cooking1.png"
import cooking2 from "../assets/images/cooking2.png";

export default function Home() {
  const { recipes } = useRecipes();

  return (
    <div className="relative min-h-screen bg-home-background bg-cover bg-center text-white">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 container mx-auto p-6">
        <header className="text-center py-12">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Welcome to Recipe Book
          </h1>
          <p className="text-lg md:text-2xl mb-8">
            Discover, share, and enjoy recipes from around the world.
          </p>
          <Link
            to="/recipes"
            className="bg-jetBlack text-white py-3 px-6 rounded-lg hover:bg-lightBlue text-lg font-semibold"
          >
            Browse Recipes
          </Link>
        </header>

        <section className="my-12">
          <h2 className="text-3xl font-bold mb-6">Featured Recipes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recipes.slice(0, 3).map((recipe) => (
              <div
                key={recipe.id}
                className="bg-white p-4 rounded-lg shadow-lg"
              >
                {recipe.image && (
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-48 object-cover rounded-t-lg mb-4"
                  />
                )}
                <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
                <p className="text-gray-700">{recipe.description}</p>
                <Link
                  to={`/recipe/${recipe.id}`}
                  className="text-blue-500 mt-4 inline-block"
                >
                  View Recipe
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Horizontal Circular Images Section */}
        <div className="flex flex-wrap justify-center items-center space-x-8 my-20">
          {[
            {
              src: "https://c.ndtvimg.com/55q0fj1_snacks-650_625x300_14_August_18.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886",
              name: "Quick & Easy",
            },
            {
              src: "https://c.ndtvimg.com/2022-03/jcliv9dg_shahi-paneer_625x300_15_March_22.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886",
              name: "Dinner",
            },
            {
              src: "https://www.shape.com/thmb/ZTjzIs4c2jtuUYKh6lQ-7lNX6sI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/vegetarian-AdobeStock_291369069-1bed76b8275742f69c6efc5d707b32b8.png",
              name: "Vegetarian",
            },
            {
              src: "https://downshiftology.com/wp-content/uploads/2023/09/Vegetable-Soup-main-500x375.jpg",
              name: "Soup",
            },
            {
              src: "https://assets.clevelandclinic.org/transform/LargeFeatureImage/db02fd57-39b0-445b-ab4e-783e647c9e73/array-vegan-foods-1488883191",
              name: "Vegan",
            },
            {
              src: "https://www.eatingwell.com/thmb/QYZnBgF72TIKI6-A--NyoPa6avY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/greek-salmon-bowl-f681500cbe054bb1adb607ff55094075.jpeg",
              name: "Healthy",
            },
            {
              src: "https://www.eatingwell.com/thmb/rmLlvSjdnJCCy_7iqqj3x7XS72c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chopped-power-salad-with-chicken-0ad93f1931524a679c0f8854d74e6e57.jpg",
              name: "Salad",
            },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center mb-8">
              <img
                src={item.src}
                alt={`Image ${index + 1}`}
                className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full object-cover mb-2"
              />
              <p className="text-center text-white text-sm sm:text-base md:text-lg">
                {item.name}
              </p>
            </div>
          ))}
        </div>

        {/* THE LATEST & GREATEST Section */}
        <section className="my-12">
          <h2 className="text-3xl font-bold mb-6 text-center">
            THE LATEST & GREATEST
          </h2>

          <div className="flex flex-col md:flex-row items-center mb-8">
            <img
              src="https://pinchofyum.com/wp-content/uploads/Finished-Shrimp-and-Peach-Salad.jpg"
              alt="Spicy Shrimp with Peach Salad"
              className="w-full md:w-1/2 lg:w-1/3 rounded-lg shadow-lg mb-6 md:mb-0"
            />
            <div className="md:ml-6">
              <h3 className="text-xl font-bold">AUGUST 20, 2024</h3>
              <h2 className="text-2xl font-semibold mb-4">
                Spicy Shrimp with Peach Salad
              </h2>
              <p className="text-lg">
                This is summertime in a bowl! Spicy shrimp with all the
                delicious heat, smoke, and sweetness we want, alongside a fresh
                peach and cucumber salad.
              </p>
              <Link
                to="/"
                className="text-lightBlue font-bold hover:underline mt-4 inline-block  "
              >
                CONTINUE READING
              </Link>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center mb-8">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3UxqDR4-JbM_0MkJRdimckIgMf0vHtVQ7cw&s"
              alt="Party Brownies"
              className="w-full md:w-1/2 lg:w-1/3 rounded-lg shadow-lg mb-6 md:mb-0"
            />
            <div className="md:mr-6">
              <h3 className="text-xl font-bold">AUGUST 13, 2024</h3>
              <h2 className="text-2xl font-semibold mb-4">Party Brownies</h2>
              <p className="text-lg">
                Brownies covered with a thick layer of fudge frosting and
                rainbow sprinkles. The best way to jazz up a box of brownie mix!
              </p>
              <Link
                to="/"
                className="text-lightBlue font-bold hover:underline mt-4 inline-block"
              >
                CONTINUE READING
              </Link>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center mb-8">
            <img
              src="https://susancooksvegan.com/wp-content/uploads/2020/05/Susan_Cooks_Vegan_Strawberry_Oat-_Smoothie_Bowl-7372-scaled.jpg"
              alt="Oat Bran for Breakfast"
              className="w-full md:w-1/2 lg:w-1/3 rounded-lg shadow-lg mb-6 md:mb-0"
            />
            <div className="md:ml-6">
              <h3 className="text-xl font-bold">JULY 29, 2024</h3>
              <h2 className="text-2xl font-semibold mb-4">
                How You Should Be Doing Oat Bran for Breakfast
              </h2>
              <p className="text-lg">
                High protein, high fiber – I love this oat bran for breakfast!
                Creamy and soothing + quick and easy to make!
              </p>
              <Link
                to="/"
                className="text-lightBlue font-bold hover:underline mt-4 inline-block"
              >
                CONTINUE READING
              </Link>
            </div>
          </div>

          <div className="text-center  my-16">
            <Link
              to="/recipes"
              className="bg-jetBlack text-white py-4 px-4 rounded-lg hover:bg-lightBlue text-lg font-semibold"
            >
              VIEW MORE RECENT POSTS
            </Link>
          </div>
        </section>

        <div className="flex flex-col md:flex-row items-center mb-8 bg-black ">
          <div className="md:w-3/4 p-4">
            <img
              src="https://i.pinimg.com/736x/08/cc/a9/08cca9f3e5e4bd4b92e7e796232084a7.jpg"
              alt="Image 1"
              className="rounded-lg shadow-md mb-4 md:mb-0 md:mr-4"
            />
          </div>

          <section className="my-12 w-full md:w-1/2 lg:w-1/3 bg-white text-black p-4 rounded-lg shadow-lg mr-4 ">
            <h2 className="text-3xl font-bold mb-6 text-center">
              RECIPE COLLECTIONS
            </h2>
            <div className="grid gap-4">
              {[
                { name: "Instant Pot Recipes", count: 48 },
                { name: "Vegan Recipes", count: 200 },
                { name: "Meal Prep Recipes", count: 36 },
                { name: "Quick and Easy Recipes", count: 469 },
                { name: "Pasta Recipes", count: 174 },
                { name: "Soup Recipes", count: 69 },
                { name: "Most Popular Recipes", count: 85 },
              ].map((collection, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-md"
                >
                  <div className="flex items-center">
                    <span className="bg-green-700 text-white rounded-full h-8 w-8 flex items-center justify-center mr-4">
                      {index + 1}
                    </span>
                    <h3 className="text-lg font-semibold">{collection.name}</h3>
                  </div>
                  <p className="text-gray-700 font-bold">{collection.count}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="my-12 bg-black p-8 rounded-lg shadow-lg">
          <div className="grid md:grid-cols-3 gap-6 items-center">
            {/* Text Section */}
            <div className="md:col-span-1 text-center md:text-left">
              <h2 className="text-3xl font-bold mb-4">
                HI! I’M LINDSAY.
                <br />
                <span className="italic text-2xl">nice to meet you!</span>
              </h2>
              <p className="text-lg mb-6">
                I’m a former 4th grade teacher, now full time blogger. My
                husband Bjork and I live in Minnesota. Favorite things include
                my camera, lake days, and dark chocolate.
              </p>
              <button
                to="#"
                className="bg-gray-800 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-gray-700"
              >
                LEARN MORE
              </button>
            </div>

            {/* Image Section */}
            <div className="md:col-span-2 grid grid-cols-2 gap-4">
              <img
                src={cooking1} // replace with your image path
                alt="Lindsay cooking"
                className="rounded-lg object-cover w-full h-full"
              />
              <img
                src={cooking2} // replace with your image path
                alt="Lindsay pouring olive oil"
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </section>
        <section className="my-12">
          <h2 className="text-3xl font-bold mb-6 text-center">
            What Our Users Say
          </h2>
          <TestimonialSlider />
        </section>
        
      </div>
    </div>
  );
}
