import firebase, { firestore } from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfA0rI9wN5pqdqGbTWgbGs_flHTG10yew",
  authDomain: "facebook-clone-132ae.firebaseapp.com",
  projectId: "facebook-clone-132ae",
  storageBucket: "facebook-clone-132ae.appspot.com",
  messagingSenderId: "73334259201",
  appId: "1:73334259201:web:24ee460fcc1f339661ca00",
  measurementId: "G-GGK2BX2833"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
