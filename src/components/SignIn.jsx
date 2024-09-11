// src/components/SignIn.jsx
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import "./SignIn.css"; 
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
    const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      localStorage.setItem("user", JSON.stringify({ uid: user.uid }));

      // Show success toast notification
      
      toast.success("Signed in successfully!", {
        position: "top-center",
        autoClose: 3000,
      });

      // Redirect after a delay to allow the toast to be visible
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="sign-in-container">
      <ToastContainer />
      <h2 className="text-3xl font-bold text-center mb-4">Sign In</h2>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      <form onSubmit={handleSignIn} className="form-container">
        <div className="form-group">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="input-field"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Sign In
        </button>
      </form>
    </div>
  );
}

export default SignIn;
