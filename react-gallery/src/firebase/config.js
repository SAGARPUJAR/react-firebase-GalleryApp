import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyD1owsdgRfG7DzTzxdUi1ihQpd-eoqCAD8",
  authDomain: "react-gram-e7316.firebaseapp.com",
  projectId: "react-gram-e7316",
  storageBucket: "react-gram-e7316.appspot.com",
  messagingSenderId: "445027659256",
  appId: "1:445027659256:web:a0b9e2dc2e0e50ed91fa0d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };