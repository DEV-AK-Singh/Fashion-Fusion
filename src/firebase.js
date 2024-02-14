import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA34sQ5TrWE3V1rOAHWzXrER3WtB0oB1cc",
  authDomain: "major-project-myntra-clone.firebaseapp.com",
  projectId: "major-project-myntra-clone",
  storageBucket: "major-project-myntra-clone.appspot.com",
  messagingSenderId: "539005274367",
  appId: "1:539005274367:web:d79440f372c4b9d147e4ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);