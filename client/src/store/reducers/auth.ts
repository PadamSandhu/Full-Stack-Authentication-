import { handleAction  } from "redux-actions";
import { AUTH_ERROR,AUTH_USER} from "../actions/types";

// const authInitialState: IauthInitialState = {
//     authenticated: '',
//     errorMessage: ''
// }

export const authentication = handleAction<any,any>( AUTH_USER, ( state, action ) => typeof action.payload !== "undefined" ? state = action.payload: state , localStorage.getItem('token'));
export const authenticationError = handleAction<any,any>( AUTH_ERROR, ( state, action ) => typeof action.payload !== "undefined" ? state = action.payload : state , "");
