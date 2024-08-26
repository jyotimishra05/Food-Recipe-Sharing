import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase"; // Ensure Firebase is set up
import { HiMenu, HiX } from "react-icons/hi"; // Import icons for hamburger menu

function Navbar() {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false); // State to handle menu toggle
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    auth.signOut().then(() => {
      localStorage.removeItem("user");
      navigate("/signin");
    });
  };

  return (
    <nav className="bg-jetBlack p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-white">
          <Link to="/">RecipeSite</Link>
        </div>
        <div className="hidden md:flex space-x-4 items-center">
          <Link to="/" className="text-white hover:text-lightBlue">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-lightBlue">
            About
          </Link>
          <Link to="/recipes" className="text-white hover:text-lightBlue">
            Recipe List
          </Link>
          {user ? (
            <>
              <Link
                to="/add-recipe"
                className="text-white hover:text-lightBlue"
              >
                Add Recipe
              </Link>
              <button
                onClick={handleLogout}
                className="text-white px-4 py-2 rounded hover:opacity-80"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link to="/signin" className="text-white hover:text-lightBlue">
                Sign In
              </Link>
              <Link to="/signup" className="text-white hover:text-lightBlue">
                Sign Up
              </Link>
            </>
          )}
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            {menuOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col mt-2 space-y-2">
          <li>
            <Link
              to="/"
              className="block px-4 py-2 text-white hover:bg-gray-700"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/recipes"
              className="block px-4 py-2 text-white hover:bg-gray-700"
              onClick={() => setMenuOpen(false)}
            >
              Recipe List
            </Link>
          </li>
          {user ? (
            <>
              <li>
                <Link
                  to="/add-recipe"
                  className="block px-4 py-2 text-white hover:bg-gray-700"
                  onClick={() => setMenuOpen(false)}
                >
                  Add Recipe
                </Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    handleLogout();
                    setMenuOpen(false);
                  }}
                  className="block px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600 w-full text-left"
                >
                  Sign Out
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  to="/signin"
                  className="block px-4 py-2 text-white hover:bg-gray-700"
                  onClick={() => setMenuOpen(false)}
                >
                  Sign In
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  className="block px-4 py-2 text-white hover:bg-gray-700"
                  onClick={() => setMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </li>
            </>
          )}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
