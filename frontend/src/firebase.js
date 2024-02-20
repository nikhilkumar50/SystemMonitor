// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAPYOo5A4BJe8X9klv_Jq1HL_tctrZ8LNA",
    authDomain: "analomy-detection-8e11f.firebaseapp.com",
    projectId: "analomy-detection-8e11f",
    storageBucket: "analomy-detection-8e11f.appspot.com",
    messagingSenderId: "1051780171516",
    appId: "1:1051780171516:web:ee647fb2cee934010fb979"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;