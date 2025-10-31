//This page is to import firebase to JavaScript and the configuration - Laney
import{initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

//This file is to initialize the Firebase SDK and import the db
const firebaseConfig = {
    apiKey: 'AIzaSyBby9hnVikBNEMWlP4Mxqvnx42Ga2djNbs',
    authDomain: "nest-planner.firebaseapp.com",
    projectId: "nest-planner",
    storageBucket: "nest-planner.firebasestorage.app",
    messagingSenderId: "98058962015",
    appId: "1:98058962015:web:3fb7086d88d5485de8c7ea",
};

//Initializing Firebase
const app = initializeApp(firebaseConfig);

//Initialize Cloud Firestore
export const db = getFirestore(app);
