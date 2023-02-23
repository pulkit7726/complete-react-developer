// import {useEffect} from 'react';
// import { getRedirectResult } from 'firebase/auth';
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/Firebase/FirebasUtils';
import SignUp from './SignUp/SignUp';

const SignIn = () => {

  // useEffect(async () => {
  //   const response = await getRedirectResult(auth);
  //  // console.log("response", response) 
  //   if(response) {
  //     const userDocRef = await createUserDocumentFromAuth(response.user) 
  //   }
  // }, []);

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
    }
    
  return (
    <div>
        <h1>SignIn</h1>
        <button onClick={logGoogleUser}>Sign In With Google Popup</button>
        <SignUp />
    </div>
  )
}
export default SignIn;
