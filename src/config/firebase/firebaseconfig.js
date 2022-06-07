import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBOPZgVrhtsjkskeVvA8KkV3Ld4shSs7xI",
    authDomain: "fir-auth-1f876.firebaseapp.com",
    databaseURL: "https://fir-auth-1f876-default-rtdb.firebaseio.com",
    projectId: "fir-auth-1f876",
    storageBucket: "fir-auth-1f876.appspot.com",
    messagingSenderId: "1081179417856",
    appId: "1:1081179417856:web:d53d973ae4e58cb10097e5",
    measurementId: "G-YX6M04X6LD"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
