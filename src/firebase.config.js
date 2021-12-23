// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAumEYr0SXLLtr_gQ-KOfveGxmS-VhxORw",
  authDomain: "house-marketplace-app-c82fd.firebaseapp.com",
  projectId: "house-marketplace-app-c82fd",
  storageBucket: "house-marketplace-app-c82fd.appspot.com",
  messagingSenderId: "1080123019926",
  appId: "1:1080123019926:web:b6446bcd3996abccd6e8b7",
  measurementId: "G-Y8PPDETSXF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();
