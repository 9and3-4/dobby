import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
  // apiKey: "AIzaSyDWafTwYWXTzSmzh6MSPcAGEwFu2KVoTM8",
  // authDomain: "kh-mini-prj.firebaseapp.com",
  // projectId: "kh-mini-prj",
  // storageBucket: "kh-mini-prj.appspot.com",
  // messagingSenderId: "455146598270",
  // appId: "1:455146598270:web:999aa729544a93dfa2cd2f",
  // measurementId: "G-TGP14ZMSFZ",

  apiKey: "AIzaSyDbp_3b8NBUnpG18ehjiOmt9neNDPcqL9w",
  authDomain: "mini-project-1f72d.firebaseapp.com",
  projectId: "mini-project-1f72d",
  storageBucket: "mini-project-1f72d.appspot.com",
  messagingSenderId: "679951451679",
  appId: "1:679951451679:web:ebf34805bc75d9832b772a",
  measurementId: "G-9T0JZ2FLZV",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();
