// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"; 

const firebaseConfig = {
    apiKey: "AIzaSyCsjuGflgusQ_TANATQogPw9EB_ucnK4OQ",
    authDomain: "challenge-f5bfa.firebaseapp.com",
    projectId: "challenge-f5bfa",
    storageBucket: "challenge-f5bfa.appspot.com",
    messagingSenderId: "375596059110",
    appId: "1:375596059110:web:402e3aad482ed27f086e27",
    measurementId: "G-JP11FQM16L"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};
