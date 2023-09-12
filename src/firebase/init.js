
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAE7bkBvgKSSoqbCkpM_J0wSq2xi1hHOsg",
  authDomain: "drey-e1cc4.firebaseapp.com",
  projectId: "drey-e1cc4",
  storageBucket: "drey-e1cc4.appspot.com",
  messagingSenderId: "483271123543",
  appId: "1:483271123543:web:cbe53026dad68d55cdb912"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();

export default db;