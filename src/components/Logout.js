import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clearSessionLogout } from '../actions/Logout.actions';

class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  logout = () => {
    this.props.clearSessionLogout();
  }

  render() {
    return (
      <div>
        <button onClick={this.logout}>Logout</button>
        The Logout Result is: {this.props.result}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    result: state.logout.resultOfLogout,
    resultOfLogin: state.login.result
  };
}

const mapDispatchToProps = dispatch => bindActionCreators({
  clearSessionLogout
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
