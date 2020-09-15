import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Login from './components/Login'
import Main from './components/Main'

const routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/main">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}

export default routes;
