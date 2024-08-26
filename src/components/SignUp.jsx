import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import "./SignUp.css";
import { useNavigate } from "react-router-dom"
function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate()

  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log("Sign Up clicked"); // Add this line for debugging
    try {
      const userCredential =await createUserWithEmailAndPassword(auth, email, password);
      setSuccess("Sign Up Successful");
      
       const user = userCredential.user;
       localStorage.setItem("user", JSON.stringify({ uid: user.uid }));
       navigate("/");
      setError("");
    } catch (error) {
      setError(error.message);
      setSuccess("");
    }
  };


  return (
    <div className="sign-up-container">
      <h2 className="text-3xl font-bold text-center mb-4">Sign Up</h2>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      {success && <p className="text-green-500 text-center mb-4">{success}</p>}
      <form onSubmit={handleSignUp} className="form-container">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="input-field"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="input-field"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="input-field"
          required
        />
        <button type="submit" className="submit-button">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
