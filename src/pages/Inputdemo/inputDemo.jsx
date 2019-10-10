import React, { Component } from 'react';

import SelectField from '../../components/SelectField/SelectField';
import { inputstyle, formStyle, selectStyle} from '../../components/TextField/style';
class TextFieldDemo extends Component {
   constructor(props){
      super(props);
      this.state = {
         name: '',
         sports :  'select',
         cricket : 'group1',
         football: 'group2',
         isEnabled: false, 
      }
   }


  onChangeHandle = event => {
   this.setState({
     [event.target.name]: event.target.value
   });
   // eslint-disable-next-line react/no-direct-mutation-state
   this.state.isEnabled = true;
 }

 handleButton = (event) => {
   if(this.state.name === ''){
     alert('Name field is required');
   }else{
       alert('Form submitted Successfully');
   }
       
 }
 
  render() { 
   
    return (
      <div>
        <form style={formStyle}>
        <SelectField onChangeSelect={this.onChangeHandle} 
        sports={this.state.sports}
        isEnabled={this.state.isEnabled}
        handleButton={this.handleButton}
        cricket={this.state.cricket}
        football={this.state.football}
        name={this.state.name}
        style={selectStyle}
        inputstyle={inputstyle} />
        </form>
      </div>
    )
  }
}
 

export default TextFieldDemo;