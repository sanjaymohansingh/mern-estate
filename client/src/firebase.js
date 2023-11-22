// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASEAPI_KEY,
  authDomain: "mern-estate-c5a29.firebaseapp.com",
  projectId: "mern-estate-c5a29",
  storageBucket: "mern-estate-c5a29.appspot.com",
  messagingSenderId: "895503183950",
  appId: "1:895503183950:web:3a42ff5f52e9323935531f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
