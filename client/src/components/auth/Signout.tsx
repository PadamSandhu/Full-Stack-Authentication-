import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signout } from "../../store";

interface IProps {
    signout?: any
  }

class SignoutClass extends React.Component<IProps,any> {
    public componentDidMount() {
        this.props.signout()
    }

    public render() {
        return <div>
                Have a Nice day !! 
            </div>
    }
}
function mapDispatchToProps(dispatch:any) {
    return bindActionCreators({ signout }, dispatch);
  }

export const Signout = connect(null, mapDispatchToProps)(SignoutClass);