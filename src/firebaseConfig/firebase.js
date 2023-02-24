import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAAOJNdI3GtFLrBxKLeUQ2zafcv863zbm4",
  authDomain: "flychallenge-5ea08.firebaseapp.com",
  projectId: "flychallenge-5ea08",
  storageBucket: "flychallenge-5ea08.appspot.com",
  messagingSenderId: "752852360723",
  appId: "1:752852360723:web:68b62b2bb078a06644a9e6",
  measurementId: "G-XEMTV7Y5MB"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
