import axios from "axios";
import { IformProps } from "../../models";

export const signup = (formProps:IformProps) => (dispatch:any) => {
    axios.post("http://localhost:3090/signup" , formProps );
};