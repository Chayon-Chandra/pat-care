import React, { useEffect, useState } from 'react';
import { AuthConText } from './AuthContext/AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const[user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword (auth , email, password );
    };
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword (auth, email, password);
    };

    const signInGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }; 


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
               if(!currentUser?.emailVerified){
            
            return
          }
            setUser(currentUser)
            setLoading(false)
        })
        return () =>{
            unsubscribe();
        }
    },[])

    const AuthInfo ={
        user,
        loading,
        setLoading,
        setUser,
        createUser,
        signIn,
        signInGoogle,
        signOutUser,

    }
    return (
        <AuthConText value={AuthInfo}>
            {children}
        </AuthConText>
    );
};

export default AuthProvider;