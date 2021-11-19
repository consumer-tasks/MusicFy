import firebase from "firebase";
import firebaseCloud from "firebase/firebase-firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCGm6JgryoNk6JRL5ZgKIioPcoh3HEzMJs",
  authDomain: "musicfy-533e5.firebaseapp.com",
  databaseURL: "https://musicfy-533e5.firebaseio.com",
  projectId: "musicfy-533e5",
  storageBucket: "musicfy-533e5.appspot.com",
  messagingSenderId: "54124704725",
  appId: "1:54124704725:web:2a6cb562b11d2cbe02835c",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase
