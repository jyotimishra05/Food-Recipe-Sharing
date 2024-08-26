import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase"; // Import your Firebase auth instance

function Logout() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLogout = async () => {
      try {
        await signOut(auth); // Sign out from Firebase
        localStorage.removeItem("user"); // Clear local storage
        navigate("/"); // Redirect to home page or sign-in page
      } catch (error) {
        console.error("Sign out error:", error.message);
        // Optionally handle the error, e.g., show an error message
      } finally {
        setLoading(false); // Stop loading once the process is complete
      }
    };

    handleLogout();
  }, [navigate]);

  return (
    <div className="max-w-md mx-auto p-4 bg-powderBlue rounded-lg shadow-md">
      {loading ? (
        <h2 className="text-2xl font-bold text-jetBlack mb-4">
          Logging Out...
        </h2>
      ) : (
        <h2 className="text-2xl font-bold text-jetBlack mb-4">
          You have been logged out.
        </h2>
      )}
    </div>
  );
}

export default Logout;
