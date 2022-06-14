// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATp98BRuB2IE6ZUJeRRI1XZIXjxbiItIQ",
  authDomain: "todo-10d8f.firebaseapp.com",
  databaseURL: "https://todo-10d8f-default-rtdb.firebaseio.com",
  projectId: "todo-10d8f",
  storageBucket: "todo-10d8f.appspot.com",
  messagingSenderId: "572772117612",
  appId: "1:572772117612:web:c58b15a148ca6649e6bc49",
  measurementId: "G-6TS6TDH6P5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



export default app