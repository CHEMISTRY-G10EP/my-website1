import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD9elH3Cv7FpC40ufJVL0-z8ZaezhRYEeo",
  authDomain: "test-portal-77f72.firebaseapp.com",
  projectId: "test-portal-77f72",
  storageBucket: "test-portal-77f72.firebasestorage.app",
  messagingSenderId: "983023544537",
  appId: "1:983023544537:web:66d6ec6c6e2260a4c976c8",
  measurementId: "G-QW3ZVV4CF6"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);