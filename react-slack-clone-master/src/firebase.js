import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
var firebaseConfig = {
  apiKey: "AIzaSyBopGRTgMy242w85XMwo8OWBqcVMpJiGb8",
  authDomain: "react-slack-clone-75044.firebaseapp.com",
  projectId: "react-slack-clone-75044",
  storageBucket: "react-slack-clone-75044.appspot.com",
  messagingSenderId: "509431643584",
  appId: "1:509431643584:web:b4b12eb23635888c755c25",
  measurementId: "G-CQK27WEYN4"
};


firebase.initializeApp(firebaseConfig);

  export default firebase;
