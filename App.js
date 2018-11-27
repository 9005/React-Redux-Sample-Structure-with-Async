import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import GetFormData from './components/GetFormData';
import PostFormData from './components/PostFormData';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route strict exact path='/' component={GetFormData} />
          <Route strict exact path='/' component={PostFormData} />
        </Switch>
      </Router>
    );
  }
}

export default App;
