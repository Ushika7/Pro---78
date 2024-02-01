import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB_jOIV7YJmY1J41kad5jnAyaBpSughEkE",
    authDomain: "e-ride-app-a81c8.firebaseapp.com",
    projectId: "e-ride-app-a81c8",
    storageBucket: "e-ride-app-a81c8.appspot.com",
    messagingSenderId: "748868372479",
    appId: "1:748868372479:web:55b96a3fad9ea4eae509ca"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


