import firebase from "firebase/compat/app";

import "firebase/compat/analytics";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALrSCzymyDidxx7qCA7unRgIqh2k4J8Bo",
  authDomain: "chatapp-e33f8.firebaseapp.com",
  projectId: "chatapp-e33f8",
  storageBucket: "chatapp-e33f8.appspot.com",
  messagingSenderId: "157828147757",
  appId: "1:157828147757:web:939208115812997eebe6a4",
  measurementId: "G-RLTYHBGTRY",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const auth = firebase.auth();
const db = firebase.firestore();

export { db, auth };
export default firebase;
