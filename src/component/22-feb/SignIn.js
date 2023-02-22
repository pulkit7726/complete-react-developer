import React from 'react';
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/Firebase/FirebasUtils';

const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
    }
  return (
    <div>
        <h1>SignIn</h1>
        <button onClick={logGoogleUser}>Sign In With Google Popup</button>
    </div>
  )
}
export default SignIn;
