import { initializeApp } from 'firebase/app';
import * as firebaseAuth from "firebase/auth";
import * as firestore from "firebase/firestore";
import * as storage from "firebase/storage";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
//   measurementId: process.env.REACT_APP_MEASUREMENT_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyDDJyeqSA4MEkbdGDoJkv6lMgjNDIgVPq0",
  authDomain: "olx-demo-94510.firebaseapp.com",
  projectId: "olx-demo-94510",
  storageBucket: "olx-demo-94510.appspot.com",
  messagingSenderId: "916588507435",
  appId: "1:916588507435:web:a4d874c0cba7787b57156e",
  measurementId: "G-L22JN8SJ69"
};

const app = initializeApp(firebaseConfig);
const db = firestore.getFirestore();

const firebaseExports = { app, db, firebaseAuth, firestore, storage };
export default firebaseExports;