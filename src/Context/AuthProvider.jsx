import React, { useEffect, useState } from 'react';
import { AuthConText } from './AuthContext/AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut,reload, } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const AuthProvider = ({children}) => {
    const[user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword (auth , email, password );
    };
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword (auth, email, password);
    };


    const signOutUser = () => {
        setLoading(true)
        return signOut(auth);
    }; 
   


   const refreshUser = () => {
  return reload(auth.currentUser);
};


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
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
        signOutUser,
        refreshUser,
    }
    return (
        <AuthConText value={AuthInfo}>
            {children}
        </AuthConText>
    );
};

export default AuthProvider;