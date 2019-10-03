// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'
// eslint-disable-next-line no-unused-vars
import { RadioGroup, Radio } from 'react-radio-group';

class RadioGroups extends Component {
  // constructor(){
  //   super();
  //   this.state={
  //     value: '',
  //     name:''
  //   }

  // }

  // selectedValue = (event) => {
  //   this.setState({value: event.target.value});
  // }

  // selectedValue1 = (event) => {
  //   this.setState({value: event.target.value});
  // }

  // handleChange = e => {
  //   const { name, value } = e.target;

  //   this.setState({
  //     [name]: value
  //   });
  // };
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
    //return (
      // <div>
      //   {this.props.cricket.map((item,index) => (
      //     <RadioGroup name={this.props.cricket} onChange={this.props.onChange}>
      //       <Radio value={item} />{item}
      //     </RadioGroup>
      //   ))}
      // </div>
      // <div>
    
  }
}


export default  RadioGroups;