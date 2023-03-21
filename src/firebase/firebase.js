// Import the functions you need from the SDKs you need
import { initializeApp, cert } from "firebase-admin/app";
import { getAnalytics } from "firebase/analytics";

var serviceAccount = require("./serviceAccount.json");

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCG-JENNjS5U-VHTG7nw8YnU9lgUGjzyCk",
  authDomain: "keeper-app-8549f.firebaseapp.com",
  projectId: "keeper-app-8549f",
  storageBucket: "keeper-app-8549f.appspot.com",
  messagingSenderId: "555809332493",
  appId: "1:555809332493:web:e056a27520d7e95a97a444",
  measurementId: "G-SEF6TG5WF4",
  credential: cert(serviceAccount),
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;

console.log("Hello there Firestore!");
