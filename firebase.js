import firebase from "firebase";

const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp({
      apiKey: "AIzaSyBeOHqXLvAoSU8ppft0_QvBiw9h1hpXf0M",
      authDomain: "etudedecasproject.firebaseapp.com",
      projectId: "etudedecasproject",
      storageBucket: "etudedecasproject.appspot.com",
      messagingSenderId: "810879639218",
      appId: "1:810879639218:web:a4da3e6869f3ecc79673ab",
    })
  : firebase.app();

const db = firebaseApp.firestore();

export default db;
