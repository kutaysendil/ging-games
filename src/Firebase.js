import firebase from "firebase";
import "firebase/storage";
import "firebase/auth";

import "firebase/firebase-storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDzUWXbBdVJXC39r3cIIWVeNWQGusLmAFg",
  authDomain: "ging-games.firebaseapp.com",
  projectId: "ging-games",
  storageBucket: "ging-games.appspot.com",
  messagingSenderId: "922135840219",
  appId: "1:922135840219:web:2279916c9c745bdf0c93fe"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const imgStorage = firebaseApp.storage();

//Giriş için
const auth = firebase.auth();
//tarih
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;
//const provider = new firebase.auth.GoogleAuthProvider();

export default db;

export { auth, imgStorage, timeStamp };
