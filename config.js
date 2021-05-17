import firebase from "firebase"
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyCQxq-rqblcYwX0mmIG5eaXkeR0XJ4J6K0",
    authDomain: "wily-644c4.firebaseapp.com",
    projectId: "wily-644c4",
    storageBucket: "wily-644c4.appspot.com",
    messagingSenderId: "137911167594",
    appId: "1:137911167594:web:e0a7126dc2cbf4aa18b813",
    measurementId: "G-Y95MRLLBH4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()