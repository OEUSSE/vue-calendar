import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDK13xFAU_6dtUO7wfyTeELffY0w3cmPFY",
    authDomain: "vue-calendario-49679.firebaseapp.com",
    databaseURL: "https://vue-calendario-49679.firebaseio.com",
    projectId: "vue-calendario-49679",
    storageBucket: "vue-calendario-49679.appspot.com",
    messagingSenderId: "389328274114",
    appId: "1:389328274114:web:ddd3f4ba107c8fbc8a315b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore()