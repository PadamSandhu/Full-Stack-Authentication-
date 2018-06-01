import { handleAction  } from "redux-actions";
import { AUTH_ERROR,AUTH_USER} from "../actions/types";

// const authInitialState: IauthInitialState = {
//     authenticated: '',
//     errorMessage: ''
// }

export const authentication = handleAction<string,string>( AUTH_USER, ( state, action ) => typeof action.payload !== "undefined" ? state = action.payload: state , "");
export const authenticationError = handleAction<string,string>( AUTH_ERROR, ( state, action ) => typeof action.payload !== "undefined" ? state = action.payload : state , "");
