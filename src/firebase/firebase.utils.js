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

firebase.initializeApp(config);

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

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey)
    const batch = firestore.batch()

    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc()
        batch.set(newDocRef, obj)
    })
      return await batch.commit()
}
export const convertCollectionsSnapshotToMap = collections => {
    const transformedCollection = collections.docs.map(doc => {
      const { title, items } = doc.data();
  
      return {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items
      };
    });
  
    return transformedCollection.reduce((accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
    }, {});
  };

export const auth = firebase.auth();
export const firestore = firebase.firestore()
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
