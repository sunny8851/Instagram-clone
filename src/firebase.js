import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyCbUq_RBxg7ZVo8hEgS9TVSXV6Y6GXRjUI",
  authDomain: "instagram-clone-7b47c.firebaseapp.com",
  projectId: "instagram-clone-7b47c",
  storageBucket: "instagram-clone-7b47c.appspot.com",
  messagingSenderId: "459278395213",
  appId: "1:459278395213:web:a19baa0a8f3d25ef56b904",
  measurementId: "G-0TBZ393QD1"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
