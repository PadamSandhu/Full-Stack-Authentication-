import { combineReducers } from "redux";
import { reducer  as formReducer} from "redux-form";
import { authentication } from "./auth";

export const rootReducer = combineReducers({
    authentication,
    form: formReducer
});