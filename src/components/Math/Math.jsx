import React, { Component } from "react";
import { TextField, Button, Select } from "@material-ui/core";
import { pStyle, divStyle } from "../TextField/style";

export default class Math extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: 0,
      second: 0,
      operator: null,
      result: null
    };
  }
  handleResultButton = event => {
    event.preventDefault();
    let { result: finalResult, first: firstNo , second: secondNo, operator: operatorPicked } = this.state;
    if (operatorPicked === "+") {
      finalResult = Number(firstNo) + Number(secondNo);
    } else if (operatorPicked === "-") {
      finalResult = firstNo - secondNo;
    } else if (operatorPicked === "/") {
      finalResult = secondNo === 0 ? "infinity" : firstNo / secondNo;
    } else if (operatorPicked === "*") {
      finalResult = firstNo * secondNo;
    } else {
      finalResult = "Invalid Operator";
    }

    alert("Submitted");
    this.setState({
      result: finalResult
    });
  };

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { result, first, second, operator } = this.state;
    return (
      <div>
        <center>
          <div style={divStyle}>
            <TextField
              name="first"
              placeholder="First Number"
              onChange={this.handleInput}
              margin="dense"
              widht="100%"
              value={first}
            />
            <br />
            <br />

            <TextField
              name="second"
              placeholder="Second Number"
              onChange={this.handleInput}
              margin="dense"
              value={second}
            />
            <br />
            <br />

            <TextField
              name="operator"
              placeholder="Operator"
              onChange={this.handleInput}
              margin="dense"
              value={operator}
            />
            <br />
            <Select name="operator" onChange={this.handleInput}>
              <option value="+">+</option>
              <option value="-">-</option>
              <option value="/">/</option>
              <option value="*">*</option>
            </Select>
            <br />
            <br />

            <Button onClick={this.handleResultButton}>Click Me!</Button>
            <p style={pStyle}>{result}</p>
          </div>
        </center>
      </div>
    );
  }
}
