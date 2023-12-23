// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_8LuF7cJtHFAJnMrXsScqEhx7lgzeM4I",
  authDomain: "twitter-clone-7382d.firebaseapp.com",
  projectId: "twitter-clone-7382d",
  storageBucket: "twitter-clone-7382d.appspot.com",
  messagingSenderId: "425002766916",
  appId: "1:425002766916:web:a6698ebfac9196103e2211",
  measurementId: "G-E09P4PWL91",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider  = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage =  getStorage(app);

