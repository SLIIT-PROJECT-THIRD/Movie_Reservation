/*
    Created by - Isuru Pathum Herath
    Name - Firebase Storage
 */

import firebase from 'firebase/app';
import 'firebase/storage';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBFJQoM1Hm9ALeBD2YopOU_spAWRdxA5zo",
    authDomain: "qcenter-image.firebaseapp.com",
    databaseURL: "https://qcenter-image-default-rtdb.firebaseio.com",
    projectId: "qcenter-image",
    storageBucket: "qcenter-image.appspot.com",
    messagingSenderId: "1042759765198",
    appId: "1:1042759765198:web:d5f1b30a6b3c454f8ed49f"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export default firebase;