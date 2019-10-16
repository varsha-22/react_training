import React, { Component } from "react";
import RadioGroups from "../RadioGroup/RadioGroups";
import ButtonDemo from "../Button/ButtonDemo";

class SelectField extends Component {
  renderSwitch() {
    const { sports, cricket, football } = this.props;

    switch (sports) {
      case "cricket":
        return <RadioGroups name1={cricket} sport={sports} />;
        // eslint-disable-next-line no-unreachable
        break;
      case "football":
        return <RadioGroups name2={football} />;
        // eslint-disable-next-line no-unreachable
        break;
      default:
        return <p></p>;
    }
  }

  render() {
    const {
      name,
      onChangeSelect,
      handleButton,
      isEnabled,
      inputstyle,
      style
    } = this.props;
    return (
      <div>
        <input
          type="text"
          name="name"
          onChange={onChangeSelect}
          style={inputstyle}
          placeholder="Name"
          value={name}
        />
        <select style={style} onChange={onChangeSelect} name="sports">
          <option value="select">Select</option>
          <option value="cricket">Cricket</option>
          <option value="football">Football</option>
        </select>
        <br />
        <br />
        <div>{this.renderSwitch()}</div>
        <ButtonDemo isEnabled={isEnabled} onClick={handleButton} />
      </div>
    );
  }
}

export default SelectField;
