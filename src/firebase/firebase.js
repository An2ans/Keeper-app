import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

var serviceAccount = require("./serviceAccount.json");

const firebaseConfig = {
  apiKey: "AIzaSyCG-JENNjS5U-VHTG7nw8YnU9lgUGjzyCk",
  authDomain: "keeper-app-8549f.firebaseapp.com",
  projectId: "keeper-app-8549f",
  storageBucket: "keeper-app-8549f.appspot.com",
  messagingSenderId: "555809332493",
  appId: "1:555809332493:web:e056a27520d7e95a97a444",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

console.log("Hello there Firestore!");
