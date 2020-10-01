import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyCsqpbD047ic1MbV4LKsSixYpjagNslgZY",
    authDomain: "fir-withreact-8b7b4.firebaseapp.com",
    databaseURL: "https://fir-withreact-8b7b4.firebaseio.com",
    projectId: "fir-withreact-8b7b4",
    storageBucket: "fir-withreact-8b7b4.appspot.com",
    messagingSenderId: "698063374729",
    appId: "1:698063374729:web:6246cf58a37e66bbf7f958",
    measurementId: "G-GCJHRMHD5C"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: "select_account"});

  export const signInFn = () => auth.signInWithPopup(provider);

  export default firebase;