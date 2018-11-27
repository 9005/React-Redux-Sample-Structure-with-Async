import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import GetFormData from './components/GetFormData';
import PostFormData from './components/PostFormData';
import history from './history';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route strict exact path='/' component={GetFormData} />
          <Route strict exact path='/addForm' component={PostFormData} />
        </Switch>
      </Router>
    );
  }
}

export default App;
