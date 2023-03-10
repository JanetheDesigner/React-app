import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiHNRLmLwckbZXqVa1jWjDiqEXzQwAfdw",
  authDomain: "login-2412a.firebaseapp.com",
  projectId: "login-2412a",
  storageBucket: "login-2412a.appspot.com",
  messagingSenderId: "896287605466",
  appId: "1:896287605466:web:5837cd0b96c40057425be3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export {auth}
