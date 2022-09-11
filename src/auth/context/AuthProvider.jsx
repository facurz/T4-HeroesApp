import React, { useReducer, useEffect } from 'react';

import { onAuthStateChanged } from 'firebase/auth';
import { FirebaseAuth } from '../../firebase/config';
import {
    signInWithGoogle,
    logoutFireBase,
    registerUserWithEmail,
    loginWithEmailPassword,
} from '../../firebase/providers';

import { types } from '../types/types';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';

const initialState = {
    status: 'checking',
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
};

export const AuthProvider = ({ children }) => {
    const [authState, dispatch] = useReducer(authReducer, initialState);

    //Login with google
    const startGoogleSignIn = async () => {
        dispatch({ type: types.checking });
        const result = await signInWithGoogle();
        if (!result.ok)
            return dispatch({
                type: types.logout,
                payload: result,
            });
        dispatch({
            type: types.login,
            payload: result,
        });
    };

    //Create user with Email
    const startCreatingUserWithEmail = async ({
        email,
        password,
        displayName,
    }) => {
        dispatch({ type: types.checking });
        const result = await registerUserWithEmail({
            email,
            password,
            displayName,
        });
        if (!result.ok)
            return dispatch({
                type: types.logout,
            });
        dispatch({
            type: types.login,
            payload: result,
        });
    };

    //Login with email and password
    const startLoginWithEmailPassword = async ({ email, password }) => {
        dispatch({ type: types.checking });
        const result = await loginWithEmailPassword({ email, password });
        if (!result.ok)
            return dispatch({
                type: types.logout,
            });
        dispatch({
            type: types.login,
            payload: result,
        });
    };

    //Logout
    const startLogout = async () => {
        await logoutFireBase();
        dispatch({ type: types.logout });
    };

    //Login refresh
    const checkAuthFireBase = () => {
        useEffect(() => {
            onAuthStateChanged(FirebaseAuth, async user => {
                if (!user)
                    return dispatch({
                        type: types.logout,
                    });
                const { uid, email, displayName, photoURL } = user;
                dispatch({
                    type: types.login,
                    payload: { uid, email, displayName, photoURL },
                });
            });
        }, []);
    };

    return (
        <AuthContext.Provider
            value={{
                ...authState,
                startGoogleSignIn,
                startLogout,
                startCreatingUserWithEmail,
                checkAuthFireBase,
                startLoginWithEmailPassword,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
