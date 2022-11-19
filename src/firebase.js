// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyATfoh5TaqGSSGHUfsLaNSHeBN3rIL2yyY",
  authDomain: "react-redux-firebase-a3b41.firebaseapp.com",
  projectId: "react-redux-firebase-a3b41",
  storageBucket: "react-redux-firebase-a3b41.appspot.com",
  messagingSenderId: "219892220994",
  appId: "1:219892220994:web:a203e016d5e99304c5d9db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log("Database App",app)
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db };
