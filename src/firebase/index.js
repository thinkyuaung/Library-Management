// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD29H8tJ4qhRj-rIUGDI00ppbfn6fQSCI4",
  authDomain: "library-app-e05e0.firebaseapp.com",
  projectId: "library-app-e05e0",
  storageBucket: "library-app-e05e0.firebasestorage.app",
  messagingSenderId: "812556901496",
  appId: "1:812556901496:web:ff9e1304ac6dd76e8d618d",
  measurementId: "G-4047S0ZVK1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}
//const analytics = getAnalytics(app);