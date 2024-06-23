// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const Config = {
  apiKey: "AIzaSyDJiGPMCXDdmV4InQvPxPgaSizWBXc_L6c",
  authDomain: "my-ecom-crown.firebaseapp.com",
  databaseURL: "https://my-ecom-crown-default-rtdb.firebaseio.com",
  projectId: "my-ecom-crown",
  storageBucket: "my-ecom-crown.appspot.com",
  messagingSenderId: "401442729925",
  appId: "1:401442729925:web:d330e9c143dfc6005525ac",
  measurementId: "G-03PCL6W3KB"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapshot = await userRef.get();
      console.log(snapshot)
    if (!snapshot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.error("Error creating user", error.message);
      }
    }

    return userRef;
  
};
firebase.initializeApp(Config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
// Initialize Firebase
// 


// Initialize Firebase if not already initialized

  

  firebase.app(); // if already initialized, use that one









export default firebase;
