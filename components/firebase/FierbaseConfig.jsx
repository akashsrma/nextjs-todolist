// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArDDRa3mF9vmjr-8oz6ZeIW_gnJa4sDqo",
  authDomain: "new-todolist-acc00.firebaseapp.com",
  projectId: "new-todolist-acc00",
  storageBucket: "new-todolist-acc00.appspot.com",
  messagingSenderId: "576242325302",
  appId: "1:576242325302:web:c974c305e3d4b7b41a0597",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
