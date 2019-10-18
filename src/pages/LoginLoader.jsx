import React, { Component } from "react";
import Login from "./login/Login";
import API from "../lib/utils/api";
export default class LoginLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      loading: false,
      loggedIn: false
    };
  }

  fetchData = event => {
    this.setState({ loading: true }, () => this.handleSubmit(event));

    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000);
  };

  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  handlePwdChange = event => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = async event => {
    const { email, password } = this.state;
    const res = await API.post("/user/login", {
      email,
      password
    });
    localStorage.setItem("token", res.data.data);
    const auth_token = localStorage.getItem("token");
    if (auth_token !== "") {
      this.setState({ loggedIn: true });
    }
  };

  render() {
    const { loading, loggedIn } = this.state;

    return (
      <div>
        <Login
          fetchData={this.fetchData}
          loading={loading}
          handleEmailChange={this.handleEmailChange}
          email={this.state.email}
          password={this.state.password}
          handlePwdChange={this.handlePwdChange}
          loggedIn={loggedIn}
        />
      </div>
    );
  }
}
