// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCMaNyHes8ab-hEMPBVBnWWF2QLHETYv0",
  authDomain: "netflixai-623dd.firebaseapp.com",
  projectId: "netflixai-623dd",
  storageBucket: "netflixai-623dd.appspot.com",
  messagingSenderId: "732830884240",
  appId: "1:732830884240:web:5a8fe134cc1140e8e51315",
  measurementId: "G-C9D0C2RMQK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

