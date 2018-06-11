import * as React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../Style/HeaderStyle.css";

 class HeaderClass extends React.Component<any,any> {
    public renderLinks() {
        if(this.props.authenticaticated) {
            return (
                <div>
                    <Link to="/signout"> Sign Out </Link>
                    <Link to="/feature"> Feature </Link>
                </div>
            )
        } else {
            return (
                <div>
                    <Link to="/signup"> Signup </Link>
                    <Link to="/signin"> Signin </Link>
                </div>
            )
        };
    }
    public render() {
        return (
            <div className="header">
            <Link to="/">Redux Auth </Link>
            {this.renderLinks()}
            </div>
        );
    }
}
function mapStateToProps(state:any) {
    return { authenticaticated: state.authentication          }
  }

  export const Header = connect(mapStateToProps)(HeaderClass);
// Header is always Visible!!