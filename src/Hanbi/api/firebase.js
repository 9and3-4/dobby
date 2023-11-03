import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBNpbHHzBSKmNGEpsl5UJ4mLtyhXEyCofI",
  authDomain: "kh-mini-project-aff39.firebaseapp.com",
  projectId: "kh-mini-project-aff39",
  storageBucket: "kh-mini-project-aff39.appspot.com",
  messagingSenderId: "445178285463",
  appId: "1:445178285463:web:83974d5e5283edc87ec8d2",
  measurementId: "G-EVT200KBT2",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();
