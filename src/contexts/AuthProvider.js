import React, { createContext, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.config';
import { useEffect } from 'react';

export const AuthContext =createContext();
const auth =getAuth(app)

const AuthProvider = ({children}) => {  
    const [user, setUser]=useState(null)
    const [loading, setLoading]=useState(true)


    const signIn =(email, password)=>{
        setLoading(true)    
        return signInWithEmailAndPassword(auth, email,password)
    }

    const createUser =(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email,password)
    }
     const updateUser =(userInfo) =>{
           return updateProfile(auth.currentUser,userInfo)
     }
   useEffect( ()=>{
   const unsubsCribe= onAuthStateChanged(auth,currentUser=>{
        console.log('currentuser', setLoading(true))
        setUser(currentUser)
        setLoading(false)
   
     })
     return ()=>{
        unsubsCribe()
     }
   })
    
   const logOut=() =>{
    setLoading(true)
     return signOut(auth)
   }
    const authInfo ={
     createUser,
     signIn,
     user,
     setUser,
      logOut,
     updateUser,
     loading

     }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;