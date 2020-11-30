 import firebase from "firebase/app";
 import "firebase/storage";
 import "firebase/firestore";
 
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyC1KWQn4nn3P11mvDldZ9_CXbIE7tvznpE",
    authDomain: "photo-gallery-cdcee.firebaseapp.com",
    databaseURL: "https://photo-gallery-cdcee.firebaseio.com",
    projectId: "photo-gallery-cdcee",
    storageBucket: "photo-gallery-cdcee.appspot.com",
    messagingSenderId: "620817450126",
    appId: "1:620817450126:web:c735bea5e5a5cdddeff5df"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const projectStorage = firebase.storage();
  export const projectFirestore = firebase.firestore();
  export const timestamp = firebase.firestore.FieldValue.serverTimestamp;