import { types } from '../types/types';

export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            return {
                status: 'authenticated',
                uid: action.payload.uid,
                email: action.payload.email,
                displayName: action.payload.displayName,
                photoURL: action.payload.photoURL,
                errorMessage: null,
            };
        case types.logout:
            return {
                status: 'not-authenticated',
                uid: null,
                email: null,
                displayName: null,
                photoURL: null,
                errorMessage: action.payload?.errorMessage,
            };
        case types.checking:
            return {
                status: 'checking',
            };

        default:
            return state;
    }
};
