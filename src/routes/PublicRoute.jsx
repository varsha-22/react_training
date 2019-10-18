// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import { Route } from "react-router-dom";
import LoginLayout from "../layouts/LoginLayout";

const PublicRoute = ({ component: Component, ...rest }) => {
  const auth_token = localStorage.getItem("token");

  if (auth_token !== "") {
    return (
      <Route
        {...rest}
        render={matchProps => (
          <LoginLayout>
            <Component {...matchProps} />
          </LoginLayout>
        )}
      />
    );
  }
};

export default PublicRoute;
