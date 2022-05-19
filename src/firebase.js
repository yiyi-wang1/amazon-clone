// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCFwyeTSPIglJMqhn0Z4T79dAdOWgQIFgs",
    authDomain: "clone-89948.firebaseapp.com",
    projectId: "clone-89948",
    storageBucket: "clone-89948.appspot.com",
    messagingSenderId: "979969711239",
    appId: "1:979969711239:web:f101ad6f5189a5f86b6c22",
    measurementId: "G-GXF75Q7PW8"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };