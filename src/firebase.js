// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZrVyf7u7SZ1fd0MS9P0MOV-RLEwQyxE4",
  authDomain: "todo-872f6.firebaseapp.com",
  projectId: "todo-872f6",
  storageBucket: "todo-872f6.appspot.com",
  messagingSenderId: "574415247027",
  appId: "1:574415247027:web:8b64e991aa3235cb5382c6",
  databaseURL: "https://todo-872f6-default-rtdb.asia-southeast1.firebasedatabase.app",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);