import firebase from "firebase";
import "firebase/storage";
import "firebase/auth";

import "firebase/firebase-storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: `${process.env.F_APIKEY}`,
  authDomain: `${process.env.F_AUTHDOM}`,
  projectId: `${process.env.F_PID}`,
  storageBucket: `${process.env.F_STORAGE}`,
  messagingSenderId: `${process.env.F_MESSAGE}`,
  appId: `${process.env.F_APPID}`
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
