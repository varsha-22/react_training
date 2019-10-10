/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginLayoutRoute from '../layouts/AuthLayout/AuthLayout';
import Login from '../pages/login/Login';


const AuthRoute = ()=> {
    return(
        <Router>
        <div>
        <Switch>
          <Route exact path="/" component={Login}>
          </Route>
          <LoginLayoutRoute path="/login" component={Login} />
        </Switch>
        </div>

      </Router>
    )
};

export default AuthRoute;