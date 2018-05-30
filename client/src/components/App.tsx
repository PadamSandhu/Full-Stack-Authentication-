import * as React from "react";
import { Header } from "./";

export const App: React.SFC<any> = ({ children }) => {
    return (
        <div>
            <Header />
            { children }
        </div>
    )
}