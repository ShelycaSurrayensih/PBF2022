import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    // Your config values
    apiKey: "AIzaSyClKMSKbgCcf58jfg045tb2cv29ehl36fQ",
    authDomain: "fir-login-shelyca.firebaseapp.com",
    projectId: "fir-login-shelyca",
    storageBucket: "fir-login-shelyca.appspot.com",
    messagingSenderId: "966934968015",
    appId: "1:966934968015:web:b7b98675ecdf6f31cba9ba",
    measurementId: "G-HQPMKNGLMR"
  };

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;