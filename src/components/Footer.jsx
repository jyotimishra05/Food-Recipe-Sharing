// components/Footer.js
import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-jetBlack text-white py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="mb-4">For inquiries, please email us at:</p>
            <a
              href="mailto:info@recipesite.com"
              className="flex items-center text-lightBlue hover:underline"
            >
              <FaEnvelope className="mr-2" /> info@recipesite.com
            </a>
          </div>
          {/* eCookbook Signup Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold mb-4">Get a Free eCookbook</h3>
            <p>Get our top 25 recipes delivered to your</p>
            <p className="mb-4 ">Inbox!</p>
            <form className="flex flex-col space-y-2">
              <input
                type="text"
                placeholder="Enter Name"
                className="p-2 border border-gray-300 rounded w-60 mb-2"
              />
              <input
                type="email"
                placeholder="Enter Email"
                className="p-2 border border-gray-300 rounded w-full mb-2"
              />
              <button
                type="submit"
                className=" text-white p-2 rounded hover:opacity-80"
              >
                GO
              </button>
            </form>
          </div>

          {/* Footer Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold mb-4">PINCH OF YUM</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-lightBlue hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-lightBlue hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-lightBlue hover:underline">
                  Recipe Index
                </a>
              </li>
              <li>
                <a href="#" className="text-lightBlue hover:underline">
                  Blogging Resources
                </a>
              </li>
              <li>
                <a href="#" className="text-lightBlue hover:underline">
                  Income Reports
                </a>
              </li>
              <li>
                <a href="#" className="text-lightBlue hover:underline">
                  Sponsored Content
                </a>
              </li>
              <li>
                <a href="#" className="text-lightBlue hover:underline">
                  Media Mentions
                </a>
              </li>
            </ul>
          </div>

          {/* Food & Recipes Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold mb-4">FOOD & RECIPES</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-lightBlue hover:underline">
                  Sugar Free January
                </a>
              </li>
              <li>
                <a href="#" className="text-lightBlue hover:underline">
                  Freezer Meals 101
                </a>
              </li>
              <li>
                <a href="#" className="text-lightBlue hover:underline">
                  Quick and Easy Recipes
                </a>
              </li>
              <li>
                <a href="#" className="text-lightBlue hover:underline">
                  Instant Pot Recipes
                </a>
              </li>
              <li>
                <a href="#" className="text-lightBlue hover:underline">
                  Pasta Recipes
                </a>
              </li>
              <li>
                <a href="#" className="text-lightBlue hover:underline">
                  Vegan Recipes
                </a>
              </li>
              <li>
                <a href="#" className="text-lightBlue hover:underline">
                  Soup Recipes
                </a>
              </li>
              <li>
                <a href="#" className="text-lightBlue hover:underline">
                  Taco Recipes
                </a>
              </li>
              <li>
                <a href="#" className="text-lightBlue hover:underline">
                  Meal Prep Recipes
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Us Section */}
        <div className="flex flex-col items-center mt-8">
          <h1 className="text-2xl font-bold mb-2">Follow us on!</h1>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-blue-600 hover:text-blue-700">
              <FaFacebook size={34} />
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-500">
              <FaTwitter size={34} />
            </a>
            <a href="#" className="text-pink-500 hover:text-pink-600">
              <FaInstagram size={34} />
            </a>
            <a href="#" className="text-red-600 hover:text-red-700">
              <FaYoutube size={34} />
            </a>
          </div>
          <div className="text-center mt-6">
            <p>&copy; 2024 RecipeSite. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
