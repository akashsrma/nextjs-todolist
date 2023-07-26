// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOSA7f7IUntOZ-XyWoE2k_713Y21YzRY4",
  authDomain: "new-todolist-4a8ad.firebaseapp.com",
  projectId: "new-todolist-4a8ad",
  storageBucket: "new-todolist-4a8ad.appspot.com",
  messagingSenderId: "286209834291",
  appId: "1:286209834291:web:7ee3d6d79df0463865d246",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
