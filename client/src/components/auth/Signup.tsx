/* tslint:disable */
import * as React from 'react';
import { connect } from "react-redux";
import { bindActionCreators , compose } from "redux";
import {  Field , InjectedFormProps,  reduxForm } from 'redux-form';
import { IformProps  } from "../../models";
import { signup } from "../../store";

interface Props {
  signup?: any
  errorMessage?:string
  state?:any
  history?:any
}
 export class SignupComp extends React.Component<Props & InjectedFormProps<IformProps>> {
    
  public onSubmit = (formProps: IformProps) => {  
    this.props.signup(formProps, () => {        // Callback Function added to the Signup!
      this.props.history.push("/feature");
    });
  };

    public render() {
      const { handleSubmit } = this.props;   // Provided to us by redux-form
    return (
      <div>
        <form onSubmit={ handleSubmit(this.onSubmit) }>
            <fieldset>
              <label> Email </label>
                <Field 
                  name= "email"
                  type= "text"
                  component="input"
                  autoComplete= "none"
                />
            </fieldset>

            <fieldset>
              <label> Password </label>
                <Field 
                  name= "password"
                  type= "password"
                  component="input"
                  autoComplete= "none"
                />
            </fieldset>
            <div>
              {this.props.errorMessage}
            </div>
            <button>Sign up!</button>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state:any) {
  return { errorMessage: state.authenticationError,
           state
        }
}

function mapDispatchToProps(dispatch:any) {
  return bindActionCreators({ signup }, dispatch);
}

export const Signup = compose (      // Inside compose we can pass as many Higher order components which we want
  connect(mapStateToProps,mapDispatchToProps),     // First Higher order component which I want to apply to SignupComp
  reduxForm({ form: "signup" }) //  Second Higher order function being applied 
)(SignupComp)
