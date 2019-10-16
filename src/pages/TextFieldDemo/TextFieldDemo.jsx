import React, { Component } from "react";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import TextField from "../../components/TextField/TextField";
import {
  inputstyle,
  formStyle,
  mystyle,
  imgStyle,
  strStyle
} from "../../components/TextField/style";
class TextFieldDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisabled: true,
      username: "",
      age: null,
      errmsg: "",
      name: "",
      sports: "select",
      cricket: "group1",
      football: "group2",
      isEnabled: false,
      formIsValid: true,
      errors: {
        minNameLength: "name must be at least 3 characters",
        notEmpty: "name is required"
      }
    };
  }

  textChangeHandler = event => {
    let nam = event.target.name;
    let val = event.target.value;
    let err = "";
    if (nam === "age") {
      if (val !== "" && !Number(val)) {
        err = <strong style={strStyle}> Your age must be a number</strong>;
      }
      if (val !== "" && val < 1) {
        err = <strong style={strStyle}> Age can not be below the 1</strong>;
      }
      if (val !== "" && val > 100) {
        err = <strong style={strStyle}> Age can not be above the 100</strong>;
      }
    }

    this.setState({ errmsg: err });
    this.setState({ [nam]: val });
  };

  erroMsgHandler = event => {
    let nam = event.target.name;
    let val = event.target.value;
    let err = "";
    if (nam === "name") {
      if (val !== "" && Number(val)) {
        err = <strong style={strStyle}> Please Enter A Valid Name</strong>;
      }
    }

    this.setState({ errmsg: err });
    this.setState({ [nam]: val });
  };
  render() {
    const { isDisabled, errmsg } = this.state;
    return (
      <div>
        <form style={formStyle}>
          <ImageSlider style={imgStyle} />
          <h1 style={mystyle}>First React Task</h1>
          <h2> This is the Disable Input</h2>
          <TextField
            type="text"
            name="disable"
            placeholder="Disabled input"
            disabled={isDisabled}
            style={inputstyle}
          />
          <h2> A Valid Input</h2>
          <TextField
            type="text"
            name="username"
            style={inputstyle}
            placeholder="Name"
          />
          <h2> An Input with Error</h2>
          <TextField
            type="text"
            name="age"
            onChange={this.textChangeHandler}
            placeholder="Age"
            style={inputstyle}
            isError={errmsg}
          />
        </form>
      </div>
    );
  }
}

export default TextFieldDemo;
