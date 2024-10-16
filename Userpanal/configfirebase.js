// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBLkf__8b1WKmfojVu_vnGZ8QvsjySGLdM",
//   authDomain: "flipkart-clone-c1460.firebaseapp.com",
//   projectId: "flipkart-clone-c1460",
//   storageBucket: "flipkart-clone-c1460.appspot.com",
//   messagingSenderId: "531316356785",
//   appId: "1:531316356785:web:681a847fdbc9d295569490"
// };

const firebaseConfig = {
  apiKey: "AIzaSyAihk5YaM7fh8F-LIehBDoJ8-JIw4U-fHA",
  authDomain: "educationmanagement-ef907.firebaseapp.com",
  projectId: "educationmanagement-ef907",
  storageBucket: "educationmanagement-ef907.appspot.com",
  messagingSenderId: "614166014331",
  appId: "1:614166014331:web:aea2699711d12be15f75de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)