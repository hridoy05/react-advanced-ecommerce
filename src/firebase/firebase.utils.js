import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";
const config = {
  apiKey: "AIzaSyBVelTHMDMgFeiJtBeZZYL44CJW6ckAVYI",
  authDomain: "crown-db-90223.firebaseapp.com",
  projectId: "crown-db-90223",
  storageBucket: "crown-db-90223.appspot.com",
  messagingSenderId: "470321157634",
  appId: "1:470321157634:web:66154be7074887ff40b91b",
}

 export const createUserProfileDocument = async (userAuth, additionalData) => {
     if(!userAuth) return ;
     const userRef= firestore.doc(`users/${userAuth.uid}`)
     const snapShot = await userRef.get()

    if(!snapShot.exists){
        const {displayName, email} = userAuth
        const createDate = new Date()

        try{
            await userRef.set({
                displayName,email,createDate,...additionalData
            })
        }
        catch(error){
            console.log('error creating user', error.message);
        }
    }
    return userRef
 }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore()
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
