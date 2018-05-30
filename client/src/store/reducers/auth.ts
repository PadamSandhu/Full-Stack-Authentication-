import { handleAction } from "redux-actions";
import { IauthInitialState } from "../../models";

const authInitialState: IauthInitialState = {
    authenticated: '',
    errorMessage: ''
}

export const authentication = handleAction<IauthInitialState,{}>( "Authentication_Call_Data", ( state, action ) => typeof action.payload !== "undefined" ? state : state , authInitialState);
