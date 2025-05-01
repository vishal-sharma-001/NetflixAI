// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOfYbeFuFmi0KNJzCwmsXD5k9pwoQ95uQ",
  authDomain: "netflixai-66463.firebaseapp.com",
  projectId: "netflixai-66463",
  storageBucket: "netflixai-66463.firebasestorage.app",
  messagingSenderId: "1081170370774",
  appId: "1:1081170370774:web:9020ddb9fa2b47e3e9e977",
  measurementId: "G-FTG60XTTGK"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

