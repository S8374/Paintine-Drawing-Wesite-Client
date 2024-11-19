import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import {auth,  facebookProvider } from '../Firebase/firebase.config';

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user , setUser] = useState(null);

    const createUser = (email , password) => {
        return createUserWithEmailAndPassword(auth , email , password)
    }
const signIn = (email , password) => {
    return signInWithEmailAndPassword(auth , email , password)
}
const signInWithFacebook = () => {
    return signInWithPopup(auth, facebookProvider);
};

const logOut = () =>{
    return signOut(auth)
}
useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth , currentUser => {
        console.log('current User',currentUser) ;
          setUser(currentUser) 
    });
    return () =>{
        unSubscribe()
    }
},[])
    const authInfo = {
        createUser ,
        signIn ,
        user,
        logOut ,
        signInWithFacebook

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;