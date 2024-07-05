import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCbXiU_gxMD9dKZfq2TIkYWVa7I-yCVYcY",
  authDomain: "civil-hash-339508.firebaseapp.com",
  projectId: "civil-hash-339508",
  storageBucket: "civil-hash-339508.appspot.com",
  messagingSenderId: "203126898675",
  appId: "1:203126898675:web:eaab4d56cc86fb6bb65c86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);