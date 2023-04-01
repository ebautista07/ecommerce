// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXcsoQ48thAhbdOLrdwbXy2QnSsxgPX08",
  authDomain: "ecommercev2-6bed3.firebaseapp.com",
  projectId: "ecommercev2-6bed3",
  storageBucket: "ecommercev2-6bed3.appspot.com",
  messagingSenderId: "424137684480",
  appId: "1:424137684480:web:6a78b8c572e3fc97aacae5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
