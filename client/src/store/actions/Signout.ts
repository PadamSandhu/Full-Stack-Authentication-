import {AUTH_USER} from "./types";

export const signout = () => {
    localStorage.removeItem('token');

    return {
        payload: '',
        type: AUTH_USER
    }
}