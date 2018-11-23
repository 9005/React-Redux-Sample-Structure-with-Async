import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { authenticateUserDetails } from '../actions/Login.actions';
import Logout from './Logout';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  updateA = () => {
    this.props.authenticateUserDetails();
  }

  render() {
    return (
      <div>
        <button onClick={this.updateA}>Update A</button>
        The Result of update A is : {this.props.resultA}
        <Logout />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    resultA: state.login.result
  };
}

const mapDispatchToProps = dispatch => bindActionCreators({
  authenticateUserDetails
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
