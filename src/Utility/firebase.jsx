// import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
// // import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdRVQtJNVnOblYsJWPww9LjFi0QGMaNos",
  authDomain: "clone-kedir-sep24-evanga.firebaseapp.com",
  projectId: "clone-kedir-sep24-evanga",
  storageBucket: "clone-kedir-sep24-evanga.appspot.com",
  messagingSenderId: "181744624182",
  appId: "1:181744624182:web:eab8cf8b22bb383f5a6e97",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
