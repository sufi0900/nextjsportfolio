// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7ELfq1LRHQusMXAzOkh1NXzKgZJOEqD8",
  authDomain: "nextjs-11d58.firebaseapp.com",
  projectId: "nextjs-11d58",
  storageBucket: "nextjs-11d58.appspot.com",
  messagingSenderId: "634883677659",
  appId: "1:634883677659:web:4f8d01c8ef846fee405bfe",
  measurementId: "G-JWC5C4D25H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
