import * as React from "react";
import { Link } from "react-router-dom";

export class Header extends React.Component {
    public render() {
        return (
            <div>
            <Link to="/">Redux Auth </Link>
            <Link to="/signup"> Signup </Link>
            <Link to="/signin"> Signin </Link>
            <Link to="/signout"> Sign Out </Link>
            <Link to="/feature"> Feature </Link>
            </div>
        );
    }
}
// Header is always Visible!!