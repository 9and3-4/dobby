import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDWafTwYWXTzSmzh6MSPcAGEwFu2KVoTM8",
  authDomain: "kh-mini-prj.firebaseapp.com",
  projectId: "kh-mini-prj",
  storageBucket: "kh-mini-prj.appspot.com",
  messagingSenderId: "455146598270",
  appId: "1:455146598270:web:999aa729544a93dfa2cd2f",
  measurementId: "G-TGP14ZMSFZ",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();
