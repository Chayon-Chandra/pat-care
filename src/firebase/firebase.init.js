// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBu93GEJOcGuKjQaOBUh9jA3w9KmNOmBWI",
  authDomain: "pat-care-f9a02.firebaseapp.com",
  projectId: "pat-care-f9a02",
  storageBucket: "pat-care-f9a02.firebasestorage.app",
  messagingSenderId: "756175037132",
  appId: "1:756175037132:web:2816b8fdaf721b8499d869"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);