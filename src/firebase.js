import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCXZ4C-4DOXacKrygwgDOEqOc6WyLtKWvw",
  authDomain: "clone-6c8a9.firebaseapp.com",
  projectId: "clone-6c8a9",
  storageBucket: "clone-6c8a9.appspot.com",
  messagingSenderId: "1089746281798",
  appId: "1:1089746281798:web:c742aceb965694217d7147",
});
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
