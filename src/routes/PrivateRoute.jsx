/* eslint-disable react/jsx-no-undef */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import DashboardRoute from '../layouts/PrivateLayout/PrivateLayout';
import TextFieldDemo from '../pages/TextFieldDemo/TextFieldDemo';
import Trainee from '../pages/Trainee/Trainee';
import InputDemo from '../pages/Inputdemo/inputDemo';
import Math from '../components/Math/Math';

const PrivateRoute = ()=> {
    return(
        <Router>
        <div>
        <Switch>
          <DashboardRoute path="/textFieldDemo" component={TextFieldDemo} />
          <DashboardRoute path="/trainee" component={Trainee} />
          <DashboardRoute path="/inputDemo" component={InputDemo} />
          <DashboardRoute path="/math" component={Math} />
        </Switch>
        </div>

      </Router>
    )
}

export default PrivateRoute;