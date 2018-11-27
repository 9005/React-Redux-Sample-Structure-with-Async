import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { submitFormData, clearNotificationMessage } from '../actions/PostFormData.actions';
import history from '../history';

class PostFormData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };
  }

  componentWillMount() {
    this.props.clearNotificationMessage();
  }

  onTitleChange = (event) => {
    this.setState({
      title: event.target.value
    });
  }

  onBodyChange = (event) => {
    this.setState({
      body: event.target.value
    });
  }

  submitForm = () => {
    const requestBody = {
      title: this.state.title,
      body: this.state.body
    };
    this.props.submitFormData(requestBody);
  }

  backToGetData = () => {
    history.push('/');
  }

  render() {
    return (
      <div>
        <h3>Add Form</h3>
        <div>
          <div>Title: </div>
          <div><input type="text" value={this.state.title} onChange={this.onTitleChange} /></div>
        </div>
        <div>
          <div>Body: </div>
          <div><input type="text" value={this.state.body} onChange={this.onBodyChange} /></div>
        </div>
        <button onClick={this.submitForm}>Submit</button>
        <div>{this.props.result}</div>
        <div onClick={this.backToGetData} style={{ cursor: 'pointer' }}>Go Back</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    result: state.postFormData.result
  };
}

const mapDispatchToProps = dispatch => bindActionCreators({
  submitFormData,
  clearNotificationMessage
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PostFormData);
