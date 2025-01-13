// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-7be0d.firebaseapp.com",
  projectId: "mern-estate-7be0d",
  storageBucket: "mern-estate-7be0d.appspot.com",
  messagingSenderId: "130845141616",
  appId: "1:130845141616:web:98bda2ebd6a2ba523ba2b5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);