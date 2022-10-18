import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDr6k5DTuG4CtJ67tpj3nXgv8eGwPrZdQo",
    authDomain: "project-70-14b8a.firebaseapp.com",
    projectId: "project-70-14b8a",
    storageBucket: "project-70-14b8a.appspot.com",
    messagingSenderId: "277511450708",
    appId: "1:277511450708:web:347f058d843863d894bdc1"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
