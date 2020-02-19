import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD3mH_Lz30oISWKnMdn5UstMsrPu_YUIS0",
    authDomain: "crown-shop-db-a082c.firebaseapp.com",
    databaseURL: "https://crown-shop-db-a082c.firebaseio.com",
    projectId: "crown-shop-db-a082c",
    storageBucket: "crown-shop-db-a082c.appspot.com",
    messagingSenderId: "1075004839474",
    appId: "1:1075004839474:web:e96b79c0c07747a5b04e2b",
    measurementId: "G-G5PY127BF6"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;