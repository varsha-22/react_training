import React from "react";
import { buttonStyle } from "../TextField/style";
const ButtonDemo = props => {
  const { isEnabled, onClick } = props;
  return (
    <div>
      <button style={buttonStyle}>Cancle</button>
      <button style={buttonStyle} disabled={!isEnabled} onClick={onClick}>
        {" "}
        Submit
      </button>
    </div>
  );
};
export default ButtonDemo;
