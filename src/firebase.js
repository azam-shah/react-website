// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4Lv1_MguD3geqvLG4upvGhDytS-H5Asc",
  authDomain: "email-password-d3395.firebaseapp.com",
  projectId: "email-password-d3395",
  storageBucket: "email-password-d3395.appspot.com",
  messagingSenderId: "667409512251",
  appId: "1:667409512251:web:26acd24bdaf04a01b4e91e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const  auth = getAuth();

export default  app;