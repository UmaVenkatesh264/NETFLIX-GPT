// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATt5rBItJ1R73BF1wryWUpyy41DSKc6T8",
  authDomain: "netflixgpt-16df6.firebaseapp.com",
  projectId: "netflixgpt-16df6",
  storageBucket: "netflixgpt-16df6.firebasestorage.app",
  messagingSenderId: "18333188292",
  appId: "1:18333188292:web:bb97c013bca7a77be40991",
  measurementId: "G-S11CTVQ0KS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();