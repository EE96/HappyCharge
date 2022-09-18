import { initializeApp } from 'firebase/app'
import {
    // GoogleAuthProvider,
    getAuth,
    signInWithEmailAndPassword,
    // sendPasswordResetEmail,
    signOut,
    createUserWithEmailAndPassword
} from "firebase/auth";

import firebaseConfig from '../json/firebaseConfig.json'

const app = initializeApp(firebaseConfig);
export const authFrontend = getAuth(app);


export const logInWithEmailAndPassword = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(authFrontend, email, password);
    } catch (err: any) {
      console.error(err);
      alert(err.message);
    }
  };

//   export const sendPasswordReset = async (email: string) => {
//     try {
//       await sendPasswordResetEmail(auth, email);
//       alert("Password reset link sent!");
//     } catch (err: any) {
//       console.error(err);
//       alert(err.message);
//     }
//   };

  export const logout = () => {
    signOut(authFrontend);
  };

  export const firebaseSignUp = async (email: string, password: string) => {
    return await createUserWithEmailAndPassword(authFrontend, email, password)
  }

  // export const


  