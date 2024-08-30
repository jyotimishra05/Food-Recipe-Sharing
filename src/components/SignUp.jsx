import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import "./SignUp.css";
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
 
  const navigate = useNavigate()

  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log("Sign Up clicked"); // Add this line for debugging
    try {
      const userCredential =await createUserWithEmailAndPassword(auth, email, password);
     
      
       const user = userCredential.user;
       localStorage.setItem("user", JSON.stringify({ uid: user.uid }));
       toast.success("Signed Up successfully!", {
         position: "top-center",
         autoClose: 3000,
       });

       // Redirect after a delay to allow the toast to be visible
       setTimeout(() => {
         navigate("/");
       }, 3000);
    } catch (error) {
      setError(error.message);
      setSuccess("");
    }
  };


  return (
    <div className="sign-up-container">
      <ToastContainer />
      <h2 className="text-3xl font-bold text-center mb-4">Sign Up</h2>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      
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
