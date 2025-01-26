// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHppJzWPH7YAZnNqOVDH-jvc9bspPBiEw",
  authDomain: "vue-udvikling.firebaseapp.com",
  databaseURL: "https://vue-udvikling-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "vue-udvikling",
  storageBucket: "vue-udvikling.firebasestorage.app",
  messagingSenderId: "722240348381",
  appId: "1:722240348381:web:c5c8524e17401c3dbdfb34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
