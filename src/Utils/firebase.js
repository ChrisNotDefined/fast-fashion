import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA9M3szyQWe0DliC9ZKSmn5_MxB22NiA3U",
  authDomain: "fash-fashion.firebaseapp.com",
  projectId: "fash-fashion",
  storageBucket: "fash-fashion.appspot.com",
  messagingSenderId: "324745889011",
  appId: "1:324745889011:web:1a880435abe862be016386"
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore()


export default db;
