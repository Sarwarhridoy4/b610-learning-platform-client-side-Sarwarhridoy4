// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmg8vgQQW2q5s7UtFPL5d65nmibYnzaAk",
  authDomain: "e-pathshala-authentication.firebaseapp.com",
  projectId: "e-pathshala-authentication",
  storageBucket: "e-pathshala-authentication.appspot.com",
  messagingSenderId: "516242417430",
  appId: "1:516242417430:web:59fad71cf795282d14d237"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;