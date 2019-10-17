import React from "react";
import { RadioGroup, Radio } from "react-radio-group";

const RadioGroups = props => {
  const { name1, sport } = props;
  if (name1 === "group1") {
    return (
      <div>
        <label id="lbl1">
          <b>What do you do?</b>
        </label>
        <RadioGroup name={sport}>
          <Radio value="wicket keeper" />
          Wicket Keeper
          <br />
          <Radio value="batsman" />
          Batsman
          <br />
          <Radio value="bowler" />
          Bowler
          <br />
          <Radio value="all round" /> All Round
        </RadioGroup>
      </div>
    );
  } else {
    return (
      <div>
        <label id="lbl2">
          <b>What do you do?</b>
        </label>
        <RadioGroup name={sport}>
          <Radio value="defender" />
          Defender
          <br />
          <Radio value="striker" />
          Striker
        </RadioGroup>
      </div>
    );
  }
};

export default RadioGroups;
