import React, { Component } from 'react'
import { RadioGroup, Radio } from 'react-radio-group';

class RadioGroups extends Component {
  constructor(){
    super();
    this.state={
      value: ''
    }

  }


  handleChange = () => {
    console.log("change of radio button handled here");
  }
  selectedValue = (event) => {
    this.setState({value: event.target.value});
  }

  selectedValue1 = (event) => {
    this.setState({value: event.target.value});
  }
  render() {
    return (
      <div>
      <label id='lbl1'>What do you do?</label>
        <RadioGroup id='radiogrp1' name="Cricket" value={this.state.value} onChange={this.handleChange}>
           <Radio value="wicket keeper" />Wicket Keeper
           <Radio value="batsman" />Batsman
           <Radio value="bowler" />Bowler
           <Radio value='all round' /> All Round
        </RadioGroup>

        <label id='lbl2'>What do you do?</label>
        <RadioGroup id='radiogrp2' name="Football" value={this.state.value} onChange={this.handleChange}>
           <Radio value="defender" />Defender
           <Radio value="striker" />Striker
        </RadioGroup>
      </div>
    )
  }
}


export default  RadioGroups;