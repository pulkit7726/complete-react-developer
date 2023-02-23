import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCjHbqlc0g-PgMheqWU8fkzr8xL88mLkiM",
    authDomain: "crwn-clothing-db-440e7.firebaseapp.com",
    projectId: "crwn-clothing-db-440e7",
    storageBucket: "crwn-clothing-db-440e7.appspot.com",
    messagingSenderId: "359486628481",
    appId: "1:359486628481:web:15fa752dbc71ee53f8a380",
    measurementId: "G-PSRVS7QM91"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  
  const googleProvider = new GoogleAuthProvider();

  googleProvider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);


  export const db = getFirestore();
  
  export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    if(!userAuth) return;
    const userDocRef = doc(db, 'user', userAuth.uid)
    // console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef);
    // console.log(userSnapshot.exists());

    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userDocRef;

  };

  export const createAuthUserWithEmalAndPassword = async (email, passsword) => {
    if(!email || !passsword) return;
    
    return await createUserWithEmailAndPassword(auth, email, passsword)
  }