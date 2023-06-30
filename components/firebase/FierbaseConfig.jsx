// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClqbXTNFgc_u6xvPY2jtRQV3sWNUkeP3E",
  authDomain: "fir-to-do-list-a9d2d.firebaseapp.com",
  projectId: "fir-to-do-list-a9d2d",
  storageBucket: "fir-to-do-list-a9d2d.appspot.com",
  messagingSenderId: "375997726375",
  appId: "1:375997726375:web:4d4a7e48d8a1a645782582",
  measurementId: "G-N75PBT1RMG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
