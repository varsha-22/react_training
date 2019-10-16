import React from "react";
import { Route } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <DashboardLayout>
          <Component {...matchProps} />
        </DashboardLayout>
      )}
    />
  );
};

export default PrivateRoute;
