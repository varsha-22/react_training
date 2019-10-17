// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'
// eslint-disable-next-line no-unused-vars
import RadioGroups from '../RadioGroup/RadioGroups';
// eslint-disable-next-line no-unused-vars
import ButtonDemo from '../Button/ButtonDemo';

class SelectField extends Component {

  renderSwitch() {
    console.log(this.props,'ada');
    switch(this.props.sports) {
      case 'cricket':
         return <RadioGroups  name1={this.props.cricket} sport={this.props.sports}/>;
      // eslint-disable-next-line no-unreachable
      break;
      case 'football':
       return <RadioGroups name2={this.props.football} />;
      // eslint-disable-next-line no-unreachable
      break;  
      default:
        return <p></p>;
    }
  }

    render(){
      // eslint-disable-next-line no-unused-vars
      const {  name, onChangeSelect, handleButton, isEnabled, ...rest} = this.props;
      return (
        <div>
        <input type='text' name='name' onChange= {onChangeSelect} style={this.props.inputstyle}
        placeholder='Name' value={name}/>
        <select style={this.props.style} onChange={onChangeSelect} name='sports'>
          <option value='select'>Select</option>
          <option value='cricket'>Cricket</option>
          <option value='football'>Football</option>
        </select><br/><br/>
        <div>
        {this.renderSwitch()}
        </div>
        <ButtonDemo isEnabled={isEnabled} onClick={handleButton} />
        </div>
      )
    }
}

export default SelectField;
