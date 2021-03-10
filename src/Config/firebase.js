import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyALjxUs5ALk-83pvLWKtrg8IDcmIGSEky4",
    authDomain: "movie-app-90fc5.firebaseapp.com",
    projectId: "movie-app-90fc5",
    storageBucket: "movie-app-90fc5.appspot.com",
    messagingSenderId: "978665437233",
    appId: "1:978665437233:web:11d1b483742969c6cefd10"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  firebase.auth = firebase.auth();
  firebase.db = db;
  
  export default firebase;