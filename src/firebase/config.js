import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';



const firebaseConfig = {
    apiKey: "AIzaSyBvGxoRZYuRULESX-0jmy3fCaEZDuNkagg",
    authDomain: "skillfactory-react-cb07e.firebaseapp.com",
    projectId: "skillfactory-react-cb07e",
    storageBucket: "skillfactory-react-cb07e.appspot.com",
    messagingSenderId: "794523386073",
    appId: "1:794523386073:web:602737a243237994193ec8"
  };
  

const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
