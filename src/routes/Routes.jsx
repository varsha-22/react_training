import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Login from "../pages/login/Login";
import Trainee from "../pages/Trainee/Trainee";
import TextFieldDemo from "../pages/TextFieldDemo/TextFieldDemo";
import InputDemo from "../pages/Inputdemo/inputDemo";
import Math from "../components/Math/Math";
import NoMatch from "../pages/NoMatch/NoMatch";

const Routes = () => {
  return (
    <Router>
      <div>
        <Switch>
          <PrivateRoute path="/trainee" component={Trainee} />
          <PrivateRoute path="/textFieldDemo" component={TextFieldDemo} />
          <PrivateRoute path="/trainee" component={Trainee} />
          <PrivateRoute path="/inputDemo" component={InputDemo} />
          <PrivateRoute path="/math" component={Math} />
          <PublicRoute path="/" component={Login} />
          <PublicRoute path="/login" component={Login} />
          <Route path="*" exact={true} component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
};

export default Routes;
