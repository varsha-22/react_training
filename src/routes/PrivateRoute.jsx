/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DashboardRoute from '../layouts/PrivateLayout/PrivateLayout';
import TextFieldDemo from '../pages/TextFieldDemo/TextFieldDemo';
import Trainee from '../pages/Trainee/Trainee';
import InputDemo from '../pages/Inputdemo/inputDemo';
import Math from '../components/Math/Math';
import NoMatch from '../pages/NoMatch/NoMatch';

const PrivateRoute = ()=> {
    return(
        <Router>
        <Route path='*' exact={true} component={NoMatch} />
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