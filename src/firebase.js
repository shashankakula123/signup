// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat";

  const firebaseApp=firebase.initializeApp({

   // For Firebase JS SDK v7.20.0 and later, measurementId is optional

    apiKey: "AIzaSyB_XNkZbDewWMPn-Wk54MM_Ei8b7z_fMIw",
    authDomain: "signup-355f0.firebaseapp.com",
    projectId: "signup-355f0",
    storageBucket: "signup-355f0.appspot.com",
    messagingSenderId: "81349237224",
    appId: "1:81349237224:web:6f5149cc954ae65e0eac5d",
    measurementId: "G-LWXKXER6EG"

  });

  const db=firebaseApp.firestore();


  export default db;