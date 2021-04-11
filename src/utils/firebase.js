import firebase from 'firebase'
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyB6rwjrGPLcM6PzqNOUiN2grVBAcvEvQz0",
    authDomain: "ru-ru-flash.firebaseapp.com",
    projectId: "ru-ru-flash",
    storageBucket: "ru-ru-flash.appspot.com",
    messagingSenderId: "330668843185",
    appId: "1:330668843185:web:cf4d4be34b4d5e1d584290",
    measurementId: "G-4RDC2RLB35"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

export default firebase;