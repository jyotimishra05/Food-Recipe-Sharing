// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCyg36N1gnxEQG34pQbKaMqLdk7SfTcpcI",
  authDomain: "food-recipe-app-1d7e8.firebaseapp.com",
  projectId: "food-recipe-app-1d7e8",
  storageBucket: "food-recipe-app-1d7e8.appspot.com",
  messagingSenderId: "241726461062",
  appId: "1:241726461062:web:be02477db814cdbeb7ed07",
  measurementId: "G-6XPNSST8MP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


export { auth };


