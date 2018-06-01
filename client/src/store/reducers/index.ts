import { combineReducers } from "redux";
import { reducer  as formReducer} from "redux-form";
import { authentication , authenticationError } from "./auth";

export const rootReducer = combineReducers({
    authentication,
    authenticationError,
    form: formReducer
});