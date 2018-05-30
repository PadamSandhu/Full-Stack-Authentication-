import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import { App, Welcome } from "./components";

ReactDOM.render(
    <BrowserRouter>
        <App>
            <Route path="/" exact component={ Welcome } />
        </App>
    </BrowserRouter>
    ,
    document.querySelector("#root")
);