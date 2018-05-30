import * as React from "react";
import { Header } from "./";

export const App: React.SFC<any> = ({ Welcome }) => {
    return (
        <div>
            <Header />
            { Welcome }
        </div>
    )
}