import React, { createContext, useEffect, useState } from 'react';
import {
    GoogleAuthProvider,
    getAuth,
    signInWithEmailAndPassword,
    signInWithPopup,
    onAuthStateChanged,
} from 'firebase/auth'
import {
    getFirestore,
} from 'firebase/firestore';
export const AuthContext = createContext();
const provider = new GoogleAuthProvider();
export const AuthProvider = ({ children }) => {
    const auth = getAuth();
    const firestore = getFirestore();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState({});
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState(null);
    const checkUserAuthentication = () => {
        const loggedInStatus = localStorage.getItem('isLoggedIn');
        setIsLoggedIn(loggedInStatus === 'true');

        if (loggedInStatus === 'true') {
            const userDataFromLocalStorage = JSON.parse(localStorage.getItem('user') || {});
            setUser(userDataFromLocalStorage);
        }

        const unsubscribe = onAuthStateChanged(auth, (authUser) => {
            if (authUser) {
                setUser(authUser);
            } else {
                setUser(null);
            }
        });

        return unsubscribe;
    };

    useEffect(() => {
        const unsubscribe = checkUserAuthentication();
        return () => unsubscribe();
    }, []);

    const login = async (userData) => {
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('user', JSON.stringify(userData));
    };

    const logout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('user');
    };

    const loginWithGoogle = async () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log(error)
            });
    };

    const loginWithEmailAndPassword = async (email, password) => {
        try {
            if (!email || !password) return;
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            setUser(userCredential.user);
            login(userCredential.user);
            window.location.href = '/'
        } catch (error) {
            console.error('Erro Firebase:', error);
        }
    };
    return (
        <AuthContext.Provider
            value={{
                isLoggedIn,
                login,
                logout,
                loginWithGoogle,
                loginWithEmailAndPassword,
                user,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
