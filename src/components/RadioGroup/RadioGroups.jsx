// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'
// eslint-disable-next-line no-unused-vars
import { RadioGroup, Radio } from 'react-radio-group';

class RadioGroups extends Component {
render() {
    console.log(this.props);
    if(this.props.name1 === 'group1'){
      return(
        <div>
        <label id='lbl1'><b>What do you do?</b></label>
        <RadioGroup name={this.props.sport}>           
           <Radio value="wicket keeper" />Wicket Keeper<br/>
            <Radio value="batsman" />Batsman<br/>
            <Radio value="bowler" />Bowler<br/>
            <Radio value='all round' /> All Round
          </RadioGroup>
      </div>
      )
    }else{
      return (
        <div>
          <label id='lbl2'><b>What do you do?</b></label>
          <RadioGroup name='football' onChange={this.handleChange}>
              <Radio value="defender" />Defender<br/>
              <Radio value="striker" />Striker
          </RadioGroup>
        </div>

      )
    }   
  }
}


export default  RadioGroups;