 import firebase from "firebase/app";

 import 'firebase/auth'

 const config = {
    apiKey: "AIzaSyBVelTHMDMgFeiJtBeZZYL44CJW6ckAVYI",
    authDomain: "crown-db-90223.firebaseapp.com",
    projectId: "crown-db-90223",
    storageBucket: "crown-db-90223.appspot.com",
    messagingSenderId: "470321157634",
    appId: "1:470321157634:web:66154be7074887ff40b91b"
  };
  firebase.initializeApp(config) 

export const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promt: 'select_account'})

export const signInWithGoogle = ()=> auth.signInWithPopup(provider)

export default firebase
