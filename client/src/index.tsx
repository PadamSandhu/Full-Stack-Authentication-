/* tslint:disable */
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore , applyMiddleware } from "redux";
import { BrowserRouter, Route } from "react-router-dom";
import  Reduxthunk from "redux-thunk";

import { App, Welcome , Signup ,Signin, Feature , Signout } from "./components";
import {rootReducer} from "./store/reducers";

const store = createStore(
              rootReducer,
              {},   // Default store
              applyMiddleware(Reduxthunk) // middleware
            );
ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
        <App>
            <Route path="/" exact component={ Welcome } />
            <Route path="/signup" component={ Signup }/>
            <Route path="/signin" component={ Signin }/>
            <Route path="/feature" component={ Feature }/>
            <Route path="/signout" component={ Signout }/>
            
        </App>
    </BrowserRouter>
    </Provider>
    ,
    document.querySelector("#root")
);