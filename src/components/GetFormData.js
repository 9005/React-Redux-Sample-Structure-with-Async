import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFormDetails } from '../actions/GetFormData.actions';
import history from '../history';

class GetFormData extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentWillMount() {
    this.props.getFormDetails();
  }

  addForm = () => {
    history.push('/addForm')
  }

  renderFormDetails = () => {
    if (this.props.formData !== undefined && this.props.formData.length > 0) {
      const formDataArray = this.props.formData;
      return formDataArray.map((item, index) => (
        <div>
          <div key={index}>
            UserId: {item.userId}<br />
            id: {item.id}<br />
            title: {item.title}<br />
            body: {item.body}<br />
          </div><br /></div>
      ));
    }
    return (<div />);
  }

  render() {
    return (
      <div style={{ display: 'flex', width: '100%' }}>
        <div style={{ width: '50%' }}>{this.renderFormDetails()}</div>
        <button style={{ width: '20%', marginTop: '5rem', height: '0%' }} onClick={this.addForm}>Add Form Data</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    formData: state.getFormData.result
  };
}

const mapDispatchToProps = dispatch => bindActionCreators({
  getFormDetails
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(GetFormData);
