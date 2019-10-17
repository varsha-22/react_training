import React, { Component } from 'react'
import RadioGroups from '.././RadioGroup/RadioGroup';
const selectStyle = {
    background: '#F0F3FB',
	border: '1px solid #F0F3FB',
	borderRadius: '4px',
	width: '100%',
	padding: '20px',
	fontSize: '16px',
    color: '#3F3F3F',
    defaultValue:'Select'
    

}

const inputstyle = {
  width: "100%",
  padding: "12px 20px",
  margin: "8px 0",
  boxSizing: "border-box",
  borderRadius: "4px"
};

class SelectField extends Component {

  constructor(props){
    super(props);
    this.state = {
       value :  'select',
       username : ''
    };
  }

    textChangeHandler = (event) => {
      let nam = event.target.name;
      let val = event.target.value;
      let err = '';
      if(nam === 'age'){
         if(val !== "" && !Number(val)){
            err = <strong style ={{color: 'red'}}> Your age must be a number</strong>
         }
         if(val !== "" && val < 1 ){
            err = <strong style ={{color: 'red'}}> Age can not be below the 1</strong>
         }
         if(val !== "" && val > 100 ){
            err = <strong style ={{color: 'red'}}> Age can not be above the 100</strong>
         }
      }
      
      this.setState({errmsg: err});
      this.setState({[nam]: val});
   }
  
    selectedValue = (event) => {
      this.setState({value: event.target.value});
      let val = event.target.value;
      let radiobtn = '';
      let radiobtn1 = '';
      if(val === 'one'){
            radiobtn = <RadioGroups/>;
      }else if(val === 'two'){
        radiobtn1 = <RadioGroups />;
      }else{

      }

      this.setState({radiobtn});
      this.setState({radiobtn1});
  
    }

    render(){
      return (
        <div>
        <input type='text' name='username' onChange= {this.textChangeHandler} style={inputstyle}
        placeholder='Name'/>
        <select style={selectStyle} onChange={this.selectedValue} value={this.state.value}>
          <option value='select'>Select</option>
          <option value='cricket'>Cricket</option>
          <option value='football'>Football</option>
        </select>
               <p>{this.state.value}</p>
               <RadioGroups />
        </div>
      )
    }
}

export default SelectField;
