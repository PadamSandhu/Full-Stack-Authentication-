import axios from "axios";
import { IformProps } from "../../models";
import {AUTH_ERROR,AUTH_USER} from "./types";

export const signup = (formProps:IformProps, callback:()=> void ) => async (dispatch:any) => { // This callback function only gets called when user is signed in !!
try {
   const response = await axios.post("http://localhost:3090/signup" , formProps );
   dispatch({type:AUTH_USER, payload: response.data.token});
   // Stores Token 
   localStorage.setItem('token', response.data.token)
   callback();
    } catch (e) {
        dispatch({type:AUTH_ERROR, payload: "Email-In USe"});
    }
};