import {IformProps} from "./index"
export interface ISignUpDispatchToProps {
    signup: (signup: IformProps) => ReduxActions.Action<IformProps>;
}