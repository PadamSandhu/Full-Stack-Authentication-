import * as React from 'react';
import { connect } from 'react-redux';

interface IProps {
    auth: any;
    history:any;
}

export default (ChildComponent:any) => {     // Interface <Props, state> 
  class ComposedComponent extends React.Component<IProps,{}> {
    // Our component just got rendered
    public componentDidMount() {
      this.shouldNavigateAway();
    }
    // Our component just got updated
    public componentDidUpdate() {
      this.shouldNavigateAway();
    }
    public shouldNavigateAway() {
      if (!this.props.auth) {
        this.props.history.push('/');
      }
    }
    public render() {
      return <ChildComponent {...this.props} />;
    }
  }
  function mapStateToProps(state:any) {
    return { auth: state.auth };
  }
  return connect(mapStateToProps)(ComposedComponent);
};
