import React, { Component } from 'react';

import ImageSlider from '../../components/ImageSlider/ImageSlider';
import SelectField from '../../components/SelectField/SelectField';
import TextField from '../../components/TextField/TextField';

class TextFieldDemo extends Component {
   constructor(props){
      super(props);
      this.state = {
         isDisabled: true,
         username: '',
         age: null,
         errmsg: '',
         name: '',
         sports :  'select',
         cricket : 'group1',
         football: 'group2',
         isEnabled: false,
         formIsValid: true,
         errors: {
                  minNameLength: "name must be at least 3 characters",
                  notEmpty: "name is required",
         },
         
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

   erroMsgHandler = (event) => {
      let nam = event.target.name;
      let val = event.target.value;
      let err = '';
      if(nam === 'name'){
         if(val !== "" && Number(val)){
            err = <strong style ={{color: 'red'}}> Please Enter A Valid Name</strong>
         }
        
      }
      
      this.setState({errmsg: err});
      this.setState({[nam]: val});
   }
  render() { 
   // console.log('state', this.state);
   
   
   const inputstyle = {
      width: "75%",
      padding: "12px 20px",
      margin: "8px 0",
      boxSizing: "border-box",
      borderRadius: "4px"
      };      

   const formStyle = {
      padding: "10px",
      fontFamily: "Arial"
    };
    const mystyle = {
      width: "100%",
      padding: "12px 20px",
      margin: "8px 0",
      color: "Black",
      fontFamily: "Western"

    }; 

    return (
      <div>
        <form style={formStyle}>
        <SelectField onChangeSelect={this.onChangeHandle} 
        sports={this.state.sports}
        isEnabled={this.state.isEnabled}
        handleButton={this.handleButton}
        cricket={this.state.cricket}
        football={this.state.football}
        name={this.state.name} />
        <ImageSlider/>
        <h1 style={mystyle}>First React Task</h1>
        <h2> This is the Disable Input</h2>
        <TextField type='text' name='disable'
        placeholder='Disabled input' 
        disabled={this.state.isDisabled}
        style={inputstyle}
        />
        <h2> A Valid Input</h2>
        <TextField type='text' name='username' 
        style={inputstyle}
        placeholder='Name' />
        <h2> An Input with Error</h2>
        <TextField type='text' name='age' 
        onChange= {this.textChangeHandler} 
        placeholder='Age' 
        style={inputstyle}
        isError={this.state.errmsg}/>
        </form>
      </div>
    )
  }
}
 

export default TextFieldDemo;