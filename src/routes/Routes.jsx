import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
//import Login from "../pages/login/Login";
import Trainee from "../pages/Trainee/Trainee";
import TextFieldDemo from "../pages/TextFieldDemo/TextFieldDemo";
import InputDemo from "../pages/Inputdemo/inputDemo";
import Math from "../components/Math/Math";
import NoMatch from "../pages/NoMatch/NoMatch";
import LoginLoader from '../pages/LoginLoader';

const Routes = (props) => {
  return (
    <Router>
        <Switch>
          <PrivateRoute path="/trainee" component={Trainee} />
          <PrivateRoute path="/textFieldDemo" component={TextFieldDemo} />
          <PrivateRoute path="/trainee" onEnter={props.loggedIn} component={Trainee} />
          <PrivateRoute path="/inputDemo" component={InputDemo} />
          <PrivateRoute path="/math" component={Math} />
          <PublicRoute path="/" component={LoginLoader} />
          <PublicRoute path="/login" component={LoginLoader} />
          <Route path="*" exact={true} component={NoMatch} />
        </Switch>
    </Router>
  );
};

export default Routes;
