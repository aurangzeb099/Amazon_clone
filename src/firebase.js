// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCYHRjM__8QEejBf8psDOIHYn-8-8iOBMU",
  authDomain: "clone-a1ee6.firebaseapp.com",
  projectId: "clone-a1ee6",
  storageBucket: "clone-a1ee6.appspot.com",
  messagingSenderId: "399971355342",
  appId: "1:399971355342:web:7ae0da9f4319c44c485e9f",
  measurementId: "G-6NLB3CBLCR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
