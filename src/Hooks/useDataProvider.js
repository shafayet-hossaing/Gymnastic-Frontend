import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from 'react';
import { useHistory } from "react-router";
import initializeAuthentication from '../Firebase/Firebase.init';

// Initializing Authentication
initializeAuthentication()
const auth = getAuth()

const useDataProvider = () => {
    const [gymData, setGymData] = useState([])
    const [user, setUser] = useState({})
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    const history = useHistory()

    // Data fetching
    useEffect(()=>{
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setGymData(data))
    },[])


    // Creating User
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }




    // Login with pass and email
    const loginPass = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
        
    }



    // Update User Name
    const updateUserName = name => {
        updateProfile(auth.currentUser, {
            displayName: name
        })
    }





    // Google Signing
    const googleLogin = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleProvider)
        
    }



    // Observer
    useEffect(()=>{
        const unSubscribed = onAuthStateChanged(auth, user => {
            if(user){
                setUser(user)
            }else{
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unSubscribed
    },[])



    // Log Out
    const logOut = () => {
        signOut(auth).then(()=>{}).finally(()=>{setIsLoading(false)})
    }

    
    return {gymData, googleLogin, updateUserName, user, error, setError, setUser, logOut, isLoading, setIsLoading, loginPass, createUser};
};

export default useDataProvider;