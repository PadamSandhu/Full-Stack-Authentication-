import axios from "axios";
import { IformProps } from "../../models";
import {AUTH_ERROR,AUTH_USER} from "./types";

export const signup = (formProps:IformProps) => async (dispatch:any) => {
try {
   const response = await axios.post("http://localhost:3090/signup" , formProps );
   dispatch({type:AUTH_USER, payload: response.data.token});
    } catch (e) {
        dispatch({type:AUTH_ERROR, payload: "Email-In USe"});
    }
};